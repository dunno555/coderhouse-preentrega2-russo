// La clase Option tiene un nombre y un hexcolor como propiedades. También tiene dos métodos: uno que
// genera el color de manera aleatoria, y otro para mostrar la URL donde se puede obtener más información
// sobre el color generado
class Option {
    constructor(name, hexColor = '') {
        this.name = name;
        this.hexColor = hexColor;
    };

    hexColorGenerator() {
        let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let generatedColor = '';

        for (let i = 0; i < 6; i++) {
            let hexValue;

            hexValue = hexValues[Math.floor(Math.random() * hexValues.length)];
            generatedColor += hexValue;
        };

        this.hexColor = `#${generatedColor}`;
    };

    hexColorURL() {
        let colorWithoutHash = this.hexColor.slice(1);
        return `https://www.htmlcsscolor.com/hex/${colorWithoutHash}`;
    }
};

// La app le da la bienvenida al usuarie y le comunica un formato especial para ingresar las opciones
// Luego de esto, se acciona la función randomPicker, la cual elegirá una opción de manera aleatoria
// entre todas las opciones ingresadas
let welcome = alert('Welcome to the Random Picker');
let welcome2 = alert('In the next screen, write any number of options, separated by a comma. The app will then randomize them and choose one for you');
let welcome3 = alert("Here's an example: \nPizza,Hamburger,Tacos,Burritos,Sushi,Ice cream,Pie,Cupcake");

let options = prompt("It's your turn! Write any number of options below, separated by a comma, and let the app choose for you!\nYou might even have a little surprise at the end ;)\nHere's the example again: \nPizza,Hamburger,Tacos,Burritos,Sushi,Ice cream,Pie,Cupcake");

function randomPicker(input) {
    // Validación que el usuarie siga el formato requerido. De lo contrario, sigue pidiendo un input
    // válido hasta recibirlo
    while (input.includes(',') == false) {
        input = prompt("Please, enter any number of options, separated by a comma\nLet's try again\nHere's the example: \nPizza,Hamburger,Tacos,Burritos,Sushi,Ice cream,Pie,Cupcake");
    };
    
    // El array se conforma de opciones que no incluyan whitespace. "    1   " se convierte en "1"
    // Primero, agarramos las opciones y las dividimos por las comas, las cuales se ingresan en el
    // array. Luego, filtramos por las opciones vacias (opciones que son solo whitespace no se permiten
    // en el array). Finalmente, usamos map para reescribir ese array filtrado y les sacamos el whitespace
    const arr = input.split(',').filter(option => option.trim() !== '').map(option => option.trim());
    let option;

    // Se elije una opción de manera aleatoria
    option = arr[Math.floor(Math.random() * arr.length)];

    // Se instancia una nueva Option, usando la opcion elegida previamente
    const chosenOption = new Option(option);
    // Se le asigna un color de manera aleatoria
    chosenOption.hexColorGenerator();

    // Se le informa al usuarie la opción que se eligió, junto con el color asignado. También se le
    // informa la URL donde buscar más información sobre su color
    alert(`The Random Picker has spoken!\n\nYour option for today is ${chosenOption.name}!\nAnd, just because you waited so patiently for this, your option's special color is ${chosenOption.hexColor}!\nFor more info on your color, visit:\n${chosenOption.hexColorURL()}`);
}

randomPicker(options);