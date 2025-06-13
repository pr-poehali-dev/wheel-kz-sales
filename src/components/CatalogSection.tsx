import TireCard from "./TireCard";

const CatalogSection = () => {
  const tires = [
    {
      brand: "Michelin",
      model: "Pilot Sport 4",
      size: "225/45 R17",
      price: "85,000",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      rating: 5,
      season: "Лето",
    },
    {
      brand: "Continental",
      model: "ContiWinterContact",
      size: "205/55 R16",
      price: "72,000",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      rating: 4,
      season: "Зима",
    },
    {
      brand: "Bridgestone",
      model: "Turanza T005",
      size: "215/60 R16",
      price: "68,000",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      rating: 4,
      season: "Лето",
    },
    {
      brand: "Pirelli",
      model: "P Zero",
      size: "245/40 R18",
      price: "95,000",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      rating: 5,
      season: "Лето",
    },
    {
      brand: "Nokian",
      model: "Hakkapeliitta",
      size: "195/65 R15",
      price: "58,000",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      rating: 5,
      season: "Зима",
    },
    {
      brand: "Goodyear",
      model: "EfficientGrip",
      size: "225/55 R17",
      price: "75,000",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      rating: 4,
      season: "Всесезон",
    },
  ];

  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-dark-bg mb-4">
            Каталог шин
          </h2>
          <p className="text-lg text-gray-600">
            Широкий выбор шин от ведущих мировых производителей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tires.map((tire, index) => (
            <TireCard key={index} {...tire} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-automotive-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold">
            Посмотреть все шины
          </button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
