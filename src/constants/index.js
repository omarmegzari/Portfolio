import {
  accenture, az, azdataeng, azdatafund, azfund,
  bobst, caa,
  cosmos,
  csharp,
  dbs, dbsdataeng, dbsdataengpro, dbsmleng, dbsmlengpro, dbsspark, decathlon, delta, digio, docker,
  dremio,
  exakis, fastapi,
  forum,
  gexpectations,
  hadoop,
  hive,
  java,
  k8s,
  mlflow,
  netcore, nginx,
  postgres,
  pyspark,
  python,
  C,
  s3,
  scala,
  spark,
  spring,
  linuxlogo,
  linuxcertif,
  lakehousefundamentals,
  ll
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "ETL Pipeline in Python",
    company_name: "Python",
    icon: ll,
    iconBg: "#FFFFFD",
    date: "-2024- Started",
    points: [
      "Developed an ETL pipeline using Python and Pandas to import data from a MySQL database, calculate statistics on the most commonly used names, and export the results in CSV format.",
    ],
    tech: []
  },
  {
    title: "Data Cleaning and Visualization in Python",
    company_name: "Python",
    icon: ll,
    iconBg: "#046C53",
    date: "March -2023-",
    points: [
      "Creation of a data cleaning and data visualization program in Python using pandas and Matplotlib.",
    ],
    tech: [
      
    ]
  },

  {
    title: "Development of a website in agile",
    company_name: "Intro to web development",
    icon: ll,
    iconBg: "#FFFFFF",
    date: "January -2023-",
    points: [
      "Sportify is a website facilitating the search and booking of football fields As the lead developer, I designed the user interface using HTML, CSS, and JavaScript.I managed the project using Scrum methodologies (weekly sprints) and Kanban (task management board).Git/GitHub was used for version tracking and collaboration.This project allowed me to acquire skills in web development and Agile management.",
    ],
    tech: [
      
    ]
  },
  {
    title: "Chess Game Project (1vs1 and 1vsAI) in C++",
    company_name: "C++",
    icon: ll,
    iconBg: "#003B59",
    date: "-2022-",
    points: [
      "Developed a simple chess game with player-vs-player and AI modes, implementing basic rules and a minimax-based AI. Improved my skills in C++ and object-oriented programming.",
    ],
    tech: [
      
    ]
  },
];

const certGroups = [
  {
    groupName: "Linux",
    groupLogo: linuxlogo,
    certs: [
      {
        name: "Cisco NDG linux essentials",
        badge: linuxcertif,
        url: ""
      },
    ]
  },
  {
    groupName: "Databricks",
    groupLogo: dbs,
    certs: [
      {
        name: "Databricks Lakehouse Fundamentals",
        badge: lakehousefundamentals,
        url: "https://credentials.databricks.com/51b8695a-f8f2-4a0c-aef3-0bb2b8da6937#acc.kmaeHtgU"
      },
    ]
  }
]

const skills = [
  {
    skillName: "",
    skillDescriptionItems: [
      "Algorithms and Data Structures, SQL Databases, MySQL, phpMyAdmin, PostgreSQL",
      "Libraries: Pandas, Matplotlib, NumPy",
      "Advanced Programming: Python, C, C++, C#, JAVA",
      "Probability & Statistics",
      "Linear Algebra",
    ],
    tech: [
      {
        name: "java",
        logo: java
      },
      {
        name: "python",
        logo: python
      },
      {
        name: "Databricks",
        logo: dbs
      },
      {
        name: "delta",
        logo: delta
      },
      {
        name: "postgres",
        logo: postgres
      },
    ]
  },
  {
    skillName: "",
    skillDescriptionItems: [
    "Data Analysis and BI",
    "Operations Research",
    "Numerical Analysis",
    "Linux System Administration",
    "Agile Project Management (Scrum, Kanban)",
    "Tools: Visual Studio, Visual Studio Code, Git, Jupyter Notebooks",
    ],
    tech: [
      {
        name: "java",
        logo: java,
      },
      {
        name: "python",
        logo: python
      },
      {
        name: "csharp",
        logo: csharp
      },
      {
        name: "postgres",
        logo: postgres
      },
      {
        name: "C",
        logo: C
      },
      
    ]
  }
]

export { experiences, certGroups, skills };

