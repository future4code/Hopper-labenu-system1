import { Request, Response } from "express"
import { TurmaDatabase } from "../database/TurmaDatabase"

export const patchTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {turma_id, novo_modulo} = req.body
        if ( !turma_id || !novo_modulo) {
            throw new Error("Informações incompletas")
        }

        const turmaDatabase = new TurmaDatabase()
        await turmaDatabase.patchTurma(turma_id, novo_modulo)
        res.status(200).send("Módulo alterado com sucesso!")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}