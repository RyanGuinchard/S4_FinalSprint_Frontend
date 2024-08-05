import { useState, useEffect } from "react";
import NavPanel from "../components/NavPanel";

const Main = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  // Update for production on AWS, using local for dev
  useEffect(() => {
    fetch('http://localhost:8080/games')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(err => console.error('Error fetching full game list: ' + err));
  }, []);

  const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <>
 <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-2">Welcome to DecisionForge</h1>
        <p className="text-xl mb-6">Get started by selecting a game to randomize your choices.</p>
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {filteredGames.map(game => (
          <NavPanel key={game.id} title={game.title} gameId={game.id} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Main;
