use `Hopper-4314062-madson-pereira`;

SET SQL_SAFE_UPDATES = 0;

create table labenu_system_turma(
	id varchar(255) primary key,
    nome varchar(255) not null,
    modulo varchar(255) not null default "0"
);

create table labenu_system_estudante (
	id varchar(255) primary key,
    nome varchar(255) not null,
    email varchar(255)not null unique,
    data_nasc date not null,
    turma_id varchar(255) not null,
    foreign key (turma_id) references labenu_system_turma(id)
);

create table labenu_system_hobby(
	id varchar(255) primary key,
    nome varchar(255) not null unique
);

create table labenu_system_estudante_hobby(
	id varchar(255) primary key,
    estudante_id varchar(255) not null,
    hobby_id varchar(255) not null,
    foreign key (estudante_id) references labenu_system_estudante(id),
    foreign key (hobby_id) references labenu_system_hobby(id)
);

create table labenu_system_docente (
	id varchar(255) primary key,
    nome varchar(255) not null,
    email varchar(255)not null unique,
    data_nasc date not null,
    turma_id varchar(255) not null,
    foreign key (turma_id) references labenu_system_turma(id)
);

create table labenu_system_especialidade(
	id varchar(255) primary key,
    nome varchar(255) not null unique
);

create table labenu_system_docente_especialidade(
	id varchar(255) primary key,
    docente_id varchar(255) not null,
    especialidade_id varchar(255) not null,
    foreign key (docente_id) references labenu_system_docente(id),
    foreign key (especialidade_id) references labenu_system_especialidade(id)
);