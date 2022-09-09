const app = require('express')();
const PORT = 3001;

app.listen(
    PORT,
    () => console.log(`Server is live on http://localhost:${PORT}`)
)

app.get('/api', (req, res) => {
    res.status(200).send({
        users: ["userOne", "userTwo", "userThree", "userFour", "userFive"]
    })
})