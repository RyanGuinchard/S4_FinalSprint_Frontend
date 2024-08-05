import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavPanel = ({ title, gameId }) => {
  return (
    <>
      <Link to={`/game/${gameId}`} className="w-64 p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-200">
        <h2 className="text-center text-xl font-bold">{title}</h2>
      </Link>
    </>
  );
};

NavPanel.propTypes = {
  title: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
};

export default NavPanel;
