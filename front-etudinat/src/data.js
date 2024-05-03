const data = [
  {
    "dichotomies": [
      {"type":"I", 
        "description": "Introverted",
        "meaning": "Focuses inward, gains energy from solitude, reflective, reserved in social settings"
      },
      {"type":"E", 
        "description": "Extraverted",
        "meaning": "Focuses outward, gains energy from social interactions, outgoing, expressive"
      },
      {"type":"S", 
        "description": "Sensing",
        "meaning": "Focuses on concrete information, details, practicality, relies on the five senses"
      },
      {"type":"N", 
        "description": "Intuitive",
        "meaning": "Focuses on abstract ideas, possibilities, patterns, relies on intuition and imagination"
      },
      {"type":"T", 
        "description": "Thinking",
        "meaning": "Makes decisions based on logic, objective analysis, principles, truth-oriented"
      },
      {"type":"F", 
        "description": "Feeling",
        "meaning": "Makes decisions based on values, emotions, empathy, harmony-oriented"
      },
      {"type":"J", 
        "description": "Judging",
        "meaning": "Prefers structure, organization, planning, decisive, closure-oriented"
      },
      {"type":"P", 
        "description": "Perceiving",
        "meaning": "Prefers flexibility, spontaneity, adaptability, open-minded, exploration-oriented"
      }
    ]
  },
  {
    "types": [
      {
        "type": "ISTJ",
        "title":"Logistican",
        "description": "ISTJ (Logistician) is a personality type with the Introverted, Observant, Thinking, and Judging traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose.",
        "traits": [
          "Practical and detail-oriented",
          "Focused on traditions and order",
          "Logical decision-makers",
          "Reserved and private"
        ],
        "strengths": [
          "Reliable and responsible",
          "Thorough and organized",
          "Loyal and committed",
          "Punctual and dependable"
        ],
        "weaknesses": [
          "Can be overly rigid",
          "May struggle with change",
          "Reserved nature may hinder social connections",
          "Tendency to focus on past experiences"
        ]
      },
      {
        "type": "ESTJ",
        "title":"Executive",
        "description": "ESTJ (Executive) is a personality type with the Extraverted, Observant, Thinking, and Judging traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity.",
        "traits": [
          "Practical and results-oriented",
          "Strong sense of responsibility",
          "Direct and assertive communication",
          "Structured and organized"
        ],
        "strengths": [
          "Excellent leadership abilities",
          "Efficient and productive",
          "Focused on goals and outcomes",
          "Reliable and dependable"
        ],
        "weaknesses": [
          "Can be too controlling",
          "May struggle with delegating tasks",
          "Intolerance for inefficiency",
          "Rigid adherence to rules"
        ]
      },
      {
        "type": "ISTP",
        "title":"Virtuoso",
        "description": "ISTP (Virtuoso) is a personality type with the Introverted, Observant, Thinking, and Prospecting traits. They tend to have an individualistic mindset, pursuing goals without needing much external connection. They engage in life with inquisitiveness and personal skill, varying their approach as needed.",
        "traits": [
          "Adaptable and resourceful",
          "Practical problem-solvers",
          "Focused on immediate realities",
          "Independent and self-reliant"
        ],
        "strengths": [
          "Hands-on approach to challenges",
          "Analytical and logical thinking",
          "Cool under pressure",
          "Quick decision-making abilities"
        ],
        "weaknesses": [
          "Risk-taking behavior",
          "Tendency to be reserved or aloof",
          "Dislike of routine or repetitive tasks",
          "Difficulty expressing emotions"
        ]
      },
      {
        "type": "ESTP",
        "title":"Entrepreneur",
        "description": "ESTP (Entrepreneur) is a personality type with the Extraverted, Observant, Thinking, and Prospecting traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits.",
        "traits": [
          "Energetic and action-oriented",
          "Thrives in fast-paced environments",
          "Practical problem-solving skills",
          "Adaptable and flexible"
        ],
        "strengths": [
          "Excellent at thinking on their feet",
          "Charismatic and persuasive",
          "Skilled at networking and connecting with others",
          "Optimistic and confident"
        ],
        "weaknesses": [
          "Impulsiveness and risk-taking behavior",
          "Short attention span for routine tasks",
          "Can be insensitive to others' feelings",
          "Difficulty with long-term planning"
        ]
      },
      {
        "type": "ISFJ",
        "title":"Defender",
        "description": "SFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives.",
        "traits": [
          "Compassionate and caring",
          "Focused on harmony and cooperation",
          "Detail-oriented and thorough",
          "Reserved and private"
        ],
        "strengths": [
          "Devoted and loyal to others",
          "Excellent listeners and advisors",
          "Supportive and nurturing",
          "Reliable and responsible"
        ],
        "weaknesses": [
          "Tendency to avoid conflict",
          "May prioritize others' needs over their own",
          "Difficulty asserting themselves",
          "Sensitive to criticism"
        ]
      },
      {
        "type": "ESFJ",
        "title":"Consul",
        "description": "ESFJ (Consul) is a personality type with the Extraverted, Observant, Feeling, and Judging traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others.",
        "traits": [
          "Warm and sociable",
          "Focused on maintaining relationships",
          "Supportive and caring",
          "Organized and structured"
        ],
        "strengths": [
          "Excellent at connecting with others",
          "Empathetic and compassionate",
          "Good at managing people and tasks",
          "Reliable and dependable"
        ],
        "weaknesses": [
          "May prioritize others' needs over their own",
          "Difficulty with criticism or conflict",
          "Tendency to be overly accommodating",
          "Can be seen as too controlling"
        ]
      },
      {
        "type": "ISFP",
        "title":"Adventurer",
        "description": "ISFP (Adventurer) is a personality type with the Introverted, Observant, Feeling, and Prospecting traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials.",
        "traits": [
          "Sensitive and caring",
          "Artistic and creative",
          "Flexible and adaptable",
          "Loyal and supportive"
        ],
        "strengths": [
          "Appreciation for beauty and aesthetics",
          "Strong value system",
          "Empathetic and understanding",
          "Ability to create harmonious environments"
        ],
        "weaknesses": [
          "May avoid conflict at all costs",
          "Tendency to be overly sensitive",
          "Difficulty with long-term planning",
          "Struggles with criticism or negative feedback"
        ]
      },
      {
        "type": "ESFP",
        "title":"Entertainer",
        "description": "ESFP (Entertainer) is a personality type with the Extraverted, Observant, Feeling, and Prospecting traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities.",
        "traits": [
          "Energetic and enthusiastic",
          "Loves being the center of attention",
          "Spontaneous and adaptable",
          "People-oriented and social"
        ],
        "strengths": [
          "Charismatic and engaging",
          "Excellent at entertaining others",
          "Optimistic and fun-loving",
          "Good at connecting with people"
        ],
        "weaknesses": [
          "Tendency to avoid conflict",
          "Can be impulsive and reckless",
          "Short attention span for routine tasks",
          "Difficulty with long-term planning"
        ]
      },
      {
        "type": "INFJ",
        "title":"Advocate",
        "description": "INFJ (Advocate) is a personality type with the Introverted, Intuitive, Feeling, and Judging traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things.",
        "traits": [
          "Insightful and visionary",
          "Idealistic and principled",
          "Empathetic and compassionate",
          "Reserved and private"
        ],
        "strengths": [
          "Deep understanding of others' emotions",
          "Strong sense of purpose and values",
          "Creative and innovative",
          "Inspires and motivates others"
        ],
        "weaknesses": [
          "May be overly sensitive to criticism",
          "Idealistic expectations may lead to disappointment",
          "Tendency to be perfectionistic",
          "Difficulty dealing with practical details"
        ]
      },
      {
        "type": "ENFJ",
        "title":"Protagonist",
        "description": "ENFJ (Protagonist) is a personality type with the Extraverted, Intuitive, Feeling, and Judging traits. These warm, forthright types love helping others, and they tend to have strong ideas and values. They back their perspective with the creative energy to achieve their goals.",
        "traits": [
          "Charismatic and inspiring",
          "Empathetic and understanding",
          "Focused on helping others",
          "Organized and structured"
        ],
        "strengths": [
          "Natural leaders and motivators",
          "Excellent at connecting with people",
          "Passionate about making a difference",
          "Supportive and nurturing"
        ],
        "weaknesses": [
          "Tendency to be overly idealistic",
          "May prioritize others' needs over their own",
          "Difficulty with criticism or conflict",
          "Can be seen as controlling"
        ]
      },
      {
        "type": "INFP",
        "title":"Mediator",
        "description": "INFP (Mediator) is a personality type with the Introverted, Intuitive, Feeling, and Prospecting traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do.",
        "traits": [
          "Idealistic and compassionate",
          "Creative and imaginative",
          "Values authenticity and individuality",
          "Sensitive and empathetic"
        ],
        "strengths": [
          "Deep understanding of others' emotions",
          "Creative problem-solving abilities",
          "Strong value system",
          "Ability to inspire and motivate"
        ],
        "weaknesses": [
          "Tendency to be overly idealistic",
          "May struggle with decision-making",
          "Sensitive to criticism or conflict",
          "Difficulty with practical details"
        ]
      },
      {
        "type": "ENFP",
        "title":"Campaigner",
        "description": "ENFP (Campaigner) is a personality type with the Extraverted, Intuitive, Feeling, and Prospecting traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions.",
        "traits": [
          "Enthusiastic and imaginative",
          "Values authenticity and creativity",
          "Easily connects with others",
          "Flexible and adaptable"
        ],
        "strengths": [
          "Charismatic and inspiring",
          "Creative problem-solving skills",
          "Passionate about causes and ideas",
          "Excellent communicators"
        ],
        "weaknesses": [
          "Tendency to be indecisive",
          "Difficulty with routine or repetitive tasks",
          "Can be overly idealistic",
          "Sensitive to criticism or conflict"
        ]
      },
      {
        "type": "INTJ",
        "title":"Architect",
        "description": "INTJ (Architect) is a personality type with the Introverted, Intuitive, Thinking, and Judging traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one.",
        "traits": [
          "Strategic and visionary",
          "Analytical and logical",
          "Independent and decisive",
          "Reserved and private"
        ],
        "strengths": [
          "Excellent problem-solving abilities",
          "Visionary and forward-thinking",
          "Strong leadership skills",
          "Focused on long-term goals"
        ],
        "weaknesses": [
          "Tendency to be perfectionistic",
          "May come across as aloof or distant",
          "Difficulty with emotional expression",
          "Can be critical of others"
        ]
      },
      {
        "type": "ENTJ",
        "title":"Commander",
        "description": "ENTJ (Commander) is a personality type with the Extraverted, Intuitive, Thinking, and Judging traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them.",
        "traits": [
          "Assertive and strategic",
          "Goal-oriented and decisive",
          "Natural leaders and organizers",
          "Confident and assertive"
        ],
        "strengths": [
          "Excellent at leading and motivating others",
          "Strategic and visionary thinking",
          "Efficient and results-oriented",
          "Skilled at problem-solving"
        ],
        "weaknesses": [
          "Can be overly critical of others",
          "Impatient with inefficiency or incompetence",
          "Tendency to overlook others' emotions",
          "May come across as too intense"
        ]
      },
      {
        "type": "INTP",
        "title":"Logician",
        "description": "INTP (Logician) is a personality type with the Introverted, Intuitive, Thinking, and Prospecting traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity.",
        "traits": [
          "Analytical and curious",
          "Innovative and inventive",
          "Independent and flexible",
          "Reserved and introspective"
        ],
        "strengths": [
          "Deep understanding of complex systems",
          "Creative problem-solving abilities",
          "Open-minded and adaptable",
          "Excellent at generating ideas"
        ],
        "weaknesses": [
          "Tendency to overthink or analyze too much",
          "Difficulty with emotional expression",
          "Can be seen as aloof or detached",
          "Struggles with routine or repetitive tasks"
        ]
      },
      {
        "type": "ENTP",
        "title":"Debater",
        "description": "ENTP (Debater) is a personality type with the Extraverted, Intuitive, Thinking, and Prospecting traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter.",
        "traits": [
          "Innovative and visionary",
          "Energetic and enthusiastic",
          "Enjoys exploring new ideas",
          "Adaptable and flexible"
        ],
        "strengths": [
          "Creative problem-solving abilities",
          "Excellent at brainstorming and generating ideas",
          "Charismatic and persuasive",
          "Natural ability to connect with others"
        ],
        "weaknesses": [
          "Tendency to be argumentative",
          "Can be overly critical of others",
          "Difficulty with routine or repetitive tasks",
          "Impulsiveness and risk-taking behavior"
        ]
      }]
  }
];

export default data;
