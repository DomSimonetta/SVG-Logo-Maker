const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "Characters",
        message: "Input up to 3 characters"
    },
    {
        type: "input",
        name: "Character colors",
        message: "Enter color you want the text to be"
    },
    {
        type: "checkbox",
        name: "Shape",
        message: "Select shape for your logo",
        choices:["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "Shape colors",
        message: "Enter color you want the shape to be"
    },
];

function writeFile(file, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function logo() {
    inquirer.prompt(questions).then((responses) => {
        writeFile("logo.svg", generateLogo({...responses}));
    });
};


logo();
console.log ("Generated logo.svg");