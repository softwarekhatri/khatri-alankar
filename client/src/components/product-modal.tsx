import { useState, useEffect } from "react";
import type { Product } from "@shared/schema";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onWhatsappShare: () => void;
  onCopyLink: () => void;
}

export function ProductModal({ product, onClose, onWhatsappShare, onCopyLink }: ProductModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
      data-testid="product-modal"
    >
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform animate-zoom-in">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-2xl font-playfair font-bold text-elegant-black">Product Details</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            data-testid="button-close-modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer border-2 ${
                      index === selectedImageIndex ? 'border-luxury-gold' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-3xl font-playfair font-bold text-elegant-black mb-2">{product.name}</h4>
              <p className="text-luxury-gold font-semibold text-lg">Code: {product.code}</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Description</h5>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Metal</h5>
                <p className="text-gray-600">{product.metalType}</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Category</h5>
                <p className="text-gray-600">{product.category}</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Gender</h5>
                <p className="text-gray-600">{product.gender}</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Weight</h5>
                <p className="text-gray-600">{product.weight}</p>
              </div>
            </div>

            {product.availableSizes && product.availableSizes.length > 0 && (
              <div className="space-y-4">
                <h5 className="font-semibold text-gray-900">Available Sizes</h5>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size, index) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-lg transition-colors duration-300 ${
                        index === 0 
                          ? 'border-luxury-gold bg-luxury-gold text-black' 
                          : 'border-gray-300 hover:border-luxury-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-4">
              <button 
                onClick={onWhatsappShare}
                className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                data-testid="button-modal-whatsapp"
              >
                <svg className="inline w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                </svg>
                Share on WhatsApp
              </button>
              <button 
                onClick={onCopyLink}
                className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
                data-testid="button-modal-copy-link"
              >
                <svg className="inline w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Copy Link
              </button>
            </div>

            <button className="w-full gold-gradient text-black px-6 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
