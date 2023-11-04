function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
    },

    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (object) {
    const h1 = document.createElement("h1")
    document.body.append(h1)
    h1.textContent = object.id
  })
  .catch(function (error) {
    const p = document.createElement("p")
    document.body.append(p)
    p.textContent = error.message
  })
}

submitData("Edmond", "edmond@email.com")




/*const configurationObject = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },

  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  }),
}

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object)
  })*/