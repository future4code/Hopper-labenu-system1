import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const getDocente = async (req: Request, res: Response) => {
    let errorCode = 401
    try {
        const userDatabase = new UserDatabase()
        const result = await userDatabase.getDocente()
        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}