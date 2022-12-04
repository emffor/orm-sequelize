#### Sequelize

- 1 - criar modelo e os atributos com tipos e os dados
- 2 - passar as migrations para o banco.

#### Aula 01 - Atividade 09

**Entrar Terminal Mysql e criar banco**

`$ sudo mysql -u root -p`

**Mostrar tabelas**

`$ show databases;`

**Create database**

`$ create database nome_do_banco;`

#### Aula 02 - Atividade 02 - Criando Modelos

- Tabela simples não utiliza relação com outras tabelas.

1. Passar pro sequelize o nome do modelo e os atributos com os tipos de dados (todas as colunas e tipo de dados dessas colunas), criara o modelo e as migrations.

`$ npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string`

#### Aula 02 - Atividade 07 - Rodando Migrações

`$ npx sequelize-cli db:migrate`

- entrar na database escola_ingles no terminal mysql

- `$ use escola_ingles;`
- `$ show tables;`
- `$ describe Pessoas;`

## Aula 02 - Atividade 08 - Populando o banco de dados

**Criar pessoa no banco**
1 - `$ use escola_ingles;`
2 - `$ insert into Pessoas (nome,ativo,email,role,createdAt,updatedAt) values ("Carlas Gomes",1,"carla@gmail.com","estudante",NOW(),NOW());`
3 - `$ select * from Pessoas;`

**Criar pessoa no banco - Usar o seeders direto do sequelize**
`$ npx sequelize-cli seed:generate --name demo-pessoa`

_Conectar sequelize com banco por seed_
`$ npx sequelize-cli db:seed:all`
