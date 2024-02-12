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
      { name: "React.JS", percent: 90 },
      { name: "Solid.JS", percent: 30 },
      { name: "HTML + CSS + JS", percent: 90 },
      { name: "Next.JS", percent: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.JS", percent: 90 },
      { name: "Express.JS", percent: 90 },
      { name: "AWS Lambda", percent: 90 },
      { name: "Fastify.JS", percent: 90 },
      { name: "Nest.JS", percent: 90 },
      { name: "Adonis.JS", percent: 90 },
    ],
  },
  {
    category: "CSS Frameworks",
    skills: [
      { name: "Tailwind CSS", percent: 80 },
      { name: "Bootstrap CSS", percent: 100 },
      { name: "Bulma CSS", percent: 100 },
    ],
  },
  {
    category: "Database Engines",
    skills: [
      { name: "Redis", percent: 90 },
      { name: "MongoDB", percent: 90 },
      { name: "DocumentDB", percent: 90 },
      { name: "PostgreSQL", percent: 90 },
      { name: "MySQL", percent: 90 },
      { name: "SQLite", percent: 90 },
    ],
  },
  {
    category: "ORM & Query Builders",
    skills: [
      { name: "Prisma", percent: 90 },
      { name: "Mongoose", percent: 90 },
      { name: "TypeORM", percent: 90 },
      { name: "SQLAlchemy", percent: 90 },
      { name: "Knex.JS", percent: 90 },
    ],
  },
  {
    category: "DevOPS & Management",
    skills: [
      { name: "Docker", percent: 90 },
      { name: "Kubernetes", percent: 30 },
      { name: "Slack", percent: 90 },
      { name: "JIRA", percent: 90 },
      { name: "Miro", percent: 90 },
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
      { name: "Kotlin", percent: 80 },
      { name: "React Native", percent: 90 },
      { name: "Kotlin Multi Platform", percent: 50 },
    ],
  },
];
