import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const patchDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {docente_id, nova_turma} = req.body

        if ( !docente_id || ! nova_turma) {
            throw new Error("Informações incompletas")
        }

        const userDatabase = new UserDatabase()
        await userDatabase.patchDocente(docente_id, nova_turma)

        res.status(200).send("Turma alterada com sucesso!")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}