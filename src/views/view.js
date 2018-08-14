function createNewInput() {
    const addAList = document.getElementById('addListForInput')
    const containerList = document.getElementsByClassName('list')[0];
    addAList.style.display = 'none';
    containerList.style.display = 'block';
    createTodoList();
  };
  
function createTodoList() {
    const containerList = document.getElementsByClassName('list')[0];
    const inputList = document.createElement('input');
    const buttonAddList = document.createElement('button');
    const nameButtonAddList = document.createTextNode('Add List');
    const buttonDelete = document.createElement('button');
    const iconDelete = document.createElement('i');

    inputList.setAttribute('class', 'inputList');
    inputList.setAttribute('placeholder', ' Enter list title...');

    inputList.type = 'text';
    buttonAddList.setAttribute('class', 'styleButtonList')
    buttonDelete.setAttribute('class', 'buttonDeleteStyle')
    iconDelete.setAttribute('class', 'fas fa-times')
    // buttonAddList.onclick = function() { runCommand() };
 
    containerList.appendChild(inputList);
    containerList.appendChild(buttonAddList);
    buttonAddList.appendChild(nameButtonAddList);
    containerList.appendChild(buttonDelete);
    buttonDelete.appendChild(iconDelete);
}