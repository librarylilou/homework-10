// prompts for user input :)
const employeeInfo= require("inquirer")
const nameTitle= require("inquirer")
// name and occupation prompt; employee name, job title
nameTitle.prompt([{
    name:'name',
    type:'input',
    message:'Enter name here:',
},
{
    name:'jobTitle',
    type:'input',
    message:'What is the title of your occupation with us?',
},

]);
// employee information prompt; id, email
employeeInfo.prompt([
    {
        name:'id',
        type: 'input',
        message:'What is your employee ID?'
    },
    {
        name:'email',
        type:'input',
        message:'What is your email?',
    },
    
]);

