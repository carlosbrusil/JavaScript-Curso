//   ESTRUCTURAS CONDICIONALES
//
//   if (condicion) {
//       sentenciaVerdad();    
//   }else {
//         sentenciaFalsa();
//   }
// 
let clave1="carlosbrusil"; 
let entrada="carlosbr";
let resul1=clave1==entrada; 
console.log("ESTRUCTURAS CONDICIONALES");
console.log("");
console.log("clave1 = ",clave1,"           entrada = ",entrada);
console.log(" if (clave1==entrada) { clave correcta } else { clave incorrecta }")
if (resul1==true){
    console.log("clave correcta");
}else {
    console.log("clave incorrecta");
}
// 
// if anidados
//
// if (condicion1){
//      sentencia1;
// }  else if (condicion2 ){
//        sentencia2;
// }else {
//     sentencia3;    
//}
let  nota=19;
console.log("");
console.log("IF ANIDADOS");
console.log(" Analisis de nota =",nota);
if (nota>=16){
    console.log("nota muy buena");
} else if(nota>=14){
    console.log("nota buena");
} else{
    console.log("nota regular");
}
