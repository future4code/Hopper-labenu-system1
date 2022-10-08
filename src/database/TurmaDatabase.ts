import { Turma } from "../classe/Turma";
import BaseDatabase from "./BaseDataBase";
import { TABLE_TURMA } from "./tabelas";

export class TurmaDatabase extends BaseDatabase {
    public static TABLE_TURMA = TABLE_TURMA

    public async getTurma() {
        const result = await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA).select("*");
        return result
    }
    
    public async createTurma(turma: Turma) {
        await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA).insert({
            id: turma.getId(),
            nome: turma.getNome(),
            modulo: turma.getModulo()
        })
    }

    public async patchTurma(turma_id: string, novo_modulo: string) {
        await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA)
        .where("id","=", `${turma_id}`).update({modulo: novo_modulo})
    }
}