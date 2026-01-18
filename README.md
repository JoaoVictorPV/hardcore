# HARDCORE TRACKER SYSTEM DOCUMENTATION
> **Version:** 1.2.0-stable  
> **Architecture:** Client-Side SPA (Single Page Application)  
> **Stack:** HTML5, CSS3 (Variables/Flex/Grid), Vanilla ES6+ JavaScript.

---

## 1. ABSTRACT & ARCHITECTURAL OVERVIEW

O **Hardcore Tracker** é uma solução de software de alta performance projetada para o rastreamento, gestão e análise de progressão física sob a metodologia de treino de alta intensidade. O sistema opera sob uma arquitetura **Serverless Client-Side**, onde toda a lógica de negócios, persistência de estado e renderização de interface ocorre no dispositivo do usuário (Edge Computing no browser), garantindo latência zero e disponibilidade offline-first (dependendo do cache do service worker/browser).

A interface adota o paradigma **"Medical Cyberpunk"**, utilizando princípios de Glassmorphism e tipografia de alta legibilidade para entregar uma UX imersiva e responsiva (Mobile-First approach), otimizada para viewport de dispositivos móveis modernos (iOS/Android).

---

## 2. CORE COMPONENT STRUCTURE (MODULARITY)

O sistema foi arquitetado visando a **Separação de Preocupações (SoC)**, dividindo a aplicação em três camadas lógicas distintas, embora servidas estaticamente:

### 2.1. Data Layer (`js/data.js`)
Atua como o **Modelo de Dados (Schema)** da aplicação.
-   **Estrutura:** Exporta um objeto constante `workoutData` que contém a árvore completa do programa de treinamento.
-   **Imutabilidade:** Este arquivo deve ser tratado como uma fonte de verdade imutável em tempo de execução. Alterações aqui refletem imediatamente na renderização, mas não afetam o estado de progresso salvo (persistência separada).
-   **Scalability Vector:** A adição de novas semanas (`Week 5+`) ou alteração de exercícios é realizada exclusivamente neste arquivo, sem necessidade de refatoração no motor de renderização.

### 2.2. Logic Controller (`js/app.js`)
O motor da aplicação. Gerencia o Ciclo de Vida (Lifecycle), Estado (State Management) e Manipulação do DOM.
-   **State Pattern:** Utiliza um objeto `state` centralizado para rastrear:
    -   `currentWeekIndex`: Navegação temporal.
    -   `completedDays`: Hash Map (`key: weekId-dayIndex` -> `value: ISO Date`) para O(1) lookup de conclusão.
    -   `clinical`: Dados biométricos e timestamps de modificação.
-   **Persistence Strategy:** Implementa uma camada de abstração sobre a API `localStorage` do browser, serializando o estado em JSON. Isso garante persistência entre sessões (F5/Restart) sem necessidade de banco de dados backend.
-   **Render Engine:** Utiliza Vanilla JS para construção dinâmica de nós DOM (`document.createElement`), evitando o overhead de Virtual DOM de frameworks pesados (React/Vue) para este escopo, garantindo performance nativa máxima.

### 2.3. Presentation Layer (`style.css`)
Responsável pela identidade visual e responsividade.
-   **CSS Variables:** Uso extensivo de `:root` para tokens de design (cores, espaçamentos, raios de borda), facilitando manutenção de temas (Theming).
-   **Layout Engine:** Combinação de CSS Grid e Flexbox para layouts fluidos que se adaptam a qualquer resolução.
-   **Animation Stack:** Transições aceleradas por GPU (`transform`, `opacity`) para feedbacks visuais (Accordion slide-down, Flash success) sem causar Layout Thrashing.

---

## 3. CRITICAL FUNCTIONAL LOGIC (DO NOT TOUCH)

Os seguintes componentes possuem lógica sensível. Modificações inadvertidas podem resultar em **Corrupção de Estado** ou **Falha de Renderização**.

### 3.1. Unique Identity Generation (ID Hashing)
A lógica de rastreamento depende da geração determinística de chaves únicas para cada dia.
-   **Fórmula:** `${weekId}-${dayIndex}`
-   **Risco Crítico:** Se a estrutura do `workoutData` for alterada (ex: mudar o `id` da semana 0 de "week0" para "w0") *após* o usuário já ter progresso salvo, **haverá perda de referência**, e o progresso visual desaparecerá (embora os dados antigos permaneçam órfãos no LocalStorage).
-   **Diretiva:** Mantenha os `id`s das semanas constantes (`week0`, `week1`...). Adicione novos IDs apenas para novas semanas.

### 3.2. Clinical Data Lock (Temporal Guard)
A funcionalidade de bloqueio de edição de dados clínicos implementa uma verificação temporal estrita.
-   **Mecanismo:** Ao salvar, um timestamp `lastUpdated` (ISO 8601) é gravado. Ao carregar, o sistema compara `new Date(lastUpdated).toDateString()` com `new Date().toDateString()`.
-   **Risco:** Alterar a lógica de comparação de datas pode permitir múltiplas inserções diárias (violando a regra de negócio) ou bloquear permanentemente a edição (se houver erro de timezone parsing).

### 3.3. Accordion Event Delegation
O sistema de accordion não utiliza listeners individuais pesados, mas depende da estrutura DOM correta.
-   **Dependência:** A função `toggleDayAccordion` assume que o `day-content` é irmão adjacente do header.
-   **Risco:** Alterar a hierarquia HTML dentro de `renderCurrentWeek` sem atualizar a função de toggle quebrará a animação de expansão.

---

## 4. SCALABILITY & MAINTENANCE GUIDE

### 4.1. Adding New Weeks
Para escalar o programa para a Semana 5, 6, etc., siga estritamente este protocolo:
1.  Abra `js/data.js`.
2.  Localize o array `program`.
3.  Insira um novo objeto seguindo a interface `Week`:
    ```javascript
    {
        id: "week5", // MUST BE UNIQUE AND SEQUENTIAL
        title: "Semana 5: Protocolo X",
        description: "Descrição técnica...",
        days: [ ... ] // Array de 6 ou 7 objetos Day
    }
    ```
4.  **Não é necessário** alterar `index.html` ou `app.js`. O `renderWeekSelector()` detectará automaticamente o novo comprimento do array e renderizará a aba correspondente.

### 4.2. UI Theming
Para alterar a paleta de cores (ex: Rebranding):
1.  Abra `style.css`.
2.  Modifique apenas as variáveis dentro de `:root`.
    -   `--accent-blue`: Cor primária de interação.
    -   `--accent-green`: Cor de sucesso/conclusão.
    -   `--accent-red`: Cor de alerta/destaque.

---

## 5. DEPLOYMENT & CI/CD

O projeto está configurado para deploy estático.
-   **Entry Point:** `index.html`.
-   **Requirements:** Qualquer servidor web estático (Nginx, Apache, Vercel Edge Network, GitHub Pages).
-   **Build Process:** N/A (No-build implementation). O código fonte é o código de produção.

---

**© 2026 HARDCORE SYSTEMS ENGINEERING.**  
*Code is Law. Discipline is Freedom.*
