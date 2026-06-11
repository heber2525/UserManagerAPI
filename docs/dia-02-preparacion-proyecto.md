# Día 2: Preparación del proyecto

## Qué he hecho

- He inicializado el proyecto Node.js.
- He instalado Express.
- He configurado TypeScript.
- He creado la carpeta src.
- He creado el archivo src/server.ts.
- He arrancado el servidor en local.
- He probado la respuesta desde navegador o Thunder Client.

## Comando para arrancar el proyecto

```bash
npm run dev
```

## URL de prueba

```text
http://localhost:3000
```

## Respuesta obtenida

```json
{
  "message": "UserManager API"
}
```

## Explicación personal

### ¿Qué hace el archivo src/server.ts?'

- Arranca el servidor de la API
- Configura Express
- Defie las rutas de las respuestas de las peticiones que se hagan

### ¿Qué hace app.listen?

- Pone el servidor a escuchar en el puerto 3000.

### ¿Qué hace app.get?

- Crea una ruta para peticiones tipo GET y responde a esa peticion.

### ¿Por qué usamos express.json?

- Es para poder entoender el formato json que es como le llegan los datos

### Prueba de errores

- Cambié el puerto - ERROR ERROR: Legacy octal literals cannot be used in strict mode (corregí el puerto)
- Cambie unas llaves de lugar - ERROR: Expected "]" but found "'Node.js'" (corregí las llaves)
