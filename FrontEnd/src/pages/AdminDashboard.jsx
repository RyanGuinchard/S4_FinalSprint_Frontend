import { useState, useEffect } from "react";
import GameManagement from "../components/GameManagement";
import CategoryManagement from "../components/CategoryManagement";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    fetch("http://localhost:8080/admin/check-auth", { credentials: "include" })
      .then((response) => {
        if (response.ok) {
          // If authenticated, fetch the games
          return fetch("http://localhost:8080/games", { credentials: "include" });
        } else {
          // If not authenticated, redirect to login
          navigate("/admin/login");
          throw new Error("Not authenticated");
        }
      })
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error fetching games or checking auth:", err));
  }, [navigate]);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  const handleLogout = () => {
    fetch("http://localhost:8080/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        navigate("/admin/login");
      })
      .catch((err) => console.error("Error logging out:", err));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>

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
