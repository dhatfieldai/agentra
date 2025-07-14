// ✅ src/app/careers/jobs.ts

export type Job = {
  slug: string;
  title: string;
  department: string;
  shortDescription: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Software Engineer",
    department: "Engineering",
    shortDescription: "Design and build advanced AI systems.",
    description: [
      "You’ll work on building and scaling AI models and training pipelines.",
      "Collaborate with product and engineering teams to deploy production-ready models.",
    ],
  },
  // Add other jobs here...
];
