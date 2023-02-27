const express = require('express');
const app = express();
const port = 3000;

// Class for the room types with properties codeName, prize
class RoomType {
    prize: number;
    codeName: string;
    constructor(codeName: string, prize: number) {
        this.codeName = codeName;
        this.prize = prize;
    }
}

// Array to store RoomType objects
let roomTypes: RoomType[] = [];

// Creating many room types
app.post('/room-types', (req: any, res: any) => {
    const codeName = req.body.codeName;
    const prize = req.body.prize;

    let roomType = new RoomType(codeName, prize);
    roomTypes.push(roomType);
    res.send(`Room type with code name ${codeName} and prize ${prize} created.`);
});

// Editing a room type using id
app.put('/room-types/:id', (req: any, res: any) => {
    const id = req.params.id;
    const codeName = req.body.codeName;
    const prize = req.body.prize;

    let roomType = roomTypes[id];
    roomType.codeName = codeName;
    roomType.prize = prize;
    res.send(`Room type with id ${id} edited.`);
});

// Deleting room type using id
app.delete('/room-types/:id', (req: any, res: any) => {
    const id = req.params.id;
    roomTypes.splice(id, 1);
    res.send(`Room type with id ${id} deleted.`);
});

// Fetching single room type using id
app.get('/room-types/:id', (req: any, res: any) => {
    const id = req.params.id;
    res.send(roomTypes[id]);
});

// Fetching many room types
app.get('/room-types', (req: any, res: any) => {
    res.send(roomTypes);
});

// To search and filter rooms based on its name, types and prices
app.get('/room-types/search', (req: any, res: any) => {
    const codeName = req.query.codeName;
    const prize = req.query.prize;

    let filteredRoomTypes = roomTypes.filter((roomType: RoomType) => {
        return roomType.codeName === codeName && roomType.prize === prize;
    });
    const express = require('express');
const app = express();
const port = 3000;

// Class for the room types with properties codeName, prize
class RoomType {
    codeName: any;
    prize: number;
    constructor(codeName: string, prize: number) {
        this.codeName = codeName;
        this.prize = prize;
    }
}

// Array to store RoomType objects
let roomTypes: RoomType[] = [];

// Middleware to authenticate user
const authenticateUser = (req: any, res: any, next: any) => {
    // code to authenticate user
}

// Middleware to authorize user
const authorizeUser = (role: string) => {
    return (req: any, res: any, next: any) => {
        // code to authorize user
    }
}

// Middleware to validate data
const validateData = (req: any, res: any, next: any) => {
    // code to validate data
}

// Creating many room types
app.post('/room-types', authenticateUser, authorizeUser('admin'), validateData, (req, res) => {
    const codeName = req.body.codeName;
    const prize = req.body.prize;

    let roomType = new RoomType(codeName, prize);
    roomTypes.push(roomType);
    res.send(`Room type with code name ${codeName} and prize ${prize} created.`);
});

// Editing a room type using id
app.put('/room-types/:id', authenticateUser, authorizeUser('admin'), validateData, (req, res) => {
    const id = req.params.id;
    const codeName = req.body.codeName;
    const prize = req.body.prize;

    let roomType = roomTypes[id];
    roomType.codeName = codeName;
    roomType.prize = prize;
    res.send(`Room type with id ${id} edited.`);
});

// Deleting room type using id
app.delete('/room-types/:id', authenticateUser, authorizeUser('admin'), (req, res) => {
    const id = req.params.id;
    roomTypes.splice(id, 1);
    res.send(`Room type with id ${id} deleted.`);
});

// Fetching single room type using id
app.get('/room-types/:id', (req, res) => {
    const id = req.params.id;
    res.send(roomTypes[id]);
});

// Fetching many room types
app.get('/room-types', (req, res) => {
    res.send(roomTypes);
});

// To search and filter rooms based on its name, types and prices
app.get('/room-types/search', (req, res) => {
    const codeName = req.query.codeName;
    const prize = req.query.prize;

    let filteredRoomTypes = roomTypes.filter((roomType: RoomType) => {
        return roomType.codeName === codeName && roomType.prize === prize;
    });
    res.send(filteredRoomTypes);
});
app.listen (port) => {
    console.log(`Server running at http://localhost:${port}`);
};