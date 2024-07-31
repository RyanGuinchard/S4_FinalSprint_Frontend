export const getAllGames = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, title: 'Fallout 4' },
            { id: 2, title: 'The Witcher 3' },
            { id: 3, title: 'Skyrim' }
          ]
        });
      }, 1000);
    });
  };
  
  export const getCategoriesByGameId = (gameId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = {
          1: [
            { id: 1, category_name: 'Settlement' },
            { id: 2, category_name: 'Companion' }
          ],
          2: [
            { id: 3, category_name: 'Main Quest' },
            { id: 4, category_name: 'Side Quest' }
          ],
          3: [
            { id: 5, category_name: 'Guild' },
            { id: 6, category_name: 'Dragon' }
          ]
        };
        resolve({ data: categories[gameId] || [] });
      }, 1000);
    });
  };
  
  export const getOptionsByCategoryId = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const options = {
          1: [
            { id: 1, option_name: 'Abernathy Farm' },
            { id: 2, option_name: 'Boston Airport' },
            { id: 3, option_name: 'Bunker Hill' }
          ],
          2: [
            { id: 4, option_name: 'Codsworth' },
            { id: 5, option_name: 'Dogmeat' },
            { id: 6, option_name: 'Piper Wright' }
          ],
          3: [
            { id: 7, option_name: 'Find Ciri' },
            { id: 8, option_name: 'Kill the Griffin' },
            { id: 9, option_name: 'Battle of Kaer Morhen' }
          ],
          4: [
            { id: 10, option_name: 'Gwent Tournament' },
            { id: 11, option_name: 'Save the Villagers' },
            { id: 12, option_name: 'Treasure Hunt' }
          ],
          5: [
            { id: 13, option_name: 'Join the Thieves Guild' },
            { id: 14, option_name: 'Dark Brotherhood Initiation' },
            { id: 15, option_name: 'Companions Training' }
          ],
          6: [
            { id: 16, option_name: 'Defeat Alduin' },
            { id: 17, option_name: 'Collect Dragon Shouts' },
            { id: 18, option_name: 'Dragon Research' }
          ]
        };
        resolve({ data: options[categoryId] || [] });
      }, 1000);
    });
  };
  