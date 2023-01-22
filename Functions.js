//Iteracion #1: Buscar el máximo
//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne, numberTwo) {
  let highNumber= numberOne > numberTwo ? numberOne : numberTwo;
  return highNumber;
}

//Iteracion #2: Buscar la palabra mas larga
//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  let longestWord = "";
  param.forEach(word => {
    longestWord = word.length > longestWord.length? word: longestWord;
  })
  return longestWord;
}

//Iteración #3: Calcular la suma
//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let total = 0;
  for (number of param){
  total += number;
  }
  return total;
}

//Iteración #4: Calcular promedio
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let total = 0;
  for (number of param){
  total += number;
  }
  return total / param.length
}

//Iteración #5: Calcular promedio de strings
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let total = 0;
  param.forEach(element => {
    if(typeof element ==="number"){
      total += element;
    }else if(typeof element ==="string"){
        total += element.length
    }})
    return total;
  }

//Iteración #6: Valores únicos
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  let duplicate = [];
  param.forEach(word => {
    if(!duplicate.includes(word)){
      duplicate.push(word)
    }
  })
  return duplicate;
}

//Iteración #7: Buscador de nombres
//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  let name = nameFinder.indexOf(param);
  if(name == -1){
    return false;
  }else{
    return true, name;
  } 
}

//Iteration #8: Contador de repeticiones
//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  let unicos= [];
  let repeticiones=[];
  
  param.forEach((element)=>{
    if(!unicos.includes(element)){
         unicos.push(element)
       }
  })
}  
  
  let contador =0;
  
  unicos.forEach(repeticiones => {
    param.forEach(repeticionesDos =>{
          if(repeticiones==repeticionesDos){
            contador ++;
          };
    }); repeticiones.push(repeticiones + "  " + contador);
        
  });return repeticiones;


 console.log(repeatCounter(counterWords))

