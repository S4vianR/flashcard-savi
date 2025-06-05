// Props
interface FlashCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

export const FlashCard = ({ image, title, onClick }: FlashCardProps) => {
  return (
    <div 
      className="w-72 h-96 shadow-lg border border-gray-300 rounded-lg p-4 hover:shadow-xl cursor-pointer transition-shadow"
      onClick={onClick}
    >
      <img
        src={image}
        alt={`Flashcard for ${title}`}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};