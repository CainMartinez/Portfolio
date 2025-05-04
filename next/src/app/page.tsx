// src/app/page.tsx
import { Navbar } from './components/Navbar';
import { ProjectGrid } from './components/ProjectGrid';
import { Footer } from './components/Footer';
import { fetchPinnedProjects } from '../lib/github';

export default async function HomePage() {
  const projects = await fetchPinnedProjects();
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto my-12">
        <h1 className="text-5xl font-bold text-center">¡Hola, soy Cain!</h1>
        <ProjectGrid projects={projects} />
      </main>
      <Footer />
    </>
  );
}