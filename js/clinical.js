// HARDCORE CLINICAL DASHBOARD

const ClinicalDashboard = {
    init() {
        const backBtn = document.getElementById('backToMainBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        const container = document.getElementById('clinicalDashboard');
        if (!container) return;

        const savedState = localStorage.getItem('hardcoreState');
        if (!savedState) {
            this.renderEmptyState(container);
            return;
        }

        let parsed;
        try {
            parsed = JSON.parse(savedState);
        } catch (e) {
            this.renderEmptyState(container);
            return;
        }

        const history = Array.isArray(parsed.clinicalHistory) ? parsed.clinicalHistory : [];
        if (!history.length) {
            this.renderEmptyState(container);
            return;
        }

        // Ordena por data ascendente
        history.sort((a, b) => new Date(a.date) - new Date(b.date));

        const metrics = [
            { key: 'weight', label: 'Peso (kg)', color: '#0a84ff', suffix: ' kg' },
            { key: 'bf', label: 'BF (%)', color: '#ff3b30', suffix: ' %' },
            { key: 'muscle', label: 'Massa magra (kg)', color: '#32d74b', suffix: ' kg' },
            { key: 'water', label: 'Água (%)', color: '#bf5af2', suffix: ' %' }
        ];

        const cards = [];

        metrics.forEach(metric => {
            const data = history.filter(h => typeof h[metric.key] === 'number' && h[metric.key] > 0);
            if (!data.length) return;

            const card = this.createMetricCard(data, metric);
            cards.push(card);
        });

        if (!cards.length) {
            this.renderEmptyState(container);
            return;
        }

        container.innerHTML = '';
        cards.forEach(card => container.appendChild(card));
    },

    renderEmptyState(container) {
        container.innerHTML = `
            <section class="clinical-empty glass-panel">
                <h2>Sem dados clínicos ainda</h2>
                <p>Registre seus dados em <strong>"DADOS CLÍNICOS"</strong> na tela principal para destravar este painel.</p>
            </section>
        `;
    },

    createMetricCard(data, metric) {
        const section = document.createElement('section');
        section.className = 'metric-card glass-panel';

        const values = data.map(d => d[metric.key]);
        const minVal = Math.min(...values);
        const maxVal = Math.max(...values);
        const padding = (maxVal - minVal) * 0.15 || 1;
        const chartMin = minVal - padding;
        const chartMax = maxVal + padding;

        const width = 320;
        const height = 120;
        const innerW = width - 30;
        const innerH = height - 30;

        const points = data.map((d, index) => {
            const x = 15 + (innerW * (index / Math.max(data.length - 1, 1)));
            const norm = (d[metric.key] - chartMin) / (chartMax - chartMin || 1);
            const y = 10 + (innerH * (1 - norm));
            return { x, y };
        });

        const path = points
            .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`)
            .join(' ');

        const first = data[0];
        const last = data[data.length - 1];

        const formatValue = v => `${v.toFixed(1)}${metric.suffix}`;

        const header = document.createElement('div');
        header.className = 'metric-header';
        header.innerHTML = `
            <div>
                <h2>${metric.label}</h2>
                <p><span class="metric-current">Atual:</span> ${formatValue(last[metric.key])}</p>
            </div>
            <div class="metric-diff" style="color:${last[metric.key] >= first[metric.key] ? '#0a84ff' : '#32d74b'}">
                <span>${last[metric.key] >= first[metric.key] ? 'Δ +' : 'Δ '}</span>
                <strong>${(last[metric.key] - first[metric.key]).toFixed(1)}</strong>
            </div>
        `;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.classList.add('metric-chart');

        const bgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        bgPath.setAttribute('d', path);
        bgPath.setAttribute('fill', 'none');
        bgPath.setAttribute('stroke', 'rgba(255,255,255,0.12)');
        bgPath.setAttribute('stroke-width', '3');
        svg.appendChild(bgPath);

        const linePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        linePath.setAttribute('d', path);
        linePath.setAttribute('fill', 'none');
        linePath.setAttribute('stroke', metric.color);
        linePath.setAttribute('stroke-width', '2.5');
        linePath.setAttribute('stroke-linecap', 'round');
        svg.appendChild(linePath);

        points.forEach(p => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', p.x);
            circle.setAttribute('cy', p.y);
            circle.setAttribute('r', '3');
            circle.setAttribute('fill', metric.color);
            circle.setAttribute('opacity', '0.9');
            svg.appendChild(circle);
        });

        const body = document.createElement('div');
        body.className = 'metric-body';
        body.appendChild(svg);

        section.appendChild(header);
        section.appendChild(body);
        return section;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ClinicalDashboard.init();
});

