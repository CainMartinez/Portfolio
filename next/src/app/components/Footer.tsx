import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} Cain. Todos los derechos reservados.
        </p>
        <div className="flex space-x-4">
          <Link href="https://github.com/tu-usuario" target="_blank" className="hover:text-white text-sm">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/tu-usuario" target="_blank" className="hover:text-white text-sm">
            LinkedIn
          </Link>
          <Link href="/rss.xml" className="hover:text-white text-sm">
            RSS
          </Link>
        </div>
      </div>
    </footer>
  );
}