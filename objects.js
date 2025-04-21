//creates class for room
class Room
{
    constructor(type, description, price)
    {
        this.type = type;
        this.description = description;
        this.price = price;
    }
}

//method to display rooms
Room.prototype.display = function()
{
    return `${this.type}: ${this.description} -$${this.price.toFixed(2)} per night`;
}

//creates rooms
const regularRoom = new Room("Regular", "1 king size bed and small bathroom and small room size", 85.00);
const deluxeRoom = new Room("Deluxe", "2 king size bed with small bathroom and medium room size", 100.00);
const suiteRoom = new Room("Suite", "1 king size bed woth master bathroom and medium room size", 125.00);
const masterRoom = new Room("Master", "2 king size bed + 1 twin size bed with master bathrooms and large room size", 160.00);

