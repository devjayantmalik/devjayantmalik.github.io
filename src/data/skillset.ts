interface ISkill {
  name: string;
  percent: number;
}

interface ISkillset {
  category: string;
  skills: ISkill[];
}

export const skillset: ISkillset[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.JS", percent: 80 },
      { name: "Solid.JS", percent: 45 },
      { name: "HTML + CSS + JS", percent: 68 },
      { name: "Next.JS", percent: 100 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.JS", percent: 86 },
      { name: "Express.JS", percent: 100 },
      { name: "AWS Lambda", percent: 68 },
      { name: "Fastify.JS", percent: 75 },
      { name: "Nest.JS", percent: 82 },
      { name: "Adonis.JS", percent: 58 },
    ],
  },
  {
    category: "CSS Frameworks",
    skills: [
      { name: "Tailwind CSS", percent: 90 },
      { name: "Bootstrap CSS", percent: 74 },
      { name: "Bulma CSS", percent: 57 },
    ],
  },
  {
    category: "Database Engines",
    skills: [
      { name: "Redis", percent: 90 },
      { name: "MongoDB", percent: 100 },
      { name: "DocumentDB", percent: 70 },
      { name: "PostgreSQL", percent: 75 },
      { name: "MySQL", percent: 85 },
      { name: "SQLite", percent: 67 },
    ],
  },
  {
    category: "ORM & Query Builders",
    skills: [
      { name: "Prisma", percent: 90 },
      { name: "Mongoose", percent: 65 },
      { name: "TypeORM", percent: 80 },
      { name: "SQLAlchemy", percent: 56 },
      { name: "Knex.JS", percent: 65 },
    ],
  },
  {
    category: "DevOPS & Management",
    skills: [
      { name: "Docker", percent: 90 },
      { name: "Kubernetes", percent: 30 },
      { name: "Slack", percent: 85 },
      { name: "JIRA", percent: 70 },
      { name: "Miro", percent: 80 },
    ],
  },
  {
    category: "Cloud Providers",
    skills: [
      { name: "AWS", percent: 50 },
      { name: "Digital Ocean", percent: 100 },
      { name: "Google Cloud", percent: 20 },
    ],
  },
  {
    category: "Android & IOS",
    skills: [
      { name: "Jetpack Compose", percent: 80 },
      { name: "Kotlin", percent: 75 },
      { name: "React Native", percent: 60 },
      { name: "Kotlin Multi Platform", percent: 70 },
    ],
  },
];
