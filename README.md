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

**OBS1:** Tabela simples não utiliza relação com outras tabelas.

**OBS2: ** Passar pro sequelize o nome do modelo e os atributos com os tipos de dados (todas as colunas e tipo de dados dessas colunas), criara o modelo e as migrations.

- `$ npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string`

#### Aula 02 - Atividade 07 - Rodando Migrações

- `$ npx sequelize-cli db:migrate`

**OBS: ** Entrar na database escola_ingles no terminal mysql

- `$ use escola_ingles;`
- `$ show tables;`
- `$ describe Pessoas;`

#### Aula 02 - Atividade 08 - Populando o banco de dados

**Criar pessoa no banco**
1 - `$ use escola_ingles;`

2 - `$ insert into Pessoas (nome,ativo,email,role,createdAt,updatedAt) values ("Carlas Gomes",1,"carla@gmail.com","estudante",NOW(),NOW());`

3 - `$ select * from Pessoas;`

**Criar pessoa no banco - Usar o seeders direto do sequelize**

- `$ npx sequelize-cli seed:generate --name demo-pessoa`

_Conectar sequelize com banco por seed_

- `$ npx sequelize-cli db:seed:all`

#### Aula 03 - Atividade 03 - Criando o CONTROLLER

1 - Criar controller (todo controller precisa de uma rota).

**CRUD**

- (C = CRIA NOVOS REGISTROS)
- (R = LER OS REGISTROS)
- (U = ATUALIZA OS RECURSOS)
- (D = DELETA RECURSOS)

#### Aula 03 - Atividade 05 - Organizando Rotas

1 - Criar controller (todo controller precisa de uma rota).
2 - Criar Rotas.

#### Aula 03 - Atividade 07 - Definindo primeira rota.

1 - Criar controller (todo controller precisa de uma rota).
2 - Criar Rotas.
3 - Organizando e definindo a primeira rota.

#### Aula 04 - Atividade 02 - Métodos CRUD.

- PASSO A PASSO

* criar controller método.
* adicionar ou avisar em uma rota já existente que apareceu uma nova rota.
* testar no postman a rota com parâmetro.

#### Aula 05 - Atividade 02 - Criando mais tabelas

**OBS:** sempre criar primeiro tabelas que não possuem chave estrangeiras, apenas chave primaria.

1. Cria novo modelo e migração Niveis.

`$ npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string`

2. Criar tabela Turmas

`$ npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly`

3. Criar tabela Matriculas

`$ npx sequelize-cli model:create --name Turmas --attributes status:string`
