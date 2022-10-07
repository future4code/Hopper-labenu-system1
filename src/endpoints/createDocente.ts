import { Request, Response } from "express"
import { Docente } from "../classe/Docente"
import connection from "../database/connection"
import { TABLE_DOCENTE } from "../database/tabelas"


export const createDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    const {nome, email, data_nasc, turma_id} = req.body

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

    const docente_banco = {
        id: docente.getId(),
        nome: docente.getNome(),
        email: docente.getEmail(),
        data_nasc: docente.getData_nasc(),
        turma_id: docente.getTurma_id()
    }

    try {
        await connection(TABLE_DOCENTE).insert(docente_banco)

        res.status(200).send("Docente criado com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}