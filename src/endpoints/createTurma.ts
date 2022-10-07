import { Request, Response } from "express"
import { Turma } from "../classe/Turma"
import connection from "../database/connection"
import { TABLE_TURMA } from "../database/tabelas"

export const createTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    const {nome, modulo} = req.body
    let docentes: [] = []
    let estudantes: [] = []

    const turma = new Turma (
        Date.now().toString(),
        nome,
        docentes,
        estudantes,
        modulo
    )
        
    const turma_banco = {
        id: turma.getId(),
        nome: turma.getNome(),
        modulo: turma.getModulo()
    }

    try {
        await connection(TABLE_TURMA).insert(turma_banco)

        res.status(200).send("Turma criada com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}