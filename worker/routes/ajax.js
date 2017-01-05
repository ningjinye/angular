var express=require("express");
var router=express.Router();
router.use("/ajax",function(req,res){
    var data=[
        {name:"aaa",phone:"13311112222",en:"A"},
        {name:"bb",phone:"13311112222",en:"B"},
        {name:"zh",phone:"13311112222",en:"Z"},
        {name:"dd",phone:"13311112222",en:"D"},
        {name:"aa",phone:"13311112222",en:"A"},
        {name:"ab",phone:"13311112222",en:"A"},
        {name:"ee",phone:"13311112222",en:"E"},
        {name:"ff",phone:"13311112222",en:"F"},
        {name:"bg",phone:"13311112222",en:"B"},
        {name:"hh",phone:"13311112222",en:"H"},
        {name:"bi",phone:"13311112222",en:"B"},
        {name:"jj",phone:"13311112222",en:"J"},
        {name:"kk",phone:"13311112222",en:"K"}
    ];
    res.send(JSON.stringify(data));
});
module.exports=router;