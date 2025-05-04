import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">Mi Portfolio</Link>
      <div className="space-x-4">
        <Link href="#projects" className="hover:underline">Proyectos</Link>
        <Link href="#contact" className="hover:underline">Contacto</Link>
      </div>
    </nav>
  );
}