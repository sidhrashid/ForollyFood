import { useParams, Link } from "react-router-dom";
import { slide } from "../../../data/slide";
import { useEffect, useState } from "react";
import {
  Heart,
  Package,
  ArrowRight,
  ImageIcon,
  Star,
  Home,
  ChevronRight,
} from "lucide-react";
import Container from "../../../components/Container";

const ProductDetail = () => {
  const { id } = useParams();
  const [loadedImages, setLoadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const product = slide.find((item) => {
    const slug = item.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return slug === id;
  });

  // ✅ Preload Images
  useEffect(() => {
    if (product?.images) {
      const preloaded = [];
      product.images.forEach((imgObj) => {
        const preload = new Image();
        preload.src = `/images/${imgObj.url}`;
        preload.onload = () => {
          preloaded.push({
            ...imgObj,
            src: preload.src,
          });
          setLoadedImages([...preloaded]);
        };
      });

      const mainImage =
        product.images.find((img) => img.type === "main") ||
        product.images[0];
      setSelectedImage({
        ...mainImage,
        src: `/images/${mainImage.url}`,
      });
    }
  }, [product]);

  const handleImageSelect = (image) => {
    setLoadingImage(true);
    setSelectedImage(image);
  };

  if (!product) {
    return (
      <div className="bg-[var(--secondary)] flex items-center justify-center min-h-[400px] px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-2">
            Sweet Not Found!
          </h2>
          <p className="text-[var(--dark)]/70">
            This delicious treat seems to have been eaten already!
          </p>
        </div>
      </div>
    );
  }

  const parseIngredients = (description) => {
    const match = description.match(/Ingredients:([^<]*)/);
    return match ? match[1].split(",").map((i) => i.trim()) : [];
  };

  const ingredients = parseIngredients(product.des);
  const relatedProducts = slide
    .filter((p) => p !== product)
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);
  const productDescription =
    "A delightful confectionery masterpiece crafted with premium ingredients and traditional techniques. Each bite delivers an explosion of rich, authentic flavors that will transport you to sweet paradise.";

  return (
    <div className="relative bg-[var(--secondary)] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--primary)]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[var(--primary)]/6 rounded-full blur-2xl"></div>
      </div>

      {/* Header Spacer */}
      <div className="relative z-10 pt-14 pb-16 bg-gradient-to-b from-[#ff99b3]/70 to-white/70"></div>

      {/* Main Content */}
      <div className="relative z-10 py-2">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* LEFT SIDE */}
            <div className="space-y-6 sm:space-y-6">
              <div className="shadow bg-white/60 backdrop-blur-sm p-4 sm:p-3 w-full max-w-sm rounded-2xl border-2 border-white/30 flex justify-center items-center aspect-square relative">
                {selectedImage?.src ? (
                  <>
                    {loadingImage && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100/70 animate-pulse rounded-2xl">
                        <ImageIcon className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      width={400}
                      height={400}
                      className={`w-full h-full max-w-full max-h-full object-contain transition-opacity duration-500 ${
                        loadingImage ? "opacity-0" : "opacity-100"
                      }`}
                      onLoad={() => setLoadingImage(false)}
                    />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-[var(--primary)]/40">
                    <ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                    <span className="text-xs sm:text-sm">
                      No Image Available
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {loadedImages.length > 1 && (
                <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
                  {loadedImages.map((img) => (
                    <div
                      key={img.id}
                      className={`w-12 h-12 sm:w-20 sm:h-20 border-2 rounded-lg cursor-pointer p-1 flex items-center justify-center transition-all duration-200 ${
                        selectedImage?.id === img.id
                          ? "border-[var(--primary)] shadow-lg bg-white/80"
                          : "border-white/40 bg-white/60"
                      }`}
                      onClick={() => handleImageSelect(img)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        width={100}
                        height={100}
                        loading="eager" // ✅ eager load thumbnails
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary)] leading-tight mb-2">
                {product.title}
              </h1>

              {/* Description */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-[var(--primary)]">
                  Description
                </h3>
                <p className="text-sm sm:text-base text-[var(--dark)]/80 leading-relaxed">
                  {productDescription}
                </p>
              </div>

              {/* Ingredients */}
              {ingredients.length > 0 && (
                <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30">
                  <h3 className="font-bold text-[var(--dark)] flex items-center gap-2 mb-3 sm:mb-4">
                    <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" />
                    <span className="text-sm sm:text-base">Ingredients</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-[var(--primary)]/10 text-[var(--dark)]/80 rounded-full text-xs sm:text-sm border border-[var(--primary)]/20"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)] text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg text-center hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base lg:text-lg">
                  Inquire Now & Get Sweet Deals
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t border-[var(--primary)]/20 pt-8 sm:pt-12">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary)] mb-2 sm:mb-3">
                More Sweet Delights
              </h2>
            </div>

            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex gap-4 sm:gap-6 min-w-max px-2">
                {relatedProducts.map((item, idx) => {
                  const slug = item.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "");
                  const relatedMainImage =
                    item.images?.find((img) => img.type === "main") ||
                    item.images?.[0];

                  return (
                    <Link
                      to={`/products/${slug}`}
                      key={idx}
                      className="group bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/30 hover:scale-105 transition-all duration-300 flex-shrink-0 w-48 sm:w-56"
                    >
                      <div className="aspect-square bg-white/60 rounded-lg mb-2 sm:mb-3 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                        {relatedMainImage ? (
                          <img
                            src={`/images/${relatedMainImage.url}`}
                            alt={item.title}
                            loading="lazy"
                            width={500}
                            height={500}
                            className="w-full h-full max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="text-2xl sm:text-4xl opacity-50">
                            🍬
                          </div>
                        )}
                      </div>

                      <h3 className="text-[var(--dark)] font-semibold mb-1 sm:mb-2 line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-300 text-sm sm:text-base truncate">
                        {item.title}
                      </h3>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--primary)]" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetail;
