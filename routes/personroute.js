var express = require('express');

const router = express.Router();
var person = require('./../modules/person');

router.post('/',async (req, res)=>{
    try{
        const data = req.body;
        const persondata = new person(data);
        const response = await persondata.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})

router.get('/', async (req, res)=>{
    try{
        const data = await person.find();
        console.log("data is showed");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(400).json({error: 'internal server error'});
    }
})

router.get('/:worktype', async (req, res)=>{
    const worktype = req.params.worktype;
    try{
        if(worktype==='chef' || worktype==='owner' || worktype==='waiter'){
            const data = await person.find({profession:worktype});
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error:'inavlid worktype'})
        }
    }

    catch(err){
        console.log(err);
        res.status(400).json({error: 'internal server error'});
    }
})

router.put('/:id', async (req, res)=>{
    try{
        personId = req.params.id;
        personUpdatedData = req.body;
        const response = await person.findByIdAndUpdate(personId, personUpdatedData, {new: true, runValidators:true});

        if(!response){
            return res.status(404).json({error: 'invalid Id'});
        }

        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'error internal server'});
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const pId = req.params.id;
        response = await person.findByIdAndDelete(pId);
        if(!response){
            return res.status(404).json({error: "Invalid Id"});
        }

        console.log('data deleted');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})

module.exports = router;