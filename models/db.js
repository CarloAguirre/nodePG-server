import pkg from 'pg';
const { Pool } = pkg;

// const pool = new Pool({
//     connectionString: process.env.DB_URL,
//     allowExitOnIdle: true
//   });

const pool = new Pool({
 host: 'dpg-cjvpkoh5mpss73adov4g-a.oregon-postgres.render.com',
 user: 'carlo',
 password: 'zHrtUcw4o5IlpcHM4nvb892XIsHZvkkg',  
 database: 'marketplace_f0gh',
 allowExitOnIdle: true
})

// const pool = new Pool({
//   host: 'localhost',
//   user: 'postgres',
//   password: '$Ony3434',
//   database: 'marketplace',
//   allowExitOnIdle: true
//  })

export{pool}