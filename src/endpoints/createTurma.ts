import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_TURMA } from "../database/tabelas"

export const createTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    const {nome, modulo} = req.body

    const turma = {
        id: Date.now(),
        nome,
        modulo
    }

    try {
        const result = await connection(TABLE_TURMA).insert(turma)

        res.status(200).send("Turma criada com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}