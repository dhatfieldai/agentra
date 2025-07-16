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
      "You'll work on building and scaling AI models and training pipelines.",
      "Collaborate with product and engineering teams to deploy production-ready models.",
      "Develop cutting-edge machine learning algorithms for e-commerce automation.",
      "Optimize model performance and ensure scalability across multiple platforms."
    ]
  },
  {
    slug: "senior-full-stack-developer",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    shortDescription: "Build scalable web applications and APIs for our AI platform.",
    description: [
      "Develop and maintain our Next.js/React frontend and Node.js backend systems.",
      "Design and implement RESTful APIs and GraphQL endpoints.",
      "Work closely with AI/ML engineers to integrate machine learning models.",
      "Ensure high performance, security, and scalability of our platform.",
      "Collaborate with product designers to create exceptional user experiences."
    ]
  },
  {
    slug: "product-manager",
    title: "Product Manager - AI Automation",
    department: "Product",
    shortDescription: "Lead product strategy for our autonomous AI workforce solutions.",
    description: [
      "Define and execute product roadmap for AI-driven e-commerce automation tools.",
      "Conduct market research and analyze customer needs in the automation space.",
      "Work cross-functionally with engineering, design, and sales teams.",
      "Manage product launches and go-to-market strategies.",
      "Drive user adoption and engagement through data-driven product decisions."
    ]
  },
  {
    slug: "data-scientist",
    title: "Senior Data Scientist",
    department: "Data Science",
    shortDescription: "Extract insights from e-commerce data to improve AI agent performance.",
    description: [
      "Analyze large datasets to identify patterns and optimization opportunities.",
      "Develop predictive models for inventory management and pricing strategies.",
      "Create data pipelines and automated reporting systems.",
      "Collaborate with AI/ML engineers to improve model accuracy and performance.",
      "Present findings and recommendations to stakeholders and executive team."
    ]
  },
  {
    slug: "devops-engineer",
    title: "DevOps/Cloud Engineer",
    department: "Engineering",
    shortDescription: "Manage cloud infrastructure and deployment pipelines for AI workloads.",
    description: [
      "Design and maintain scalable cloud infrastructure on AWS/Azure/GCP.",
      "Implement CI/CD pipelines for rapid deployment of AI models and applications.",
      "Monitor system performance and ensure 99.9% uptime for our AI agents.",
      "Manage containerized applications using Docker and Kubernetes.",
      "Implement security best practices and compliance standards."
    ]
  },
  {
    slug: "sales-executive",
    title: "Enterprise Sales Executive",
    department: "Sales",
    shortDescription: "Drive revenue growth by selling AI automation solutions to enterprise clients.",
    description: [
      "Identify and pursue new enterprise customers in the e-commerce space.",
      "Conduct product demonstrations and technical presentations.",
      "Manage the full sales cycle from lead generation to contract closure.",
      "Collaborate with customer success team to ensure smooth onboarding.",
      "Meet and exceed quarterly and annual sales targets."
    ]
  },
  {
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    department: "Customer Success",
    shortDescription: "Ensure customer satisfaction and drive adoption of our AI solutions.",
    description: [
      "Onboard new customers and guide them through initial AI agent deployment.",
      "Provide ongoing support and training to maximize customer value.",
      "Monitor customer health metrics and proactively address issues.",
      "Gather customer feedback and work with product team on improvements.",
      "Drive customer expansion and renewal opportunities."
    ]
  },
  {
    slug: "ui-ux-designer",
    title: "Senior UI/UX Designer",
    department: "Design",
    shortDescription: "Design intuitive interfaces for our AI automation platform.",
    description: [
      "Create user-centered designs for our web and mobile applications.",
      "Conduct user research and usability testing to inform design decisions.",
      "Develop design systems and maintain brand consistency across products.",
      "Collaborate with product managers and engineers to implement designs.",
      "Design dashboard interfaces for monitoring AI agent performance."
    ]
  },
  {
    slug: "marketing-manager",
    title: "Digital Marketing Manager",
    department: "Marketing",
    shortDescription: "Lead digital marketing initiatives to drive brand awareness and lead generation.",
    description: [
      "Develop and execute comprehensive digital marketing strategies.",
      "Manage content marketing, SEO, SEM, and social media campaigns.",
      "Create compelling content that showcases our AI automation capabilities.",
      "Track and analyze marketing performance metrics and ROI.",
      "Collaborate with sales team to generate qualified leads."
    ]
  },
  {
    slug: "business-development",
    title: "Business Development Representative",
    department: "Sales",
    shortDescription: "Generate and qualify leads for our enterprise sales team.",
    description: [
      "Identify and research potential customers in target markets.",
      "Conduct outbound prospecting via email, phone, and social media.",
      "Qualify leads and set up meetings for the sales team.",
      "Maintain accurate records in CRM system.",
      "Collaborate with marketing team on lead generation campaigns."
    ]
  }
];
