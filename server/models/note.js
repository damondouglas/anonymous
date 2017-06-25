const mongoose = require("mongoose")
const NoteSchema = mongoose.Schema({
    content: {type: String, require: true}
}, {timestamps: true})

mongoose.model("Note", NoteSchema)