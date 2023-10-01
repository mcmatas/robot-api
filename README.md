# Robot API

Este es un API simple que controla un robot capaz de moverse en un terreno 10x10 y generar una vista 3D a partir de fotos tomadas por el robot. La aplicación está escrita en TypeScript y utiliza Express.js para la creación del servidor web.

## Uso

### Instalación

1. Clona este repositorio en tu máquina local:
    ```
    git clone https://github.com/mcmatas/robot-api.git
    ```

2. Navega al directorio del proyecto:
    ```
    cd robot-api
    ```

3. Instala las dependencias:
    ```
    npm install
    ```

### Ejecución
Para ejecutar la aplicación en modo de desarrollo:
```
npm run dev
```

La aplicación estará disponible en http://localhost:3000.

### API Endpoints
- **POST /api/robot/move**: Mueve el robot en el terreno según los comandos especificados en el cuerpo de la solicitud.

Ejemplo de solicitud JSON:
```
{
  "commands": "LMMMRMMRRMMML"
}
```
Respuesta exitosa:
```
{
    "position": "7:9:E"
}
```