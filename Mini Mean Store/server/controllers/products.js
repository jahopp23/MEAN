var mongoose = require('mongoose');
var Products = mongoose.model('Products');

module.exports = {

    show: function(req,res){
        Products.find({},function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    create: function(req,res){
        var product = new Products(req.body) 
        product.save(function(err){
            if(err)
                console.log(err);
            else
                res.redirect('/products')
        });
    },

    update: function(req,res){
        Products.update({name:req.body.name},{initialQty:req.body.qty},function(err){
            if(err)
                console.log(err);
            else
                res.json({result:true});
        });
    },

    // delete: function(req,res){
    //     Products.remove({_id:req.body._id},function(err){
    //         if(err)
    //             console.log(err);
    //         else
    //             res.json({status:true});
    //     })
    // },
}