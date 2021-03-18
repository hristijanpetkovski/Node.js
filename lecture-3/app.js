const faker = require("faker");

function generateUsers() {
  let users = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let address = faker.address.state();
    let zipCode = faker.address.zipCode();
    let timeZone = faker.address.timeZone();
    let companyName = faker.company.companyName();
    let date = faker.date.recent();
    let commerce = faker.commerce.department();

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      address_: address,
      zipCode_: zipCode,
      time_Zone: timeZone,
      companyName: companyName,
      date: date,
      commerce: commerce,
    });
  }

  return { data: users };
}

let dataObj = generateUsers();

console.log(dataObj);
