const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const {getTeamsHandler} = require("./src/handlers/teamsHandlers.js")

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  
})
}).catch(error => console.error(error));

