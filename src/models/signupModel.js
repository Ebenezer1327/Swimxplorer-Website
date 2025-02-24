const db = require("../config/db");

module.exports = {
    async getAllUsers() {
        const [rows] = await db.query('SELECT * FROM customer_inquiries');
        return rows;
    },
    async createUser(name, email, phone_number, location, promo_code, queries) {
        const [result] = await db.query('INSERT INTO customer_inquiries (name, email, phone_number, location, promo_code, queries) VALUES (?, ?, ?, ?, ?, ?)', [name, email, phone_number, location, promo_code, queries]);
        return result.insertId;
      },
      async getUserById(id) {
        const [rows] = await db.query('SELECT * FROM customer_inquiries WHERE id = ?', [id]);
        return rows[0];
      },
      async updateUser(id, name, email, phone_number, location, promo_code, queries) {
        await db.query('UPDATE customer_inquiries SET name = ?, email = ?, phone_number = ?, location =?, promo_code = ?, queries = ? WHERE id = ?', [name, email, phone_number, location, promo_code, queries, id]);
      },
      async deleteUser(id) {
        await db.query('DELETE FROM customer_inquiries WHERE id = ?', [id]);
      },
}