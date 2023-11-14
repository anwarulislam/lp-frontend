import { FaStar } from "react-icons/fa";
import { ImageCard } from "../components/ImageCard";
import Carousel from "../components/Carousel";

export default function Review() {
  const sliderItems = [
    {
      author: "The Rock",
      city: "Loss Angels",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
    {
      author: "The Rock 2",
      city: "Loss Angels 2",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      author: "The Rock 3",
      city: "Loss Angels 3",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
  ];

  const cards = [
    {
      title: "Heading",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
      imageUrl: "/images/flower.jpg",
    },
    {
      title: "Heading",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
      imageUrl: "/images/flower.jpg",
    },
    {
      title: "Heading",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
      imageUrl: "/images/flower.jpg",
    },
  ];

  return (
    <main className="min-h-[100vh]">
      <div className="container py-16">
        <div className="relative">
          <Carousel>
            {sliderItems?.map((item, i) => (
              <div key={i}>
                <div className="text-center">
                  <blockquote className="text-2xl italic mb-3">
                    {item.quote}
                  </blockquote>

                  <div className="flex justify-center mb-3">
                    {[1, 2, 3, 4, 5].map((_) => (
                      <FaStar key={_} className="text-primary" />
                    ))}
                  </div>

                  <h4>{item.author}</h4>
                  <p className="text-sm">{item.city}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
          {cards.map((card, i) => (
            <div className={`${i === 1 && "mt-32"}`}>
              <ImageCard
                heading={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
