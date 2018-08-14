const containerList = document.getElementsByClassName('list')[0];
const containerTitle = document.getElementsByClassName('textTitle')[0];

function hideAndShowContent() {
    const addAList = document.getElementById('addListForInput')
    addAList.style.display = 'none';
    containerList.style.display = 'block';
    createInputForTitle();
  };
  
function createInputForTitle() {
    const inputList = document.createElement('input');
    const buttonAddList = document.createElement('button');
    const nameButtonAddList = document.createTextNode('Add List');
    const buttonDelete = document.createElement('button');
    const iconDelete = document.createElement('i');

    inputList.setAttribute('class', 'inputListForTitle');
    inputList.setAttribute('placeholder', ' Enter list title...');

    inputList.type = 'text';
    buttonAddList.setAttribute('class', 'styleButtonList')
    buttonDelete.setAttribute('class', 'buttonDeleteStyle')
    iconDelete.setAttribute('class', 'fas fa-times')
    buttonAddList.onclick = function() { hideAndShowContentTwo() };
 
    containerList.appendChild(inputList);
    containerList.appendChild(buttonAddList);
    buttonAddList.appendChild(nameButtonAddList);
    containerList.appendChild(buttonDelete);
    buttonDelete.appendChild(iconDelete);
};

    function hideAndShowContentTwo(){
        containerList.style.display = 'none';
        containerTitle.style.display = 'block';
        createTitleList();
    };

    function createTitleList(){
    const bringInputTitle = document.getElementsByClassName('inputListForTitle')[0].value;
  
    const titleNamePar = document.createElement('p');
    const beATextTitle = document.createTextNode(bringInputTitle);
    const addACard = document.createElement('a');
    const iconAdd = document.createElement('i');
    const textAdd = document.createTextNode(' Add a card');

    iconAdd.setAttribute('class', 'iconAddCard fas fa-plus')
    addACard.setAttribute('class', 'addCardLink')
    titleNamePar.setAttribute('class', 'title'); 
    
    containerTitle.appendChild(titleNamePar);
    titleNamePar.appendChild(beATextTitle);
    addACard.appendChild(iconAdd);
    addACard.appendChild(textAdd);
    containerTitle.appendChild(addACard);
    
}