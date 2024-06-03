var mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    },
    
    taste:{
        type:String,
        enum:['sweet', 'sour', 'spicy'],
    },

    is_drinkable:{
        type:Boolean,
        default:false,
    },

    ingredients:{
        type:[String],
        default:[],
    },

    num_sales:{
        type:Number,
        default:0,
    }

});

const menu = mongoose.model('MenuItems', menuSchema);

module.exports = menu;
