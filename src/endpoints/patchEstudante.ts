// Alterar o aluno de turma, informações necessárias: id da turma e id do aluno.

import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_ESTUDANTE } from "../database/tabelas"

export const patchEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    const {estudante_id, nova_turma} = req.body
    try {
        await connection(TABLE_ESTUDANTE).select("*").where("id", `${estudante_id}`)

        await connection(TABLE_ESTUDANTE).where("id","=", `${estudante_id}`).update({turma_id: nova_turma})

        res.status(200).send("Turma alterada com sucesso!")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}