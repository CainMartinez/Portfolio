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
  
  interface QueryResponse {
    user: {
      pinnedItems: {
        nodes: Array<{
          name: string;
          description: string;
          url: string;
          updatedAt: string;
        }>;
      };
    };
  }
  
  const { user } = await client.request<QueryResponse>(query, {
    login: process.env.GITHUB_USER,
  });
  return user.pinnedItems.nodes.map((r: any) => ({
    name: r.name,
    description: r.description,
    url: r.url,
    updatedAt: r.updatedAt,
  }));
}