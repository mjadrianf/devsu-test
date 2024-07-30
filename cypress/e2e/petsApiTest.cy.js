describe('Prueba API para swager PetStore', () => {
  let petId;
  let petName;

  before(() => {
      petId = Math.floor(1000 + Math.random() * 9000); // Genera un ID aleatorio de 4 dígitos
      petName = Array.from({ length: 6 }, () => Math.random().toString(36).charAt(2)).join(''); // Genera un nombre aleatorio de 6 caracteres
  });

it('Test Login', { env: { snapshotOnly: true } }, () => {
   
  cy.fixture('data.json').then((userData) => {
    cy.loginApi(userData.userApi,userData.passwordApi).then(response =>{
      cy.validaloginResponse(response)
    }) 
    });
 }); 

it('Test Sumar Mascota', { env: { snapshotOnly: true } }, () => {
    
    cy.addPet(petId,petName).then(responsePet =>{
      cy.validaAddPet(responsePet,petId,petName)
    }) 
    }); 

it('Test Consultar Mascota Agregada', { env: { snapshotOnly: true } }, () => {
    cy.searchPet(petId,petName).then(responsePet =>{
        cy.validasearchPet(responsePet,petId,petName)
    }) 
    }); 

it('Test Consulta Búsuqeda por Status Available', { env: { snapshotOnly: true } }, () => {
    
    cy.findByStatus().then(responseFindByStatus =>{
        cy.validafindByStatus(responseFindByStatus)
      }) 
      }); 
      
it('Test Update de Nombre al ID Creado', { env: { snapshotOnly: true } }, () => {
    
    cy.updatePet(petId,petName).then(responseUpdate =>{
        cy.validaUpdatePet(responseUpdate,petId,petName)
      }) 
      });
      
it('Test Update de Nombre al ID Creado y estatus a SOLD', { env: { snapshotOnly: true } }, () => {
    
      cy.updateNameStatusPet(petId,petName).then(responseUpdateNS =>{
        cy.validaUpdateNameStatusPet(responseUpdateNS,petId,petName)
      }) 
      });
})