const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'project1',
    host: 'localhost',
    db: 'reactit_db',
    password: 'project1',
    port:5432
});

module.exports = pool;