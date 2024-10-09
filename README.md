# Antes de instalar este repositorio.
Antes de empezar con la instalación del repositorio, necesitaremos instalar un par de herramientas:
- [Node](https://nodejs.org/en/): Para desarrollar los servicios web.
- [Postman](https://www.postman.com/downloads/): Para probar las solicitudes http que vamos a desarrollar.
- [Instancia de mongo](https://www.mongodb.com/products/platform/atlas-database): Iniciar una instancia de mongo en mongo atlas o en cualquier otro servicio en la nube.  Adicionalmente, se puede instalar mongo atlas para más comodidad de realizar consultas.  Nota: Si tiene problemas para conectarse, verifique las reglas de seguridad como se vio en clase.

# Instalar este repo
Descargue el repositorio en su máquina local, e instale las dependencias.
```cmd
npm install
```
Algunos de los paquetes que se instalarán son:
1. Express
2. dotenv
3. mongoose

Asegúrese también de instalar globalmente el paquete `nodemon`.
```
npm install -g nodemon
```

Cree un archivo en la raíz del proyecto llamado `.env`, el cual es un archivo que NO SE SUBE A GIT, y contiene información sensible que no debe ser compartido en el control de versiones.
