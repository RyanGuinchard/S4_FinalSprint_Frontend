import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const CategoryPanel = ( { category }) => {
    const [ currentOption, setCurrentOption ] = useState(category.options[0])

    // Random option on load
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * category.options.length);
      setCurrentOption(category.options[randomIndex]);
    }, [category.options]);

    const reroll = () => {
        const randomIndex = Math.floor(Math.random() * category.options.length);
        setCurrentOption(category.options[randomIndex]);
    }
  return (
    <div className='bg-gray-800 p-6 rounded-lg shadow-lg w-64 text-center'>
        <h2 className='text-2xl font-semibold mb-4'>{category.categoryName}</h2>
        <p className='text-lg font-semibold mb-4'>{currentOption.optionName}</p>
        <button onClick={reroll} className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200'>Reroll</button>
    </div>
  )
}

CategoryPanel.propTypes = {
  category: PropTypes.shape({
    options: PropTypes.array.isRequired,
    categoryName: PropTypes.string.isRequired
  }).isRequired
};

export default CategoryPanel