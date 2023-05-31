// lib/cosmos.js
const { CosmosClient } = require("@azure/cosmos");

async function cosmosContainer() {
const client = new CosmosClient(process.env.COSMOSDB_CONNECTION_STRING);
const {database} = await client.databases.createIfNotExists({id: "people"});
const {container} = await database.containers.createIfNotExists({id: "people"});

return {container};
}
module.exports = { cosmosContainer };
