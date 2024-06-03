var mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },

    age:{
        type:Number,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    profession:{
        type:String,
        enum:['chef', 'waiter', 'owner'],
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }
});


const person = mongoose.model('persons', newSchema);

module.exports = person;