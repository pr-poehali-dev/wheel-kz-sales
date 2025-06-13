import { Phone, MessageCircle, Mail, MapPin, Clock, Truck } from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/87009110091", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+87009110091", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:700casper@gmail.com", "_blank");
  };

  return (
    <section id="contacts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-dark-bg mb-4">
            Контакты
          </h2>
          <p className="text-lg text-gray-600">
            Работаем в Алматы и Астане для вашего удобства
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-dark-bg mb-4">
                Связь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-automotive-blue" size={20} />
                  <span className="text-lg">8 700 911 00 91</span>
                  <button
                    onClick={handleCall}
                    className="bg-automotive-blue text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Позвонить
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="text-green-500" size={20} />
                  <span className="text-lg">WhatsApp: 8 700 911 00 91</span>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                  >
                    Написать
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-automotive-red" size={20} />
                  <span className="text-lg">700casper@gmail.com</span>
                  <button
                    onClick={handleEmail}
                    className="bg-automotive-red text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Написать
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-dark-bg mb-4">
                Режим работы
              </h3>
              <div className="flex items-start space-x-3">
                <Clock className="text-automotive-blue mt-1" size={20} />
                <div>
                  <p className="text-lg font-semibold">
                    Ежедневно: 9:00 - 20:00
                  </p>
                  <p className="text-gray-600">Консультации 24/7 по WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cities Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-dark-bg mb-4">
                Города обслуживания
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-automotive-red mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-lg">Алматы</p>
                    <p className="text-gray-600">
                      Доставка и установка по всему городу
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-automotive-red mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-lg">Астана</p>
                    <p className="text-gray-600">
                      Полный спектр услуг в столице
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md" id="delivery">
              <h3 className="font-montserrat font-bold text-xl text-dark-bg mb-4">
                Доставка
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Truck className="text-automotive-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Яндекс Доставка</p>
                    <p className="text-gray-600">Быстрая доставка по городу</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-automotive-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Самовывоз</p>
                    <p className="text-gray-600">Забрать по удобному адресу</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded p-3 mt-4">
                  <p className="text-sm text-green-800">
                    <strong>Доставка по всему Казахстану!</strong> Обсуждаем
                    индивидуально
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
