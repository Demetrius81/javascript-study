{/* <div class="block">

</div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute) */}

// const blockEl = document.querySelector('.block');

// const itemEl = document.createElement('div');
// itemEl.className = 'item';
// itemEl.textContent = 'Элемент внутри';

// blockEl.prepend(itemEl);

// // itemEl.setAttribute('class', 'item item_1');
// itemEl.classList.add('item_1');

// Дан код
// <div class="elem">
// <img src="photo.png" alt="photo">
// <div class="content">
// <h2 class="heading">Lorem, ipsum dolor.</h2>
// <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
// </div>
// </div>

// // Необходимо с помощью querySelector найти параграф с классом text
// // Вывести в консоль соседний элемент h2
// // Вывести в консоль родительский элемент content
// // Вывести в консоль картинку
// // Вывести в консоль родительский элемент elem

// const textEl = document.querySelector('.text');

// console.log(textEl.previousElementSibling);
// console.log(getParentNode(textEl));
// console.log(getParentNode(textEl).previousElementSibling);
// console.log(getParentNode(getParentNode(textEl)));

// function getParentNode(elem) {
//     return elem.parentNode;
// }

{/* <div class="item">
<div class="elem">
<div class="info">
<h2 class="subtitle">Lorem, ipsum dolor.</h2>
</div>
</div>
</div>
С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей */}

// function getParentNode(elem) {
//     return elem.parentElement;
// }

// const subtitleEl = document.querySelector('.subtitle');

// let temp = subtitleEl;

// while (true) {
//     temp = getParentNode(temp);
//     if (temp === null) { break; } else { console.log(temp); }
// }


{/* <form action="#">
<input type="text">
<button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
У поля ввода должна появиться рамка красного цвета */}

const btnButtonEl = document.querySelector('.btn');
const textInputEl = btnButtonEl.previousElementSibling;

const brEl = document.createElement('br');
const h2El = document.createElement('h2');
h2El.textContent = 'вы не заполнили поле ввода';

console.log(textInputEl.value);

btnButtonEl.addEventListener('click', send);

function send() {
    if (textInputEl.value === '') {
        textInputEl.classList.add('warning');
        btnButtonEl.after(h2El);
        btnButtonEl.after(brEl);
    } else {
        textInputEl.classList.remove('warning');
        h2El.remove();
        brEl.remove();
    }
}