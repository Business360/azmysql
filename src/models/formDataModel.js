const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.AZURE_MYSQL_HOST,
    user: process.env.AZURE_MYSQL_USER,
    password: process.env.AZURE_MYSQL_PASSWORD,
    database: process.env.AZURE_MYSQL_DATABASE,
    port: process.env.AZURE_MYSQL_PORT,
    ssl: process.env.AZURE_MYSQL_SSL ? JSON.parse(process.env.AZURE_MYSQL_SSL) : false // Parse boolean value if provided
});

// Function to execute SQL queries
const query = (sql, values) => {
    // console.log(values);
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            connection.query(sql, values, (err, results) => {
                connection.release(); // release the connection
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    });
};

// Function to check if a table exists in the database
const tableExists = async (tableName) => {
    const sql = `SELECT COUNT(*) AS count FROM information_schema.tables WHERE table_schema = ? AND table_name = ?`;
    const values = [process.env.AZURE_MYSQL_DATABASE, tableName];
    const result = await query(sql, values);
    return result[0].count === 1;
};

// Create a new form data entry
exports.create = async ({
    first_name,
    last_name,
    email,
    phone,
    business_name,
    business_address,
    business_phone,
    preferred_reseller,
    acceptTerms,
    receiveEmails,
    customer_selected_skus,
    customer_answers,
    sku_results
}) => {
    const tableName = 'lfd2_stg_customer_data';
    const tableExistsFlag = await tableExists(tableName);

    // Create the table if it doesn't exist
    if (!tableExistsFlag) {
        const createTableSQL = `
            CREATE TABLE ${tableName} (
                customer_id INT AUTO_INCREMENT PRIMARY KEY,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                first_name VARCHAR(255) NOT NULL,
                last_name VARCHAR(255) NOT NULL,
                email VARCHAR(100) NOT NULL,
                phone VARCHAR(20),
                business_name VARCHAR(255),
                business_address TEXT,
                business_phone VARCHAR(20),
                preferred_reseller VARCHAR(255),
                acceptTerms BOOLEAN NOT NULL,
                receiveEmails BOOLEAN,
                customer_answers TEXT,
                sku_results TEXT,
                customer_selected_skus TEXT
            )
        `;
        await query(createTableSQL, []);
    }

    // Insert the data into the table
    const insertSQL = `
        INSERT INTO ${tableName} (first_name, last_name, email, phone, business_name, business_address, business_phone, preferred_reseller, acceptTerms, receiveEmails, customer_selected_skus, customer_answers, sku_results) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        first_name,
        last_name,
        email,
        phone,
        business_name,
        business_address,
        business_phone,
        preferred_reseller,
        acceptTerms,
        receiveEmails,
        customer_selected_skus,
        customer_answers,
        sku_results
    ];
    await query(insertSQL, values);
};
