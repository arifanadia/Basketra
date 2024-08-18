const Product = require('../models/ProductsModel');

const getProducts = async (req, res) => {
    const { page = 1, limit = 9, search = '', sort = 'name', order = 'asc', brand, category, minPrice, maxPrice } = req.query;

    const filter = {};
    if (brand) filter.brand = brand;
    if (category) filter.category = category;
    if (minPrice || maxPrice) filter.price = {};
    if (minPrice) filter.price.$gte = minPrice;
    if (maxPrice) filter.price.$lte = maxPrice;


    if (search) {
        const searchRegex = new RegExp(search.trim().replace(/[\W_]+/g, '.*'), 'i');
        filter.$or = [
            { name: { $regex: searchRegex } },
            { description: { $regex: searchRegex } },
            { brand: { $regex: searchRegex } }, 
            { category: { $regex: searchRegex } }
        ];
    }
    const sortOption = {};
    if (sort === 'price') {
        sortOption.price = order === 'asc' ? 1 : -1;
    } else if (sort === 'dateAdded') {
        sortOption.dateAdded = order === 'asc' ? 1 : -1;
    }
    try {
        const products = await Product.find(filter)
            .sort(sortOption)
            .skip((page - 1) * limit)
            .limit(Number(limit));
        const totalProducts = await Product.countDocuments(filter);
        const totalPages = Math.ceil(totalProducts / limit);

        res.json({ products, totalPages });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};

module.exports = {
    getProducts,
  
};