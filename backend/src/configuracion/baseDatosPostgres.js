/*const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mi_base_de_datos_usuarios',
    password: 'admin',
    port: 5432
});
const conectarBDPostgres = async () => {
    try {
        await pool.connect();
        console.log('Conexión exitosa a PostgreSQL');
    } catch (error) {
        console.error('Error al conectar a PostgreSQL:', error.message);
    }
};

module.exports = { conectarBDPostgres, pool };*/

const { Pool } = require('pg');

const dbConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

const pool = new Pool(dbConfig);

const conectarBDPostgres = async () => {
  try {
    await pool.connect();
    console.log('Conexión exitosa a PostgreSQL');
  } catch (error) {
    console.error('Error al conectar a PostgreSQL:', error.message);
  }
};

module.exports = { conectarBDPostgres, pool };