import { ProjectCard } from './ProjectCard';

interface Project {
  name: string;
  description: string;
  url: string;
  updatedAt: string;
}

// recibe la lista desde page.tsx
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {projects.map(p => (
        <ProjectCard
          key={p.name}
          name={p.name}
          description={p.description}
          url={p.url}
          updatedAt={p.updatedAt}
        />
      ))}
    </section>
  );
}