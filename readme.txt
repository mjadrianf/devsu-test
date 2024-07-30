# Documentacion Test

Cypress es una herramienta de prueba de front-end de próxima generación construida para la web moderna. Abordamos los principales puntos problemáticos que enfrentan los desarrolladores y los ingenieros de control de calidad al probar aplicaciones modernas.

Nosotros hacemos posible:

1. Configurar pruebas
2. Escribir pruebas
3. Ejecutar pruebas
4. Depurar pruebas

Cypress a menudo se compara con Selenium; sin embargo, Cypress es fundamental y arquitectónicamente diferente. Cypress no está limitado por las mismas restricciones que Selenium.

Esto te permite escribir pruebas más rápidas, fáciles y confiables.

## ¿Quién usa Cypress?

Los usuarios suelen ser desarrolladores o ingenieros de control de calidad que construyen aplicaciones web utilizando marcos modernos de JavaScript.

Cypress te permite escribir todo tipo de pruebas:

1. Pruebas de extremo a extremo
2. Pruebas de integración
3. Pruebas unitarias

Cypress puede probar cualquier cosa que se ejecute en un navegador.

## Características

Cypress viene completamente equipado, con baterías incluidas. Aquí hay una lista de cosas que puede hacer y que ningún otro marco de pruebas puede:

- **Viaje en el tiempo**: Cypress toma instantáneas mientras se ejecutan tus pruebas. Pasa el cursor sobre los comandos en el registro de comandos para ver exactamente lo que sucedió en cada paso.
- **Depurabilidad**: Deja de adivinar por qué fallan tus pruebas. Depura directamente desde herramientas familiares como las Herramientas de Desarrollador. Nuestros errores legibles y trazas de pila hacen que la depuración sea muy rápida.
- **Espera automática**: Nunca agregues esperas o sleeps a tus pruebas. Cypress espera automáticamente los comandos y las aserciones antes de continuar. No más infierno asíncrono.
- **Espías, Stubs y Relojes**: Verifica y controla el comportamiento de funciones, respuestas del servidor o temporizadores. La misma funcionalidad que te encanta de las pruebas unitarias está al alcance de tu mano.
- **Control de tráfico de red**: Controla fácilmente, simula y prueba casos límite sin involucrar tu servidor. Puedes simular el tráfico de red como desees.
- **Resultados consistentes**: Nuestra arquitectura no utiliza Selenium ni WebDriver. Di hola a pruebas rápidas, consistentes y confiables que no fallan al azar.
- **Capturas de pantalla y videos**: Ve capturas de pantalla tomadas automáticamente en caso de fallos, o videos de toda tu suite de pruebas cuando se ejecutan desde la CLI.
- **Pruebas en múltiples navegadores**: Ejecuta pruebas en navegadores de la familia Firefox y Chrome (incluidos Edge y Electron) localmente y de manera óptima en una canalización de Integración Continua.

## Comenzando

### Instalando Cypress

En tu IDE favorito (Visual Studio Code es genial) desde la carpeta principal del proyecto, abre la terminal y comienza con los siguientes comandos:

#### Usando npm

Instala Cypress a través de npm:

```bash
cd /tu/ruta/proyecto
npm install cypress --save-dev

### Abrir Cypress
Ahora puedes abrir Cypress desde la raíz de tu proyecto de una de las siguientes maneras:

#### Usando npx
Nota: npx está incluido con npm > v5.2 o se puede instalar por separado.
```bash
npx cypress open

### Ejecución a través de GitHub Actions

Para ejecutar las pruebas a través de GitHub Actions, sigue estos pasos:
1.- Clona el repositorio:
```bash
git clone https://github.com/mjadrianf/devsu-test.git

2.- Instala las dependencias:
```bash
npm install

3.- Ejecuta el workflow de GitHub Actions:
    Ve a la pestaña Actions en tu repositorio de GitHub.
    Selecciona el workflow Cypress QA E2E and API Test.
    Haz clic en Run workflow y elige el tipo de prueba (e2e o api) que deseas ejecutar.

4.- Visualiza los resultados de las ejecuciones
    Ve a https://cloud.cypress.io/projects/dj9uvj/runs y revisa las ejecuciones de los Test


## Explicación y Documentación de los Test
En este repositorio se encuentran los siguientes escenarios de prueba:

1.- e2eLoginTest.cy.js 
    En este test se evalua un escenario E2E que cubre el flujo funcional desde el login hasta la validación de la compra exitosa.
2.- petsApiTest.cy.js 
    En este test se evalua los request a las API:
    a.- Añadir Mascota
    b.- Consultar Mascota Añadida
    c.- Actualizar Mascota Añadida cambiando el nombre y modificando el estado a SOLD
    d.- Consulta de Busqueda por Estatus Disponible