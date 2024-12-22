import { useState } from "react";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { id: 1, name: "Dark Chocolate Bar", image: "/images/chocolate1.jpg", price: "₱750.00", rating: 4.5 },
    { id: 2, name: "Chocolate Truffles", image: "/images/chocolate2.jpg", price: "₱1,250.00", rating: 4.8 },
    { id: 3, name: "Gift Chocolate Box", image: "/images/chocolate3.jpg", price: "₱1,750.00", rating: 4.6 },
    { id: 4, name: "Heart Shape Chocolate", image: "/images/heart.jpg", price: "₱1,750.00", rating: 4.7 },
  ];
  

  
  const handleSearch = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <div className="p-6 bg-white min-h-screen">

     
      <div className="text-center mb-6 pt-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-9">Indulge in Premium Chocolates</h1>
        <p className="text-lg text-gray-600">
        Everyone deserves a little sweetness, whether you're celebrating love, friendship, or simply the joy of chocolate. Let every bite remind you how sweet life can be.
        </p>
      </div>

    
      <div className="mb-8 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-[#8b0000] transition"
        >
          Search
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
          <div
            key={product.id}
            className="relative bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
          >
           
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xl font-bold mb-2">{product.price}</p>
              <p className="text-yellow-400 text-lg">
                {"★".repeat(Math.floor(product.rating))}{" "}
                {product.rating % 1 !== 0 ? "☆" : ""}
              </p>
            </div>

          
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

    
      {filteredProducts.length === 0 && searchTerm && (
        <div className="text-center mt-8">
          <p className="text-gray-500 text-lg">No products found for "{searchTerm}".</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
