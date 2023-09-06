const DATA_URL= "https://jsonplaceholder.typicode.com/users"

const nombre= document.getElementById("nombre").value;
const apellido= document.getElementById("apellido").value;
const fechaNacimiento= document.getElementById("fechaNacimiento").value;

const user = {
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento
};

 fetch(DATA_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data=> {
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.error("Error en la solicitud:", error);
    });

