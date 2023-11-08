const { OilChangingHistory } = require("../../models/relations")
const { getUserOilChangingHistory } = require("../../services/oilService")

exports.getUserOilChangingHistory = async (req,res)=>{
    const history = await getUserOilChangingHistory(req.params.userid)
    res.status(200).json(history)
}


exports.addOilChangingRecord = async (req, res)=>{
    const oilChanging = await OilChangingHistory.create({
        is_filter_changed: req.body.is_filter_changed,
        kilometrage : req.body.kilometrage,
        vehicle_id: req.body.vehicle_id,
        product_id: req.body.product_id,
        
        user_id: req.params.userid
    })
    
    
    res.status(200).json(oilChanging)
 }


 exports.updateOilChangingRecord = async (req, res)=>{
     const oilChanging = await OilChangingHistory.update({
         is_filter_changed: req.body.is_filter_changed,
        kilometrage : req.body.kilometrage,
        vehicle_id: req.body.vehicle_id,
        product_id: req.body.product_id,
        user_id: req.params.userid
    },{
        where:{
            id:req.params.id
        }
    })
    
    
    return this.getUserOilChangingHistory(req,res)
 }

 
 
 exports.deleteChangingRecord = async (req, res)=>{
    const oilChanging = await OilChangingHistory.destroy({
       where:{
           id:req.params.id
       }
   })
   
   res.status(200).json({message:"deleted"})
 }