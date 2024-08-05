import { useState, useEffect } from "react";
import GameManagement from "../components/GameManagement";
import CategoryManagement from "../components/CategoryManagement";

function AdminDashboard() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <GameManagement
        games={games}
        onGameSelect={handleGameSelect}
        setGames={setGames}
      />

      {selectedGame && (
        <CategoryManagement game={selectedGame} setGames={setGames} />
      )}
    </div>
  );
}

export default AdminDashboard;
