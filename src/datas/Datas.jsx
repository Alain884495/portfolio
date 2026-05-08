const skills = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    title: "Développement Web",
    description:
      "Création de sites web modernes et responsifs avec React, TypeScript et Tailwind CSS.",
    contactEmail: "contact@example.com",
    link: "https://example.com",
    linkText: "Voir mes projets",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    title: "Design UI/UX",
    description:
      "Conception d'interfaces utilisateur intuitives et esthétiques pour applications web et mobile.",
    contactEmail: "design@example.com",
    link: "https://example.com/design",
    linkText: "Portfolio design",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    title: "Data Analytics",
    description:
      "Analyse et visualisation de données pour des insights business stratégiques.",
    contactEmail: "data@example.com",
    link: "https://example.com/analytics",
  },
];

const languagesFrontend = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 5,
    years: 5,
    description:
      "Expert en JavaScript moderne (ES6+), async/await, et manipulation du DOM.",
    color: "bg-yellow-400",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 4,
    years: 3,
    description:
      "Maîtrise avancée du typage statique et des interfaces TypeScript.",
    color: "bg-blue-600",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 5,
    years: 4,
    description:
      "Expert en React, hooks, context API et optimisation de performances.",
    color: "bg-cyan-500",
  },
];

const languagesBackend = [
  {
    name: "Java (JEE)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: 4,
    years: 4,
    description:
      "Développement d'applications enterprise avec Spring Boot et Jakarta EE.",
    color: "bg-orange-600",
  },
  {
    name: "Python (Django)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 4,
    years: 4,
    description:
      "Développement backend, data science et automatisation avec Python.",
    color: "bg-blue-500",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 4,
    years: 3,
    description: "Création d'APIs REST et GraphQL avec Express et NestJS.",
    color: "bg-green-600",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: 3,
    years: 3,
    description:
      "Gestion de bases de données relationnelles et requêtes optimisées.",
    color: "bg-indigo-600",
  },
];

const toolsmodelModelisation = [
  {
    name: "UML",
    icon: "",
    level: 4,
    years: 3,
    description: "Modélisation UML pour la conception de systèmes.",
    color: "bg-blue-500",
  },
  {
    name: "MERISE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 4,
    years: 3,
    description: "Diagrammes Mermaid pour la documentation technique.",
    color: "bg-green-600",
  },
];

const toolsmodelOrganisation = [
  {
    name: "AGILE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    level: 4,
    years: 3,
    description: "Gestion de version et collaboration avec Git.",
    color: "bg-orange-600",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: 4,
    years: 3,
    description: "Gestion de projet et collaboration avec GitHub.",
    color: "bg-gray-600",
  },
];

const academicData = [
  {
    year: "2011",
    title: "Baccalauréat",
    institution: "Lycée Mixte Antsiranana",
    description: "Diplôme de fin d'études secondaires",
  },
  {
    year: "2015",
    title: "Licence",
    institution: "École Supérieure Polytechnique d'Antsiranana",
    description: "Licence en Géniee Électrique",
  },
  {
    year: "2019",
    title: "Ingénieur",
    institution: "École Supérieure Polytechnique d'Antsiranana",
    description: "Ingénieur en Télécommunications et Réseaux",
  },
];

const experiences = [
  {
    id: 1,
    icon: "💻",
    title: "Développeur Full Stack",
    years: "2021 – 2024",
    company: "TechCorp Paris",
    description:
      "Développement d'applications web avec React, Node.js et PostgreSQL. Architecture microservices et CI/CD.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Lead Frontend",
    years: "2019 – 2021",
    company: "StartupIO",
    description:
      "Direction d'une équipe de 4 développeurs frontend. Migration vers React et mise en place d'un design system.",
  },
  {
    id: 3,
    icon: "🛰️",
    title: "Ingénieur Backend",
    years: "2017 – 2019",
    company: "DataSystems",
    description:
      "APIs REST et GraphQL, optimisation de bases de données, déploiement sur AWS avec Terraform.",
  },
  {
    id: 4,
    icon: "📱",
    title: "Dev Mobile",
    years: "2015 – 2017",
    company: "AppStudio",
    description:
      "Applications iOS et Android avec React Native. Publication sur les stores et suivi des métriques utilisateur.",
  },
  {
    id: 5,
    icon: "📊",
    title: "Analyste Data",
    years: "2013 – 2015",
    company: "Insights Co.",
    description:
      "Analyse de données et tableaux de bord BI avec Python, SQL et Power BI.",
  },
];

export {
  skills,
  languagesFrontend,
  languagesBackend,
  toolsmodelModelisation,
  toolsmodelOrganisation,
  academicData,
  experiences,
};
