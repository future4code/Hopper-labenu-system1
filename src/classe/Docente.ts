export class Docente{
    constructor( 
     private id: string,
     private nome: string,
     private email: string,
     private data_nasc: string,
     private turma_id: string,
     private especialidade: []
    ){
     this.id = id
     this.nome = nome
     this.email = email
     this.turma_id = turma_id
     this.data_nasc = data_nasc
     this.especialidade = especialidade
    }
 
    public getId() {
     return this.id
 }
 
 public getNome() {
     return this.nome
 }
 
 public getEmail() {
     return this.email
 }

 public getTurma_id() {
    return this.turma_id
}
 
 public getData_nasc() {
     return this.data_nasc
 }
 
 public getEspecialidade() {
     return this.especialidade
 }
 
 public setId( newId: string) {
     this.id = newId
 }
 
 public setNome( newNome: string) {
     this.nome = newNome
 }
 
 public setEmail( newEmail: string) {
     this.email = newEmail
 }

 public setTurma_id( newTurma_id: string) {
    this.turma_id = newTurma_id
}
 
 public setData_nasc( newData_nasc: string) {
     this.data_nasc = newData_nasc
 } 

 
 // public setEspecialidade( newEspecialidade: string) {
 //     this.id = newEspecialidade
 // }
}