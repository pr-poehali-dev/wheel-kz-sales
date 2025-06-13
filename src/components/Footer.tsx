const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-automotive-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-montserrat font-bold text-xl">
                Wheel.kzauto
              </span>
            </div>
            <p className="text-gray-400">
              Лучшие шины в Казахстане. Качество, надежность, профессиональный
              сервис.
            </p>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p>Телефон: 8 700 911 00 91</p>
              <p>Email: 700casper@gmail.com</p>
              <p>WhatsApp: 8 700 911 00 91</p>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Города</h3>
            <div className="space-y-2 text-gray-400">
              <p>Алматы</p>
              <p>Астана</p>
              <p>По всему Казахстану</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2024 Wheel.kzauto. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Создатель сайта:{" "}
            <span className="text-automotive-red font-semibold">
              Муртазин Габбас Уралович
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
