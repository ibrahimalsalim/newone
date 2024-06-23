const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/a", (req, res) => {
    res.json({ m: "done" })
})

app.post("/b", (req, res) => {
    res.json({ m: req.body.b })
})


app.listen(3000, () => console.log(`Server is running on 3000`));
