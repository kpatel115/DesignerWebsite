const Client = require('pg');

const connectionString = 'postgresql://ztzvwrnb:30Tr3dbgCbxG1FcAvgEVYPiGOjYxPk0b@castor.db.elephantsql.com/ztzvwrnb'

// postgres db config
const dbConfig = {
    user: 'ztzvwrnb',
    host: 'localhost',
    database: 'castor',
    password: '30Tr3dbgCbxG1FcAvgEVYPiGOjYxPk0b',
    port: 5000
}

// create a postgres client
const client = new Client({
    connectionString: connectionString
})

// connect to postgres
async function connectToPostgres() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Error connecting to PostgreSQL:', error);
    }
}

connectToPostgres()
    .then(() => runQuery())
    .catch((error) => console.error('Error:', error));

    
// Export the client and connect function
module.exports = {
    client,
    connectToPostgres,
};
