import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createTurma } from './endpoints/createTurma'
import { getTurma } from './endpoints/getTurma'
import { patchTurma } from './endpoints/patchTurma'
import { createEstudante } from './endpoints/createEstudante'
import { getEstudante } from './endpoints/getEstudante'
import { patchEstudante } from './endpoints/patchEstudante'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.post("/turma", createTurma)
app.post("/estudante", createEstudante)
app.get("/turma", getTurma)
app.get("/estudante", getEstudante)
app.patch("/turma", patchTurma)
app.patch("/estudante", patchEstudante)

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})
