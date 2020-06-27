module.exports=function(options){
    return function(req,res,next){
        console.log("with new file middleware...")
        next();
    }
}