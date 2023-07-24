import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';
import Repository from '../Repository';

interface Respository {
    setRepositories(arg0: Respository[]): unknown;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    }
    descripition: string;
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Respository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        const response = await api.get<Respository>(`repos/${newRepo}`);

        const repository = response.data;

        setRepositories([...repositories, repository]);
    }

    return (
        <>
            <img src={logoImg} alt="Gi  thub Explorer" />
            <Title> Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => {
                        setNewRepo(e.target.value);
                    }}
                    placeholder="Digite o nome do Repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.descripition}</p>
                        </div>
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
