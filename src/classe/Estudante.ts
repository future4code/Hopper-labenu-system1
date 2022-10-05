export class Estudante{
   constructor( 
    private id: string,
    private nome: string,
    private email: string,
    private data_nasc: string,
    private turma_id: string,
    private hobbies: []
   ){
    this.id = id
    this.nome = nome
    this.email = email
    this.data_nasc = data_nasc
    this.hobbies = hobbies
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

public getData_nasc() {
    return this.data_nasc
}

public getHobbies() {
    return this.hobbies
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

public setData_nasc( newData_nasc: string) {
    this.data_nasc = newData_nasc
}

// public setHobbies( newHobbies: string) {
//     this.hobbies = newHobbies
// }
}