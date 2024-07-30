
Cypress.Commands.add('generateRandomId', () => {
    return Math.floor(1000 + Math.random() * 9000); // Genera un ID aleatorio de 4 dígitos
});

Cypress.Commands.add('generateRandomPetName', () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let name = '';
    for (let i = 0; i < 6; i++) {
        name += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return name;
});

Cypress.Commands.add('loginPage', (userName, userPass) => { 
    cy.get('[data-test="username"]').type(userName)
    cy.get('[data-test="password"]').type(userPass)
    cy.get('[data-test="login-button"]').click()
     
 })

 Cypress.Commands.add('addToShoppingCart', () => { 
    //Se agregan dos Productos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click({force:true})
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click({force:true})
    //Link de Carro de Compra
    cy.get('[data-test="shopping-cart-link"]').should("be.visible")
    cy.get('[data-test="shopping-cart-link"]').click({force:true})

    //Dirige al Checkout
    cy.get('[data-test="checkout"]').should("be.visible")
    cy.get('[data-test="checkout"]').click({force:true})
 
})

Cypress.Commands.add('addInfoForm', () => { 
    cy.get('[data-test="firstName"]').type("TestName")
    cy.get('[data-test="lastName"]').type("TestLastName")
    cy.get('[data-test="postalCode"]').type("75000000")
    cy.get('[data-test="continue"]').click({force:true})
    cy.get('[data-test="finish"]').click({force:true})
 
})

Cypress.Commands.add('loginApi', (userAPI, passwordApi) => { 

    try {
        cy.api({
            url: `https://petstore.swagger.io/v2/user/login?username=${userAPI}&password=${passwordApi}`, 
            method: 'GET',
            redirect: "follow"
            })
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result =  response.json();
        console.log(JSON.stringify(result))
        return result;
      } catch (err) {
        console.log(err);
      }

})

Cypress.Commands.add('validaloginResponse', (response) => { 
    expect(response.body).to.have.property('code')
    expect(response.body).to.have.property('type')
    expect(response.body).to.have.property('message')
    expect(response.body.code).to.eq(200)
    expect(response.body.type).to.contain("unknown")
    expect(response.body.message).to.contain("logged in user session")
})

Cypress.Commands.add('addPet', (petId,petName) => { 
    try {
        cy.api({
            url: `https://petstore.swagger.io/v2/pet`, 
            method: "POST",
            body: {
                "id": petId,
                "category": {
                    "id": 0,
                    "name": petName
                 },
                "name": "doggie",
                "photoUrls": [
                     "string"
                    ],
                "tags": [
                    {
                    "id": petId,
                    "name": petName
                }
                ],
                "status": "available"
            },
            redirect: "follow"
            })
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result =  response.json();
        console.log(JSON.stringify(result))
        return result;
      } catch (err) {
        console.log(err);
      }

})

Cypress.Commands.add('validaAddPet', (response,petId,petName) => { 
   expect(response.body).to.have.property('id')
    expect(response.body).to.have.property('category')
    expect(response.body).to.have.property('name')
    expect(response.body).to.have.property('status')
    // Verificar que la categoría id es igual a 0
    expect(response.body.category.id).to.equal(0);
    // Verificar que el nombre de la categoría es igual a "string"
    expect(response.body.category.name).to.equal(petName);
    // Verificar que el nombre es igual a "doggie"
    expect(response.body.name).to.equal("doggie");
    // Verificar que el array de photoUrls contiene "string"
    expect(response.body.photoUrls).to.include("string");
    // Verificar que el array de tags contiene un objeto con id igual a 0
    expect(response.body.tags[0].id).to.equal(petId);
    // Verificar que el array de tags contiene un objeto con name igual a "string"
    expect(response.body.tags[0].name).to.equal(petName)
    // Verificar que el estado es igual a "available"
    expect(response.body.status).to.equal("available");
})

