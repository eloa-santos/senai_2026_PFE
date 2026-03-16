<<<<<<< HEAD
let data= new Date();
let fim= new Date(data.getFullYear(), 11, 31);

let faltam =Math.ceil((fim-data) / (1000*60*60*24));


=======
let data= new Date();
let fim= new Date(data.getFullYear(), 11, 31);

let faltam =Math.ceil((fim-data) / (1000*60*60*24));


>>>>>>> eb6472d38a6c7c41c70a964f9c62e3666f430637
console.log("Faltam" , faltam , "dias para o fim do ano");