# Speedrun

## En BD
```json
{
    "id": "string",
    "gameId": "string",
    "userId": "string",
    "timeInSeconds": 0
}
```

## Solicitudes
### POST
1. Debe validar que el usuario y el videojuego existan y que el tiempo en segundos sea mayor a 0.
```json
{
    "gameId": "string",
    "userId": "string",
    "timeInSeconds": 0
}
```

### GET Todos
```json
{
    "id": "string",
    "gameId": "string",
    "userId": "string",
    "timeInSeconds": 0
}
```

### GET (id)
```json
{
    "id": "string",
    "user": {
        "id": "string",
        "name": "string",
        "email": "string",
        "photo": "string"
    },
    "game": {
        "id": "string",
        "name": "string",
        "rating": 0
    },
    "timeInSeconds": 0
}
```

