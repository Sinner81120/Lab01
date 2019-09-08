const express = require('express');
const app = express();
const port =  process.env.PORT || 8080;
const path = require('path')

app.use(express.static(__dirname + '/dist/bai1'));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/bai1/index.html"));

});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})