export class CalcIMC {
    #nome
    #peso
    #altura
 
calcularIMC(peso,altura){
    return (peso/(altura*altura))
}
constructor(nome,peso,altura){
    this.#nome=nome
    this.#peso=peso
    this.#altura=altura
}
getNome(){
    return this.#nome
}
getPeso(){
    return this.#peso
}
getAltura(){
    return this.#altura
}
}