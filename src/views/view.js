const containerList = document.getElementsByClassName('list')[0];

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
    buttonAddList.onclick = function() { createTitleList() };
 
    containerList.appendChild(inputList);
    containerList.appendChild(buttonAddList);
    buttonAddList.appendChild(nameButtonAddList);
    containerList.appendChild(buttonDelete);
    buttonDelete.appendChild(iconDelete);
};

    function hideAndShowContentTwo(){
        containerList.style.display = 'none';
        const 
    };

    function createTitleList(){
    const bringInputTitle = document.getElementsByClassName('inputListForTitle')[0].value;
  
    const titleNameDiv = document.createElement('div');
    const titleNamePar = document.createElement('p');
    const beATextTitle = document.createTextNode(bringInputTitle);

    titleNamePar.setAttribute('class', 'styleTitle');
    titleNameDiv.setAttribute('class', 'textTitle')

    titleNamePar.appendChild(beATextTitle);
    titleNameDiv.appendChild(titleNamePar);
    // containerList.appendChild(titleNameDiv);
}