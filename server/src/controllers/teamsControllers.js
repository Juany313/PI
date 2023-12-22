const {Team} = require("../db");
const axios = require("axios");


const getAllTeams = async () => {

    const teamsDB = await Team.findAll();
   


    const teams = [];
    
    const infoApi = (await axios.get(`http://localhost:5000/drivers`)).data;

            infoApi.forEach(element => {
                teams.push(element.teams);
            });

    // Combina todas las palabras en un solo string y divide por comas
    let todasLasPalabras = teams.join(',').split(',');

    // Utiliza un Set para eliminar duplicados y luego convierte de nuevo a un arreglo
    let teamsSinRepetir = [...new Set(todasLasPalabras)];
        
    //En una primera instancia, cuando la base de datos este vacía, 
    //deberás guardar todos los teams que encuentres en la API.
        if (teamsDB.length !== 0) {
            return teamsSinRepetir;
        };

        

        async function agregarEquiposEnBaseDeDatos() {
            teamsSinRepetir.forEach(async (element) => {
                let name = element;
                try {
                    await Team.create({ name });
                    console.log(`Equipo ${name} agregado a la base de datos.`);
                } catch (error) {
                    console.error(`Error al agregar el equipo ${name}: ${error.message}`);
                }
            });
        }
        
        // Llamo a la función para comenzar el proceso
        agregarEquiposEnBaseDeDatos();
        

    return teamsSinRepetir;
};

module.exports={
    getAllTeams
}
