import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/87009110091", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+87009110091", "_blank");
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-automotive-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-dark-bg">
              Wheel.kzauto
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#catalog"
              className="text-gray-700 hover:text-automotive-red transition-colors"
            >
              Каталог
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-automotive-red transition-colors"
            >
              Услуги
            </a>
            <a
              href="#delivery"
              className="text-gray-700 hover:text-automotive-red transition-colors"
            >
              Доставка
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-automotive-red transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleCall}
              className="flex items-center space-x-2 bg-automotive-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Phone size={20} />
              <span>Звонок</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#catalog"
                className="text-gray-700 hover:text-automotive-red"
              >
                Каталог
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-automotive-red"
              >
                Услуги
              </a>
              <a
                href="#delivery"
                className="text-gray-700 hover:text-automotive-red"
              >
                Доставка
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-automotive-red"
              >
                Контакты
              </a>
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={handleCall}
                  className="flex items-center space-x-2 bg-automotive-blue text-white px-4 py-2 rounded-lg"
                >
                  <Phone size={20} />
                  <span>Звонок</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
