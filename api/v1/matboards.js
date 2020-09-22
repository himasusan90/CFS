const { con, query } = require('../../connection')

module.exports = {
    getMatboards: async () => {
        try {
            const all_rows = Array()

            const rows = await query("SELECT * FROM matboards")
            rows.forEach(row => {
                
                let thumbnail = row['thumbnail']
                let tile = row['tile']

                delete row.thumbnail && delete row.tile

                let images = { "thumbnail": thumbnail, "tile": tile }
                row["images"] = images

                all_rows.push(row)
            })

            let matboards = all_rows
            return matboards
        } catch (err) {
            console.log("error", err);
        }
    },

    getMatboardCategory: async () => {
        try {
            const rows = await query("SELECT * FROM matboard_category")
            return rows
        } catch (err) {
            console.log("error", err);
        }
    }
}
