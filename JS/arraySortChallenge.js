const lists = Array.from(document.querySelectorAll('.original_list li'));
const sorted_list = document.querySelector('.sorted_list ul');
let listTexts;

listTexts = lists.map(list=>{
    return (list.textContent);
})

listTexts = listTexts.sort((a,b) =>{
    if(removeArticles(a)>removeArticles(b)){
        return 1;
    }
    else{
        return -1;
    }
})

function removeArticles(textContent){
    return (textContent.replace(/an|a|the/i,'').trim()).charAt(0).toLowerCase();
}

function insertIntoHTML(){
    listTextMappedIntoHTML = listTexts.map(listText=>{
        return `<li>${listText}</li>`;
    }).join('');

    sorted_list.innerHTML = listTextMappedIntoHTML;
}

insertIntoHTML();