import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const addEspecialidade = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {email, especialidade} = req.body
        
        if (!email || !especialidade) {
            throw new Error("Informações incompletas")
        }
        
        const userDatabase = new UserDatabase()
        const idDocente = await userDatabase.getDocenteId(email)
        const idEsecialidade = await userDatabase.getEspecialidadeId(especialidade)

        const [docente_id] = idDocente
        const [especialidade_id] = idEsecialidade

        await userDatabase.addEspecialidade(docente_id.id, especialidade_id.id)

        res.status(200).send("Especialiade adicionada com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}