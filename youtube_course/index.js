//performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName + '!');
}
//calculating a value
function square(number) {
    return number * number;
}

greet('Julien', 'Francais');
greet('Mary', 'Smith');

let number = square(2);

console.log(number);