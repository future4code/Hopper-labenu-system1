import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_ESTUDANTE } from "../database/tabelas"

export const createEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    const {nome, email, data_nasc, turma_id} = req.body

    let data = data_nasc.split("/")

    let data_formatada = data.reverse().join("-")

    const id = Date.now()

    const estudante = {
        id: id,
        nome: nome,
        email: email,
        data_nasc: data_formatada,
        turma_id: turma_id
    }

    try {
        await connection(TABLE_ESTUDANTE).insert(estudante)

        res.status(200).send("Estudante adicionado com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}