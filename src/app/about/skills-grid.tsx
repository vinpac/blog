type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    name: "AI / ML",
    skills: [
      "LLM Orchestration",
      "Vector Search",
      "Embeddings",
      "RAG Pipelines",
      "OpenAI API",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "REST",
      "GraphQL",
      "Webhooks",
      "Socket.io",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Redis", "Pinecone", "Convex"],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS",
      "Github Actions",
      "Vercel",
      "Docker",
      "CI/CD",
      "Serverless",
    ],
  },
];

const SkillCategoryCard = ({ category }: { category: SkillCategory }) => {
  return (
    <div className="group print:break-inside-avoid-page relative p-5 border-b dark:border-gray-800 after:content-[''] after:block after:w-px after:top-0 after:-left-px after:absolute after:h-full after:bg-gray-200 dark:after:bg-gray-800 bg-white dark:bg-gray-900/50">
      <h3 className="font-semibold !mt-0 text-gray-900 dark:text-gray-100 text-sm mb-3">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const SkillsGrid = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
        <span className="w-8 h-0.5 bg-orange-400" />
        Skills
      </h2>
      <div className="h-4 relative border-gray-200 dark:border-gray-800 dark:after:bg-gray-800 dark:before:bg-gray-800 -mt-4 after:content-[''] after:block after:h-px after:absolute after:-bottom-px after:w-4 after:-left-4 after:bg-gray-200 before:content-[''] before:block before:h-px before:absolute before:-bottom-px before:w-4 before:-right-4 before:bg-gray-200"></div>
      <div className="grid grid-cols-1 border-t md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 border-gray-200 dark:border-gray-800">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={index} category={category} />
        ))}
      </div>
      <div className="h-4 relative border-gray-200 dark:border-gray-800 dark:after:bg-gray-800 dark:before:bg-gray-800 after:content-[''] after:block after:h-px after:absolute after:-top-px after:w-4 after:-left-4 after:bg-gray-200 before:content-[''] before:block before:h-px before:absolute before:-top-px before:w-4 before:-right-4 before:bg-gray-200"></div>
    </section>
  );
};
