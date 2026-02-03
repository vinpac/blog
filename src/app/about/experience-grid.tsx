type Experience = {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  highlights: string[];
  badge?: string;
};

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Gumloop",
    companyUrl: "https://gumloop.com",
    location: "Remote",
    period: "Feb 2025 — Nov 2025",
    badge: "YC",
    highlights: [
      "Built and shipped core third-party integrations (Google Drive, Google Calendar, Google Slides, Canva, AWS, Gmail, + more) for an AI-native automation platform",
      "Delivered integrations used by enterprise customers including Shopify, Ramp, and Instacart",
      "Worked across React, TypeScript, and Python backend APIs in a high-scale automation environment",
      "Collaborated with product and customers to unblock integrations critical for enterprise onboarding",
    ],
  },
  {
    title: "Founder / CEO",
    company: "Utiliza AI",
    companyUrl: "https://utiliza.ai",
    location: "Remote",
    period: "Jul 2024 — Feb 2025",
    highlights: [
      "Founded AI-native SaaS automating sales workflows and meeting-driven proposal creation",
      "Designed LLM orchestration, embeddings, vector search, and real-time integrations",
      "Served ~20 companies in early adoption, securing initial paying customer at ~R$3,000/month",
      "Automated multiple sales processes per week, enabling faster proposal generation",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Perch Insights",
    companyUrl: "https://perchinsights.com",
    location: "Remote (USA)",
    period: "Jun 2022 — Jun 2024",
    highlights: [
      "Introduced LLM-based data analysis workflows shortly after ChatGPT API launch, replacing manual research",
      "Reduced analysis workflows from ~3 hours to ~5 minutes for ~20 enterprise users",
      "Defined core technical architecture and engineering standards as de facto technical lead",
      "Influenced product roadmap through architectural decisions and code reviews",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Lick",
    location: "Remote",
    period: "Apr 2021 — May 2022",
    badge: "Toptal",
    highlights: [
      "Built and scaled marketplace frontend using React, Next.js, and Styled Components",
      "Improved UI performance, reliability, and developer workflows",
      "Regularly reviewed pull requests and helped unblock complex technical decisions",
    ],
  },
  {
    title: "CTO / Full Stack Engineer",
    company: "Atados",
    companyUrl: "https://atados.com.br",
    location: "São Paulo, Brazil",
    period: "Aug 2016 — Oct 2020",
    highlights: [
      "Led team of up to 6 engineers, owning technical strategy, architecture, and roadmap",
      "Scaled platform from single website to SaaS serving 50+ enterprise clients and ~100,000 users",
      "Built donation platform during COVID that raised BRL 300k in one week",
      "Mentored engineers and drove architectural decisions through code reviews",
    ],
  },
  {
    title: "Curious Young Engineer",
    company: "Early Background",
    location: "Petrópolis, Brazil",
    period: "2014",
    highlights: [
      "Built games and school management systems used by 4 schools",
      "Won regional robotics competitions",
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="group print:break-inside-avoid-page relative p-7 border-b dark:border-gray-800 after:content-[''] after:block after:w-px after:top-0 after:-left-px after:absolute after:h-full after:bg-gray-200 dark:after:bg-gray-800 bg-white dark:bg-gray-900/50 transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold !mt-0 text-gray-900 dark:text-gray-100 text-sm leading-tight">
            {experience.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline no-underline font-medium text-sm"
              >
                @ {experience.company}
              </a>
            ) : (
              <span className="text-orange-600 dark:text-orange-400 font-medium text-sm">
                @ {experience.company}
              </span>
            )}
            {experience.badge && (
              <span className="px-1 text-[10px] font-semibold uppercase tracking-wide bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">
                {experience.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="font-mono tracking-tighter flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
        <span className="">{experience.period}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
        <span>{experience.location}</span>
      </div>

      {/* Highlights */}
      <ul className="space-y-1.5 pl-0 -ml-[1.15rem] !mb-0">
        {experience.highlights.map((highlight, index) => (
          <li
            key={index}
            className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2"
          >
            <span className="text-orange-400 dark:text-orange-500 mt-1 flex-shrink-0">
              ▪
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ExperienceGrid = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold  text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
        <span className="w-8 h-0.5 bg-orange-400" />
        Experience
      </h2>
      <div className="h-4 relative  dark:after:bg-gray-800 dark:before:bg-gray-800 border-gray-200 dark:border-gray-900 -mt-4 after:content-[''] after:block after:h-px after:absolute after:-bottom-px after:w-4 after:-left-4 after:bg-gray-200 before:content-[''] before:block before:h-px before:absolute before:-bottom-px before:w-4 before:-right-4 before:bg-gray-200"></div>
      <div className="grid grid-cols-1  border-t md:grid-cols-2 print:grid-cols-2 border-gray-200 dark:border-gray-900">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
      <div className="h-4 relative dark:after:bg-gray-800 dark:before:bg-gray-800 border-gray-200 dark:border-gray-900 after:content-[''] after:block after:h-px after:absolute after:-top-px after:w-4 after:-left-4 after:bg-gray-200 before:content-[''] before:block before:h-px before:absolute before:-top-px before:w-4 before:-right-4 before:bg-gray-200"></div>
    </section>
  );
};
