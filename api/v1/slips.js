const { con, query } = require('../../connection')

module.exports = {
    getSlipData: async () => {
        try {
            const rows = await query("SELECT * FROM slips")
            let slips = { "message": "OK", "http_code": 200, "data": rows }
            return slips
        } catch (err) {
            console.log("error", err);
        }
    }
}