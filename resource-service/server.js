const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
const port = 81


app.use(express.json())

app.post('/resource', async (req, res) => {
    const { token } = req.body;
    try{
        const verifToken = jwt.verify(token, process.env.JWT_KEY)
        if (verifToken) {
            res.status(200).json({ message: 'Authenticated user accessed resource' });
        }
    } catch(err) {
        console.error(err);
        res.status(401).json({ message: 'User not authenticated' });
    }

});

const resourceRoutes = require('./routes/resourceRoutes');
app.use('/resource-routes', resourceRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})