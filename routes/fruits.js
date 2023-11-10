const app = express();
const User = require("./models/fruits")
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get('/fruit', async (req, res) => {
    const fruits = await User.findAll({});
    res.json(fruits);
});

app.get("/fruits", async (req, res) => {
    const fruits = await User.findAll({});
    res.json(fruits);

});
app.get('/fruits/:id', async (req, res)  => {
    const number = req.params.id;
    const fruit = await User.findByPk(number);
    res.json(fruit[number])

})

app.post('/fruits', async (req, res) => {
    const fruit = await User.create(req.body);
    res.json(fruit)
})

app.put('/fruits/:id', async (req, res) => {
    const updatefruit = await User.update(req.body, {where: {id: req.params.id}})
    res.json(updatefruit)
})

app.delete('/fruits/:id', async (req, res) => {
    const deleteFruit = await User.destroy(req.body, {where: {id: req.params.id}})
    res.json(deleteFruit);
})

module.exports = router;