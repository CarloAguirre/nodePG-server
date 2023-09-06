import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
 host: 'localhost',
 user: 'postgres',
 password: '',  // RECUERDA PONER TU CLAVE DE POSTGRES
 database: 'marketplace',
 allowExitOnIdle: true
})

export{pool}