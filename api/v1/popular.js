const { con, query } = require('../../connection')

module.exports = {
    getPopularCategory: async () => {
        try {
            const rows = await query("SELECT * FROM popular")
            let popular_categories = { "message": "OK", "http_code": 200, "data": rows }
            return popular_categories
        } catch (err) {
            console.log("error", err);
        }
    }
}