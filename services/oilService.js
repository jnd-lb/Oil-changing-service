const {UserBandPreference,OilChangingHistory} = require('../models/relations')


exports.getAllUserPreferrences = async (userId)=>{
    const preferrences = await UserBandPreference.findAll({
        where: {
          [Op.and]: [
            { user_id: req.user.id }, // First condition
            { product_id: req.body.product_id }, // Second condition
          ]
        }
      })

      return preferrences;
}


exports.getUserOilChangingHistory = async (userId)=>{
    const history = await OilChangingHistory.findAll({
        where: {
            user_id: req.user.id 
        }
      })

      return history;
}