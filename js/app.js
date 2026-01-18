// HARDCORE APP LOGIC

const App = {
    state: {
        currentWeekIndex: 0,
        completedDays: {}, // Map: "weekId-dayIndex" -> ISO Date String
        clinical: {},
        clinicalHistory: [] // Array de registros clínicos ao longo do tempo
    },

    init() {
        this.loadState();
        this.renderHeaderPhrase();
        this.renderWeekSelector();
        this.renderCurrentWeek();
        this.updateGlobalProgress();
        this.loadClinicalData();
    },

    loadState() {
        const savedState = localStorage.getItem('hardcoreState');
        if (savedState) {
            const parsed = JSON.parse(savedState);
            this.state = { ...this.state, ...parsed };
            if (!this.state.completedDays) this.state.completedDays = {};
            if (!this.state.clinicalHistory) this.state.clinicalHistory = [];
        } else {
            this.state.currentWeekIndex = 0;
        }
    },

    saveState() {
        localStorage.setItem('hardcoreState', JSON.stringify(this.state));
        this.updateGlobalProgress();
    },

    renderHeaderPhrase() {
        const phraseEl = document.getElementById('dynamicPhrase');
        const phrases = workoutData.motivationalPhrases;
        const randomIndex = Math.floor(Math.random() * phrases.length);
        const phrase = phrases[randomIndex];
        this.typeWriterEffect(phraseEl, phrase);
    },

    typeWriterEffect(element, text) {
        element.textContent = "";
        let i = 0;
        const speed = 30;
        
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
                this.renderWeekSelector();
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

        // Detectar dia atual para auto-open
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 (Dom) a 6 (Sáb)
        // Mapear JS Day (0=Dom) para Index do Array (0=Seg)
        // Seg(1)=0, Ter(2)=1, Qua(3)=2, Qui(4)=3, Sex(5)=4, Sab(6)=5, Dom(0)=6
        const jsDayToArrIndex = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 };
        const currentDayIndex = jsDayToArrIndex[dayOfWeek];

        // Dias
        currentWeek.days.forEach((day, dayIndex) => {
            const dayId = `${currentWeek.id}-${dayIndex}`;
            const isDayComplete = !!this.state.completedDays[dayId];
            
            // Abrir somente se for o dia atual
            const isOpen = (dayIndex === currentDayIndex);

            const card = document.createElement('div');
            card.className = `day-card ${isDayComplete ? 'completed-day' : ''}`;
            card.innerHTML = `
                <div class="day-header" onclick="App.toggleDayAccordion(this)">
                    <div class="day-header-top">
                        <span class="day-name">${day.day}</span>
                        <div class="header-status">
                            ${isDayComplete ? '<span class="day-badge">CONCLUÍDO</span>' : ''}
                            <span class="accordion-icon" style="transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}">▼</span>
                        </div>
                    </div>
                    <div class="day-mantra">"${day.mantra}"</div>
                </div>
                
                <div class="day-content ${isOpen ? 'open' : ''}">
                    <div class="strategy-section">
                        <div class="strategy-icon">⚡</div>
                        <div class="strategy-text">${day.strategy || "Execute com foco total na técnica."}</div>
                    </div>

                    <div class="exercise-list">
                        ${day.exercises.map(ex => `
                            <div class="exercise-text-item">
                                <span class="ex-bullet">›</span>
                                <div class="ex-content">
                                    <div class="ex-main">
                                        <strong style="color: #fff;">${ex.name}</strong> 
                                        ${ex.sets ? `<span style="color: var(--accent-blue);"> • ${ex.sets}</span>` : ''}
                                        ${ex.reps ? `<span style="color: var(--accent-blue);"> • ${ex.reps}</span>` : ''}
                                    </div>
                                    ${ex.notes ? `<div class="ex-notes">${ex.notes}</div>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="day-actions">
                        <button class="complete-day-btn ${isDayComplete ? 'completed' : ''}" 
                            onclick="App.toggleDayCompletion('${currentWeek.id}', ${dayIndex})">
                            ${isDayComplete ? 'DIA CONCLUÍDO' : 'CONCLUIR MISSÃO'}
                        </button>
                    </div>
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

    toggleDayAccordion(headerElement) {
        const card = headerElement.parentElement;
        const content = card.querySelector('.day-content');
        const icon = card.querySelector('.accordion-icon');
        
        // Toggle class instead of inline style for smoother CSS transitions if desired
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            icon.style.transform = 'rotate(0deg)';
        } else {
            // Close others? Optional. Let's keep multiple open possible.
            content.classList.add('open');
            icon.style.transform = 'rotate(180deg)';
        }
    },

    toggleDayCompletion(weekId, dayIndex) {
        const dayId = `${weekId}-${dayIndex}`;
        
        if (this.state.completedDays[dayId]) {
            delete this.state.completedDays[dayId];
        } else {
            this.state.completedDays[dayId] = new Date().toISOString();
            this.triggerHapticFeedback();
            this.triggerCompletionAnimation(dayIndex);
        }

        this.saveState();
        this.renderCurrentWeek(); 
        
        // Re-open the accordion of the clicked day because render closes everything
        setTimeout(() => {
            const container = document.getElementById('workoutContainer');
            // +1 because of week header
            const card = container.children[dayIndex + 1];
            if (card) {
                const content = card.querySelector('.day-content');
                const icon = card.querySelector('.accordion-icon');
                content.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
            }
        }, 50);

        this.checkWeekCompletion(weekId);
    },

    triggerCompletionAnimation(dayIndex) {
        const container = document.getElementById('workoutContainer');
        const card = container.children[dayIndex + 1];
        if (card) {
            card.classList.add('flash-success');
            setTimeout(() => card.classList.remove('flash-success'), 1000);
        }
    },

    checkWeekCompletion(weekId) {
        const week = workoutData.program.find(w => w.id === weekId);
        if (!week) return;

        let allComplete = true;
        week.days.forEach((day, dIdx) => {
            if (!this.state.completedDays[`${weekId}-${dIdx}`]) {
                allComplete = false;
            }
        });

        if (allComplete) {
            if (!this.state[`completed_shown_${weekId}`]) {
                this.showLevelUpModal();
                this.state[`completed_shown_${weekId}`] = true;
                this.saveState();
            }
        }
    },

    updateGlobalProgress() {
        let totalDays = 0;
        let completedDays = 0;

        workoutData.program.forEach(week => {
            totalDays += week.days.length;
            week.days.forEach((day, dIdx) => {
                if (this.state.completedDays[`${week.id}-${dIdx}`]) {
                    completedDays++;
                }
            });
        });

        const percent = totalDays === 0 ? 0 : Math.round((completedDays / totalDays) * 100);
        
        document.getElementById('globalProgressPercent').textContent = `${percent}%`;
        document.getElementById('globalProgressBar').style.width = `${percent}%`;
        
        const bar = document.getElementById('globalProgressBar');
        if (percent < 30) bar.style.backgroundColor = 'var(--accent-blue)';
        else if (percent < 70) bar.style.backgroundColor = '#bf5af2';
        else bar.style.backgroundColor = 'var(--accent-green)';
    },

    triggerHapticFeedback() {
        if (navigator.vibrate) {
            navigator.vibrate([50, 50, 50]); 
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
            
            this.checkClinicalLock();
        }
    },

    checkClinicalLock() {
        const lastUpdated = this.state.clinical.lastUpdated;
        if (lastUpdated) {
            const lastDate = new Date(lastUpdated).toDateString();
            const today = new Date().toDateString();
            
            if (lastDate === today) {
                this.disableClinicalInputs(true);
            } else {
                this.disableClinicalInputs(false);
            }
        }
    },

    disableClinicalInputs(disable) {
        const inputs = document.querySelectorAll('.clinical-form input');
        const btn = document.getElementById('saveClinicalBtn');
        
        inputs.forEach(input => input.disabled = disable);
        btn.disabled = disable;
        
        if (disable) {
            btn.textContent = "DADOS JÁ ATUALIZADOS HOJE";
            btn.style.opacity = "0.5";
        } else {
            btn.textContent = "GRAVAR DADOS";
            btn.style.opacity = "1";
        }
    },

    calcMetrics() {
        const weight = parseFloat(document.getElementById('weightInput').value) || 0;
        const bf = parseFloat(document.getElementById('bfInput').value) || 0;
        
        if (weight > 0 && bf > 0) {
            const fatMass = weight * (bf / 100);
            const leanMass = weight - fatMass;
            document.getElementById('muscleInput').value = leanMass.toFixed(1);
        }
    }
};

// Event Listeners
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
    const weightNum = parseFloat(weight) || 0;
    const bfNum = parseFloat(bf) || 0;
    const waterNum = parseFloat(water) || 0;
    let muscleNum = 0;
    if (weightNum > 0 && bfNum > 0) {
        const fatMass = weightNum * (bfNum / 100);
        muscleNum = weightNum - fatMass;
    }
    
    App.state.clinical = {
        weight, bf, water,
        lastUpdated: new Date().toISOString()
    };

    // Histórico clínico: mantém um registro por dia sem quebrar o lock diário
    if (!Array.isArray(App.state.clinicalHistory)) {
        App.state.clinicalHistory = [];
    }
    const todayKey = new Date().toISOString().split('T')[0];
    const entry = {
        date: new Date().toISOString(),
        dayKey: todayKey,
        weight: weightNum,
        bf: bfNum,
        muscle: muscleNum,
        water: waterNum
    };
    const existingIndex = App.state.clinicalHistory.findIndex(e => e.dayKey === todayKey);
    if (existingIndex >= 0) {
        App.state.clinicalHistory[existingIndex] = entry;
    } else {
        App.state.clinicalHistory.push(entry);
    }

    App.saveState();
    
    // Feedback e Bloqueio
    const btn = document.getElementById('saveClinicalBtn');
    btn.textContent = "DADOS GRAVADOS";
    btn.style.backgroundColor = "var(--accent-green)";
    
    setTimeout(() => {
        btn.style.backgroundColor = "var(--accent-blue)";
        toggleFooter();
        App.checkClinicalLock(); // Bloqueia inputs
    }, 1500);
});

document.getElementById('weightInput').addEventListener('input', () => App.calcMetrics());
document.getElementById('bfInput').addEventListener('input', () => App.calcMetrics());

document.addEventListener('DOMContentLoaded', () => {
    App.init();
    const clinicalBtn = document.getElementById('clinicalDashboardBtn');
    if (clinicalBtn) {
        clinicalBtn.addEventListener('click', () => {
            window.location.href = 'clinical.html';
        });
    }
});
