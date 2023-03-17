const fetchData = async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: 'c7efdf48',
            s: searchTerm
        }
    });

    if(response.data.Error){
        return [];
    }
    
    return response.data.Search;
};

const input = document.querySelector('input');

let timeoutId;
const onInput = async event => {
        const movies = await fetchData(event.target.value);
        for(let movie of movies){
            const div = document.createElement('div');
            div.innerHTML = `
                <img src="${movie.Poster}"/>
                <h3>${movie.Title}</h3>
            `;

            document.querySelector('#target').appendChild(div);
        }
};
    


input.addEventListener('input', debounce(onInput, 2000)); 
