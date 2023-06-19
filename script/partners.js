const api_url = "https://api.openbrewerydb.org/v1/breweries";

const typeSelect = document.getElementById('breweries-type');
const nameSelect = document.getElementById('breweries-name');
const citySelect = document.getElementById('breweries-city');
const formData = document.getElementById('filter-form');
const perPage = document.getElementById('per-page');
const clearFilters = document.getElementById('clear-filters');
const buttonSearch = document.getElementById('button-search');
const inputSearch = document.getElementById('brewery-search');

const cityList = new Set();
const nameList = new Set();
const typeList = new Set();

//Filters listeners

typeSelect.addEventListener('change', function() {
    getBreweries();
});

perPage.addEventListener('change', function() {
    getBreweries();
});

nameSelect.addEventListener('change', function() {
    getBreweries();
});

citySelect.addEventListener('change', function() {
    getBreweries();
});

clearFilters.addEventListener('click', function() {
    clearFiltersData();
    getBreweries();
})

//Search 

buttonSearch.addEventListener('click', function() {
    getBreweries(true);
})

function clearFiltersData() {
    typeSelect.selectedIndex = 0;
    nameSelect.selectedIndex = 0;
    citySelect.selectedIndex = 0;
}

function createLists(data) {
    if (data && data.length) {
        data.forEach(item => {
            cityList.add(item.city);
            nameList.add(item.name);
            typeList.add(item.brewery_type);
        })

        createFilters();
    }
}

function createFilters() {
    typeList.forEach(city => {
        typeSelect.options[typeSelect.options.length] = new Option(city, city);
         
    });
    cityList.forEach(city => {
        citySelect.options[citySelect.options.length] = new Option(city, city);
         
    });
    nameList.forEach(city => {
        nameSelect.options[nameSelect.options.length] = new Option(city, city);
         
    });
}

async function getBreweries(isSearch = false) {
    const queryParams = isSearch && inputSearch.value ? getSearchQuery() : getParams();
    const response = await fetch(`${api_url}${queryParams}`);
    const data = await response.json();

    renderBreweries(data);
    createLists(data);
}

function getSearchQuery() {
    const searchQuery = encodeURIComponent(inputSearch.value);
    clearFiltersData();
    return `/search?query=${searchQuery}`;
}

function getParams() {
    const params = {};
    [...formData.elements].forEach(item => {
        if (item.value) {
            params[item.name] = item.value;
        }
    })
    return `?${new URLSearchParams(params).toString()}`;
}


async function renderBreweries(dataValue) {
    let breweries = await dataValue;
    let html = '';
    if (breweries && breweries.length) {
        breweries.forEach(brewery => {
            let htmlBrewery = `<div class="breweryItem">
                                <p>${brewery.brewery_type}</p>
                                <p>${brewery.name}</p>
                                <div class="address">
                                    <p>${brewery.postal_code} </p>
                                    <p>${brewery.state}, ${brewery.city} </p>
                                    <p>${brewery.street}</p>
                                    <p>${brewery.phone}</p>
                                </div>
                                <p>${brewery.website_url}</p>
                            </div>`;

                html += htmlBrewery;
            
        });
    } else {
        html = `<p class="no-data">0 breweries found</p>`;
    }

    let breweriesWrapper = document.getElementById("breweries-wrapper");
    breweriesWrapper.innerHTML = html;
}

getBreweries();
createLists();