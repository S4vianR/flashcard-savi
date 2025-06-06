// Props
interface FlashCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

export const FlashCard = ({ image, title, onClick }: FlashCardProps) => {
  return (
    <div
      className="w-80 h-96 flex flex-col bg-purple-100 shadow-pink-500/50 shadow-lg rounded-lg p-4 hover:shadow-xl cursor-pointer transition-shadow"
      onClick={onClick}
    >
      <img
        src={image}
        alt={`Flashcard for ${title}`}
        className="w-full h-11/12 object-cover rounded-lg"
      />
      <p className="mt-2 text-center text-gray-900 font-medium">
          {title}
      </p>
    </div>
  );
};
