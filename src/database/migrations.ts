import connection from "./connection"
import { turmas, estudantes, docentes, docentes_especialidades, estudantes_hobbies, especialidades, hobbies } from "./data"
import { TABLE_DOCENTE, TABLE_DOCENTE_ESPECIALIDADE, TABLE_ESPECIALIDADE, TABLE_ESTUDANTE, TABLE_ESTUDANTE_HOBBY, TABLE_HOBBY, TABLE_TURMA } from "./tabelas"

const createTables = async () => {
    await connection.raw(`
    DROP TABLE IF EXISTS ${TABLE_DOCENTE}, ${TABLE_ESPECIALIDADE}, ${TABLE_DOCENTE_ESPECIALIDADE}, ${TABLE_ESTUDANTE}, ${TABLE_HOBBY}, ${TABLE_ESTUDANTE_HOBBY}, ${TABLE_TURMA};
    create table if not exists ${TABLE_TURMA} (
        id varchar(255) primary key,
        nome varchar(255) not null,
        modulo varchar(255) not null default "0"
    );
    
    create table if not exists ${TABLE_ESTUDANTE} (
        id varchar(255) primary key,
        nome varchar(255) not null,
        email varchar(255)not null unique,
        data_nasc date not null,
        turma_id varchar(255) not null,
        foreign key (turma_id) references ${TABLE_TURMA}(id)
    );
    
    create table if not exists ${TABLE_HOBBY} (
        id varchar(255) primary key,
        nome varchar(255) not null unique
    );
    
    create table if not exists ${TABLE_ESTUDANTE_HOBBY} (
        id varchar(255) primary key,
        estudante_id varchar(255) not null,
        hobby_id varchar(255) not null,
        foreign key (estudante_id) references ${TABLE_ESTUDANTE}(id),
        foreign key (hobby_id) references ${TABLE_HOBBY}(id)
    );
    
    create table if not exists ${TABLE_DOCENTE} (
        id varchar(255) primary key,
        nome varchar(255) not null,
        email varchar(255)not null unique,
        data_nasc date not null,
        turma_id varchar(255) not null,
        foreign key (turma_id) references ${TABLE_TURMA}(id)
    );
    
    create table if not exists ${TABLE_ESPECIALIDADE} (
        id varchar(255) primary key,
        nome varchar(255) not null unique
    );
    
    create table if not exists ${TABLE_DOCENTE_ESPECIALIDADE} (
        id varchar(255) primary key,
        docente_id varchar(255) not null,
        especialidade_id varchar(255) not null,
        foreign key (docente_id) references ${TABLE_DOCENTE}(id),
        foreign key (especialidade_id) references ${TABLE_ESPECIALIDADE}(id)
    );

    `)
    .then(() => {
        console.log(`Tables created successfully!`)
        insertData()
    })
    .catch((error: any) => printError(error))
}

const insertData = async () => {
    try {
        await connection(TABLE_TURMA)
            .insert(turmas)
            .then(() => console.log(`${TABLE_TURMA} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_DOCENTE)
            .insert(docentes)
            .then(() => console.log(`${TABLE_DOCENTE} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_ESTUDANTE)
            .insert(estudantes)
            .then(() => console.log(`${TABLE_ESTUDANTE} populated!`))
            .catch((error: any) => printError(error))
        
        await connection(TABLE_DOCENTE_ESPECIALIDADE)
            .insert(docentes_especialidades)
            .then(() => console.log(`${TABLE_DOCENTE_ESPECIALIDADE} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_ESPECIALIDADE)
            .insert(especialidades)
            .then(() => console.log(`${TABLE_ESTUDANTE} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_ESTUDANTE_HOBBY)
            .insert(estudantes_hobbies)
            .then(() => console.log(`${TABLE_ESTUDANTE_HOBBY} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_HOBBY)
            .insert(hobbies)
            .then(() => console.log(`${TABLE_HOBBY} populated!`))
            .catch((error: any) => printError(error))

    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
    } finally {
        console.log("Ending connection!")

        return connection.destroy()
    }
}

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

createTables()