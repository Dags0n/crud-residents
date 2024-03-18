import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gabr123iel@',
  database: 'crud-residents'
});