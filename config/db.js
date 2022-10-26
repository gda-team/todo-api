const { Pool } = require('pg');

const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
	user: 'oetzeioj',
	host: 'peanut.db.elephantsql.com',
	database: 'oetzeioj',
	password: 'V1HSQczUMcdz1Vh50Nk8sFc3W-AJ0JCb',
	port: 5432,
});

module.exports = pool;
