export const clientsData = [
    {
        "id": "0001",
        "name": { "first": "hannes", "last": "sloos" },
        "location": { "street": "4556 korte minrebroederstraat", "city": "tiel" },
        "email": "hannes.sloos@example.com",
        "dob": { "date": "1973-10-20", "age": 45 },
        "phone": "(076)-628-5279",
        "cars": [{
            "make": "Suzuki",
            "model": "GZ250",
            "year": "2012",
            "vin": "WDDGF8AB8DA785238",
            "orders": [
                {
                    "date": "21-04-2019",
                    "orderAmount": "3000",
                    "status": "cancelled"
                }
            ]
        }]
    },
    {
        "id": "0002",
        "name": { "first": "salvatore", "last": "guerin" },
        "location": { "street": "7952 avenue debourg", "city": "sessa" },
        "email": "salvatore.guerin@example.com",
        "dob": { "date": "1994-05-02", "age": 25 },
        "phone": "(070)-026-7858",
        "cars": [{
            "make": "Bentley",
            "model": "Flying Spur",
            "year": "2015",
            "vin": "1FTFW1CF0DFD93452",
            "orders": []
        }]
    },
    {
        "id": "0003",
        "name": { "first": "noémie", "last": "lenderink" },
        "location": { "street": "9375 jan pieterszoon coenstraat", "city": "heumen" },
        "email": "noémie.lenderink@example.com",
        "dob": { "date": "1966-06-19", "age": 53 },
        "phone": "(252)-408-3817",
        "cars": [{
            "make": "Mercedes-Benz",
            "model": "B-Class",
            "year": "2017",
            "vin": "KM8SC13E83U558751",
            "orders": []
        }]
    },
    {
        "id": "0004",
        "name": { "first": "valtteri", "last": "salmi" },
        "location": { "street": "4047 verkatehtaankatu", "city": "valkeakoski" },
        "email": "valtteri.salmi@example.com",
        "dob": { "date": "1945-10-31", "age": 73 },
        "phone": "08-310-259",
        "cars": [{
            "make": "Chrysler",
            "model": "Pacifica",
            "year": "2016",
            "vin": "1N4AL3AP0DC145221",
            "orders": []
        }]
    },
    {
        "id": "0005",
        "name": { "first": "alexis", "last": "white" },
        "location": { "street": "6011 symonds street", "city": "timaru" },
        "email": "alexis.white@example.com",
        "dob": { "date": "1971-07-17", "age": 48 },
        "phone": "(003)-691-9711",
        "cars": [{
            "make": "Lincoln",
            "model": "Corsair",
            "year": "2018",
            "vin": "KNADM5A36E6377333",
            "orders": []
        }]
    }
];

export function deleteClient(data) {
    const newData = clientsData;
    newData.map((client, index) => {
        if (client.id === data.id) {
            client.cars.map(car => {
                if (car.orders.length === 0) {
                    newData.splice(index, 1);
                } else {
                    alert("You can't delete this client. Please, check his orders!")
                }
            })
        }
    })
    return newData
}

export function addClient (client) {
    const newData = clientsData;

}