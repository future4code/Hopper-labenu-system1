export class Turma {
    constructor (
        
        private id : string,
        private nome : string,
        private docentes: [] ,
        private estudantes: [],
        private modulo: number

    ) {
        this.id = id
        this.nome = nome
        this.docentes = docentes
        this.estudantes = estudantes
        this.modulo = modulo
    }

    public getId() {
        return this.id
    }

    public getNome() {
        return this.nome
    }

    public getDocentes() {
        return this.docentes
    }

    public getEstudantes() {
        return this.estudantes
    }

    public getModulo() {
        return this.modulo
    }

    public setId( newId: string) {
        this.id = newId
    }

    public setNome( newNome: string) {
        this.id = newNome
    }

    // public setDocentes() {
    //     return this.docentes
    // }

    // public setEstudantes() {
    //     return this.estudantes
    // }

    // public setModulo() {
    //     return this.modulo
    // }

};
