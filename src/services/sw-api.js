const getAllStarships = () => {
    const url = 'https://swapi.dev/api/starships';
    console.log('services hello');
    return fetch(url).then( (res) => res.json())
}

export default getAllStarships;