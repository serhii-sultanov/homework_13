"use strict";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    let user = result.find((user) => user.company.name === "Johns Group");
    console.log(user);
  })
  .catch((error) => console.error(error));
