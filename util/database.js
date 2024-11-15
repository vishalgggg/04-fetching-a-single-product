// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'ecom',
//     password: '0000'
// });

// module.exports = pool.promise();
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase',
  insecureAuth: true
});
module.exports = pool.promise();
// const mysql = require('mysql2/promise');

// const connection = await mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '0000',
//   database: 'ecom',
//   port: 3306,
//   authPlugins: {
//     mysql_native_password: async () => {
//       return await mysql2.auth.auth(connection, { user: 'root', password: '0000' });
//     },
//   },
// });
// const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '0000',
//   database: 'ecom',
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// module.exports = pool;
