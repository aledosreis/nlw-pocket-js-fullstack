# in.Orbit

# Next Level Week

A **Next Level Week** é um evento gratuito de programação na prática da Rocketseat, com o objetivo de desenvolver um projeto completo em uma semana, aprendendo novas tecnologias, desenvolvendo novas habilidades e evoluindo para o próximo nível como desenvolvedor.

## O projeto

**in.Orbit** é uma aplicação para gerenciamento de metas, e é o projeto desenvolvido durante a edição do evento conhecida como **NLW Pocket Javascript**.

![thumbnail](./.github/thumbnail.png)

## Funcionalidades

A aplicação desenvolvida contém as seguintes funcionalidades:

- Listar metas cadastradas
- Listar resumo de metas concluídas na semana atual
- Concluir uma meta
- Cadastrar uma nova meta

## Tecnologias

O presente projeto foi desenvolvido na trilha intermediária do evento, utilizando tecnologias como:

- NodeJS
- Fastify
- Zod
- Docker
- Postgresql
- Drizzle ORM
- ReactJS
- React Query
- React Hook Form
- Entre outras...

## Executando o projeto

Este projeto depende do Docker para configurar um banco de dados. Com o Docker instalado, clone o projeto, instale as dependências, configure os conteineres Docker e rode a aplicação.

> Você precisa criar um arquivo .env para configurar a variável de ambiente `DATABASE_URL`.

Crie um arquivo `.env` em `/server` com a url de conexão do seu banco de dados Postresql

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/inorbit"
```

Com o arquivo configurado, execute os comandos:

```bash
cd server/
npm i
docker compose up -d
npm run drizzle:migrate
npm run seed
npm run dev
```

> IMPORTANTE: O comando `npm run seed` insere alguns dados de exemplo no banco de dados, caso deseje iniciar a aplicação sem os dados de exemplo iniciais, basta pular o comando.
