const mongoose = require("mongoose")
const Note = mongoose.model("Note")

const async = require("asyncawait/async")
const await = require("asyncawait/await")

const notes = {
    create: async (
        (req, res) => {
            let content = req.body.content
            if (content) {
                let note = new Note({
                    content: content
                })
                try {
                    await (
                        note.save()
                    )
                    res.json(note._id)
                } catch(e) {
                    res.status(500).json(e)
                }
            } else {
                res.status(401).json("missing content")
            }
        }
    ),

    list: async (
        (req, res) => {
            try {
                let noteS = await (
                    Note.find()
                )
                res.json(noteS)
            } catch(e) {
                res.status(500).json(E)
            }
        }
    )
}

module.exports = notes