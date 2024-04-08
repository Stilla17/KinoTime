let url = 'https://api.themoviedb.org/3/trending/all/week?api_key=131d64b0caccc7141c93ff092f9b7cd2'
let urlImage = 'https://image.tmdb.org/t/p/w500'
let rowBlock = document.querySelector('.rowBlock')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

let renderingTrend = []
let cardPage = 20
let currentPage = 1

let searchInput = document.querySelector('#search')

async function renderMovies(pageNumber) {

    await axios.get(url, {
        params: {
            page: pageNumber,
        }
    })
        .then(res => {
            renderingTrend = res.data.results
            getRenderMovies(renderingTrend)
        }).catch(error => console.error('Error fetching data:', error));
}

function getRenderMovies(movies) {
    rowBlock.innerHTML = ''
    movies?.map((item) => {
        let divBlock = document.createElement('div')
        divBlock.className = 'relative w-[200px] border-2 rounded-lg p-2'

        divBlock.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="rounded-lg" alt="${item.title}">
    <p>${item.title === undefined ? item.original_name : item.title}</p>
    <p>year: ${item.release_date === undefined ? item.first_air_date : item.release_date}</p>
    <p class="bg-sky-500 absolute top-0 left-0 px-2 rounded-full text-[12px]">${item.vote_average}</p>
    `
        rowBlock.append(divBlock)
    })
}

function handleBtn(newPage) {
    if (newPage >= 1) {
        currentPage = newPage
        renderMovies(currentPage);
    }
}

searchInput.addEventListener('input', () => {
    let searchTerm = searchInput.value
    let filterData = renderingTrend?.filter((item) => {
        return item.title && item.title.toLowerCase().includes(searchTerm)
    })
    getRenderMovies(filterData)
    console.log(filterData);
})

prevBtn.addEventListener('click', () => handleBtn(currentPage - 1))
nextBtn.addEventListener('click', () => handleBtn(currentPage + 1))

renderMovies(currentPage);
