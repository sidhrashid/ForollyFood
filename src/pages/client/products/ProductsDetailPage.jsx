import { useParams } from "react-router-dom";
import { slide } from "../../../data/slide";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [loadedImages, setLoadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Find product by matching title slug instead of ID
  const product = slide.find((item) => {
    const titleSlug = item.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return titleSlug === id;
  });

  useEffect(() => {
    if (product && product.images) {
      const loadImages = async () => {
        const imagePromises = product.images.map(async (imageObj) => {
          try {
            const module = await import(
              `../../../assets/images/${imageObj.url}`
            );
            return {
              ...imageObj,
              src: module.default,
            };
          } catch (err) {
            console.error(`Image not found: ${imageObj.url}`, err);
            return {
              ...imageObj,
              src: null,
            };
          }
        });

        const images = await Promise.all(imagePromises);
        const validImages = images.filter((img) => img.src !== null);
        setLoadedImages(validImages);

        // Set main image as selected by default
        const mainImage = validImages.find((img) => img.type === "main");
        setSelectedImage(mainImage || validImages[0]);
      };

      loadImages();
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Parse product information
  const parseProductInfo = (description) => {
    const netWeightMatch = description.match(/Net Weight:([^<]*)/);
    const piecesMatch = description.match(/No\.Of Pieces:([^<]*)/);
    const priceMatch = description.match(/M\.R\.P\.:([^<]*)/);

    return {
      netWeight: netWeightMatch ? netWeightMatch[1].trim() : "",
      pieces: piecesMatch ? piecesMatch[1].trim() : "",
      price: priceMatch ? priceMatch[1].trim() : "",
    };
  };

  const productInfo = parseProductInfo(product.des);

  // Parse ingredients
  const parseIngredients = (description) => {
    const ingredientsMatch = description.match(/Ingredients:([^<]*)/);
    if (ingredientsMatch) {
      return ingredientsMatch[1].split(",").map((item) => item.trim());
    }
    return [];
  };

  const ingredients = parseIngredients(product.des);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className=" bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-gray-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
              {selectedImage && selectedImage.src && (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex flex-wrap gap-3 overflow-x-auto ">
              {loadedImages.map((image) => (
                <div
                  key={image.id}
                  className={`w-20 h-20 p-1 bg-gray-100 rounded-lg flex items-center flex-wrap  max-w-[60px] max-h-[60px] justify-center cursor-pointer border-2 transition-all duration-200 flex-shrink-0 ${
                    selectedImage?.id === image.id
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  {image.src && (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Image Type Indicator */}
            {/* {selectedImage && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="capitalize">{selectedImage.type} View</span>
              </div>
            )} */}
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <h1 className="text-3xl font-normal text-gray-900 leading-tight">
              {product.title}
            </h1>

            {/* Expert Reviews */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">
                Read Expert Reviews
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Let's read what the experts have to say about this product so
                you can make the right recommendation.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-normal text-gray-900">
                ₹{productInfo.price.replace(" Rs.", "")}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>In stock</span>
              </div>
            </div>

            {/* Size Options */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-gray-900">Size</h3>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
                  {productInfo.netWeight}
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  {productInfo.pieces}
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-gray-900">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-full">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-l-full transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="w-12 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-r-full transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Buy Now Button */}
            <button className="w-full bg-blue-500 text-white py-4 rounded-lg font-medium text-lg hover:bg-blue-600 transition-colors">
              BUY NOW
            </button>
          </div>
        </div>

        {/* Product Information Sections */}
        <div className="space-y-8">
          {/* Ingredients Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">Ingredients</h2>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span className="text-sm">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900">Description</h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-4">
              <p>
                A premium chocolate product crafted with the finest ingredients.
                This delicious treat combines traditional flavors with modern
                manufacturing techniques to deliver an exceptional taste
                experience.
              </p>
              <p>
                Perfect for special occasions, gifting, or simply indulging
                yourself. Each piece is carefully crafted to ensure consistent
                quality and taste that will delight chocolate lovers of all
                ages.
              </p>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900">How To Use</h2>
            <div className="text-gray-700 text-sm leading-relaxed">
              <p>
                Enjoy as a sweet treat any time of day. Store in a cool, dry
                place away from direct sunlight. Best consumed within the
                expiration date for optimal freshness and taste.
              </p>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900">
              Important Points
            </h2>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div className="text-sm text-red-700">
                  <p className="font-medium mb-1">Allergen Information</p>
                  <p>
                    Contains Milk And Soya. Contains Permitted Synthetic Food
                    Colours and Added Flavours (Nature-Identical) Flavouring
                    Substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
