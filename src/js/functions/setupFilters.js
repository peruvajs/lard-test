import { membersInfo } from "../staff_list/staffList.js";

const searchInput = document.querySelector('.search-input');
const tagButtons = document.querySelectorAll('.list__content-tags__item');
const nationalityFilter = document.querySelector('.filter-content__block1-nationality .filter-content__select');
const sexFilter = document.querySelector('.filter-content__block1-sex .filter-content__select');
const positionFilter = document.querySelector('.filter-content__block2 .filter-content__select');
const contractCheckboxes = document.querySelectorAll('.filter-content__block3-checkbox');
const applyButton = document.querySelector('.filter__content-btns__apply');
const clearButton = document.querySelector('.filter__content-btns__clear');

// активный тег "Весь список" по умолчанию
tagButtons[0].classList.add('active');

// функция фильтрации
function filterMembers() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedTag = [...tagButtons].find(tag => tag.classList.contains('active'))?.textContent || 'Весь список';
    const nationalityValue = nationalityFilter.value === "rus" ? "RU" : nationalityFilter.value === "tj" ? "TJ" : "";
    const sexValue = sexFilter.value === "man" ? "мужской" : sexFilter.value === "woman" ? "женский" : "";
    const positionValue = positionFilter.value === "industrial_climber" ? "промышленный альпинист" : "";
    const selectedContracts = [...contractCheckboxes]
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // фильтрация списка сотрудников
    const filteredMembers = membersInfo.filter(member => {
        const matchesSearch = `${member.surname} ${member.name} ${member.patronymic}`.toLowerCase().includes(searchValue);
        const matchesTag = (selectedTag === 'Весь список') ||
            (selectedTag === 'Проблемные' && member.status === 'Истекает патент') ||
            (selectedTag === 'Критические' && member.status === 'Истекают все документы') ||
            (selectedTag === 'Есть замечания' && member.status === 'Пропустил медосмотр') ||
            (selectedTag === 'Выполнено' && member.status === 'Прошел все процедуры');
        const matchesNationality = nationalityValue === '' || member.nationality === nationalityValue;
        const matchesSex = sexValue === '' || member.sex === sexValue;
        const matchesPosition = positionValue === '' || member.position === positionValue;
        const matchesContract = selectedContracts.length === 0 || selectedContracts.includes(member.contract.trim());

        return matchesSearch && matchesTag && matchesNationality && matchesSex && matchesPosition && matchesContract;
    });

    displayMembers(filteredMembers);
}

// отображение сотрудников
function displayMembers(members) {
    const membersContainer = document.querySelector('.list__content-members');
    membersContainer.innerHTML = '';
    members.forEach(member => {
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
}

// события для фильтров
searchInput.addEventListener('input', filterMembers);
tagButtons.forEach(tag => tag.addEventListener('click', () => {
    tagButtons.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    filterMembers();
}));

applyButton.addEventListener('click', filterMembers);
clearButton.addEventListener('click', () => {
    searchInput.value = '';
    nationalityFilter.value = '';
    sexFilter.value = '';
    positionFilter.value = '';
    contractCheckboxes.forEach(checkbox => checkbox.checked = false);
    filterMembers();
});

filterMembers();