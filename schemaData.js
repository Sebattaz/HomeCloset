// POST /user

request: [
    payload = {
        email : String,
        password: String
    }
]

// POST /login

request: [
    payload = {
        email : String,
        password: String,

    }

]

response:[
    token = String,
    usuario = {
        id: Number,
        email: String,
        nombre: String,
        direccion: String
    }
]

// POST /user/new

request:[
    {
        rut: String,
        email: String,
        password: String,
        nombre: String,
        edad: Number,
        direccion: String
    }
]

// POST /administrador

request: [
    payload = {
        email : String,
        password: String,

    }

]

response:[
    token = String,
    usuario = {
        id: Number,
        email: String,
        nombre: String,
        direccion: String
    }
]

// POST /administrador/new

request:[
    {
        rut: String,
        password: String,
        email: String,
        nombre: String
    }
]


// GET /productos/all

response:[
        {
            id: Number,
            nombre: String,
            img: String,
            precio: Number
        },
        {
            id: Number,
            nombre: String,
            img: String,
            precio: Number
        }
    
]

// GET /productos/:id

response:[
    {
        id:Number,
        nombre: String,
        descripcion: String,
        img:String,
        stock: Number,
        precio:Number        
    }
]

// POST /productos

request:[
    {
        id: String,
        nombre: String,
        descripcion: String,
        img: String,
        stock: Number,
        precio: Number,
        rutUsu: String
    }
]

// GET /like

response:[
    {
        id: Number,
        nombre: String,
        img: String,
        precio: Number
    }
]

// POST /like

request:[
    {
        id: Number,
        nombre: String,
        img: String,
        precio: Number
    }

]







