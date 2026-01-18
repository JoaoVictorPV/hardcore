// HARDCORE MEDICAL CYBERPUNK - DATA MODULE

const workoutData = {
    program: [
        {
            id: "week0",
            title: "Semana 0: Boot do Sistema",
            description: "Inicialização dos protocolos motores. Adaptação neural e metabólica.",
            days: [
                {
                    day: "Segunda",
                    mantra: "A dor é apenas informação entrando no sistema.",
                    exercises: [
                        { name: "Box Squat", sets: "3", reps: "12-15", notes: "Controle a descida. Pausa de 1s no banco." },
                        { name: "Supino Inclinado (Halteres)", sets: "3", reps: "12-15", notes: "Foco na porção clavicular. Alongue bem." },
                        { name: "Remada Curvada", sets: "3", reps: "12-15", notes: "Estabilidade lombar. Esmague as escápulas." },
                        { name: "Stiff", sets: "3", reps: "12-15", notes: "Posterior de coxa sob tensão constante." },
                        { name: "Cardio Bike", sets: "1", reps: "12 min", notes: "Protocolo 30s intenso / 30s leve." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Recalibrando sensores de fadiga.",
                    exercises: [
                        { name: "Flexão de Braço", sets: "3", reps: "Falha", notes: "Peito no chão. Cotovelos fechados." },
                        { name: "Puxada Frontal", sets: "3", reps: "15", notes: "Foco na grande dorsal." },
                        { name: "Elevação Lateral", sets: "3", reps: "15", notes: "Controle o movimento. Sem inércia." },
                        { name: "Agachamento Goblet", sets: "3", reps: "15", notes: "Profundidade máxima." },
                        { name: "Cardio Caminhada", sets: "1", reps: "20 min", notes: "Inclinada. Frequência moderada." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "O sistema cresce no descanso ativo.",
                    exercises: [
                        { name: "Mobilidade de Quadril", sets: "1", reps: "10 min", notes: "Soltar a cápsula articular." },
                        { name: "Mobilidade de Torácica", sets: "1", reps: "10 min", notes: "Rotações e extensões." },
                        { name: "Core: Prancha", sets: "3", reps: "45s", notes: "Abdômen travado." },
                        { name: "Cardio Leve", sets: "1", reps: "30 min", notes: "Zona 2. Regenerativo." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Reiniciando protocolos de força.",
                    exercises: [
                        { name: "Leg Press 45", sets: "3", reps: "15", notes: "Pés largura ombros." },
                        { name: "Desenvolvimento Halteres", sets: "3", reps: "12", notes: "Cuidado com o ombro." },
                        { name: "Remada Baixa", sets: "3", reps: "15", notes: "Alongue a dorsal na volta." },
                        { name: "Cadeira Extensora", sets: "3", reps: "20", notes: "Isometria 2s no topo." },
                        { name: "Cardio Bike", sets: "1", reps: "15 min", notes: "Ritmo constante." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Otimização de vias metabólicas.",
                    exercises: [
                        { name: "Levantamento Terra Romeno", sets: "3", reps: "12", notes: "Foco total na cadeia posterior." },
                        { name: "Supino Reto", sets: "3", reps: "12", notes: "Barra ou Halteres." },
                        { name: "Barra Fixa (ou Graviton)", sets: "3", reps: "10", notes: "Amplitude completa." },
                        { name: "Tríceps Corda", sets: "3", reps: "15", notes: "Esmague no final." },
                        { name: "Bíceps Martelo", sets: "3", reps: "15", notes: "Braquial." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Download completo da semana.",
                    exercises: [
                        { name: "HIIT Esteira", sets: "10", reps: "1 min / 1 min", notes: "Tiro forte / Caminhada." },
                        { name: "Abdominal Infra", sets: "3", reps: "20", notes: "Elevação de pernas." },
                        { name: "Abdominal Supra", sets: "3", reps: "20", notes: "Crunch curto." }
                    ]
                }
            ]
        },
        {
            id: "week1",
            title: "Semana 1: Calibração (EMOM/AMRAP)",
            description: "Aumentando a densidade de trabalho. Densidade = Volume / Tempo.",
            days: [
                {
                    day: "Segunda",
                    mantra: "Sua mente desiste antes do seu corpo.",
                    exercises: [
                        { name: "Agachamento Livre", sets: "EMOM 10'", reps: "10", notes: "Every Minute on the Minute. 10 reps por minuto por 10 min." },
                        { name: "Flexão de Braço", sets: "AMRAP 8'", reps: "Max", notes: "As Many Reps As Possible em 8 minutos." },
                        { name: "Burpees", sets: "3", reps: "15", notes: "Sem pausa." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Disciplina é liberdade.",
                    exercises: [
                        { name: "Barra Fixa", sets: "EMOM 10'", reps: "5", notes: "5 reps todo minuto." },
                        { name: "Desenvolvimento Militar", sets: "4", reps: "12", notes: "Controle." },
                        { name: "Corrida", sets: "1", reps: "3km", notes: "Tempo alvo: < 18min." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Construindo a armadura.",
                    exercises: [
                        { name: "Descanso Ativo", sets: "1", reps: "45 min", notes: "Caminhada ou Natação." },
                        { name: "Alongamento", sets: "1", reps: "20 min", notes: "Full body." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Sem atalhos. Apenas trabalho duro.",
                    exercises: [
                        { name: "Deadlift", sets: "5", reps: "5", notes: "Força base." },
                        { name: "Passada (Lunge)", sets: "3", reps: "20 passos", notes: "Total." },
                        { name: "Prancha Abdominal", sets: "3", reps: "1 min", notes: "Estática." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Supere seu eu de ontem.",
                    exercises: [
                        { name: "Supino Reto", sets: "EMOM 10'", reps: "10", notes: "Carga moderada." },
                        { name: "Remada Curvada", sets: "4", reps: "12", notes: "Pegada supinada." },
                        { name: "Rosca Direta", sets: "3", reps: "15", notes: "Drop-set na última." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "O limite é uma ilusão.",
                    exercises: [
                        { name: "Corrida Intervaada", sets: "8", reps: "400m", notes: "Tiros de 400m. Descanso 2 min." },
                        { name: "Core", sets: "Circuit", reps: "3 rounds", notes: "20 Abs, 20 Lombar, 1min Prancha." }
                    ]
                }
            ]
        },
        {
            id: "week2",
            title: "Semana 2: Rest-Pause & Negativas",
            description: "Intensidade técnica. Controle excêntrico e pausas estratégicas.",
            days: [
                {
                    day: "Segunda",
                    mantra: "Controle a descida, domine a subida.",
                    exercises: [
                        { name: "Leg Press", sets: "3", reps: "12", notes: "3s na fase negativa (descida)." },
                        { name: "Supino Inclinado", sets: "3", reps: "10 + Falha", notes: "Rest-Pause: Faça 10, descanse 15s, faça máx." },
                        { name: "Cadeira Extensora", sets: "3", reps: "15", notes: "Negativa de 4 segundos." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "A gravidade é sua ferramenta.",
                    exercises: [
                        { name: "Puxada Alta", sets: "3", reps: "12", notes: "Segure 2s em baixo." },
                        { name: "Rosca Scott", sets: "3", reps: "10", notes: "Negativa ultra lenta." },
                        { name: "Tríceps Testa", sets: "3", reps: "12", notes: "Controle total." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Recuperação é parte do treino.",
                    exercises: [
                        { name: "Cardio LISS", sets: "1", reps: "40 min", notes: "Low Intensity Steady State." },
                        { name: "Foam Rolling", sets: "1", reps: "15 min", notes: "Liberação miofascial." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Tensão gera adaptação.",
                    exercises: [
                        { name: "Agachamento Hack", sets: "3", reps: "10", notes: "Pausa de 2s no fundo." },
                        { name: "Stiff", sets: "3", reps: "12", notes: "Negativa controlada." },
                        { name: "Panturrilha em Pé", sets: "4", reps: "15", notes: "Pausa no topo e no fundo." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Forje o aço no fogo.",
                    exercises: [
                        { name: "Desenvolvimento Ombros", sets: "3", reps: "10 + Falha", notes: "Rest-Pause." },
                        { name: "Elevação Lateral", sets: "4", reps: "15", notes: "Sem roubar." },
                        { name: "Encolhimento", sets: "3", reps: "20", notes: "Segure 3s em cima." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Fim de ciclo. Prepare-se.",
                    exercises: [
                        { name: "Cardio", sets: "1", reps: "5km", notes: "Ritmo de prova." },
                        { name: "Abdominais", sets: "4", reps: "25", notes: "Variados." }
                    ]
                }
            ]
        },
        {
            id: "week3",
            title: "Semana 3: Bi-sets & Foco LCA",
            description: "Volume alto, descanso curto. Estresse metabólico máximo.",
            days: [
                {
                    day: "Segunda",
                    mantra: "Volume é vaidade, intensidade é sanidade.",
                    exercises: [
                        { name: "Bi-set: Agachamento + Extensora", sets: "3", reps: "12 + 15", notes: "Sem descanso entre exercícios." },
                        { name: "Bi-set: Supino + Flexão", sets: "3", reps: "10 + Falha", notes: "Pump máximo." },
                        { name: "Cardio", sets: "1", reps: "15 min", notes: "Pós-treino." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Queime o combustível.",
                    exercises: [
                        { name: "Bi-set: Puxada + Remada", sets: "3", reps: "12 + 12", notes: "Costas completas." },
                        { name: "Bi-set: Rosca Direta + Martelo", sets: "3", reps: "10 + 10", notes: "Bíceps." },
                        { name: "Cardio", sets: "1", reps: "15 min", notes: "HIIT." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Mantenha o fluxo.",
                    exercises: [
                        { name: "Yoga ou Mobilidade", sets: "1", reps: "45 min", notes: "Foco em respiração." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Pernas de aço.",
                    exercises: [
                        { name: "Bi-set: Leg Press + Passada", sets: "3", reps: "15 + 20", notes: "Ardor láctico." },
                        { name: "Bi-set: Flexora + Stiff", sets: "3", reps: "15 + 10", notes: "Posterior." },
                        { name: "Panturrilha Sentado", sets: "4", reps: "20", notes: "Drop-set na última." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Empurre e Puxe.",
                    exercises: [
                        { name: "Bi-set: Desenv. Ombro + Elev. Lateral", sets: "3", reps: "10 + 15", notes: "Ombros." },
                        { name: "Bi-set: Tríceps Testa + Banco", sets: "3", reps: "12 + Falha", notes: "Tríceps." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "O tanque nunca está vazio.",
                    exercises: [
                        { name: "Murph Adaptado", sets: "1", reps: "Tempo", notes: "800m run, 50 pull, 100 push, 150 squat, 800m run." }
                    ]
                }
            ]
        },
        {
            id: "week4",
            title: "Semana 4: Weighted Warrior",
            description: "Carga extra. Mochila, elásticos, peso do corpo + sobrecarga.",
            days: [
                {
                    day: "Segunda",
                    mantra: "Carregue seu peso e mais um pouco.",
                    exercises: [
                        { name: "Flexão com Peso (Mochila)", sets: "4", reps: "8-10", notes: "Use mochila com livros/peso." },
                        { name: "Agachamento com Peso", sets: "4", reps: "12", notes: "Segure o peso no peito." },
                        { name: "Remada Unilateral", sets: "4", reps: "10", notes: "Pesada." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Resistência sob pressão.",
                    exercises: [
                        { name: "Barra Fixa com Peso", sets: "3", reps: "Falha", notes: "Se possível." },
                        { name: "Mergulho (Dips) com Peso", sets: "3", reps: "10", notes: "Mochila nas costas." },
                        { name: "Caminhada do Fazendeiro", sets: "3", reps: "1 min", notes: "Segure pesos pesados e ande." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Guerreiro descansa, mas não para.",
                    exercises: [
                        { name: "Caminhada com Mochila (Rucking)", sets: "1", reps: "5 km", notes: "Mochila pesada. Ritmo forte." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Explosão controlada.",
                    exercises: [
                        { name: "Thruster (Agacho + Desenv.)", sets: "4", reps: "12", notes: "Movimento contínuo." },
                        { name: "Kettlebell Swing (ou com Halter)", sets: "4", reps: "20", notes: "Quadril explosivo." },
                        { name: "Burpee Over Bar", sets: "3", reps: "10", notes: "Salte sobre o objeto." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "O teste final se aproxima.",
                    exercises: [
                        { name: "Levantamento Terra", sets: "5", reps: "5", notes: "Carga máxima técnica." },
                        { name: "Supino Fechado", sets: "4", reps: "8", notes: "Tríceps força." },
                        { name: "Barra Supinada (Chin up)", sets: "3", reps: "Falha", notes: "Bíceps." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Você sobreviveu.",
                    exercises: [
                        { name: "Desafio 100", sets: "1", reps: "Tempo", notes: "100 Flexões, 100 Agachamentos, 100 Abs." },
                        { name: "Corrida Final", sets: "1", reps: "5km", notes: "Melhor tempo possível." }
                    ]
                }
            ]
        }
    ],
    motivationalPhrases: [
        "A dor é temporária. A glória é eterna.",
        "Não pare quando estiver cansado. Pare quando tiver terminado.",
        "Seu corpo pode suportar quase tudo. É sua mente que você precisa convencer.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Treine enquanto eles dormem. Estude enquanto eles se divertem.",
        "Você não é o que você fala que vai fazer. Você é o que você faz.",
        "Disciplina é fazer o que precisa ser feito, mesmo sem vontade.",
        "O único dia fácil foi ontem.",
        "Se fosse fácil, todo mundo faria.",
        "Transforme a dor em poder.",
        "Sua única competição é quem você era ontem.",
        "O suor é a gordura chorando.",
        "Foco no processo, não apenas no resultado.",
        "Seja mais forte que sua melhor desculpa.",
        "Acredite no processo.",
        "Roma não foi construída em um dia, mas eles trabalhavam tijolo por tijolo todo dia.",
        "Motivação é o que te faz começar. Hábito é o que te faz continuar.",
        "Não deseje que fosse mais fácil. Deseje que você fosse melhor.",
        "A distância entre o sonho e a realidade chama-se disciplina.",
        "Faça hoje o que os outros não querem, faça amanhã o que os outros não podem.",
        "Sem dor, sem ganho.",
        "A persistência realiza o impossível.",
        "Vença a si mesmo e terá vencido o mundo.",
        "O corpo alcança o que a mente acredita.",
        "Não conte os dias, faça os dias contarem.",
        "Seu futuro é criado pelo que você faz hoje, não amanhã.",
        "A excelência não é um ato, mas um hábito.",
        "Desculpas não queimam calorias.",
        "Você é o seu único limite.",
        "Levante-se. Ataque. Repita.",
        "O sacrifício de hoje é a força de amanhã.",
        "Mente blindada, corpo de ferro.",
        "Cada repetição conta.",
        "Respeite o seu templo.",
        "Hardcore não é um estilo, é uma mentalidade.",
        "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
        "Seus resultados são o espelho dos seus hábitos.",
        "Nada muda se nada mudar.",
        "Seja obsecado ou seja mediano.",
        "O conforto é o inimigo do progresso.",
        "A dor da disciplina é menor que a dor do arrependimento.",
        "Construa uma versão de si mesmo que você admire.",
        "Foco total.",
        "Respire fundo e continue.",
        "Você é capaz de mais do que imagina.",
        "Não negocie com a preguiça.",
        "Vença a batalha da cama de manhã.",
        "Campeões são feitos quando ninguém está olhando.",
        "Seja implacável.",
        "Hackeie sua biologia.",
        "Otimize seu sistema.",
        "Update complete: Nova versão de você carregando...",
        "Falha muscular é sucesso neural.",
        "Reprogramando o DNA...",
        "Modo Besta: ATIVADO.",
        "Silencie a mente, mova o corpo.",
        "A única saída é através.",
        "Seus limites são apenas sugestões.",
        "Quebre o padrão.",
        "Evolua ou morra.",
        "Seja o arquiteto da sua própria destruição e renascimento.",
        "Caos controlado.",
        "Entropia reversa.",
        "Sintetize força.",
        "Anabolismo mental.",
        "Hipertrofia da vontade."
    ]
};
