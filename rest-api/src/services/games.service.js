import dataset from './games.js';

const { games } = dataset;

export const getAll = () => games;

export const getById = id => {
    const game = games.find(el => el.id === Number(id));
    if (game) {
        return game;
    }
    return null;
}

export const getGenres = id => {
    const game = games.find(el => el.id === Number(id));
    if (game) {
        return game.genre;
    }
    return [];
}

export const addGame = game => {
    if (idExists(game.id)) {
        return false;
    }

    games.push(game);
    return true;
}

export const updateGame = (id, updates) => {
    for (let i = 0; i < games.length; i++) {
        const game = games[i];

        //found the game, update it!
        if (game.id === Number(id)) {
            games[i] = updates;
            games[i].id = Number(id); //make sure the id is in the updated record
            return games[i];
        }
    }
    return null;
} 

export const updateGamePartial = (id, updates) => {
    for (let i = 0; i < games.length; i++) {
        const game = games[i];

        //found the game, update it!
        if (game.id === Number(id)) {
            const merged = {
                ...game,
                ...updates
            }
            games[i] = merged;
            return merged;
        }
    }
    return null;
} 

function idExists(id) {
    return games.find(el => el.id === Number(id)) === null;
}