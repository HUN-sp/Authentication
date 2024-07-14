const router = require('express').Router();
const productControllers = require('../controllers/productController');



router.post("/", productControllers.createAllProducts);

// Fetching  All  products

router.get("/", productControllers.getAllProducts)

//Fetcghing a particular product

router.get("/:id", productControllers.getProductById)

//Updating a product
router.put("/:id", productControllers.updateProduct)

//Deleting a product

router.delete('/:id', productControllers.deleteProduct)

module.exports = router
