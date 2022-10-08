import { Request, Response } from "express"
import { Docente } from "../classe/Docente"
import { UserDatabase } from "../database/UserDatabase"

export const createDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {nome, email, data_nasc, turma_id} = req.body
        
        if (!nome || !email || !data_nasc || !turma_id) {
            throw new Error("Informações incompletas")
        }

        let data = data_nasc.split("/")
        let data_formatada = data.reverse().join("-")
        let especialidade: [] = []

        const docente = new Docente (
            Date.now().toString(),
            nome,
            email,
            data_formatada,
            turma_id,
            especialidade
        )
        
        const userDatabase = new UserDatabase()
        await userDatabase.createDocente(docente)

        res.status(200).send("Docente criado com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}