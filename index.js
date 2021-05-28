// constant's content needed for the display of employee card (?)
const Inquirer = require("./src/inquirer");


// constant to display card
// do i need some sort of for-loop to display multiple cards(?)
const employeeCard = `
<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-name">${nameTitle.name}</h5>
          <h6 class="card-text">${nameTitle.title}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${employeeInfo.email}</li>
          <li class="list-group-item">${employeeInfo.user}</li>
          <li class="list-group-item">${employeeInfo.id}</li>
        </ul>
      
      </div>
`;

const cardEl = document.getElementById("employeeCard");
cardEl.innerHTML = employeeCard;