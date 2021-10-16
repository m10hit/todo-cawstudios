// Function to set attributes
function setAttributes(element, attributes) {
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
var input = document.getElementById('checkbox-input'); //to get the user input
var list = document.getElementById('list-start'); //to get the unordered list
input.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    // Condition - when user presses enter without giving any inputs or giving white spaces
    if (input.value.trim().length === 0) {
      input.value = '';
      alert('Please type something');
      return;
    }
    var listItem = document.createElement('li');
    list.appendChild(listItem);
    var check = document.createElement('input');
    setAttributes(check, {
      type: 'checkbox',
      name: 'check',
      id: input.value,
      onclick: 'checkOne(this)',
    }); //To set the attributes of checkbox element
    var label = document.createElement('label');
    label.htmlFor = input.value;
    label.appendChild(document.createTextNode(input.value));
    listItem.appendChild(check);
    listItem.appendChild(label);
    input.value = '';
  }
});
// Function to strikethrough the checked item
function checkOne(inp) {
  if (inp.checked) {
    lbl = inp.nextSibling;
    lbl.style.textDecoration = 'line-through';
  } else {
    lbl = inp.nextSibling;
    lbl.style.textDecoration = 'none';
  }
}
// Adding event listener on "Clear Completed" button click to clear the checked item in the list
document
  .getElementById('checklist-button')
  .addEventListener('click', function (e) {
    var checkedArray = [];
    var isChecked = document.getElementsByName('check');
    for (var i = 0; i < isChecked.length; i++) {
      if (isChecked[i].checked) {
        checkedArray.push(isChecked[i].parentElement);
      }
    }
    // Condition - when user tries to click on "Clear Completed" button without checking any items in the list
    if (checkedArray.length === 0) {
      alert('No item selected to clear');
    }
    // To remove the checked items
    checkedArray.forEach(function (item) {
      item.remove();
    });
  });
