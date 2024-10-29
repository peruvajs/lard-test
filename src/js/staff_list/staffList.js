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
export const membersInfo = [
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