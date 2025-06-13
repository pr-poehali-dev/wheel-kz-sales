import { MessageCircle, Star } from "lucide-react";

interface TireCardProps {
  brand: string;
  model: string;
  size: string;
  price: string;
  image: string;
  rating: number;
  season: string;
}

const TireCard = ({
  brand,
  model,
  size,
  price,
  image,
  rating,
  season,
}: TireCardProps) => {
  const handleWhatsAppOrder = () => {
    const message = `Здравствуйте! Хочу заказать шины ${brand} ${model} размер ${size}. Цена: ${price} тенге.`;
    window.open(
      `https://wa.me/87009110091?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="tire-card p-6">
      <div className="relative mb-4">
        <img
          src={image}
          alt={`${brand} ${model}`}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-automotive-blue text-white px-2 py-1 rounded text-sm">
          {season}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-montserrat font-bold text-lg text-dark-bg mb-1">
          {brand}
        </h3>
        <p className="text-gray-600 mb-2">{model}</p>
        <p className="text-sm text-gray-500 mb-2">{size}</p>

        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-automotive-red">
            {price}
          </span>
          <span className="text-gray-600 ml-1">₸</span>
        </div>
        <button
          onClick={handleWhatsAppOrder}
          className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={18} />
          <span>Заказать</span>
        </button>
      </div>
    </div>
  );
};

export default TireCard;
