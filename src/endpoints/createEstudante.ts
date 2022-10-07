import { Request, Response } from "express"
import { Estudante } from "../classe/Estudante"
import connection from "../database/connection"
import { TABLE_ESTUDANTE } from "../database/tabelas"

export const createEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    const {nome, email, data_nasc, turma_id} = req.body

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

    const estudante_banco = {
        id: estudante.getId(),
        nome: estudante.getNome(),
        email: estudante.getEmail(),
        data_nasc: estudante.getData_nasc(),
        turma_id: estudante.getTurma_id()
    }

    try {
        await connection(TABLE_ESTUDANTE).insert(estudante_banco)

        res.status(200).send("Estudante adicionado com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}