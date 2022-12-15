const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: 'your_mysql_password',
    database: 'your_mysql_database'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
  });
  