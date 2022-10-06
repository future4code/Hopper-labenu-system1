import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_ESTUDANTE } from "../database/tabelas"

export const getEstudante = async (req: Request, res: Response) => {
    let errorCode = 401

    try {
        let result = await connection(TABLE_ESTUDANTE).select("*")

        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}