//
// EXERCICIO A
//
let student = {             //Variavél Global A
        name: "David Silva",
        course: "POO",
        grade: 12
    }
function functionA1(params) {
    
    for (let x in student) {
        console.log(x)
    }
}
function functionA2(){
    console.log("Antes:")
    for (let x in student) {
        
        console.log("  "+ x + ":" + student[x])
        
    }
    console.log("Depois:")
    delete student.grade
    for (let x in student) {
        console.log("  "+ x + ":" + student[x])
    }
}
function functionA3(params) {
    let contador = 0
    
    for (let x in student) {
        contador++
    }
    console.log("Tamanho:"+ " " + contador)
}
//
//EXERCICIO B
//
function Nota(name, grade){     // Função construtora
     this.name = name
     this.grade = grade 
}
let grades = [{        //Variavél Global B
    name: 'Rui',        
    grade: 8    
    },    
    {        
    name: 'Ana',        
    grade: 12    
    },    
    {        
    name: 'Carla',        
    grade: 14    
    }]
function functionB1() {
    let aluno = new Nota(prompt("Escreva um nome:"), prompt("Nota:"))
    grades.push(aluno)
    for (let x in grades) {
        console.log(grades[x].name + " " + grades[x].grade)
    }
}
function functionB2() {
    let media = 0
    let contador = 0
    for (let x in grades) {
        media += parseInt(grades[x].grade)
        contador++
    }
    media = media / contador
    console.log(media)
}
function functionB3() {
    console.log("Notas positivas:")
    for (let x in grades) {
        if (grades[x].grade >= 10) {
            console.log("  "+grades[x].name + " " + grades[x].grade)
        } 
    }
}
//
//EXERCICIO C
//
let carro1 ={
        marca: "Ford",
        matricula : "91-GH-15", 
        cor: "verde", 
        deposito: 40, 
        combustivel: "Gasóleo"
    }
let carro2 ={
        marca: "Opel",
        matricula : "23-AB-23", 
        cor: "branco", 
        deposito: 50, 
        combustivel: "Gasolina"
    }

function functionC2() {
   let escolhaCarro = prompt("Escolha o carro que prentende mudar a cor(carro1/carro2)")
   let escolhaCor = ""
   if (escolhaCarro == "carro1") {
       escolhaCor = prompt(`A cor atual do carro é ${carro1.cor},pretende mudar para que cor?`)
       carro1.cor = escolhaCor
       console.log(`A cor do carro passou a ser ${carro1.cor} `)
   }
   else if(escolhaCarro == "carro2"){
       escolhaCor = prompt(`A cor atual do carro é ${carro2.cor},pretende mudar para que cor?`)
       carro1.cor = escolhaCor
       console.log(`A cor do carro passou a ser ${carro2.cor} `)
   }
   else{
      console.log("Esse carro não existe")
   }

}
function functionC3() {
    let escolhaCarro = prompt("Escolha o carro que pretende atualizar o combustivel(carro1/carro2)")
    let quilometros = parseInt(prompt("Quantos quilometros percorreu?"))
    if (escolhaCarro == "carro1") {
        carro1.deposito = carro1.deposito - ((carro1.deposito * quilometros)/100)

         
        console.log(`O carro passou a ter ${carro1.deposito} litros `)
        
    }
    else if(escolhaCarro == "carro2"){
        carro1.deposito = carro1.deposito - ((carro1.deposito * quilometros)/100)
        console.log(`o carro passou a ter ${carro2.deposito} litros `)
    }
    else{
       console.log("Esse carro não existe")
    }
    
    
}
//
// EXERCICIO D
//
function functionD(params) {
    let cyl = new Cilindro(7, 4)
    console.log("ola3")
    console.log('volume = ' + cyl.calculo.toFixed(4)) 
}
function Cilindro(raio,altura) {
    this.raio = raio
    this.altura = altura
    this.calculo = Volume(raio,altura)
    console.log("ola")
}
function Volume(r,h) {
    console.log("ola2")
    let calculo = Math.PI*r*r*h
    return calculo
}
//
// EXERCICIO E
//
function functionE(params) {
    let raio = parseInt(prompt("Escreva o raio:"))
    let c = new Circle(raio)
    console.log('Area = ', c.area.toFixed(2))
    console.log('perimeter = ', c.perimeter.toFixed(2)) 
}
function Circle(raio) {
    this.raio = raio
    this.perimeter = Perimetro(raio)
    this.area = Area(raio)
}
function Perimetro(r) {
    let calculo = 2*Math.PI*r
    return calculo
}
function Area(r) {
    let calculo = Math.PI*(r*r)
    return calculo
}
//
// EXERCICIO F
//
function functionF() {
    console.log("dog".InItEnd())
}
function Divisor() {
    
}