Cypress.Commands.add('searchPet', (petId,petName) => { 
    try {
        cy.api({
            url: `https://petstore.swagger.io/v2/pet/${petId}`, 
            method: "GET",
            redirect: "follow"
            })
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result =  response.json();
        console.log(JSON.stringify(result))
        return result;
      } catch (err) {
        console.log(err);
      }

})

Cypress.Commands.add('validasearchPet', (response,petId,petName) => { 
    expect(response.body).to.have.property('id')
    expect(response.body).to.have.property('category')
    expect(response.body).to.have.property('name')
    expect(response.body).to.have.property('status')
    // Verificar que la categoría id es igual a 0
    expect(response.body.category.id).to.equal(0);
    // Verificar que el nombre de la categoría es igual a "string"
    expect(response.body.category.name).to.equal(petName);
    // Verificar que el nombre es igual a "doggie"
    expect(response.body.name).to.equal("doggie");
    // Verificar que el array de photoUrls contiene "string"
    expect(response.body.photoUrls).to.include("string");
    // Verificar que el array de tags contiene un objeto con id igual a 0
    expect(response.body.tags[0].id).to.equal(petId);
    // Verificar que el array de tags contiene un objeto con name igual a "string"
    expect(response.body.tags[0].name).to.equal(petName)
    // Verificar que el estado es igual a "available"
    expect(response.body.status).to.equal("available");

  
})

Cypress.Commands.add('updateNameStatusPet', (petId) => { 
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("name", "PKSPETV2");        
        cy.api({
            url: `https://petstore.swagger.io/v2/pet/${petId}`, 
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: {
                "name": "PKSPETVENDIDO",
                "status": "SOLD"
              },
            redirect: "follow"
            })
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result =  response.json();
        console.log(JSON.stringify(result))
        return result;
      } catch (err) {
        console.log(err);
      }

})

Cypress.Commands.add('validaUpdateNameStatusPet', (response,petId) => { 
    expect(response.body).to.have.property('code')
    expect(response.body).to.have.property('type')
    expect(response.body).to.have.property('message')
    expect(response.body.code).to.eq(200)
    expect(response.body.type).to.contain("unknown")
    expect(response.body.message).to.contain(petId)
   
})

Cypress.Commands.add('updatePet', (petId) => { 
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("name", "PKSPETV2");        
        cy.api({
            url: `https://petstore.swagger.io/v2/pet/${petId}`, 
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: {
                "name": "PKSPET"
              },
            redirect: "follow"
            })
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result =  response.json();
        console.log(JSON.stringify(result))
        return result;
      } catch (err) {
        console.log(err);
      }

})

Cypress.Commands.add('validaUpdatePet', (response,petId) => { 
    expect(response.body).to.have.property('code')
    expect(response.body).to.have.property('type')
    expect(response.body).to.have.property('message')
    expect(response.body.code).to.eq(200)
    expect(response.body.type).to.contain("unknown")
    expect(response.body.message).to.contain(petId)
   
})


Cypress.Commands.add('findByStatus', () => { 
    try {
        cy.api({
            url: `https://petstore.swagger.io/v2/pet/findByStatus?status=available`, 
            method: "GET",
            redirect: "follow"
            })
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result =  response.json();
        console.log(JSON.stringify(result))
        return result;
      } catch (err) {
        console.log(err);
      }

})

Cypress.Commands.add('validafindByStatus', (response) => { 
    expect(response.status).to.eq(200);
        
    // Validamos que la respuesta sea un array
    expect(response.body).to.be.an('array');
    // Iteramos sobre los primeros registros
    const firstFewRecords = response.body.slice(0,5); 
    firstFewRecords.forEach(record => {
      // Validamos que cada registro tenga las propiedades 'id', 'category', 'name' y 'status'
      expect(record).to.have.property('id');
      //expect(record).to.have.property('category');
      expect(record.category).to.have.property('id');
      expect(record.category).to.have.property('name');
      expect(record).to.have.property('name');
      expect(record).to.have.property('status');
    });
  
})

