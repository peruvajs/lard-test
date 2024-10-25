document.querySelector('#staff__filter-content').innerHTML = `
    <h1 style="font-size: 26px; font-weight: 600; font-style: normal">Фильтр</h1>
    
    <div class="filter-content__block1">
        <div class="filter-content__block1-nationality">
            <h2>Гражданство</h2>
            <select class="filter-content__select">
                <option value="">Все страны</option>
                <option value="rus">Россия</option>
                <option value="tj">Таджикистан</option>
            </select>
        </div>
        
        <div class="filter-content__block1-sex">
            <h2>Пол</h2>
            <select class="filter-content__select">
                <option value="">Без разницы</option>
                <option value="man">Мужской</option>
                <option value="woman">Женский</option>
            </select>
        </div>
    </div>
    
    <div class="filter-content__block2">
        <h2>Должность</h2>
        <select class="filter-content__select">
            <option value="">Все должности</option>
            <option value="industrial_climber">Промышленный альпинист</option>
        </select>
    </div>
    
    <div class="filter-content__block3">
        <h2>Тип договора</h2>
        <div class="filter-content__block3-checkboxes">
            <div class="filter-content__block3-checkboxes-wrapper">
                <input type="checkbox" class="filter-content__block3-checkbox" id="contract1" name="contract1" value="contract1"/>
                <label for="contract1">ТД</label>
            </div>
            
            <div class="filter-content__block3-checkboxes-wrapper">
                <input type="checkbox" class="filter-content__block3-checkbox" id="contract2" name="contract2" value="contract2"/>
                <label for="contract2">ГПХ</label>
            </div>
            
            <div class="filter-content__block3-checkboxes-wrapper">
                <input type="checkbox" class="filter-content__block3-checkbox" id="contract3" name="contract3" value="contract3"/>
                <label for="contract3">СМЗ</label>
            </div>
            
            <div class="filter-content__block3-checkboxes-wrapper">
                <input type="checkbox" class="filter-content__block3-checkbox" id="contract4" name="contract4" value="contract4"/>
                <label for="contract4">Кандидат</label>
            </div>
        </div>
    </div>
    
    <div class="filter__content-btns">
        <button type="button" class="filter__content-btns__apply">Применить</button>
        <button type="button" class="filter__content-btns__clear">Очистить</button>
    </div>
`

document.querySelectorAll('.filter-content__select').forEach(select => {
    select.addEventListener('change', function () {
        if (this.value !== "") {
            this.classList.add('selected');
        } else {
            this.classList.remove('selected');
        }
    });
});