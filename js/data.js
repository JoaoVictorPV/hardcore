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
                    strategy: "Execute 3 rounds consecutivos deste circuito. Não descanse entre os exercícios, apenas recupere o fôlego se necessário ao final de cada round. Mantenha o foco na qualidade do movimento, não na carga.",
                    exercises: [
                        { name: "Agachamento no Banco", sets: "15 reps", reps: "", notes: "Sente-se controlando a descida por 3 segundos. Encoste o glúteo e suba explosivo." },
                        { name: "Supino Inclinado (Halteres)", sets: "12 reps", reps: "", notes: "Banco inclinado (30-45°). Alongue bem o peitoral na descida e contraia no topo." },
                        { name: "Remada Unilateral", sets: "10 reps", reps: "cada lado", notes: "Apoie a mão no banco. Puxe o halter em direção ao quadril, esmagando as costas." },
                        { name: "Stiff (RDL) Halter", sets: "12 reps", reps: "", notes: "Pés na largura do quadril. Desça o tronco mantendo as pernas semi-rígidas e coluna reta." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Cardio não é castigo, é combustível.",
                    strategy: "Protocolo Intervalado de Alta Intensidade na Bike. Alterne os estímulos para maximizar a queima calórica e condicionamento.",
                    exercises: [
                        { name: "Bike Intervalada", sets: "12 min", reps: "", notes: "30 segundos em velocidade/carga ALTA (ofegante) alternado com 30 segundos LEVE (recuperação)." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Consistência vence intensidade no longo prazo.",
                    strategy: "Repetição do protocolo de força. Tente melhorar sua execução em relação a segunda-feira. 3 Rounds diretos sem descanso.",
                    exercises: [
                        { name: "Agachamento no Banco", sets: "15 reps", reps: "", notes: "Controle a descida (3s). O banco é seu limitador de profundidade seguro." },
                        { name: "Supino Inclinado (Halteres)", sets: "12 reps", reps: "", notes: "Cotovelos levemente fechados (45°) para proteger os ombros." },
                        { name: "Remada Unilateral", sets: "10 reps", reps: "cada lado", notes: "Mantenha o tronco paralelo ao chão. Não gire o corpo ao puxar." },
                        { name: "Stiff (RDL) Halter", sets: "12 reps", reps: "", notes: "Sinta o alongamento na parte posterior da coxa. Não arredonde a lombar." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "O coração é o motor.",
                    strategy: "Protocolo Intervalado. Mantenha a intensidade nos tiros de 30 segundos. É para ficar difícil de falar.",
                    exercises: [
                        { name: "Bike Intervalada", sets: "12 min", reps: "", notes: "30 segundos INTENSO / 30 segundos LEVE. Mantenha a cadência alta nos tiros." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Fim da primeira fase de adaptação.",
                    strategy: "Último treino de força da semana. Dê o seu melhor. 3 Rounds contínuos. Se estiver fácil, aumente levemente a carga ou diminua o descanso.",
                    exercises: [
                        { name: "Agachamento no Banco", sets: "15 reps", reps: "", notes: "Técnica perfeita. Peito estufado, abdômen travado." },
                        { name: "Supino Inclinado (Halteres)", sets: "12 reps", reps: "", notes: "Amplitude máxima sem sentir dor no ombro." },
                        { name: "Remada Unilateral", sets: "10 reps", reps: "cada lado", notes: "Puxe com o cotovelo, não com a mão. Sinta a dorsal trabalhar." },
                        { name: "Stiff (RDL) Halter", sets: "12 reps", reps: "", notes: "Movimento de dobradiça de quadril. Jogue o bumbum para trás." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Recarregar para evoluir.",
                    strategy: "Finalize a semana com um cardio intervalado. Isso vai acelerar seu metabolismo para o descanso de domingo.",
                    exercises: [
                        { name: "Bike Intervalada", sets: "12 min", reps: "", notes: "30s FORTE / 30s LEVE. Suando e respirando fundo." }
                    ]
                },
                {
                    day: "Domingo",
                    mantra: "A mente comanda, o corpo obedece.",
                    strategy: "Dia de treino livre e motivação. Aproveite para testar seus limites ou simplesmente mover o corpo de forma instintiva.",
                    exercises: [
                        { name: "Treino Livre", sets: "Livre", reps: "Livre", notes: "Faça o que seu corpo pedir. Corrida, Flexões, Alongamento..." }
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
                    strategy: "Protocolo EMOM de 18 minutos. Solte o cronômetro. A cada virada de minuto, execute a tarefa. O tempo que sobrar é seu descanso.",
                    exercises: [
                        { name: "Minutos Ímpares: Supino Inclinado", sets: "15 reps", reps: "", notes: "Faça 15 repetições dentro do minuto. Descanse o restante do tempo." },
                        { name: "Minutos Pares: Box Squat", sets: "15 reps", reps: "", notes: "No próximo minuto, faça 15 agachamentos. Descanse o restante." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Picos de intensidade.",
                    strategy: "Cardio intervalado na bike. Foco em picos de alta intensidade.",
                    exercises: [
                        { name: "Bike HIIT", sets: "20 min", reps: "10 Ciclos", notes: "10 rounds de: 30 segundos MÁXIMO ESFORÇO / 30 segundos Recuperação Leve." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "AMRAP: As Many Rounds As Possible.",
                    strategy: "Protocolo AMRAP de 15 minutos. Ajuste um timer regressivo e faça o MÁXIMO DE ROUNDS possíveis desta sequência sem parar (ou parando pouco).",
                    exercises: [
                        { name: "Remada Unilateral", sets: "12 reps", reps: "cada lado", notes: "Execução controlada, sem balanço." },
                        { name: "RDL (Stiff)", sets: "12 reps", reps: "", notes: "Desça devagar (3 segundos). Sinta o posterior rasgar." },
                        { name: "Desenvolvimento Ombros", sets: "10 reps", reps: "", notes: "Use halteres ou mochila. Empurre acima da cabeça com estabilidade." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Resistência e Velocidade.",
                    strategy: "Cardio misto. Uma base constante com tiros de velocidade ocasionais para quebrar a homeostase.",
                    exercises: [
                        { name: "Bike Híbrida", sets: "20 min", reps: "", notes: "Mantenha ritmo médio constante. A cada 4 minutos, faça um SPRINT de 60 segundos." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Circuito Metabólico.",
                    strategy: "Realize 4 voltas completas (Rounds) neste circuito. O objetivo é manter a frequência cardíaca alta.",
                    exercises: [
                        { name: "Flexão de Braço", sets: "Falha", reps: "", notes: "Mãos apoiadas no banco ou chão. Vá até não conseguir mais subir." },
                        { name: "Goblet Squat", sets: "15 reps", reps: "", notes: "Segure o halter/peso na frente do peito (cálice). Agache profundo." },
                        { name: "Remada Curvada", sets: "15 reps", reps: "", notes: "Tronco inclinado à frente. Puxe a barra/halter no umbigo." },
                        { name: "Crucifixo Inverso", sets: "15 reps", reps: "", notes: "Incline o tronco e abra os braços para trás, focando no posterior de ombro." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "LISS: Low Intensity Steady State.",
                    strategy: "Cardio de baixa intensidade e longa duração. Ótimo para queima de gordura e recuperação ativa.",
                    exercises: [
                        { name: "Bike LISS", sets: "30 min", reps: "", notes: "Ritmo moderado e constante. Você deve conseguir manter uma conversa enquanto pedala (Zona 2)." }
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
                    strategy: "Foco em técnicas de intensidade. Use 'Rest-Pause' e Pausas Isométricas para aumentar a densidade do treino.",
                    exercises: [
                        { name: "Supino Inclinado", sets: "4 séries", reps: "10 reps +", notes: "Técnica Rest-Pause: Na última série, faça 10 reps, descanse 15s e continue até a falha." },
                        { name: "Goblet Squat", sets: "4 séries", reps: "12 reps", notes: "Pausa de 2 segundos lá em baixo em cada repetição. Não relaxe, mantenha a tensão." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Explosão.",
                    strategy: "HIIT agressivo na bike. A fase de descanso é parada total (off).",
                    exercises: [
                        { name: "Bike HIIT", sets: "10 Ciclos", reps: "", notes: "40 segundos Carga Explosiva / 20 segundos Parado Total (recupere o fôlego)." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Foco no LCA e Cadeia Posterior.",
                    strategy: "Treino focado na parte de trás do corpo (Costas e Posterior de Coxa) com controle extremo de velocidade.",
                    exercises: [
                        { name: "Remada Curvada", sets: "4 séries", reps: "10 reps", notes: "Puxe explosivo, segure 1s e desça controlado." },
                        { name: "Stiff (RDL)", sets: "4 séries", reps: "12 reps", notes: "Super Slow: Leve 5 segundos para descer o peso. Suba normal." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Escada de Carga.",
                    strategy: "Cardio progressivo na bike. A cada bloco de tempo, aumente a resistência (marcha) da bicicleta.",
                    exercises: [
                        { name: "Bike Escada", sets: "20 min", reps: "", notes: "A cada 4 min mude a carga: Nível 3 -> Nível 5 -> Nível 7 -> Nível 5 -> Nível 3." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Volume alto, descanso zero.",
                    strategy: "5 Rounds gigantes sem descanso. Prepare-se para suar.",
                    exercises: [
                        { name: "Supino Inclinado", sets: "5 Rounds", reps: "10-12", notes: "Sem descanso, vá para o agachamento." },
                        { name: "Box Squat", sets: "", reps: "10-12", notes: "Sem descanso, vá para a remada." },
                        { name: "Remada", sets: "", reps: "10-12", notes: "Sem descanso, vá para os braços." },
                        { name: "Bíceps/Tríceps", sets: "", reps: "10-12", notes: "Escolha um. Finalize o round e repita." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Queima de gordura.",
                    strategy: "Sessão longa de cardio moderado para oxidação de gordura.",
                    exercises: [
                        { name: "Cardio Moderado", sets: "40 min", reps: "", notes: "Bike ou Caminhada Rápida. Mantenha um ritmo desafiador mas constante." }
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
                    strategy: "Bi-sets: Realize dois exercícios seguidos sem descanso (A + B), depois descanse. Isso aumenta a densidade do treino.",
                    exercises: [
                        { name: "Bi-set 1: Supino + Remada", sets: "4 Séries", reps: "12 + 12", notes: "Faça Supino Inclinado e imediatamente Remada Unilateral. Descanse 60s após o par." },
                        { name: "Bi-set 2: Crucifixo + Remada Curvada", sets: "3 Séries", reps: "12 + 12", notes: "Crucifixo (Peito) seguido de Remada Curvada (Costas). Descanse 60s." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Pirâmide de Carga.",
                    strategy: "Cardio intervalado em formato de pirâmide. A carga sobe e desce repetidamente.",
                    exercises: [
                        { name: "Bike Pirâmide", sets: "4 Ciclos", reps: "", notes: "Cada ciclo tem 3 minutos: 1min Leve (Carga 4) -> 1min Médio (Carga 6) -> 1min Pesado (Carga 8). Repita 4x." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Propriocepção e Estabilidade.",
                    strategy: "Foco em equilíbrio e estabilidade articular (LCA). Movimentos unilaterais exigem mais do core.",
                    exercises: [
                        { name: "Step-up no Banco", sets: "3 séries", reps: "10/perna", notes: "Suba no banco com uma perna só, sem impulsionar com a de trás. Controle a descida." },
                        { name: "Stiff Unilateral", sets: "3 séries", reps: "12/perna", notes: "Um pé no chão, o outro sai para trás. Mantenha o equilíbrio." },
                        { name: "Wall Sit (Cadeirinha)", sets: "3 séries", reps: "45s", notes: "Encoste na parede, agache a 90 graus e segure a posição." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Shunt Sanguíneo.",
                    strategy: "Desvio de fluxo sanguíneo (Shunt). Alternar entre cardio (pernas) e agachamento joga o sangue para os músculos repetidamente.",
                    exercises: [
                        { name: "Bike Shunt", sets: "25 min", reps: "", notes: "Pedale constante. A CADA 5 MINUTOS: Pare a bike, desça e faça 15 Agachamentos rápidos (sem peso)." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Tri-set de Ombros.",
                    strategy: "Tri-set: Três exercícios de ombro em sequência para um pump massivo.",
                    exercises: [
                        { name: "Tri-set Ombros", sets: "3 Séries", reps: "10+10+10", notes: "Arnold Press + Elevação Lateral + Crucifixo Inverso. Tudo seguido, sem soltar o peso se possível." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Tiros Máximos.",
                    strategy: "Sprint Training. Esforço máximo absoluto por curto tempo.",
                    exercises: [
                        { name: "Bike Sprints", sets: "10 Tiros", reps: "30s", notes: "30 segundos na CARGA MÁXIMA possível. Descanse 1 minuto completo (parado ou girando leve) entre os tiros." }
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
                    strategy: "Treino rústico com peso do corpo e carga improvisada (mochila).",
                    exercises: [
                        { name: "Flexão com Mochila", sets: "4 séries", reps: "Falha", notes: "Coloque a mochila com peso nas costas. Flexões até não subir mais." },
                        { name: "Serrote com Elástico", sets: "4 séries", reps: "12/lado", notes: "Pise no elástico e reme. Segure 1s no topo." },
                        { name: "Desenvolvimento Mochila", sets: "4 séries", reps: "15", notes: "Segure a mochila pelas alças ou corpo e empurre acima da cabeça." }
                    ]
                },
                {
                    day: "Terça",
                    mantra: "Protocolo Tabata.",
                    strategy: "Tabata: O protocolo mais eficiente do mundo. 20s de trabalho, 10s de descanso.",
                    exercises: [
                        { name: "Tabata Bloco 1", sets: "8 rounds", reps: "4 min", notes: "Na Bike: 20s Sprint / 10s Parado. Repita 8 vezes." },
                        { name: "Descanso", sets: "2 min", reps: "", notes: "Recupere o fôlego." },
                        { name: "Tabata Bloco 2", sets: "8 rounds", reps: "4 min", notes: "Repita o protocolo de 20s/10s." }
                    ]
                },
                {
                    day: "Quarta",
                    mantra: "Power LCA.",
                    strategy: "Uso de elásticos para ativar glúteos e estabilizadores durante movimentos de força.",
                    exercises: [
                        { name: "Agachamento Mochila + Elástico", sets: "4 séries", reps: "15", notes: "Mochila nas costas/frente + Elástico logo acima dos joelhos (force os joelhos para fora)." },
                        { name: "Stiff Unilateral com Elástico", sets: "3 séries", reps: "10/lado", notes: "Pise numa ponta do elástico e segure a outra. Faça o movimento de dobradiça." }
                    ]
                },
                {
                    day: "Quinta",
                    mantra: "Recuperação Ativa.",
                    strategy: "Dia de soltura e mobilidade. Não force, apenas movimente-se.",
                    exercises: [
                        { name: "Bike Regenerativa", sets: "30 min", reps: "", notes: "Giro muito leve, apenas para circular o sangue." },
                        { name: "Mobilidade de Quadril", sets: "10 min", reps: "", notes: "Alongamentos profundos (posição de cócoras, afundo)." }
                    ]
                },
                {
                    day: "Sexta",
                    mantra: "Caos Controlado.",
                    strategy: "Treino em circuito estilo 'Chaos'. Mistura de tudo com intensidade alta.",
                    exercises: [
                        { name: "Circuito Chaos", sets: "5 Rounds", reps: "Sem parar", notes: "Supino (Halter+Elástico) -> Agacho Sumô Mochila -> Remada -> Braços." }
                    ]
                },
                {
                    day: "Sábado",
                    mantra: "Endurance Final.",
                    strategy: "Desafio final de resistência da semana.",
                    exercises: [
                        { name: "Bike Intervalada Livre", sets: "20 min", reps: "", notes: "Brinque com a carga. Tente manter intensidade média-alta." },
                        { name: "Prancha Abdominal", sets: "3 séries", reps: "1 min", notes: "Trave o abdômen. Tente segurar 1 minuto direto." }
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
