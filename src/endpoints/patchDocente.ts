import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_DOCENTE } from "../database/tabelas"


export const patchDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    const {docente_id, nova_turma} = req.body
    try {
        await connection(TABLE_DOCENTE).select("*").where("id", `${docente_id}`)

        await connection(TABLE_DOCENTE).where("id","=", `${docente_id}`).update({turma_id: nova_turma})

        res.status(200).send("Turma alterada com sucesso!")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}