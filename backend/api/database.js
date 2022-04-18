const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'project1',
    host: 'database-1.cftm6s4rkqne.us-east-1.rds.amazonaws.com',
    database: 'reactit_db',
    password: 'project1',
    port:5432
});

module.exports = pool;