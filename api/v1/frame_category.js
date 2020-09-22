const { con, query } = require('../../connection')

module.exports = {
    getFramesByCategory: async function (category) {

        if (category === "on_sale") {
            try {
                const rows = await query("SELECT * FROM on_sale")
                let on_sale_data = { "message": "OK", "http_code": 200, "data": rows }
                return on_sale_data
            } catch (err) {
                console.log("error", err);
            }
        } else {
            try {
                const rows = await query(`SELECT * FROM frames WHERE category LIKE '%${category}%'`)

                let frames_data = { "message": "OK", "http_code": 200, "data": rows }

                return frames_data
            } catch (err) {
                console.log("error", err);
            }
        }
    }
}