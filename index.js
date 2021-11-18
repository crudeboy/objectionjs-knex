const dbSetup = require('./db/db.setup')
const express = require("express")
const User = require('./db/models/user')

dbSetup();

const app = express();
app.use(express.json());

//this is in routes
app.get('/user/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        console.log(id)
        const user = await User.query().findById(id).withGraphFetched('channel') //withGraphFetched('channel'). ...this extension of this lone of code should help to make the linked join table also be return in the request (..still loading the solution)
        console.log(User)
        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }

})

app.listen(8080, () => console.log("server runnng on port 8080"))

