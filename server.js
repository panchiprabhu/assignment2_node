const express = require('express');
const app = express();
const port = 3000;
const data = [];

app.use(express.json());

app.get('/api/:id', (req, res) => {
    const queryParam = req.query;
    const pathParam = req.params.id;

    const response = {
        pathParam,
        queryParam,
        info: 'Values of query and path parameters as JSON'
    };

    data.push(response);
    res.json(response);
});    

app.post('/api/data', (req, res) => {
    res.json(data);
});

app.listen(port, ()=> {
    console.log('Server is running on port ' + port);
});