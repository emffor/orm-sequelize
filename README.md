### Aula 01 - Atividade 09

**Entrar Terminal Mysql e criar banco**

=> sudo mysql -u root -p

**Mostrar tabelas**

=> show databases;

**Create database**

=> create database nome_do_banco;

### Aula 02 - Atividade 02 - Criando Modelos

- Tabela simples não utiliza relação com outras tabelas.

1. Passar pro sequelize o nome do modelo e os atributos com os tipos de dados (todas as colunas e tipo de dados dessas colunas), criara o modelo e as migrations.

=> npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
