const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middleware/upload-csv");


// router.post("/products", async (req, res) => {
router.post("/products", upload.single("product"), async (req, res) => {
    try {
        let product = new Product();
        product.districtName = req.body.districtName;
        product.csv_file_name = req.file.location;
        // product.csv_file_name = req.body.csv_file_name;

        await product.save();

        res.json({
            status: true,
            message: "Successfully saved a district product"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get("/products", async (req, res) => {
    try {
        let products = await Product.find();
        res.json({
            success: true,
            products: products
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;