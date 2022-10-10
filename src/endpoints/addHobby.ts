import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const addHobby = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {email, hobby} = req.body
        
        if (!email || !hobby) {
            throw new Error("Informações incompletas")
        }
        
        const userDatabase = new UserDatabase()
        const idEstudante = await userDatabase.getEstudanteId(email)
        const idHobby = await userDatabase.getHobbyId(hobby)

        const [estudante_id] = idEstudante
        const [hobby_id] = idHobby

        await userDatabase.addHobby(estudante_id.id, hobby_id.id)

        res.status(200).send("Hobby adicionado com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
}