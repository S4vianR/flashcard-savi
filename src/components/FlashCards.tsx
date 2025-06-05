// Array of flashcards images urls and flashcards titles
let smallImageSize = [200, 300] as Array<number>;
let largeImageSize = [600, 300] as Array<number>;
export const flashCards = [
  {
    flashcardImage: `https://picsum.photos/id/40/${smallImageSize[0]}/${smallImageSize[1]}.webp`,
    flashcardImageFull: `https://picsum.photos/id/40/${largeImageSize[0]}/${largeImageSize[1]}.webp`,
    flashCardTitle: "Animals",
    slug: "animals"
  },
  {
    flashcardImage: `https://picsum.photos/id/101/${smallImageSize[0]}/${smallImageSize[1]}.webp`,
    flashcardImageFull: `https://picsum.photos/id/101/${largeImageSize[0]}/${largeImageSize[1]}.webp`,
    flashCardTitle: "Countries",
    slug: "countries"
  },
  {
    flashcardImage: `https://picsum.photos/id/102/${smallImageSize[0]}/${smallImageSize[1]}.webp`,
    flashcardImageFull: `https://picsum.photos/id/102/${largeImageSize[0]}/${largeImageSize[1]}.webp`,
    flashCardTitle: "Food",
    slug: "food"
  },
  {
    flashcardImage: `https://picsum.photos/id/181/${smallImageSize[0]}/${smallImageSize[1]}.webp`,
    flashcardImageFull: `https://picsum.photos/id/181/${largeImageSize[0]}/${largeImageSize[1]}.webp`,
    flashCardTitle: "ABC's",
    slug: "abcs"
  },
];

type FlashCardProps = {
  flashcardImage: string;
  flashcardImageFull?: string;
  flashCardTitle: string;
  slug: string;
};

const FlashCard = ({ flashcardImage, flashCardTitle, slug }: FlashCardProps) => {
  return (
    <a href={`/flashcard/${slug}`} className="no-underline">
      <div className="w-56 h-auto shadow-lg border border-gray-300 rounded-lg p-4 hover:shadow-xl cursor-pointer transition-shadow">
        <img
          src={flashcardImage}
          alt="Flashcard Example"
          className="w-full object-cover rounded-lg"
        />
        <span className="block mt-2 text-center text-gray-700 font-medium">
          {flashCardTitle}
        </span>
      </div>
    </a>
  );
};

export const FlashCards = () => {
  return (
    // Call the FlashCard component for each flashcard in the array
    <div className="h-full flex flex-row flex-wrap gap-6 justify-center items-center p-4">
      {flashCards.map((flashCard, index) => (
        <FlashCard
          key={index}
          flashcardImage={flashCard.flashcardImage}
          flashCardTitle={flashCard.flashCardTitle}
          slug={flashCard.slug}
        />
      ))}
    </div>
  );
};
