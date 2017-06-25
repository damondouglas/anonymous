const path = require("path")
const notes = require('../controllers/notes')

module.exports = (app) => {
    app.post("/note/create", notes.create)
    app.get("/note/list", notes.list)
    app.get("*", (req, res) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}