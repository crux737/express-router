const app = express();
const User = require("./models/users")
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get('/user', async (req, res) => {
    const users = await User.findAll({});
    res.json(users);
});

app.get("/users", async (req, res) => {
    const users = await User.findAll({});
    res.json(users);

});
app.get('/users/:id', async (req, res)  => {
    const number = req.params.id;
    const user = await User.findByPk(number);
    res.json(user[number])

})

app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user)
})

app.put('/users/:id', async (req, res) => {
    const updateUser = await User.update(req.body, {where: {id: req.params.id}})
    res.json(updateUser)
})

app.delete('/users/:id', async (req, res) => {
    const deleteUser = await User.destroy(req.body, {where: {id: req.params.id}})
    res.json(deleteUser);
})

module.exports = router;
