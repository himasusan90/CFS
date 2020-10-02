const express = require('express')
const app = express()

const path = require('path')

//setup view engine as ejs
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

var bodyParser = require("body-parser");

// support parsing of application/json type post data
app.use(bodyParser.json({ limit: "50mb" }));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));

require('dotenv').config()
var port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('index')
})

//under progress
app.post('/api/gallery/chunk/init', (req, res) => {
    console.log(typeof req.body.file_name);
    res.send({ "request_id": "rPzavjV86VuvD5Ve3pdmgWn6DvwA5slJshkMYdagTyOfPPlkm29yxUYr6Ujofvxl" })
})

//under progress
app.post('/api/gallery/chunk', (req, res) => {
    res.send({ "message": "OK" })
})

//under progress
app.post('/api/gallery/chunk/complete', (req, res) => {
    res.send({ "image": { "id": "4bad7cba-e992-4c14-9fcb-3b01f7d67efd", "name": "pp.jpeg", "size": 40429, "width": 548, "height": 548, "aspect_ratio": 1, "created_at": { "date": "2020-07-25 07:40:46.000000", "timezone_type": 3, "timezone": "" }, "images": { "thumbnail": "\/public\/static\/images\/uploads\/thumbnail\/4bad7cba-e992-4c14-9fcb-3b01f7d67efd.jpg", "small": "\/public\/static\/images\/uploads\/small\/4bad7cba-e992-4c14-9fcb-3b01f7d67efd.jpg", "medium": "\/images\/uploads\/medium\/4bad7cba-e992-4c14-9fcb-3b01f7d67efd.jpg", "large": "\/public/\static\/images\/uploads\/large\/4bad7cba-e992-4c14-9fcb-3b01f7d67efd.jpg" } } })
})

app.delete('/api/gallery/image/:id', async (req, res) => {
    res.send({ "message": "OK", "http_code": 200, "data": [] })
})

const popular_category = require('./api/v1/popular')
app.get('/api/frames/category/popular', async (req, res) => {
    let result = await popular_category.getPopularCategory()
    res.send(result)
})

const matboard_category = require('./api/v1/matboards')
app.get('/api/v2/matboards/category', async (req, res) => {
    let result = await matboard_category.getMatboardCategory()
    res.send(result)
})

const matboards_data = require('./api/v1/matboards')
app.get('/api/v2/matboards', async (req, res) => {
    let result = await matboards_data.getMatboards()
    res.send(result)
})

const gallery_data = require('./api/v1/gallery')
app.get('/api/gallery', async (req, res) => {
    let result = await gallery_data.getGalleryData("7c05f4fc-661d-41f4-87cb-0849f239354b")
    res.send(result)
})

app.get('/api/max-upload-size', (req, res) => {
    res.send({ "bytes": 629145600, "formatted": "600 mb" })
})

const slips_data = require('./api/v1/slips')
app.get('/api/frames/category/slips', async (req, res) => {
    let result = await slips_data.getSlipData()
    res.send(result)
})

const frame_code_data = require('./api/v1/code')
app.get('/api/frames/code/:id', (req, res) => {
    res.send(frame_code_data)
})

const bulk_options = require('./api/v1/bulk_options')
app.get('/api/v2/bulk-options/:product_code=CUSTOM_PICTURE_FRAME', (req, res) => {
    res.send(bulk_options)
})

const frame_catObj = require('./api/v1/frame_category')
app.get('/api/frames/category/:category', async (req, res) => {
    let result = await frame_catObj.getFramesByCategory(req.params.category)
    res.send(result)
})

const searchObj = require('./api/v1/search_frame')
app.get('/api/frames/search/:search_text', async (req, res) => {
    console.log(req.params.search_text);
    let result = await searchObj.getFramesBySearch(req.params.search_text)
    res.send(result)
})


const calculated_price = require('./api/v1/price-calculator')
app.post('/api/price-calculator', (req, res) => {
    res.send(calculated_price)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})