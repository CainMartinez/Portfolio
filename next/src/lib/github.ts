// src/lib/github.ts
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` },
});

export interface Project {
  name: string;
  description: string;
  url: string;
  updatedAt: string;
}

interface QueryResponse {
  user: {
    pinnedItems: {
      nodes: Array<{
        name: string;
        description: string | null;
        url: string;
        updatedAt: string;
      }>;
    };
  };
}

export async function fetchPinnedProjects(): Promise<Project[]> {
  const query = gql`
    query($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              name
              description
              url
              updatedAt
            }
          }
        }
      }
    }
  `;

  // El "!" fuerza a TS a tratar esto como string no-null. 
  const { user } = await client.request<QueryResponse>(query, {
    login: process.env.GITHUB_USER!,
  });

  return user.pinnedItems.nodes.map(node => ({
    name:        node.name,
    // Si description puede ser null, cámbialo a cadena vacía
    description: node.description ?? '',
    url:         node.url,
    updatedAt:   node.updatedAt,
  }));
}