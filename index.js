const app = require('express');
const appy = app();

appy.get('/', (req, res) => {
    res.send('Hello World!')
})

appy.listen(8000, () => {
    console.log('Example app listening on port 8000!')
})