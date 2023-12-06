import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
 host: 'ddpg-clo7ppkjtl8s73albicg-a.oregon-postgres.render.com',
 user: 'marketplace_yxf3_user',
 password: 'S4Lq9CvoWs7VS3RQQv3iKpmvYnMH0pCA',  
 database: 'marketplace_yxf3',
 allowExitOnIdle: true,
 ssl: true,
  })

export{pool}