

const MainProductsList = ({ products }) => {
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product._id} className="border rounded-lg p-4 shadow-lg">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[200px] object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
                        <p className="text-gray-800 text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600 mb-2">Category: {product.category}</p>
                        <p className="text-gray-500 text-sm">Added on: {new Date(product.dateAdded).toLocaleDateString()}</p>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default MainProductsList;
