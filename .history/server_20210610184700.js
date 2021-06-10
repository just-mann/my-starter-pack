const express = require('express');
const app = express();
const cors = require('cors');



app.get('/api/customers', (req, res) => {
    
    const customers = [
        {id: 1, name: "Justin Kollie", age: 5, location: "New Bedford, MA"},
        {id: 2, name: "James Blay", age: 6, location: "E. Providence, RI"},
        {id: 3, name: "Jarso Bundor", age: 8, location: "N. Providence, RI"}
    ]

    res.json(customers);

})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
