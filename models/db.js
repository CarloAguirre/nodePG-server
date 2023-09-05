import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
 host: 'localhost',
 user: 'postgres',
 password: '$Ony3434', 
 database: 'marketplace',
 allowExitOnIdle: true
})

export{pool}