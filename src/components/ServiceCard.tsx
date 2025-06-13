import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  price,
}: ServiceCardProps) => {
  return (
    <div className="service-card p-6 h-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-automotive-blue rounded-lg flex items-center justify-center mr-4">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="font-montserrat font-bold text-xl text-dark-bg">
          {title}
        </h3>
      </div>

      <p className="text-gray-600 mb-4 flex-grow">{description}</p>

      <div className="text-automotive-red font-bold text-lg">{price}</div>
    </div>
  );
};

export default ServiceCard;
