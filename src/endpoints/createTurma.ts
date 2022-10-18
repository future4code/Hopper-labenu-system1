import { Request, Response } from "express"
import { Turma } from "../classe/Turma"
import { TurmaDatabase } from "../database/TurmaDatabase"

export const createTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {nome, modulo} = req.body
        if ( !nome || !modulo ) {
            throw new Error("Informações incompletas")
        }
        let docentes: [] = []
        let estudantes: [] = []

        const turma = new Turma (
            Date.now().toString(),
            nome,
            docentes,
            estudantes,
            modulo
        )

        const turmaDatabase = new TurmaDatabase()
        await turmaDatabase.createTurma(turma)

        res.status(200).send("Turma criada com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}