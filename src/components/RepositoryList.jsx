import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'react',
  description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
  link: 'https://github.com/facebook/react',
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}
