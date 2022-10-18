import { Request, Response } from "express"
import { TurmaDatabase } from "../database/TurmaDatabase"

export const getTurma = async (req: Request, res: Response) => {
    let errorCode = 401
    try {
        const turmaDatabase = new TurmaDatabase()
        const result = await turmaDatabase.getTurma()
        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}