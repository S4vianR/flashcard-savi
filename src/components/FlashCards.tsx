// Array of flashcards images urls and flashcards titles
const flashCards = [
  {
    flashcardImage: "https://picsum.photos/id/40/200/300.webp",
    flashCardTitle: "Animals",
  },
  {
    flashcardImage: "https://picsum.photos/id/101/200/300.webp",
    flashCardTitle: "Countries",
  },
  {
    flashcardImage: "https://picsum.photos/id/102/200/300.webp",
    flashCardTitle: "Food",
  },
  {
    flashcardImage: "https://picsum.photos/id/181/200/300.webp",
    flashCardTitle: "ABC's",
  },
];

type FlashCardProps = {
  flashcardImage: string;
  flashCardTitle: string;
};

const FlashCard = ({ flashcardImage, flashCardTitle }: FlashCardProps) => {
  return (
    <div className="w-32 h-auto shadow-lg border border-gray-300 rounded-lg p-4 hover:shadow-xl cursor-pointer transition-shadow">
      <img
        src={flashcardImage}
        alt="Flashcard Example"
        className="w-full object-cover rounded-lg"
      />
      <span className="block mt-2 text-center text-gray-700 font-medium">
        {flashCardTitle}
      </span>
    </div>
  );
};

export const FlashCards = () => {
  return (
    // Call the FlashCard component for each flashcard in the array
    <div className="flex flex-wrap gap-4 justify-start items-center p-4">
      {flashCards.map((flashCard, index) => (
        <FlashCard
          key={index}
          flashcardImage={flashCard.flashcardImage}
          flashCardTitle={flashCard.flashCardTitle}
        />
      ))}
    </div>
  );
};
