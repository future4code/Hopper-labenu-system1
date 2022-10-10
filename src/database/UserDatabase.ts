import { Docente } from "../classe/Docente";
import { Estudante } from "../classe/Estudante";
import BaseDatabase from "./BaseDataBase";
import { TABLE_DOCENTE, TABLE_DOCENTE_ESPECIALIDADE, TABLE_ESPECIALIDADE, TABLE_ESTUDANTE, TABLE_ESTUDANTE_HOBBY, TABLE_HOBBY } from "./tabelas";

export class UserDatabase extends BaseDatabase {
    public static TABLE_ESTUDANTE = TABLE_ESTUDANTE
    public static TABLE_DOCENTE = TABLE_DOCENTE
    public static TABLE_ESPECIALIDADE = TABLE_ESPECIALIDADE
    public static TABLE_DOCENTE_ESPECIALIDADE = TABLE_DOCENTE_ESPECIALIDADE
    public static TABLE_HOBBY = TABLE_HOBBY
    public static TABLE_ESTUDANTE_HOBBY = TABLE_ESTUDANTE_HOBBY

    public async createEstudante(estudante: Estudante) {
        await BaseDatabase.connection(UserDatabase.TABLE_ESTUDANTE).insert({
            id: estudante.getId(),
            nome: estudante.getNome(),
            email: estudante.getEmail(),
            data_nasc: estudante.getData_nasc(),
            turma_id: estudante.getTurma_id()
        })
    }

    public async createDocente(docente: Docente) {
        await BaseDatabase.connection(UserDatabase.TABLE_DOCENTE).insert({
            id: docente.getId(),
            nome: docente.getNome(),
            email: docente.getEmail(),
            data_nasc: docente.getData_nasc(),
            turma_id: docente.getTurma_id() 
        })
    }

    public async getEstudante() {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_ESTUDANTE)
        .select('*');
        return result
    }

    public async getDocente() {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_DOCENTE)
        .select('*');
        return result
    }

    public async patchEstudante(estudante_id: string, nova_turma: string) {
        await BaseDatabase.connection(UserDatabase.TABLE_ESTUDANTE)
        .where("id","=", `${estudante_id}`).update({turma_id: nova_turma})
    }

    public async patchDocente(docente_id: string, nova_turma: string) {
        await BaseDatabase.connection(UserDatabase.TABLE_DOCENTE)
        .where("id","=", `${docente_id}`).update({turma_id: nova_turma})
    }

    public async getDocenteId(docente_email: string) {
        const docente_id = await BaseDatabase.connection(UserDatabase.TABLE_DOCENTE).select("id").where("email", "=", `${docente_email}`)
        return docente_id
    }

    public async getEspecialidadeId(especialidade: string) {
        const especialidade_id = await BaseDatabase.connection(UserDatabase.TABLE_ESPECIALIDADE).select("id").where("nome", "=", `${especialidade}`)
        return especialidade_id
    }
    
    public async addEspecialidade(docente_id: string, especialidade_id: string) {
        await BaseDatabase.connection(UserDatabase.TABLE_DOCENTE_ESPECIALIDADE).insert({
            id: Date.now().toString(),
            docente_id: docente_id,
            especialidade_id: especialidade_id
        })
    }

    public async getHobbyId(hobby: string) {
        let result
        try {  
            await BaseDatabase.connection(UserDatabase.TABLE_HOBBY).insert({
                id: Date.now().toString(),
                nome: hobby
            })
            result = await BaseDatabase.connection(UserDatabase.TABLE_HOBBY).select("id").where("nome", "=", `${hobby}`)
        } catch {
           result = await BaseDatabase.connection(UserDatabase.TABLE_HOBBY).select("id").where("nome", "=", `${hobby}`)
        }
        return result
    }

    public async getEstudanteId(estudante_email: string) {
        const estudante_id = await BaseDatabase.connection(UserDatabase.TABLE_ESTUDANTE).select("id").where("email", "=", `${estudante_email}`)
        return estudante_id
    }

    public async addHobby(estudante_id: string, hobby_id: string) {
        await BaseDatabase.connection(UserDatabase.TABLE_ESTUDANTE_HOBBY).insert({
            id: Date.now().toString(),
            estudante_id: estudante_id,
            hobby_id: hobby_id
        })
    }

    public async getIdade(id: string) {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_ESTUDANTE).select("data_nasc").where("id","=",`${id}`)
        let dataNasc = result[0].data_nasc.toISOString().split("-")[0]
        let date = new Date().toISOString().split('-')[0]
        const idade = Number(date) - Number(dataNasc)

        return idade.toString()
    }
}