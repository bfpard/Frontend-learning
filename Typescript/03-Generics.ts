// Ejemplo de funciones con genéricos en TypeScript

// Función genérica que toma un input y devuelve un output del mismo tipo
function identity<T>(arg: T): T {
    return arg;
}

// Uso de la función genérica con diferentes tipos
let output1 = identity<string>("Hola Mundo");
let output2 = identity<number>(42);
let output3 = identity<boolean>(true);

console.log(output1); // "Hola Mundo"
console.log(output2); // 42
console.log(output3); // true

// Función genérica con dos tipos diferentes para input y output
function transform<T, U>(input: T, transformer: (arg: T) => U): U {
    return transformer(input);
}

// Uso de la función genérica transform
let result1 = transform<string, number>("123", (str) => parseInt(str));
let result2 = transform<number, string>(456, (num) => num.toString());

console.log(result1); // 123
console.log(result2); // "456"