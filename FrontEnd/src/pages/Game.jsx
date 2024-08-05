import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoryPanel from "../components/CategoryPanel";

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();


  // Update this for production when on AWS
  useEffect(() => {
    fetch(`http://localhost:8080/games/${id}`)
      .then((response) => response.json())
      .then((data) => setGame(data))
      .catch((err) => console.error("Error fetching specific game: " + err));
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <div className="relative w-full flex items-center justify-center mb-8">
        <button
          onClick={() => navigate("/")}
          className="absolute left-10 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Back to Home
        </button>
        <h1 className="text-4xl font-bold">{game.title}</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {game.categories.map((category) => (
          <CategoryPanel key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Game;
