// const gallery_data = { "images": [{ "id": "7c05f4fc-661d-41f4-87cb-0849f239354b", "name": "pp.jpeg", "size": 40429, "width": 548, "height": 548, "aspect_ratio": 1, "created_at": { "date": "2020-07-25 07:10:11.000000", "timezone_type": 3, "timezone": "Australia\/Sydney" }, "images": { "thumbnail": "\/public/static/images\/uploads\/thumbnail\/7c05f4fc-661d-41f4-87cb-0849f239354b.jpg", "small": "\/public/static/images\/uploads\/small\/7c05f4fc-661d-41f4-87cb-0849f239354b.jpg", "medium": "\/public/static/images\/uploads\/medium\/7c05f4fc-661d-41f4-87cb-0849f239354b.jpg", "large": "\/public/static/images\/uploads\/large\/7c05f4fc-661d-41f4-87cb-0849f239354b.jpg" } }] }

// module.exports = gallery_data

const { con, query } = require('../../connection')

module.exports = {
    getGalleryData: async (id) => {
        try {
            let gallery_data = ""

            let sql = "SELECT * FROM gallery WHERE id = ?"
            await con.query(sql, [id], (err, result) => {
                if (err) throw err
                gallery_data = { "message": "OK", "http_code": 200, "data": result }
            })
            return gallery_data
        } catch (err) {
            console.log("error", err);
        }
    }
}