const  fs = require(`fs`)
let entrada = fs.readFileSync(`./entrada.txt`).toString()
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
function identifyInstances(entrada){
entrada = entrada.split('\n')
let instancias = []
let tamanhoinstancias = []
let i = 0
let objeto
entrada.forEach(element => {
    if(isNumeric(element)){
objeto={
entrada:i+1,
saida:i+parseInt(element),
tamanho:parseInt(element)
}
tamanhoinstancias.push(objeto)
}
i++
});

tamanhoinstancias.forEach(element => {
    let instancia = []
for (let i = 0; i < element.tamanho; i++) {
    instancia.push(entrada[element.entrada+i])
}
instancias.push(instancia)
});

return instancias

}
function reprove() {
let instancias = identifyInstances(entrada)
let i = 1
instancias.forEach(element=>{
    let reprovados = []
let menornumeros = 999
    element.forEach(element=>{
   if(parseInt(element.split(' ')[1]) <= menornumeros){
            menornumeros = element.split(' ')[1]
        }
    })
    //Lista reprovados 
    element.forEach(element=>{
        if(element.includes(menornumeros)){
            reprovados.push(element)
                
            
            
        }
     })
     //Ordem alfabetica
     if(reprovados.length == 1){
        console.log(`Instancia ${i}`)
        console.log(reprovados[0]+'\n')
     }else{
               reprovados = reprovados.sort()
               console.log(`Instancia ${i}`)
               console.log(reprovados[reprovados.length - 1]+'\n')

            }


i++
})

}
reprove()

