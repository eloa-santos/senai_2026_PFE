let data= new Date();
let fim= new Date(data.getFullYear(), 11, 31);

let faltam =Math.ceil((fim-data) / (1000*60*60*24));


console.log("Faltam" , faltam , "dias para o fim do ano");