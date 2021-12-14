# Gestión Biblioteca *(nombre provisional)*
Es una aplicación web donde los usuarios pueden crear y gestionar sus propias Bibliotecas Virtuales. Así como prestar libros o tomarlos prestados de las Bibliotecas de otros Usuarios.
***
## Instalación
Necesitarás instalar la ultima versión de [NodeJs](https://nodejs.org/es/) y en la ruta del proyecto escribir en tu Terminal:
```
npm init
```
Despues instalar todas las dependencias que aparecen en el archivo package.json. También desde tu Terminal:
```
npm i bcrypt dotenv express jsonwebtoken mongoose
```
Si aun no tienes instalado nodemon de manera global en tu PC, puedes instalarlo desde tu Terminal.

Instala en el PC de manera global (Recomendado):
```
npm i -g nodemon
```
Instala en package.json, solo para este proyecto:
```
npm i -D nodemon
```
Necesitarás crear un archivo .env donde guardarás los datos que deberán ser secretos. A saber:
```
PORT= Nº de puerto para trabjar.

URI= ruta de MongoDB.

JWT_SECRET= frase secreta que abrirá el token.
```
También necesitarás un archivo .gitignore donde meterás todo lo que no quieras que se suba a GitHub.
```
node_modules/
.env
/package-lock.json
```
***
## Descripción funcional de la aplicación.
Como visitante de la web podrás acceder a una home desde donde registrarse en la web y hacer login.

Como Usuario Registrado podrás:
- Modificar el propio Usuario.
- Reservar libros en las Bibliotecas que lo permitan.
- Ver las reservas de tu perfil.
- Crear una Biblioteca.
- Añadir Libros a tu biblioteca.
- Buscar las bibliotecas de otros Usuarios y ver su contenido.
- Crear nuevos Libros para añadirlos a tu biblioteca.

Existen Rutas reservadas solo para un Administrador. Tales como:
- Modificar o Eliminar un Libro ya existente.
- Ver, Modificar o Eliminar las Reservas de cualquier Usuario.
***
## Tecnologías y Herramientas utilizadas.
- [Javascript:](https://developer.mozilla.org/es/docs/Web/JavaScript) Como lenguaje de programación.
- [MongoDB:](https://www.mongodb.com/) Como Base de datos.
- [Postman:](https://www.postman.com/) Como Frontend para ejecutar las distintas rutas.
- [Visual Estudio Code:](https://code.visualstudio.com/) Como editor de código.
- [Git Bash](https://gitforwindows.org/) Como Terminal.
- [Xmind:](https://www.xmind.net/) Para crear el esquema de la relación de datos.
- [Express:](https://expressjs.com/es/) Para crear y relacionar las distintas rutas.
- [Mongoose:](https://mongoosejs.com/) Para crear los Modelos y relacionarlos entre ellos.
- [Dotenv:](https://www.npmjs.com/package/dotenv) Para mantener en secreto nuestros datos sensibles.
- [Bcrypt:](https://www.npmjs.com/package/bcrypt) Para encriptar las contraseñas de los Usuarios.
- [Jsonwebtoken:](https://www.npmjs.com/package/jsonwebtoken?activeTab=readme) Para hacer login y privatizar las rutas que solo podrá usar un Usuario Registrado.
- [React:](https://es.reactjs.org/docs/getting-started.html) Para hacer la parte Frontend
- [Github:](https://github.com/) Como repositorio.
- [Google:](https://www.google.es/) Como principal herramienta de busqueda.
- [Trello:](https://trello.com/) Para organizar las tareas.
- [Google Calendar](https://calendar.google.com/) Para gestionar mi tiempo de manera eficiente.
***
## Versión
- Versión 1.0 - 18/11/2021

- Versión 1.1 - 15/12/2021
    - Se ha añadido la parte Frontend al proyecto.
    - Se han añadido 3 nuevas rutas al Backend.
    - Ahora se pueden añadir portadas a los libros.
    - Se han personalizado los errores para el usuario.
***
## To Do
- Añadir funcionalidades Delete
- Cambiar estado de un Libro al crear una reserva
- Añadir Administrador 
- Gestión de errores.
- Añadir un Modo Oscuro.
***
## Relación de datos.
![gestion_biblioteca](https://user-images.githubusercontent.com/91878984/142232089-2c290cee-6097-4def-9aea-7601711f4992.png)
***
## Agradecimientos
- A mi mentor de Let's Coder, Lluís, por su paciencia para explicarme las cosas a lo Richard Feynman.
- A mis compañeros, Abel y Noelia, por los ánimos en los momentos de bajón y sacar tiempo para ayudarme con el proyecto.
- A mi pareja, Cristina, por permitirme aprovechar la oportunidad de estudiar y aguantarme durante 19 años ♥‿♥
- A mi mismo por la paciencia y el autocontrol adquiridos.