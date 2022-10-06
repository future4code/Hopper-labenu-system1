import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_TURMA } from "../database/tabelas"

export const getTurma = async (req: Request, res: Response) => {
    let errorCode = 401

    try {
        let result = await connection(TABLE_TURMA).select("*")

        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}