import { Docente } from "../classe/Docente";
import { Estudante } from "../classe/Estudante";
import BaseDatabase from "./BaseDataBase";
import { TABLE_DOCENTE, TABLE_ESTUDANTE } from "./tabelas";

export class UserDatabase extends BaseDatabase {
    public static TABLE_ESTUDANTE = TABLE_ESTUDANTE
    public static TABLE_DOCENTE = TABLE_DOCENTE

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
}