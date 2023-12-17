const {Driver,Team} = require("../db");
const {infoCleaner} = require("../utils/index");

const axios = require("axios");



const createDriverDB = async (name,teams,description,image,nationality,dob) =>{
    const newDriver = await Driver.create({name,teams,description,image,nationality,dob})
   
    return newDriver;
};

const getAllDrivers = async () => {

    const infoApi = (await axios.get(`http://localhost:5000/drivers`)).data;
    const driversApi = infoCleaner(infoApi);

    return [...driversDB, ...driversApi];
}

const getDriverById = async (id,source) =>{
    let driver;
     if(source==="api"){
         infoDriver = [(await axios.get(`http://localhost:5000/drivers/${id}`)).data];
         driver = infoCleaner(infoDriver);
         //console.log("····##### respuestaaaaa", infoDriver);
     } else {
         driver = (await Driver.findByPk(id/* , {
             include: {
                 model: Post,
                 attributes: ["title", "body"]
             }
         } */));
        
     }


     return driver;
};

const getDriverByName = async (name) => {

    console.log("ACA NAMEEEE", name);
     const infoApi = (await axios.get(`http://localhost:5000/drivers?name.forename=${name}`)).data;
    const driversApi = infoCleaner(infoApi);
console.log("ACAINFO API", driversApi);
    const driverFiltered = driversApi.filter(driver=> driver.name===name)
    console.log("ACA DRIVER FILTEREDDDDD", driverFiltered);
/*
    const driverDB = await Driver.findAll({where: {name:name}});

    let suma = [...driverFiltered, ...driverDB]

    return suma; */

}


module.exports = {
    createDriverDB,
    getAllDrivers,
    getDriverById,
    getDriverByName
}





