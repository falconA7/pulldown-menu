const lang = document.querySelector('html').lang;

let opt;

switch(lang){
    case 'ja':
        opt = document.querySelector('option[value="index.html"]');
        break;
    case 'en':
        opt = document.querySelector('option[value="index-en.html"]');
        break;
    case 'zh':
        opt = document.querySelector('option=[value="index-zh.html"]');
        break;

}

opt.selected = true;
document.getElementById('lang-form').select.onchange = function(){
    location.href = document.getElementById('lang-form').select.value
}

const e = document.getElementById('event-button');
e.addEventListener('click', () => {
    const li =document.createElement('li');
    const text = document.createTextNode(textBox.value);
    li.appendChild(text);
    const listElement = document.getElementById('list');
    listElement.appendChild(li);
},false);


