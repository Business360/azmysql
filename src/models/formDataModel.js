try{
    const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.AZURE_MYSQL_HOST,
    user: process.env.AZURE_MYSQL_USER,
    password: process.env.AZURE_MYSQL_PASSWORD,
    database: process.env.AZURE_MYSQL_DATABASE,
    port: process.env.AZURE_MYSQL_PORT,
    // ssl: process.env.AZURE_MYSQL_SSL ? JSON.parse(process.env.AZURE_MYSQL_SSL) : false // Parse boolean value if provided
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
    const tableName = 'lfd_customer_data';
    const tableExistsFlag = await tableExists(tableName);

    // Create the table if it doesn't exist
    if (!tableExistsFlag) {
        const createTableSQL = `
            CREATE TABLE ${tableName} (
                id INT AUTO_INCREMENT PRIMARY KEY,
                first_name VARCHAR(255),
                last_name VARCHAR(255),
                email VARCHAR(255),
                phone VARCHAR(20),
                business_name VARCHAR(255),
                business_address VARCHAR(255),
                business_phone VARCHAR(20),
                preferred_reseller VARCHAR(255),
                acceptTerms BOOLEAN,
                receiveEmails BOOLEAN,
                customer_selected_skus TEXT,
                customer_answers TEXT,
                sku_results TEXT
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

}
catch (error) {
    console.log(error);
}
