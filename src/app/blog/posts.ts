export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "unlock-unprecedented-efficiency",
    title: "Unlock Unprecedented Efficiency with Autonomous AI Agents",
    excerpt: "Discover how AURORA9 is revolutionizing digital operations with fully autonomous AI agents.",
    content: [
      "In today's fast-paced business environment, the need for automation has never been more critical. AURORA9 introduces a paradigm shift with its autonomous AI agent workforce, designed to streamline operations, reduce overhead, and drive unprecedented productivity.",
      "Whether you're managing customer service, marketing campaigns, or data analytics, our agents are trained to think, learn, and act independently — allowing your human workforce to focus on innovation and strategy.",
      "Join the future of intelligent automation. Deploy AURORA9 agents and unlock a smarter, more efficient digital workforce."
    ]
  }
];
