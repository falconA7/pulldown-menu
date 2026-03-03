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

document.getElementById('form').select.onchange = function(){
    location.href = document.getElementById('form').select.value
}