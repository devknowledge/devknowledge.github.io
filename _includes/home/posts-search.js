const allCategories = window.jekyll.categories;
renderPostsSearch();

const searchPostInput = document.getElementById('SearchPostInput');
const openAdvancedSearchIcon = document.getElementById('OpenAdvancedSearchIcon');
const closeAdvancedSearchIcon = document.getElementById('CloseAdvancedSearchIcon');
const selectAllCategoriesIcon = document.getElementById('SelectAllCategoriesIcon');
const unselectAllCategoriesIcon = document.getElementById('UnselectAllCategoriesIcon');
const advancedSearchInputsWrapper = document.getElementById('AdvancedSearchInputsWrapper');
const allCategoriesElements = document.querySelectorAll('.advanced-search-inputs-wrapper .category');
let selectedCategoriesLowerCase = getSelectedCategoriesLowerCase();

styleSelectedCategories();
setTimeout(dispatchFilterPostsEvent);
openAdvancedSearchIcon.addEventListener('click', handleOpenAdvancedSearchIconClickEvent);
advancedSearchInputsWrapper.addEventListener('click', handleAdvancedSearchInputsWrapperClickEvent);
selectAllCategoriesIcon.addEventListener('click', handleSelectAllCategoriesIconClickEvent);
unselectAllCategoriesIcon.addEventListener('click', handleUnselectAllCategoriesIconClickEvent);
document.addEventListener('click', closeAdvancedSearchInputsWrapper);
allCategoriesElements.forEach((tag) => tag.addEventListener('click', toggleCategory));
searchPostInput.addEventListener('keyup', delay(handleSearchPostsInputChangeEvent, 1000));

function renderPostsSearch() {
  const postsSearch = document.getElementById('PostsSearch');
  postsSearch.innerHTML = /* html */ `
    <div class="search-wrapper">
      <span class="iconify" data-icon="ic:outline-search" data-inline="false"></span>
      <input id="SearchPostInput" type="text" placeholder="Search..." />
      <span id="CloseAdvancedSearchIcon" class="hide"
        ><span class="iconify pointer" data-icon="eva:arrow-ios-upward-outline" data-inline="false"></span
      ></span>
      <span id="OpenAdvancedSearchIcon"><span class="iconify pointer" data-icon="eva:arrow-ios-downward-outline" data-inline="false"></span></span>
      <div id="AdvancedSearchInputsWrapper" class="advanced-search-inputs-wrapper hide">
        <div class="section-title-wrapper">
          <p class="section-title">Selected categories</p>
          <span id="UnselectAllCategoriesIcon" class="iconify-wrapper"
            ><span class="iconify pointer" title="unselect all categories" data-icon="gg:remove-r" data-inline="false"></span
          ></span>
          <span id="SelectAllCategoriesIcon" class="hide iconify-wrapper">
            <span class="iconify pointer" title="select all categories" data-icon="feather:plus-square" data-inline="false"></span
          ></span>
        </div>
        ${renderCategories()}
      </div>
    </div>
  `;
}

function renderCategories() {
  let res = '';
  window.jekyll.categories.forEach((category) => (res += `<span class="category">${category}</span>`));
  return res;
}

function handleOpenAdvancedSearchIconClickEvent(event) {
  event.stopPropagation();
  openAdvancedSearchIcon.classList.add('hide');
  closeAdvancedSearchIcon.classList.remove('hide');
  advancedSearchInputsWrapper.classList.remove('hide');
}

function closeAdvancedSearchInputsWrapper() {
  openAdvancedSearchIcon.classList.remove('hide');
  closeAdvancedSearchIcon.classList.add('hide');
  advancedSearchInputsWrapper.classList.add('hide');
}

function handleUnselectAllCategoriesIconClickEvent() {
  unselectAllCategoriesIcon.classList.add('hide');
  selectAllCategoriesIcon.classList.remove('hide');
  selectedCategoriesLowerCase = [];
  allCategoriesElements.forEach((category) => category.classList.remove('selected'));
  dispatchFilterPostsEvent();
}

function handleSelectAllCategoriesIconClickEvent() {
  selectAllCategoriesIcon.classList.add('hide');
  unselectAllCategoriesIcon.classList.remove('hide');
  allCategoriesElements.forEach((category) => {
    category.classList.add('selected');
    selectedCategoriesLowerCase.push(category.innerText.toLowerCase());
  });
  dispatchFilterPostsEvent();
}

function handleAdvancedSearchInputsWrapperClickEvent(event) {
  event.stopPropagation();
}

function toggleCategory(event) {
  const category = event.target;
  const categoryValueLowerCase = event.target.innerText.toLowerCase();
  if (selectedCategoriesLowerCase.includes(categoryValueLowerCase)) {
    selectedCategoriesLowerCase = selectedCategoriesLowerCase.filter((t) => t !== categoryValueLowerCase);
    category.classList.remove('selected');
  } else {
    selectedCategoriesLowerCase.push(categoryValueLowerCase);
    category.classList.add('selected');
  }
  dispatchFilterPostsEvent();
}

function getSelectedCategoriesLowerCase() {
  let res = [];
  const urlParams = new URLSearchParams(window.location.search);
  const urlSelectedCategory = urlParams.get('category');
  if (urlSelectedCategory !== null) {
    res.push(urlSelectedCategory.toLowerCase());
  } else {
    allCategories.forEach((category) => res.push(category.toLowerCase()));
  }
  return res;
}

function styleSelectedCategories() {
  allCategoriesElements.forEach((category) => {
    if (selectedCategoriesLowerCase.includes(category.innerText)) {
      category.classList.add('selected');
    } else {
      category.classList.remove('selected');
    }
  });
}

function dispatchFilterPostsEvent() {
  document.dispatchEvent(
    new CustomEvent('filter-posts', {
      detail: {
        selectedCategoriesLowerCase,
        searchInputText: searchPostInput.value,
      },
    })
  );
}

function handleSearchPostsInputChangeEvent() {
  dispatchFilterPostsEvent();
}
