// prompts for user input :)
const employeeInfo = require("inquirer");
const nameTitle = require("inquirer");
const fs = require('fs');

// name and occupation prompt; employee name, job title

    nameTitle.prompt (
        [
        {
            name: 'name',
            type: 'input',
            message: 'Enter name here:',
        },
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your occupation with us?',
        },

        ]) 
     
    
    // employee information prompt; id, email
  employeeInfo.prompt(
    [
        {
            name: 'id',
            type: 'input',
            message: 'What is your employee ID?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?',
        },
        {
            name: 'user',
            type: 'input',
            message: 'What is your GitHub username?',
        },


    ])

    .then((data) => {
        const employeeFile = `${data.name.split(' ').join('')}.json`;
    
        fs.writeFile(employeeFile, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
  
  
    // idk how to log this?
 