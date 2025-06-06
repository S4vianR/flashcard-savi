import { FlashCard } from "../FlashCard";
import { useState, useEffect } from "react";

// Lista de animales basados en las imágenes disponibles en public/assets/animals
const animals_data = [
  { name: "Bear", image: "/assets/animals/bear.webp" },
  { name: "Butterfly", image: "/assets/animals/butterfly.webp" },
  { name: "Dolphin", image: "/assets/animals/dolphin.webp" },
  { name: "Elephant", image: "/assets/animals/elephant.webp" },
  { name: "Flamingo", image: "/assets/animals/flamingo.webp" },
  { name: "Fox", image: "/assets/animals/fox.webp" },
  { name: "Giraffe", image: "/assets/animals/giraffe.webp" },
  { name: "Kangaroo", image: "/assets/animals/kangoroo.webp" },
  { name: "Lion", image: "/assets/animals/lion.webp" },
  { name: "Owl", image: "/assets/animals/owl.webp" },
  { name: "Panda", image: "/assets/animals/panda.webp" },
  { name: "Penguin", image: "/assets/animals/penguin.webp" },
  { name: "Tiger", image: "/assets/animals/tiger.webp" },
  { name: "Turtle", image: "/assets/animals/turtle.webp" },
  { name: "Zebra", image: "/assets/animals/zebra.webp" },
];

export const AnimalFlashCardTest = () => {
  const [animals, setAnimals] = useState<{ name: string; image: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setAnimals(animals_data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading animals:", error);
        setLoading(false);
      }
    };
    loadAnimals();
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % animals.length);
  };


  const previousCard = () => {
    setCurrentIndex((prev) => (prev - 1 + animals.length) % animals.length);
  };

  const handleFlashCardClick = () => {
    alert(`You clicked on ${animals[currentIndex].name}`);
  };

  if (loading) {
    return (
      <div className="h-full flex justify-center items-center">
        <p>Loading flashcards...</p>
      </div>
    );
  }

  if (animals.length === 0) {
    return (
      <div className="h-full flex justify-center items-center">
        <p>No animal images found.</p>
      </div>
    );
  }

  const currentAnimal = animals[currentIndex];

  return (
    <div className="h-full w-4/12 flex flex-col justify-start items-stretch gap-6">
      <h2 className="h-1/12 text-2xl font-bold mb-4">Animals</h2>

      {/* Progress indicator */}
      <div className="h-1/12 text-center">
        <p className="text-sm text-gray-600">
          {currentIndex + 1} of {animals.length}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / animals.length) * 100}%` }}
          ></div>
        </div>
      </div>
      {/* Single flashcard */}
      <div className="flex justify-center items-center mb-6">
        <FlashCard
          key={currentAnimal.name}
          image={currentAnimal.image}
          title={currentAnimal.name}
          onClick={handleFlashCardClick}
        />
      </div>
      {/* Nav buttons */}
      <div className="flex justify-center items-center">
        <button
          onClick={previousCard}
          className="w-24 cursor-pointer bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={nextCard}
          className="w-24 cursor-pointer bg-pink-400/65 hover:bg-pink-400/95 text-slate-50 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};
