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
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [animals, setAnimals] = useState<{ name: string; image: string }[]>([]);
  const [questions, setQuestions] = useState<Array<string>>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
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

  // Efecto para cargar las preguntas cuando cambien los animales o el índice actual
  useEffect(() => {
    // Solo cargar preguntas si ya tenemos animales cargados
    if (animals.length > 0) {
      const loadQuestions = () => {
        // Siempre incluimos el nombre del animal actual
        const correctAnswer = animals[currentIndex].name;

        // Crear un array con todos los nombres de animales excepto el actual
        const otherAnimalNames = animals_data
          .map((animal) => animal.name)
          .filter((name) => name !== correctAnswer);

        // Mezclar los nombres de animales y tomar 3 aleatorios
        const shuffledNames = otherAnimalNames
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);

        // Añadir la respuesta correcta
        const allOptions = [...shuffledNames, correctAnswer];

        // Mezclar las opciones para que la respuesta correcta no siempre esté en la misma posición
        const finalOptions = allOptions.sort(() => Math.random() - 0.5);

        setQuestions(finalOptions);
      };

      loadQuestions();
    }
  }, [animals, currentIndex]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % animals.length);
  };

  const checkQuestion = () => {
    
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
    <div className="h-full flex flex-col justify-start items-stretch gap-6">
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

      <form
        action="#"
        onSubmit={}
        className="h-10/12 p-6 border border-gray-200 shadow-lg flex flex-col justify-center items-center gap-4"
      >
        <h3 className="text-xl font-bold">What animal is it?</h3>
        {/* Single flashcard */}
        <div className="flex justify-center items-center mb-6">
          <FlashCard
            key={currentAnimal.name}
            image={currentAnimal.image}
            title={currentAnimal.name}
          />
        </div>
        {/* Questions */}
        <div className="flex flex-row gap-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex flex-row justify-start items-center gap-2"
            >
              <input
                type="radio"
                name="questions"
                id={`q${index}`}
                value={question}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentAnswer(e.target.value)}
              />
              <label htmlFor={`q${index}`}>{question}</label>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Questions answered: {totalQuestions} | Correct: {correctAnswers} |
            Incorrect: {incorrectAnswers}
          </p>
        </div>
      </form>
    </div>
  );
};
