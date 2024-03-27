import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
 host: 'dpg-co237tg21fec73d4vbr0-a.oregon-postgres.render.com',
 user: 'marketplace_t7f8_user',
 password: 'oc4eejuAEOv6OYuNl42LE5eOXRfISFcE',  
 database: 'marketplace_t7f8',
 allowExitOnIdle: true,
 ssl: true,
  })

export{pool}