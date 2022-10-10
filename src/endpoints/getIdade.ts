import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const getIdade = async (req: Request, res: Response) => {
    let errorCode = 401
    try {
        const {id} = req.body
        const userDatabase = new UserDatabase()
        const result = await userDatabase.getIdade(id)
        res.status(200).send({idade: result }) 
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}