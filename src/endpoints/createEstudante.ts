import { Request, Response } from "express"
import { Estudante } from "../classe/Estudante"
import { UserDatabase } from "../database/UserDatabase"

export const createEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {nome, email, data_nasc, turma_id} = req.body

        if (!nome || !email || !data_nasc || !turma_id) {
            throw new Error("Informações incompletas")
        }
        
        let data = data_nasc.split("/")
        let data_formatada = data.reverse().join("-")
        let hobby: [] = []

        const estudante = new Estudante (
            Date.now().toString(),
            nome,
            email,
            data_formatada,
            turma_id,
            hobby
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createEstudante(estudante)

        res.status(200).send("Estudante adicionado com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}