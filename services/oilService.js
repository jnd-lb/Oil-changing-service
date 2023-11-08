const { Op } = require('sequelize');
const {UserBandPreference,OilChangingHistory} = require('../models/relations')


exports.getAllUserPreferrences = async (userId)=>{
    const preferrences = await UserBandPreference.findAll({
      where: 
          { user_id: userId }, // First condition
        
      })

      return preferrences;
}


exports.getUserOilChangingHistory = async (userId)=>{
    const history = await OilChangingHistory.findAll({
        where: {
            user_id: userId
        }
      })

      return history;
}