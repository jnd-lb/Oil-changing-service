const express = require("express");

const router = express.Router();


router.get('/',(req, res)=>{
    res.json("Good")
});

 router.post('/authenticate', authenticateController);
// router.get('/users', authenticateToken, getAllUsersController);
// router.get('/user', getUserById);
// router.post('/user', insertUserValidation, insertUserController);
// router.put('/user', updateUserValidation, updateUserController);
// router.delete('/user', deleteUser);

module.exports = router;