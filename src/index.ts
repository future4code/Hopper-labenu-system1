import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createTurma } from './endpoints/createTurma'
import { getTurma } from './endpoints/getTurma'
import { patchTurma } from './endpoints/patchTurma'
import { createEstudante } from './endpoints/createEstudante'
import { getEstudante } from './endpoints/getEstudante'
import { patchEstudante } from './endpoints/patchEstudante'
import { createDocente } from './endpoints/createDocente'
import { getDocente } from './endpoints/getDocente'
import { patchDocente } from './endpoints/patchDocente'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.post("/turma", createTurma)
app.post("/docente", createDocente)
app.post("/estudante", createEstudante)
app.get("/turma", getTurma)
app.get("/estudante", getEstudante)
app.get("/docente", getDocente)
app.patch("/turma", patchTurma)
app.patch("/estudante", patchEstudante)
app.patch("/docente",patchDocente)

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})
