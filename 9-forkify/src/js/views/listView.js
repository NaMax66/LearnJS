import {elements} from './base';

export  const renderItem = item => {
  const markup = `
  <li class="shopping__item" data-itemid="${item.id}"> <!--this will be useful in order to delete the item-->
      <div class="shopping__count">
          <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
          <p>${item.unit}</p>
      </div>
      <p class="shopping__description">${item.ingredient}</p>
      <button class="shopping__delete btn-tiny">
          <svg>
              <use href="img/icons.svg#icon-circle-with-cross"></use>
          </svg>
      </button>
  </li>
  `;
  console.log('adding the item in the shopping list');
  elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
  const item = document.querySelector(`[data-itemid="${id}"]`);
  if(item) item.parentElement.removeChild(item);
};


