interface Props {
    name: string;
    description: string;
    url: string;
    updatedAt: string;
  }
  
  export function ProjectCard({ name, description, url, updatedAt }: Props) {
    return (
      <article className="border rounded-lg p-4 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm mb-4">{description}</p>
        <p className="text-xs text-gray-500 mb-4">Última actualización: {new Date(updatedAt).toLocaleDateString()}</p>
        <a href={url} target="_blank" className="text-blue-600 hover:underline">Ver en GitHub</a>
      </article>
    );
  }