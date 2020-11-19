const inquirer = require("inquirer");
const fs = require("fs");
const genMark = require("./generateMarkdown")

const generator = [
    {
        //title
        type:"input",
        name: "title",
        message: "project title?"
    },
    {
        //description
        type:"input",
        name: "description",
        message: "describe your project?"
    },
    {
        //installation
        type:"input",
        name: "installation",
        message: "how to install?"
    },
    {
        //license
        type:"input",
        name: "license",
        message: "project licenses?"
    },
    {
        //github
        type:"input",
        name: "github",
        message: "personal/project github?"
    },
    {
        //tests
        type:"input",
        name: "tests",
        message: "run tests here?"
    }
];

function writeFile(newFile, data) {
    fs.writeFile(newFile, data, err => {
    if(err){
        console.log(err);
    } else {
        console.log("All good");
    }
});

function init() {
    inquirer.prompt(generator).then(data =>{
        const answers = genMark(data);
        writeFile('newReadMe', answers)
    })
}}

init();
