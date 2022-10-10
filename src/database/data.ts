export const turmas = [
    {
        id: "101",
        nome: "Hopper",
        modulo: "6"
    },
    {
        id: "102",
        nome: "Hooks",
        modulo: "6"
    },
    {
        id: "103",
        nome: "Aragon",
        modulo: "5"
    }
]

export const docentes = [
    {
        id: "201",
        nome: "Peu Saldanha",
        email: "peu.saldanha@gmail.com",
        data_nasc: "1994-10-04",
        turma_id: "101"
    },
    {
        id: "202",
        nome: "Luan Melo",
        email: "luan.melo@gmail.com",
        data_nasc: "1992-07-14",
        turma_id: "102"
    }
    
]

export const estudantes = [
    {
        id: "301",
        nome: "Natália Amaral",
        email: "natalia.amaral@gmail.com",
        data_nasc: "1995-12-23",
        turma_id: "101"
    },
    {
        id: "302",
        nome: "Natália Amorim",
        email: "natalia.amorim@gmail.com",
        data_nasc: "1990-10-19",
        turma_id: "101"
    },
    {
        id: "303",
        nome: "Madson Pereira",
        email: "madson.pereira@gmail.com",
        data_nasc: "1996-01-09",
        turma_id: "102"
    },
    {
        id: "304",
        nome: "Mayson Pereira",
        email: "mayson.pereira@gmail.com",
        data_nasc: "1997-02-12",
        turma_id: "103"
    }
]

export const especialidades = [
    {
        id: "401",
        nome: "js"
    },
    {
        id: "402",
        nome: "css"
    },
    {
        id: "403",
        nome: "react"
    },
    {
        id: "404",
        nome: "typesript"
    },
    {
        id: "405",
        nome: "poo"
    }
]

export const hobbies = [
    {
        id: "501",
        nome: "música"
    },
    {
        id: "502",
        nome: "pintura"
    },
    {
        id: "503",
        nome: "fotografia"
    },
    {
        id: "504",
        nome: "livros"
    },
    {
        id: "505",
        nome: "esportes"
    }
]

export const docentes_especialidades = [
    {
        id: "601",
        docente_id: "201",
        especialidade_id: "402"
    },
    {
        id: "602",
        docente_id: "201",
        especialidade_id: "404"
    },
    {
        id: "603",
        docente_id: "202",
        especialidade_id: "401"
    },
    {
        id: "604",
        docente_id: "202",
        especialidade_id: "405"
    },
]

export const estudantes_hobbies = [
    {
        id: "701",
        estudante_id: "301",
        hobby_id: "503"
    },
    {
        id: "702",
        estudante_id: "302",
        hobby_id: "502"
    },
    {
        id: "703",
        estudante_id: "303",
        hobby_id: "501"
    },
    {
        id: "704",
        estudante_id: "304",
        hobby_id: "505"
    },
]