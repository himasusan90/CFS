const { con, query } = require('../../connection')

module.exports = {
    getFramesBySearch: async function (search_text) {

        try {
            const rows = await query(`SELECT * FROM frames WHERE category LIKE '%${search_text}%'`)

            let search_data = { "message": "OK", "http_code": 200, "data": rows }

            return search_data
        } catch (err) {
            console.log("error", err);
        }
    }
}