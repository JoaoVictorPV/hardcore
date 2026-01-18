// HARDCORE APP LOGIC

const App = {
    state: {
        currentWeekIndex: 0,
        completedExercises: {}, // Map: "weekId-dayIndex-exIndex" -> boolean
        clinical: {}
    },

    init() {
        this.loadState();
        this.renderHeaderPhrase();
        this.renderWeekSelector();
        this.renderCurrentWeek();
        this.updateGlobalProgress();
        this.loadClinicalData();
        
        // Auto-save loop (backup a cada 1 min ou apenas nos eventos)
        // Optamos por salvar nos eventos (check, change week, etc)
    },

    loadState() {
        const savedState = localStorage.getItem('hardcoreState');
        if (savedState) {
            const parsed = JSON.parse(savedState);
            this.state = { ...this.state, ...parsed };
        } else {
            // Check default week based on date? No, start from 0.
            this.state.currentWeekIndex = 0;
        }
    },

    saveState() {
        localStorage.setItem('hardcoreState', JSON.stringify(this.state));
        this.updateGlobalProgress();
    },

    renderHeaderPhrase() {
        const phraseEl = document.getElementById('dynamicPhrase');
        const hour = new Date().getHours();
        let phrase = "";

        // Seleção contextual simples + aleatoriedade
        const phrases = workoutData.motivationalPhrases;
        const randomIndex = Math.floor(Math.random() * phrases.length);
        phrase = phrases[randomIndex];
        
        // Efeito de digitação (opcional, mas legal para cyberpunk)
        this.typeWriterEffect(phraseEl, phrase);
    },

    typeWriterEffect(element, text) {
        element.textContent = "";
        let i = 0;
        const speed = 30; // ms
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    },

    renderWeekSelector() {
        const selector = document.getElementById('weekSelector');
        selector.innerHTML = '';

        workoutData.program.forEach((week, index) => {
            const btn = document.createElement('button');
            btn.className = `week-tab ${index === this.state.currentWeekIndex ? 'active' : ''}`;
            btn.textContent = `SEMANA ${index}`;
            btn.onclick = () => {
                this.state.currentWeekIndex = index;
                this.renderWeekSelector(); // Re-render to update active class
                this.renderCurrentWeek();
                this.saveState();
            };
            selector.appendChild(btn);
        });
    },

    renderCurrentWeek() {
        const container = document.getElementById('workoutContainer');
        const currentWeek = workoutData.program[this.state.currentWeekIndex];
        
        container.innerHTML = '';
        
        // Header da Semana
        const weekHeader = document.createElement('div');
        weekHeader.className = 'glass-panel';
        weekHeader.style.padding = '15px';
        weekHeader.style.marginBottom = '20px';
        weekHeader.innerHTML = `
            <h2 class="neon-text-blue" style="font-size: 1.2rem; margin-bottom: 5px;">${currentWeek.title}</h2>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">${currentWeek.description}</p>
        `;
        container.appendChild(weekHeader);

        // Dias
        currentWeek.days.forEach((day, dayIndex) => {
            const isDayComplete = this.checkDayCompletion(currentWeek.id, dayIndex, day.exercises.length);
            
            const card = document.createElement('div');
            card.className = `day-card ${isDayComplete ? 'completed-day' : ''}`;
            card.innerHTML = `
                <div class="day-header">
                    <div class="day-title-row">
                        <span class="day-name">${day.day}</span>
                        ${isDayComplete ? '<span class="day-badge">COMPLETO</span>' : ''}
                    </div>
                    <div class="day-mantra">"${day.mantra}"</div>
                </div>
                <div class="exercise-list">
                    ${day.exercises.map((ex, exIndex) => {
                        const uniqueId = `${currentWeek.id}-${dayIndex}-${exIndex}`;
                        const isChecked = this.state.completedExercises[uniqueId];
                        
                        return `
                            <div class="exercise-item ${isChecked ? 'checked' : ''}">
                                <input type="checkbox" class="cyber-checkbox" 
                                    ${isChecked ? 'checked' : ''} 
                                    onchange="App.toggleExercise('${uniqueId}', '${currentWeek.id}', ${dayIndex})">
                                <div class="exercise-details">
                                    <div class="exercise-name">${ex.name}</div>
                                    <div class="exercise-meta">
                                        <span>${ex.sets} séries</span> • <span>${ex.reps} reps</span>
                                    </div>
                                    <div class="exercise-notes">${ex.notes}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            container.appendChild(card);
        });
        
        // Animação de entrada
        const cards = container.querySelectorAll('.day-card');
        cards.forEach((card, i) => {
            card.style.opacity = '0';
            card.style.animation = `fadeIn 0.5s ease forwards ${i * 0.1}s`;
        });
    },

    toggleExercise(uniqueId, weekId, dayIndex) {
        // Toggle state
        if (this.state.completedExercises[uniqueId]) {
            delete this.state.completedExercises[uniqueId];
        } else {
            this.state.completedExercises[uniqueId] = true;
            this.triggerHapticFeedback();
        }

        this.saveState();
        
        // Re-render apenas para atualizar visuais (simples, mas eficaz)
        // Numa SPA reativa usaríamos VDOM, aqui re-renderizamos a semana ou manipulamos DOM direto.
        // Vamos manipular DOM direto para performance e UX (não perder scroll).
        this.updateUIWithoutFullRender(weekId, dayIndex);
        
        this.checkWeekCompletion(weekId);
    },

    updateUIWithoutFullRender(weekId, dayIndex) {
        // Atualiza estilo do item específico e do card do dia
        const currentWeek = workoutData.program[this.state.currentWeekIndex];
        const totalExercises = currentWeek.days[dayIndex].exercises.length;
        const isDayComplete = this.checkDayCompletion(weekId, dayIndex, totalExercises);
        
        // Encontrar o card no DOM (assumindo ordem)
        // Como temos weekHeader primeiro, os cards começam do index 1 no children
        const container = document.getElementById('workoutContainer');
        // index + 1 por causa do header
        const card = container.children[dayIndex + 1]; 
        
        if (card) {
            if (isDayComplete) {
                card.classList.add('completed-day');
                const badgeArea = card.querySelector('.day-title-row');
                if (!badgeArea.querySelector('.day-badge')) {
                    const badge = document.createElement('span');
                    badge.className = 'day-badge';
                    badge.textContent = 'COMPLETO';
                    badgeArea.appendChild(badge);
                }
            } else {
                card.classList.remove('completed-day');
                const badge = card.querySelector('.day-badge');
                if (badge) badge.remove();
            }
            
            // Atualizar classes 'checked' nos itens
            const checkboxes = card.querySelectorAll('.cyber-checkbox');
            checkboxes.forEach((cb, idx) => {
                const itemRow = cb.closest('.exercise-item');
                if (cb.checked) {
                    itemRow.classList.add('checked');
                } else {
                    itemRow.classList.remove('checked');
                }
            });
        }
    },

    checkDayCompletion(weekId, dayIndex, totalExercises) {
        let completedCount = 0;
        for (let i = 0; i < totalExercises; i++) {
            if (this.state.completedExercises[`${weekId}-${dayIndex}-${i}`]) {
                completedCount++;
            }
        }
        return completedCount === totalExercises;
    },

    checkWeekCompletion(weekId) {
        const week = workoutData.program.find(w => w.id === weekId);
        if (!week) return;

        let allComplete = true;
        week.days.forEach((day, dIdx) => {
            day.exercises.forEach((ex, eIdx) => {
                if (!this.state.completedExercises[`${weekId}-${dIdx}-${eIdx}`]) {
                    allComplete = false;
                }
            });
        });

        if (allComplete) {
            // Verificar se já mostramos o modal para esta semana nesta sessão?
            // Ou apenas mostrar. Vamos mostrar.
            // Para não spamar, poderíamos salvar 'weekCompletedShown' no state.
            if (!this.state[`completed_shown_${weekId}`]) {
                this.showLevelUpModal();
                this.state[`completed_shown_${weekId}`] = true;
                this.saveState();
            }
        }
    },

    updateGlobalProgress() {
        let totalExercises = 0;
        let completedExercises = 0;

        workoutData.program.forEach(week => {
            week.days.forEach((day, dIdx) => {
                day.exercises.forEach((ex, eIdx) => {
                    totalExercises++;
                    if (this.state.completedExercises[`${week.id}-${dIdx}-${eIdx}`]) {
                        completedExercises++;
                    }
                });
            });
        });

        const percent = totalExercises === 0 ? 0 : Math.round((completedExercises / totalExercises) * 100);
        
        document.getElementById('globalProgressPercent').textContent = `${percent}%`;
        document.getElementById('globalProgressBar').style.width = `${percent}%`;
        
        // Cor da barra muda conforme progresso
        const bar = document.getElementById('globalProgressBar');
        if (percent < 30) bar.style.backgroundColor = 'var(--accent-blue)';
        else if (percent < 70) bar.style.backgroundColor = '#bf5af2'; // Roxo
        else bar.style.backgroundColor = 'var(--accent-green)';
    },

    triggerHapticFeedback() {
        // Visual shake ou flash
        if (navigator.vibrate) {
            navigator.vibrate(50); // Haptic real em Android
        }
    },

    showLevelUpModal() {
        const modal = document.getElementById('levelUpModal');
        const msg = document.getElementById('levelUpMessage');
        msg.textContent = `Semana ${this.state.currentWeekIndex} Dominada. O sistema está evoluindo.`;
        modal.classList.add('active');
    },

    loadClinicalData() {
        if (this.state.clinical) {
            document.getElementById('weightInput').value = this.state.clinical.weight || '';
            document.getElementById('bfInput').value = this.state.clinical.bf || '';
            document.getElementById('waterInput').value = this.state.clinical.water || '';
            this.calcMetrics();
        }
    },

    calcMetrics() {
        const weight = parseFloat(document.getElementById('weightInput').value) || 0;
        const bf = parseFloat(document.getElementById('bfInput').value) || 0;
        // Altura? Não pedida, mas necessária para IMC.
        // Vamos assumir IMC apenas se tiver altura, mas o prompt não pediu input de altura.
        // Vou adicionar input de altura dinamicamente ou deixar IMC manual? 
        // Prompt pediu campo IMC. Vou deixar como cálculo automático se tiver peso e altura (se eu adicionar altura), 
        // ou input manual. O prompt diz: "Footer Clínico: Campo para anotação... inicialmente apenas armazenados".
        // Vou deixar inputs editáveis. Mas se puder calcular massa magra, melhor.
        
        if (weight > 0 && bf > 0) {
            const fatMass = weight * (bf / 100);
            const leanMass = weight - fatMass;
            document.getElementById('muscleInput').value = leanMass.toFixed(1);
        }
    }
};

// Event Listeners Footer
function toggleFooter() {
    document.querySelector('.clinical-footer').classList.toggle('open');
}

function closeModal() {
    document.getElementById('levelUpModal').classList.remove('active');
}

document.getElementById('saveClinicalBtn').addEventListener('click', () => {
    const weight = document.getElementById('weightInput').value;
    const bf = document.getElementById('bfInput').value;
    const water = document.getElementById('waterInput').value;
    
    // IMC calculation inputs might be added later, currently storing raw
    App.state.clinical = {
        weight, bf, water,
        lastUpdated: new Date().toISOString()
    };
    App.saveState();
    
    // Feedback
    const btn = document.getElementById('saveClinicalBtn');
    const originalText = btn.textContent;
    btn.textContent = "DADOS GRAVADOS";
    btn.style.backgroundColor = "var(--accent-green)";
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = "var(--accent-blue)";
        toggleFooter();
    }, 1500);
});

// Input listeners for auto-calc
document.getElementById('weightInput').addEventListener('input', () => App.calcMetrics());
document.getElementById('bfInput').addEventListener('input', () => App.calcMetrics());

// Start App
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
