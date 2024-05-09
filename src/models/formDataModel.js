const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
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
    const sql = 'INSERT INTO lfd_customer_data (first_name, last_name, email, phone, business_name, business_address, business_phone, preferred_reseller, acceptTerms, receiveEmails, customer_selected_skus, customer_answers, sku_results) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
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
    await query(sql, values);
};
