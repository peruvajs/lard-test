document.querySelector('#staff__list-content').innerHTML = `
    <div class="list__content-container">
        <h1 class="list__content-title">Список сотрудников</h1>
        <div class="list__content-tags"></div>
        <div class="list__content-members"></div>
        <div class="list__content-button-wrapper">
            <button type="button" class="list__content-button">
                <img src="${reload}" alt="reload-icon" class="list__content-button__icon">
                Показать ещё
            </button>
        </div>
    </div>
`
import ruFlag from '/icons/ru.svg';
import tjFlag from '/icons/tj.svg';
import reload from '/icons/reload-icon.svg';

const contentTagsContainer = document.querySelector('.list__content-tags');
const tags = ['Весь список', 'Проблемные', 'Критические', 'Есть замечания', 'Выполнено'];

const membersContainer = document.querySelector('.list__content-members');
const membersInfo = [
    {
        surname: 'Константинопольский',
        name: 'Константин',
        patronymic: 'Константинович',
        inn: '1234567890',
        contract: 'СМЗ',
        position: 'промышленный альпинист',
        flag: `${ruFlag}`,
        nationality: `RU`,
        passport: '4002 571654',
        city: 'г. Санкт-Петербург',
        birthDate: '23.06.2001',
        age: '21 год',
        sex: 'мужской',
        status: 'Истекают все документы',
        statusColor: '#E52E2E',
        completed: `${true}`,
    },
    {
        surname: 'Иванов',
        name: 'Иван',
        patronymic: 'Иванович',
        inn: '1234567890',
        contract: 'ТД',
        position: 'промышленный альпинист',
        flag: `${tjFlag}`,
        nationality: `TJ`,
        passport: '404020262',
        city: 'г. Санкт-Петербург',
        birthDate: '23.06.2001',
        age: '21 год',
        sex: 'мужской',
        status: 'Истекает патент',
        statusColor: '#E2BD06',
        completed: `${true}`,
    },
    {
        surname: 'Константинопольский',
        name: 'Константин',
        patronymic: 'Константинович',
        inn: '1234567890',
        contract: 'СМЗ',
        position: 'промышленный альпинист',
        flag: `${ruFlag}`,
        nationality: `RU`,
        passport: '4002 571654',
        city: 'г. Санкт-Петербург',
        birthDate: '23.06.2001',
        age: '21 год',
        sex: 'мужской',
        status: 'Истекает патент',
        statusColor: '#E2BD06',
        completed: `${true}`,
    },
    {
        surname: 'Иванов',
        name: 'Иван',
        patronymic: 'Иванович',
        inn: '1234567890',
        contract: 'ГПХ',
        position: 'промышленный альпинист',
        flag: `${tjFlag}`,
        nationality: `TJ`,
        passport: '404020262',
        city: 'г. Санкт-Петербург',
        birthDate: '23.06.2001',
        age: '21 год',
        sex: 'мужской',
        status: 'Пропустил медосмотр',
        statusColor: '#00B6ED',
        completed: `${false}`,
    },
    {
        surname: 'Константинопольский',
        name: 'Константин',
        patronymic: 'Константинович',
        inn: '1234567890',
        contract: 'СМЗ',
        position: 'промышленный альпинист',
        flag: `${ruFlag}`,
        nationality: `RU`,
        passport: '4002 571654',
        city: 'г. Санкт-Петербург',
        birthDate: '23.06.2001',
        age: '21 год',
        sex: 'мужской',
        status: 'Прошел все процедуры',
        statusColor: '#00AE5B',
        completed: `${false}`,
    },
];

tags.forEach(tag => {
    contentTagsContainer.innerHTML += `<button type="button" class="list__content-tags__item">${tag}</button>`;
});

membersInfo.forEach(member => {
    membersContainer.innerHTML += `
        <div class="list__content-members__block">
            <div class="list__content-members__info1">
                <span style="color: #2A358C; font-size: 18px;">${member.surname} ${member.name} ${member.patronymic}</span>
                <span style="background-color: white; color: #84909B; padding: 4px 8px; border-radius: 4px;">ИНН ${member.inn}</span>
                <div style="display: flex; align-items: center; gap: 10px">
                    <span style="background-color: #00AE5B; color: white; padding: 4px 8px; border-radius: 4px;">${member.contract}</span>
                    <span>${member.position}</span>
                </div>
            </div>

            <div class="list__content-members__info2" style="padding: 15px 0; color: ${member.completed === 'false' ? '#84909B' : 'inherit'};">
                <img src="${member.flag}" alt="flag-icon">
                <span style="padding: 0 0 0 10px">${member.nationality} ${member.passport}</span>
                <span style="margin: 0 15px; color: #CEDAE5;">|</span>
                <span>${member.city}</span>
                <span style="margin: 0 15px; color: #CEDAE5;">|</span>
                <span>Дата рождения: ${member.birthDate}</span>
                <span style="margin: 0 15px; color: #CEDAE5;">|</span>
                <span>Возраст: ${member.age}</span>
                <span style="margin: 0 15px; color: #CEDAE5;">|</span>
                <span>Пол: ${member.sex}</span>
            </div>

            <div class="list__content-members__info3" style="background-color: ${member.statusColor}; padding: 4px 8px 7px 8px; border-radius: 4px;">
                ${member.status}
            </div>
        </div>
    `;
});