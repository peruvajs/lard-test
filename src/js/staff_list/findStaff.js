import searchIcon from '/icons/search-icon.svg'

document.querySelector('#staff__list-search').innerHTML = `
    <div class="search-container">
        <input
            type="text"
            placeholder="Поиск сотрудника"
            class="search-input"
        />
        <img src="${searchIcon}" alt="Search" class="search-icon" />
    </div>
    <div class="search-hint">
        <span>Например: Иванов Иван</span>
    </div>
`