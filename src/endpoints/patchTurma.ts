// Alterar o modulo da turma, informações necessárias: id da turma e nomvo módulo.

import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_TURMA } from "../database/tabelas"

export const patchTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    const {turma_id, novo_modulo} = req.body
    try {
        await connection(TABLE_TURMA).select("*").where("id", `${turma_id}`)

        await connection(TABLE_TURMA).where("id","=", `${turma_id}`).update({modulo: novo_modulo})

        res.status(200).send("Módulo alterado com sucesso!")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}