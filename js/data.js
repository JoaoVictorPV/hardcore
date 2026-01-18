// HARDCORE MEDICAL CYBERPUNK - DATA MODULE

const workoutData = {
    program: [
        {
            id: "week0",
            title: "Semana 0: O BOOT (12 MIN)",
            description: "Foco: Criação de hábito e técnica. Adaptação do sistema.",
            days: [
                {
                    day: "Segunda",
                    mantra: "A repetição é a mãe da habilidade.",
                    exercises: [
                        { name: "3 ROUNDS SEM DESCANSO:", sets: "", reps: "", notes: "" },
                        { name: "Agachamento no Banco", sets: "1", reps: "15", notes: "Descida controlada de 3s. Toque o banco e suba." },
                        { name: "Supino Inclinado (Halteres)", sets: "1", reps: "12", notes: "Banco a 30-45 graus. Amplitude completa." },
                        { name: "Remada Unilateral", sets: "1", reps: "10/braço", notes: "Apoie no banco. Costas retas." },
                        { name: "Stiff (RDL) Halter", sets: "1", reps: "12", notes: "Foco total no posterior. Coluna neutra." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Cardio não é castigo, é combustível.",
                    exercises: [
                        { name: "Bike 12 min", sets: "1", reps: "12 min", notes: "Intervalado: 30s Intenso / 30s Leve." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Consistência vence intensidade no longo prazo.",
                    exercises: [
                        { name: "3 ROUNDS SEM DESCANSO:", sets: "", reps: "", notes: "" },
                        { name: "Agachamento no Banco", sets: "1", reps: "15", notes: "Descida controlada de 3s." },
                        { name: "Supino Inclinado (Halteres)", sets: "1", reps: "12", notes: "Controle o peso." },
                        { name: "Remada Unilateral", sets: "1", reps: "10/braço", notes: "Esmague a dorsal." },
                        { name: "Stiff (RDL) Halter", sets: "1", reps: "12", notes: "Sinta o alongamento." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "O coração é o motor.",
                    exercises: [
                        { name: "Bike 12 min", sets: "1", reps: "12 min", notes: "Intervalado: 30s Intenso / 30s Leve." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Fim da primeira fase de adaptação.",
                    exercises: [
                        { name: "3 ROUNDS SEM DESCANSO:", sets: "", reps: "", notes: "" },
                        { name: "Agachamento no Banco", sets: "1", reps: "15", notes: "Técnica perfeita." },
                        { name: "Supino Inclinado (Halteres)", sets: "1", reps: "12", notes: "Força." },
                        { name: "Remada Unilateral", sets: "1", reps: "10/braço", notes: "Estabilidade." },
                        { name: "Stiff (RDL) Halter", sets: "1", reps: "12", notes: "Controle." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Recarregar para evoluir.",
                    exercises: [
                        { name: "Bike 12 min", sets: "1", reps: "12 min", notes: "Intervalado: 30s Intenso / 30s Leve." }
                    ]
                }
            ]
        },
        {
            id: "week1",
            title: "Semana 1: IGNIÇÃO (18-20 MIN)",
            description: "Foco: Calibração de carga. Aumentando a demanda metabólica.",
            days: [
                {
                    day: "Segunda",
                    mantra: "EMOM: Every Minute On the Minute.",
                    exercises: [
                        { name: "EMOM 18 minutos", sets: "18 min", reps: "", notes: "Alterne os exercícios a cada minuto." },
                        { name: "Minutos Ímpares: Supino Inclinado", sets: "", reps: "15", notes: "Faça 15 reps e descanse o resto do minuto." },
                        { name: "Minutos Pares: Box Squat", sets: "", reps: "15", notes: "Faça 15 reps e descanse o resto do minuto." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Picos de intensidade.",
                    exercises: [
                        { name: "Bike 20 min", sets: "1", reps: "20 min", notes: "10 Ciclos: 30s MÁXIMO / 30s Leve." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "AMRAP: As Many Rounds As Possible.",
                    exercises: [
                        { name: "AMRAP 15 minutos", sets: "15 min", reps: "Máx Rounds", notes: "Descanse apenas se necessário." },
                        { name: "Remada Unilateral", sets: "", reps: "12/lado", notes: "Sem roubar." },
                        { name: "RDL (Stiff)", sets: "", reps: "12", notes: "Negativa lenta." },
                        { name: "Desenvolvimento Ombros", sets: "", reps: "10", notes: "Halteres ou Mochila." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Resistência e Velocidade.",
                    exercises: [
                        { name: "Bike 20 min", sets: "1", reps: "20 min", notes: "Steady State + 60s Sprint a cada 4 min." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Circuito Metabólico.",
                    exercises: [
                        { name: "Circuito 4 Rounds", sets: "4", reps: "", notes: "Mínimo descanso entre exercícios." },
                        { name: "Flexão no Banco (ou chão)", sets: "", reps: "Falha", notes: "Peito no apoio." },
                        { name: "Goblet Squat", sets: "", reps: "15", notes: "Halter no peito." },
                        { name: "Remada Curvada", sets: "", reps: "15", notes: "Tronco paralelo." },
                        { name: "Crucifixo Inverso", sets: "", reps: "15", notes: "Posterior de ombro." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "LISS: Low Intensity Steady State.",
                    exercises: [
                        { name: "Bike 30 min", sets: "1", reps: "30 min", notes: "Ritmo moderado constante. Zona 2." }
                    ]
                }
            ]
        },
        {
            id: "week2",
            title: "Semana 2: DENSIDADE (20-22 MIN)",
            description: "Foco: Tempo sob tensão. Controle e pausas.",
            days: [
                {
                    day: "Segunda",
                    mantra: "Tensão mecânica gera força.",
                    exercises: [
                        { name: "Supino Inclinado", sets: "4", reps: "10 + Rest-Pause", notes: "Na última série, descanse 15s e faça mais reps até a falha." },
                        { name: "Goblet Squat", sets: "4", reps: "12", notes: "Pausa de 2 segundos no fundo (agachado)." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Explosão.",
                    exercises: [
                        { name: "Bike HIIT", sets: "10 Ciclos", reps: "", notes: "40s Carga Explosiva / 20s Off total (parado)." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Foco no LCA e Cadeia Posterior.",
                    exercises: [
                        { name: "Remada Curvada", sets: "4", reps: "10", notes: "Controle total." },
                        { name: "Stiff (RDL)", sets: "4", reps: "12", notes: "Negativa de 5 segundos (descida muito lenta)." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Escada de Carga.",
                    exercises: [
                        { name: "Bike 20 min (Escada)", sets: "1", reps: "20 min", notes: "Aumente a carga a cada 4 min: Nível 3 -> 5 -> 7 -> 5 -> 3." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Volume alto, descanso zero.",
                    exercises: [
                        { name: "5 Rounds Sem Descanso", sets: "5", reps: "", notes: "Supino + Box Squat + Remada + Bíceps/Tríceps." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Queima de gordura.",
                    exercises: [
                        { name: "Cardio Moderado", sets: "1", reps: "40 min", notes: "Bike ou Caminhada Rápida." }
                    ]
                }
            ]
        },
        {
            id: "week3",
            title: "Semana 3: VARIABILIDADE (25 MIN)",
            description: "Foco: Bi-sets e estabilidade LCA. Estímulos compostos.",
            days: [
                {
                    day: "Segunda",
                    mantra: "Bi-sets: Dobro do resultado.",
                    exercises: [
                        { name: "Bi-set 1 (4 Séries)", sets: "4", reps: "", notes: "Supino Inclinado + Remada Unilateral. Sem descanso entre eles." },
                        { name: "Bi-set 2 (3 Séries)", sets: "3", reps: "", notes: "Crucifixo + Remada Curvada." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Pirâmide de Carga.",
                    exercises: [
                        { name: "Bike Pirâmide", sets: "4 Ciclos", reps: "1 min cada", notes: "Carga 4 -> 6 -> 8 -> 4. Repita 4 vezes." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Propriocepção e Estabilidade.",
                    exercises: [
                        { name: "Step-up no Banco", sets: "3", reps: "10/perna", notes: "Subida controlada." },
                        { name: "Stiff Unilateral", sets: "3", reps: "12", notes: "Equilíbrio e foco no posterior." },
                        { name: "Wall Sit (Cadeirinha)", sets: "3", reps: "45s", notes: "Isometria na parede." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Shunt Sanguíneo.",
                    exercises: [
                        { name: "Bike Shunt 25 min", sets: "1", reps: "25 min", notes: "Pedalada constante. A CADA 5 MIN: Pare e faça 15 Agachamentos (sem peso)." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Tri-set de Ombros.",
                    exercises: [
                        { name: "Tri-set (3 Séries)", sets: "3", reps: "", notes: "Arnold Press + Elevação Lateral + Crucifixo Inverso." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Tiros Máximos.",
                    exercises: [
                        { name: "Bike HIIT", sets: "10 Tiros", reps: "30s", notes: "Carga Máxima por 30s. Descanso total de 1 min." }
                    ]
                }
            ]
        },
        {
            id: "week4",
            title: "Semana 4: HÍBRIDA (25 MIN)",
            description: "Foco: Mochila, Elásticos e Calistenia. Treino de Guerreiro.",
            days: [
                {
                    day: "Segunda",
                    mantra: "Modo Warrior.",
                    exercises: [
                        { name: "Flexão com Mochila", sets: "Falha", reps: "Máx", notes: "Use mochila com peso." },
                        { name: "Serrote com Elástico", sets: "4", reps: "12", notes: "Unilateral." },
                        { name: "Desenvolvimento Mochila", sets: "4", reps: "15", notes: "Segure a mochila e empurre acima da cabeça." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Protocolo Tabata.",
                    exercises: [
                        { name: "2 Blocos Tabata", sets: "8 rounds cada", reps: "20s/10s", notes: "20s Carga Alta / 10s Off. Descanse 2 min entre os blocos." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Power LCA.",
                    exercises: [
                        { name: "Agachamento Mochila + Elástico", sets: "4", reps: "15", notes: "Elástico logo acima dos joelhos para ativar glúteo médio." },
                        { name: "Stiff Unilateral com Elástico", sets: "3", reps: "10", notes: "Pise no elástico e segure a ponta." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Recuperação Ativa.",
                    exercises: [
                        { name: "Bike Leve", sets: "1", reps: "30 min", notes: "Soltar as pernas." },
                        { name: "Mobilidade de Quadril", sets: "1", reps: "10 min", notes: "Alongamento profundo." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Caos Controlado.",
                    exercises: [
                        { name: "5 Rounds Chaos", sets: "5", reps: "", notes: "Supino (Halter+Elástico) / Agacho Sumô Mochila / Remada / Braços." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Endurance Final.",
                    exercises: [
                        { name: "Bike Intervalada", sets: "1", reps: "20 min", notes: "Variação de carga livre." },
                        { name: "Prancha Abdominal", sets: "3", reps: "1 min", notes: "Core de aço." }
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
