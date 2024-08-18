import { useState,  } from 'react';

const ApplyFilter = ({ setFilter, products }) => {
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    // Get unique brands and categories from products
    const uniqueBrands = [...new Set(products.map(product => product.brand))];
    const uniqueCategories = [...new Set(products.map(product => product.category))];



    const handleApplyFilters = () => {
        const filters = {};
        if (brand) filters.brand = brand;
        if (category) filters.category = category;
        if (minPrice) filters.minPrice = parseFloat(minPrice);
        if (maxPrice) filters.maxPrice = parseFloat(maxPrice);

        setFilter(filters);
    };

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="brand" className="block mb-2">Brand:</label>
                <select
                    id="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="">All Brands</option>
                    {uniqueBrands.map((brand, index) => (
                        <option key={index} value={brand}>{brand}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block mb-2">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="">All Categories</option>
                    {uniqueCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="minPrice" className="block mb-2">Min Price:</label>
                <input
                    id="minPrice"
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="border p-2 w-full"
                    placeholder="0"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="maxPrice" className="block mb-2">Max Price:</label>
                <input
                    id="maxPrice"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="border p-2 w-full"
                    placeholder="1000"
                />
            </div>
            <button
                onClick={handleApplyFilters}
                className="mt-4 p-2 bg-[#074161]  text-white rounded"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default ApplyFilter;
