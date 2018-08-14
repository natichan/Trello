function createNewInput() {
    const addAList = document.getElementById('addListForInput')
    const containerList = document.getElementsByClassName('list')[0];
    addAList.style.display = 'none';
    containerList.style.display = 'block';
    createTodoList();
  };
  
function createTodoList() {
    const containerList = document.getElementsByClassName('list')[0];
    const inputList = document.createElement('input')
    const buttonAddList = document.createElement('button')
    const nameButtonAddList = document.createTextNode('Add List')

    inputList.setAttribute('class', 'inputList');
    inputList.type = 'text';
    buttonAddList.setAttribute('class', 'styleButtonList')

    containerList.appendChild(inputList);
    containerList.appendChild(buttonAddList);
    buttonAddList.appendChild(nameButtonAddList);
}