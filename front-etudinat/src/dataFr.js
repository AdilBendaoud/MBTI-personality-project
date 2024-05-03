const data = [
    {
      "dichotomies": [
        {"type":"I", 
          "description": "Introverti",
          "meaning": "Se concentre vers l'intérieur, tire son énergie de la solitude, réfléchi, réservé en société"
        },
        {"type":"E", 
          "description": "Extraverti",
          "meaning": "Se concentre vers l'extérieur, tire son énergie des interactions sociales, extraverti, expressif"
        },
        {"type":"S", 
          "description": "Sensation",
          "meaning": "Se concentre sur l'information concrète, les détails, la praticité, se fie aux cinq sens"
        },
        {"type":"N", 
          "description": "Intuition",
          "meaning": "Se concentre sur les idées abstraites, les possibilités, les motifs, se fie à l'intuition et à l'imagination"
        },
        {"type":"T", 
          "description": "Pensée",
          "meaning": "Prend des décisions basées sur la logique, l'analyse objective, les principes, orienté vers la vérité"
        },
        {"type":"F", 
          "description": "Sentiment",
          "meaning": "Prend des décisions basées sur les valeurs, les émotions, l'empathie, orienté vers l'harmonie"
        },
        {"type":"J", 
          "description": "Jugement",
          "meaning": "Préfère la structure, l'organisation, la planification, décisif, orienté vers la fermeture"
        },
        {"type":"P", 
          "description": "Perception",
          "meaning": "Préfère la flexibilité, la spontanéité, l'adaptabilité, ouvert d'esprit, orienté vers l'exploration"
        }
      ]
    },
    {
      "types": [
        {
          "type": "ISTJ",
          "title":"Logisticien",
          "description": "L'ISTJ (Logisticien) est un type de personnalité avec les traits Introverti, Observateur, Pensée et Jugement. Ces personnes ont tendance à être réservées mais volontaires, avec une vision rationnelle de la vie. Elles composent leurs actions avec soin et les exécutent avec un objectif méthodique.",
          "traits": [
            "Pratique et orienté vers les détails",
            "Axé sur les traditions et l'ordre",
            "Décideurs logiques",
            "Réservés et privés"
          ],
          "strengths": [
            "Fiables et responsables",
            "Méthodiques et organisés",
            "Loyaux et engagés",
            "Ponctuels et fiables"
          ],
          "weaknesses": [
            "Peut être trop rigide",
            "Peut avoir du mal avec le changement",
            "La nature réservée peut entraver les relations sociales",
            "Tendance à se concentrer sur les expériences passées"
          ]
        },
        {
          "type": "ESTJ",
          "title":"Exécutif",
          "description": "L'ESTJ (Exécutif) est un type de personnalité avec les traits Extraverti, Observateur, Pensée et Jugement. Ils possèdent une grande force de caractère, suivant énergiquement leur propre jugement sensé. Ils servent souvent de force stabilisatrice parmi les autres, capables d'offrir une direction solide face à l'adversité.",
          "traits": [
            "Pratique et axé sur les résultats",
            "Grand sens des responsabilités",
            "Communication directe et assertive",
            "Structuré et organisé"
          ],
          "strengths": [
            "Excellentes capacités de leadership",
            "Efficaces et productifs",
            "Axés sur les objectifs et les résultats",
            "Fiables et responsables"
          ],
          "weaknesses": [
            "Peut être trop contrôlant",
            "Peut avoir du mal à déléguer des tâches",
            "Intolérance à l'inefficacité",
            "Adhésion rigide aux règles"
          ]
        },
        {
          "type": "ISTP",
          "title":"Virtuose",
          "description": "L'ISTP (Virtuose) est un type de personnalité avec les traits Introverti, Observateur, Pensée et Prospection. Ils ont tendance à avoir un esprit individualiste, poursuivant des objectifs sans avoir besoin de beaucoup de connections externes. Ils s'engagent dans la vie avec curiosité et habileté personnelle, variant leur approche selon les besoins.",
          "traits": [
            "Adaptables et ingénieux",
            "Résolveurs de problèmes pratiques",
            "Axés sur les réalités immédiates",
            "Indépendants et autonomes"
          ],
          "strengths": [
            "Approche pratique des défis",
            "Pensée analytique et logique",
            "Sang-froid sous pression",
            "Capacités de prise de décision rapide"
          ],
          "weaknesses": [
            "Comportement prenant des risques",
            "Tendance à être réservé ou distant",
            "Répugnance pour la routine ou les tâches répétitives",
            "Difficulté à exprimer ses émotions"
          ]
        },
        {
          "type": "ESTP",
          "title":"Entrepreneur",
          "description": "L'ESTP (Entrepreneur) est un type de personnalité avec les traits Extraverti, Observateur, Pensée et Prospection. Ils ont tendance à être énergiques et orientés vers l'action, naviguant habilement à travers tout ce qui se présente à eux. Ils aiment découvrir les opportunités de la vie, que ce soit en socialisant avec d'autres ou dans des activités plus personnelles.",
          "traits": [
            "Énergiques et orientés vers l'action",
            "Prosperent dans les environnements rapides",
            "Compétences pratiques de résolution de problèmes",
            "Adaptables et flexibles"
          ],
          "strengths": [
            "Excellent pour réfléchir sur le moment",
            "Charismatiques et persuasifs",
            "Doués pour réseauter et se connecter avec les autres",
            "Optimistes et confiants"
          ],
          "weaknesses": [
            "Comportement impulsif et prise de risque",
            "Courte attention pour les tâches routinières",
            "Peut manquer de sensibilité aux sentiments des autres",
            "Difficulté avec la planification à long terme"
          ]
        },
        {
          "type": "ISFJ",
          "title":"Défenseur",
          "description": "SFJ (Défenseur) est un type de personnalité avec les traits Introverti, Observateur, Sentiment et Jugement. Ces personnes ont tendance à être chaleureuses et modestes à leur manière stable. Elles sont efficaces et responsables, accordant une attention particulière aux détails pratiques de leur vie quotidienne.",
          "traits": [
            "Compassionné et attentionné",
            "Axé sur l'harmonie et la coopération",
            "Soucieux des détails et minutieux",
            "Réservés et privés"
          ],
          "strengths": [
            "Dévoués et loyaux envers les autres",
            "Excellents auditeurs et conseillers",
            "Supportifs et nourrissants",
            "Fiables et responsables"
          ],
          "weaknesses": [
            "Tendance à éviter les conflits",
            "Peut donner la priorité aux besoins des autres avant les leurs",
            "Difficulté à s'affirmer",
            "Sensibilité à la critique"
          ]
        },
        {
          "type": "ESFJ",
          "title":"Consul",
          "description": "ESFJ (Consul) est un type de personnalité avec les traits Extraverti, Observateur, Sentiment et Jugement. Ils sont attentifs et centrés sur les personnes, et ils aiment participer à leur communauté sociale. Leurs réalisations sont guidées par des valeurs décisives, et ils offrent volontiers des conseils aux autres.",
          "traits": [
            "Chaleureux et sociable",
            "Axé sur le maintien des relations",
            "Supportifs et attentionnés",
            "Organisés et structurés"
          ],
          "strengths": [
            "Excellents pour se connecter avec les autres",
            "Empathiques et compatissants",
            "Bons pour gérer les personnes et les tâches",
            "Fiables et responsables"
          ],
          "weaknesses": [
            "Peut donner la priorité aux besoins des autres avant les leurs",
            "Difficulté avec la critique ou les conflits",
            "Tendance à être excessivement accommodant",
            "Peut être perçu comme trop contrôlant"
          ]
        },
        {
          "type": "ISFP",
          "title":"Aventurier",
          "description": "ISFP (Aventurier) est un type de personnalité avec les traits Introverti, Observateur, Sentiment et Prospection. Ils ont tendance à avoir un esprit ouvert, abordant la vie, les nouvelles expériences et les gens avec une chaleur fondée. Leur capacité à rester dans le moment présent les aide à découvrir des potentiels excitants.",
          "traits": [
            "Sensibles et attentionnés",
            "Artistiques et créatifs",
            "Flexibles et adaptables",
            "Loyaux et supportifs"
          ],
          "strengths": [
            "Appréciation de la beauté et de l'esthétique",
            "Système de valeurs solide",
            "Empathiques et compréhensifs",
            "Capacité à créer des environnements harmonieux"
          ],
          "weaknesses": [
            "Peut éviter les conflits à tout prix",
            "Tendance à être excessivement sensible",
            "Difficulté avec la planification à long terme",
            "Difficultés avec la critique ou les retours négatifs"
          ]
        },
        {
          "type": "ESFP",
          "title":"Animateur",
          "description": "ESFP (Animateur) est un type de personnalité avec les traits Extraverti, Observateur, Sentiment et Prospection. Ces personnes adorent les expériences vibrantes, s'engageant avec enthousiasme dans la vie et prenant plaisir à découvrir l'inconnu. Ils peuvent être très sociaux, encourageant souvent les autres à participer à des activités communes.",
          "traits": [
            "Énergiques et enthousiastes",
            "Adore être au centre de l'attention",
            "Spontanés et adaptables",
            "Axés sur les personnes et sociaux"
          ],
          "strengths": [
            "Charismatiques et engageants",
            "Excellents pour divertir les autres",
            "Optimistes et amoureux du plaisir",
            "Bons pour se connecter avec les gens"
          ],
          "weaknesses": [
            "Tendance à éviter les conflits",
            "Peut être impulsif et imprudent",
            "Courte attention pour les tâches routinières",
            "Difficulté avec la planification à long terme"
          ]
        },
        {
          "type": "INFJ",
          "title":"Avocat",
          "description": "INFJ (Avocat) est un type de personnalité avec les traits Introverti, Intuitif, Sentiment et Jugement. Ils ont tendance à aborder la vie avec profondeur de pensée et imagination. Leur vision intérieure, leurs valeurs personnelles et une version calme et principielle de l'humanisme les guident dans tout ce qu'ils font.",
          "traits": [
            "Perspicace et visionnaire",
            "Idéaliste et principiel",
            "Empathique et compatissant",
            "Réservé et privé"
          ],
          "strengths": [
            "Compréhension profonde des émotions des autres",
            "Sens fort du but et des valeurs",
            "Créatif et innovant",
            "Inspire et motive les autres"
          ],
          "weaknesses": [
            "Peut être trop sensible à la critique",
            "Les attentes idéalistes peuvent conduire à la déception",
            "Tendance à être perfectionniste",
            "Difficulté à traiter les détails pratiques"
          ]
        },
        {
          "type": "ENFJ",
          "title":"Protagoniste",
          "description": "ENFJ (Protagoniste) est un type de personnalité avec les traits Extraverti, Intuitif, Sentiment et Jugement. Ces types chaleureux et francs aiment aider les autres, et ils ont tendance à avoir des idées et des valeurs fortes. Ils soutiennent leur perspective avec l'énergie créative pour atteindre leurs objectifs.",
          "traits": [
            "Charismatique et inspirant",
            "Empathique et compréhensif",
            "Axé sur l'aide aux autres",
            "Organisé et structuré"
          ],
          "strengths": [
            "Leaders naturels et motivateurs",
            "Excellents pour se connecter avec les gens",
            "Passionnés par le fait de faire une différence",
            "Supportifs et nourrissants"
          ],
          "weaknesses": [
            "Tendance à être excessivement idéaliste",
            "Peut donner la priorité aux besoins des autres avant les leurs",
            "Difficulté avec la critique ou les conflits",
            "Peut être perçu comme contrôlant"
          ]
        },
        {
          "type": "INFP",
          "title":"Médiateur",
          "description": "INFP (Médiateur) est un type de personnalité avec les traits Introverti, Intuitif, Sentiment et Prospection. Ces types de personnalité rares tendent à être calmes, ouverts d'esprit et imaginatifs, et ils appliquent une approche attentionnée et créative à tout ce qu'ils font.",
          "traits": [
            "Idéaliste et compatissant",
            "Créatif et imaginatif",
            "Valorise l'authenticité et l'individualité",
            "Sensible et empathique"
          ],
          "strengths": [
            "Compréhension profonde des émotions des autres",
            "Capacités créatives de résolution de problèmes",
            "Système de valeurs solide",
            "Capacité à inspirer et à motiver"
          ],
          "weaknesses": [
            "Tendance à être excessivement idéaliste",
            "Peut avoir du mal avec la prise de décision",
            "Sensibilité à la critique ou aux conflits",
            "Difficulté avec les détails pratiques"
          ]
        },
        {
          "type": "ENFP",
          "title":"Militant",
          "description": "ENFP (Militant) est un type de personnalité avec les traits Extraverti, Intuitif, Sentiment et Prospection. Ces personnes tendent à embrasser de grandes idées et des actions qui reflètent leur sens de l'espoir et de la bonne volonté envers les autres. Leur énergie vibrante peut aller dans de nombreuses directions.",
          "traits": [
            "Enthousiaste et imaginatif",
            "Valorise l'authenticité et la créativité",
            "Se connecte facilement avec les autres",
            "Flexible et adaptable"
          ],
          "strengths": [
            "Charismatique et inspirant",
            "Compétences créatives de résolution de problèmes",
            "Passionné par les causes et les idées",
            "Excellents communicateurs"
          ],
          "weaknesses": [
            "Tendance à être indécis",
            "Difficulté avec la routine ou les tâches répétitives",
            "Peut être excessivement idéaliste",
            "Sensibilité à la critique ou aux conflits"
          ]
        },
        {
          "type": "INTJ",
          "title":"Architecte",
          "description": "INTJ (Architecte) est un type de personnalité avec les traits Introverti, Intuitif, Pensée et Jugement. Ces tacticiens réfléchis adorent perfectionner les détails de la vie, en appliquant la créativité et la rationalité à tout ce qu'ils font. Leur monde intérieur est souvent privé et complexe.",
          "traits": [
            "Stratégique et visionnaire",
            "Analytique et logique",
            "Indépendant et décisif",
            "Réservé et introspectif"
          ],
          "strengths": [
            "Excellentes capacités de résolution de problèmes",
            "Visionnaire et tourné vers l'avenir",
            "Fortes compétences en leadership",
            "Axé sur les objectifs à long terme"
          ],
          "weaknesses": [
            "Tendance à être perfectionniste",
            "Peut sembler distant ou distant",
            "Difficulté à exprimer ses émotions",
            "Peut être critique envers les autres"
          ]
        },
        {
          "type": "ENTJ",
          "title":"Commandant",
          "description": "ENTJ (Commandant) est un type de personnalité avec les traits Extraverti, Intuitif, Pensée et Jugement. Ce sont des personnes décisives qui aiment la dynamique et les réalisations. Ils recueillent des informations pour construire leurs visions créatives mais hésitent rarement longtemps avant d'agir.",
          "traits": [
            "Assertif et stratégique",
            "Orienté vers les objectifs et décisif",
            "Leaders naturels et organisateurs",
            "Confiant et assertif"
          ],
          "strengths": [
            "Excellents pour diriger et motiver les autres",
            "Pensée stratégique et visionnaire",
            "Efficaces et orientés vers les résultats",
            "Doués pour résoudre les problèmes"
          ],
          "weaknesses": [
            "Peut être excessivement critique envers les autres",
            "Impatient face à l'inefficacité ou à l'incompétence",
            "Tendance à ignorer les émotions des autres",
            "Peut sembler trop intense"
          ]
        },
        {
          "type": "INTP",
          "title":"Logicien",
          "description": "INTP (Logicien) est un type de personnalité avec les traits Introverti, Intuitif, Pensée et Prospection. Ces penseurs flexibles aiment adopter une approche non conventionnelle de nombreux aspects de la vie. Ils cherchent souvent des chemins improbables, mêlant volonté d'expérimenter avec créativité personnelle.",
          "traits": [
            "Analytique et curieux",
            "Innovateur et inventif",
            "Indépendant et flexible",
            "Réservé et introspectif"
          ],
          "strengths": [
            "Compréhension profonde des systèmes complexes",
            "Capacités créatives de résolution de problèmes",
            "Ouverts d'esprit et adaptables",
            "Excellents pour générer des idées"
          ],
          "weaknesses": [
            "Tendance à trop penser ou analyser",
            "Difficulté à exprimer ses émotions",
            "Peut sembler distant ou détaché",
            "Peut avoir du mal à s'engager sur des objectifs à long terme"
          ]
        },
        {
          "type": "ENTP",
          "title":"Innovateur",
          "description": "ENTP (Innovateur) est un type de personnalité avec les traits Extraverti, Intuitif, Pensée et Prospection. Ces penseurs créatifs ont une énergie qui les pousse à explorer constamment de nouvelles idées et possibilités. Ils aiment défier les normes et proposer des perspectives originales.",
          "traits": [
            "Curieux et énergique",
            "Innovateur et inventif",
            "Bon pour voir les possibilités",
            "Adaptable et flexible"
          ],
          "strengths": [
            "Capacité à voir les connexions entre les idées",
            "Énergique et optimiste",
            "Compétences créatives de résolution de problèmes",
            "Excellents communicateurs"
          ],
          "weaknesses": [
            "Tendance à s'ennuyer facilement",
            "Peut avoir du mal à terminer les projets",
            "Peut être excessivement argumentatif",
            "Peut ignorer les détails pratiques"
          ]
        }
      ]
    }
  ];
  
  export default data;
  