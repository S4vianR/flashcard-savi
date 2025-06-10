export const NavBar = () => {
  return (
    <header className="p-2 bg-(--custom-purple) text-white text-lg flex flex-row items-center justify-between">
      <h1 className="text-2xl font-bold">
        <a href="/">Flashcard <span className="font-light text-sm text-pink-50">by Savi</span></a>
      </h1>
      <nav>
        <ul className="flex flex-row gap-4">
          <li className="font-medium transition-opacity hover:opacity-75">
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
