$(() => {
  const $main = $('#main-content');
  window.items = {};
  window.$items = $(`
    <div id="items">
      <span class="content-heading">${categoryName}</span>
      <ul id="items-list"></ul>
    </div>
  `);

  function generateItemHtml(item) {
    return `
      <li>
        <div class="item" data-id="${item.id}">
          ${item.name}
        </div>
      </li>`;
  }

  function generateItemsHtml(items) {
    const itemsListHtml = items.map(item => {
      return generateItemHtml(item);
    }).join("\n");

    const categoryName = window.selectedCategory ? window.selectedCategory.name : "";

    return `
    <div id="items">
      <span class="content-heading">${categoryName}</span>
      <ul>
        ${itemsListHtml}
      </ul>
    </div>
    `;
  }

  // Update items view
  function updateItemsView(items) {
    $main.find("#items").remove();
    const itemsHtml = generateItemsHtml(items);
    $main.append(itemsHtml);
  }
  window.items.updateItems = updateItemsView;
});
