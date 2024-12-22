import { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Importing arrow icons

function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();
        // Manually map API data to match your static structure
        setProducts([
          { id: 1, name: "Dark Chocolate Bar", image: "/images/chocolate1.jpg", price: "₱750.00", rating: 4.5 },
          { id: 2, name: "Chocolate Truffles", image: "/images/chocolate2.jpg", price: "₱1,250.00", rating: 4.8 },
          { id: 3, name: "Gift Chocolate Box", image: "/images/chocolate3.jpg", price: "₱1,750.00", rating: 4.6 },
          { id: 4, name: "Heart Shape Chocolate", image: "/images/heart.jpg", price: "₱1,750.00", rating: 4.7 },
          { id: 5, name: "Milk Chocolate Squares", image: "/images/chocolate5.webp", price: "₱550.00", rating: 4.3 },
          { id: 6, name: "Hazelnut Chocolate Spread", image: "/images/chocolate6.jpg", price: "₱850.00", rating: 4.9 },
          { id: 7, name: "White Chocolate Chips", image: "/images/chocolate7.webp", price: "₱450.00", rating: 4.2 },
          { id: 8, name: "Caramel-Filled Chocolate", image: "/images/chocolate8.jpg", price: "₱1,000.00", rating: 4.8 },
          { id: 9, name: "Mint Chocolate Bites", image: "/images/chocolate9.webp", price: "₱650.00", rating: 4.4 },
          { id: 10, name: "Artisan Chocolate Bar", image: "/images/chocolate10.webp", price: "₱1,500.00", rating: 4.9 },
          { id: 11, name: "Peanut Butter Chocolate Cups", image: "/images/chocolate11.jpg", price: "₱850.00", rating: 4.6 },
          { id: 12, name: "Salted Caramel Chocolate", image: "/images/chocolate12.jpg", price: "₱1,200.00", rating: 4.7 },
        ]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleDropdown = (id) => {
    setActiveProduct(activeProduct === id ? null : id); // Toggle expanded product
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="text-center mb-6 pt-16">
        <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
        <p className="text-lg text-gray-600 mt-2">Explore our Delicious Chocolates!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative border rounded-lg p-4 shadow-lg hover:shadow-xl transition group bg-white ${
              activeProduct === product.id ? "bg-gray-200" : ""
            }`}
          >
            <div
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                activeProduct === product.id ? "transform scale-110" : "transform scale-100"
              }`}
              onClick={() => toggleDropdown(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
            <p className="text-lg font-bold text-gray-800 mt-2">{product.price}</p>
            <div className="text-yellow-500 mt-2">
              <strong>Rating: </strong>
              {product.rating} &#9733;
            </div>

            <div className="flex justify-between items-center mt-2">
              <button onClick={() => toggleDropdown(product.id)} className="text-gray-600">
                {activeProduct === product.id ? (
                  <AiOutlineUp size={20} />
                ) : (
                  <AiOutlineDown size={20} />
                )}
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeProduct === product.id ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="mt-4 p-4 bg-gray-100 border-t">
                <p className="text-gray-700">
                  <strong>Description: </strong>{product.description || "No description available."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
