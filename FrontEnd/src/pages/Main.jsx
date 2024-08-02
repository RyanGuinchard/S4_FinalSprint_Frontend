import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { getAllGames, getCategoriesByGameId, getOptionsByCategoryId } from '../services/mockApi';

const Main = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    getAllGames().then(response => setGames(response.data));
  }, []);

  const fetchCategories = (gameId) => {
    setSelectedGame(gameId);
    getCategoriesByGameId(gameId).then(response => {
      setCategories(response.data);
      setOptions([]); // Clear options when a new game is selected
      setSelectedOption(null); // Clear selected option when a new game is selected
    });
  };

  const fetchOptions = (categoryId) => {
    setSelectedCategory(categoryId);
    getOptionsByCategoryId(categoryId).then(response => {
      setOptions(response.data);
      selectRandomOption(response.data);
    });
  };

  const selectRandomOption = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setSelectedOption(options[randomIndex]);
  };

  return (
    <div className="container">
      <h1 className='text-4xl'>Welcome to DecisionForge</h1>
      <p>Get started by selecting a game to randomize your choices.</p>
      <div>
        {games.map(game => (
          <Button key={game.id} onClick={() => fetchCategories(game.id)}>{game.title}</Button>
        ))}
      </div>
      {categories.length > 0 && (
        <>
          <h2>Categories</h2>
          <div>
            {categories.map(category => (
              <Button key={category.id} onClick={() => fetchOptions(category.id)}>{category.category_name}</Button>
            ))}
          </div>
        </>
      )}
      {options.length > 0 && (
        <div>
          <h2>Options</h2>
          <ul>
            {options.map(option => (
              <li key={option.id} className={option.id === selectedOption?.id ? 'selected' : ''}>
                {option.option_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Main;
