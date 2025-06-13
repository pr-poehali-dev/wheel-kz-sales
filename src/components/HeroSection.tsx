import { MessageCircle, Gift } from "lucide-react";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/87009110091", "_blank");
  };

  return (
    <section className="gradient-bg text-white py-20 relative overflow-hidden">
      {/* Background tire images */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-contain bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1606016838218-7f0c46a1840c?w=200&h=200&fit=crop)",
          }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-contain bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=200&h=200&fit=crop)",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-contain bg-no-repeat opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1606016838218-7f0c46a1840c?w=200&h=200&fit=crop)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">
          Лучшие шины в Казахстане
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Качественные шины от мировых брендов в Алматы и Астане
        </p>

        {/* Promo Banner */}
        <div className="bg-automotive-red bg-opacity-20 border border-red-300 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Gift className="text-yellow-300" size={24} />
            <span className="font-montserrat font-bold text-lg">АКЦИЯ!</span>
          </div>
          <p className="text-lg">
            При покупке от 100,000 тенге - шина в подарок!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={handleWhatsApp}
            className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold"
          >
            <MessageCircle size={24} />
            <span>Заказать в WhatsApp</span>
          </button>
          <a
            href="#catalog"
            className="bg-white text-dark-bg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Смотреть каталог
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-2">1000+</h3>
            <p>Довольных клиентов</p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-2">50+</h3>
            <p>Брендов шин</p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-2">24/7</h3>
            <p>Консультации</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
