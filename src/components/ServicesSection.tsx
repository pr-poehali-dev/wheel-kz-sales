import ServiceCard from "./ServiceCard";
import { Wrench, Scale, Package, Truck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Шиномонтаж",
      description:
        "Профессиональная установка и снятие шин любой сложности. Современное оборудование и опытные мастера.",
      price: "от 2,000 ₸",
    },
    {
      icon: Scale,
      title: "Балансировка",
      description:
        "Точная балансировка колес для комфортной и безопасной езды. Устранение вибраций руля.",
      price: "от 1,500 ₸",
    },
    {
      icon: Package,
      title: "Хранение шин",
      description:
        "Сезонное хранение ваших шин в специально оборудованном помещении с оптимальными условиями.",
      price: "от 15,000 ₸/сезон",
    },
    {
      icon: Truck,
      title: "Доставка",
      description:
        "Быстрая доставка шин по Алматы и Астане. Возможность доставки в другие города Казахстана.",
      price: "от 3,000 ₸",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-dark-bg mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600">
            Полный спектр услуг по обслуживанию шин и дисков
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
