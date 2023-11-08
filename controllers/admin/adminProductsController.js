const { Brand, OilProduct } = require("../../models/relations")




exports.getAllBrands =  async (req, res) => {
    const brands = await Brand.findAll({
        include:[OilProduct]
    })
    res.status(200).json(brands)
}




exports.getBrandById =  async (req, res) => {
    const brand = await Brand.findOne({
        where : { 
            id: req.params.id
        },
        include: [OilProduct]
    })
    res.status(200).json(brand)
}




exports.createBrand = async (req, res) => {
    const brand = await Brand.create({
        name: req.body.name,
        image : req.body.image
    })
    res.status(200).json(brand)
}





exports.updateBrand =  async (req, res) => {
    const brand = await Brand.findOne({
        where : { 
            id: req.params.id
        }
    })
    brand.name = req.body.name;
    brand.image = req.body.image;
    brand.save();
    res.status(200).json(brand)
}




exports.deleteBrand = async (req, res)=>{
    await Brand.destroy({
        where : { 
            id: req.params.id
        }
    })
    res.status(200).json({message:"Deleted Successfully"})
}