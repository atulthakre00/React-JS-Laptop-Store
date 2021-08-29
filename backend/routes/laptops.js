const router = require('express').Router();
let Laptop = require('../models/laptop.model');

router.get('/', async (req, res) => {
    try {
        const laptops = await Laptop.find();
        res.json(laptops);
        console.log("res", res.json(laptops));
    }
    catch (err) {
        res.send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        let t1 = {
            name: req.body.name,
            ram: req.body.ram,
            display: req.body.display,
            memory: req.body.memory,
            processor: req.body.processor,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            quantity: req.body.quantity
        }
        for(let key of Object.keys(t1)) {
            if(t1[key] === null || t1[key] === undefined || t1[key].length === 0)
                t1[key] = " ";
        }

        let newLaptop = new Laptop(t1);
        const c1 = newLaptop.save();
        res.send(c1);
    }
    catch (err) {
        res.send(err);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        console.log('delete: id')
        const laptops = await Laptop.findById(req.params.id);
        const c1 = await laptops.delete();
        res.json(c1);
    }
    catch (err) {
        res.send(err);
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const laptops = await Laptop.findById(req.params.id);
        laptops.quantity = req.body.quantity;
        const c1 = await laptops.save();
        res.json(c1);
    }
    catch (err) {
        res.send(err);
    }
});

module.exports = router;