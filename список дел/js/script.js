let addTaskButton = document.querySelector('.arrow'); //Кнбавть новую задачу
let input = document.querySelector('input'); //input
let ul = document.querySelector('ul'); // ul
ul.innerHTML = localStorage.getItem('TaskList'); //Вставляем в ul все задачи из localStorage
let endAllButton = document.querySelector('.end-all'); //end-all завершить всё
let deleteAllButton = document.querySelector('.delete-all'); //delete-all удалить всё 
addTaskButton.onclick = function () { //При нажатии кнопки (1) запускается функция
    let TaskText = input.value; //Текст задач, берём из инпута
    if (TaskText != '') { // Если в инпуте есть текст 
        let li = document.createElement('li'); //Создание ТЭГа li
        let span = document.createElement('span'); //Создание ТЭГа span
        let i = document.createElement('i'); //Создание ТЭГа i
        i.setAttribute('class', 'fa-solid fa-trash'); //Добавляем для i класс
        li.prepend(TaskText); //Текст задачи ставим во внутрь li
        span.prepend(i); //i ставим во внутрь span
        li.prepend(span); // span ставим во внутрь li, в начало
        ul.prepend(li); //li ставим во внутрь ul
        localStorage.setItem('TaskList', ul.innerHTML); // сохраняем все задачи в localStorage
        input.value = ''; // Удаляем текст из инпута    
    } else {//иначе, если инпут пустой
        alert('Сначала введите текст задачи!'); //выскакивает уведомление
    }
}
input.onkeydown = function (e) { //когда мы сфокусированы на инпуте и нажимаем на клавиши запускается функция привет 
    if (e.code == 'Enter' && input.value != '') { //если нажимаем на enter и инпут не пустой
        let TaskText = input.value; //Текст задач, берём из инпута
        if (TaskText != '') { // Если в инпуте есть текст 
            let li = document.createElement('li'); //Создание ТЭГа li
            let span = document.createElement('span'); //Создание ТЭГа span
            let i = document.createElement('i'); //Создание ТЭГа i
            i.setAttribute('class', 'fa-solid fa-trash'); //Добавляем для i класс
            li.prepend(TaskText); //Текст задачи ставим во внутрь li
            span.prepend(i); //i ставим во внутрь span
            li.prepend(span); // span ставим во внутрь li, в начало
            ul.prepend(li); //li ставим во внутрь ul
            localStorage.setItem('TaskList', ul.innerHTML); // сохраняем все задачи в localStorage
            input.value = ''; // Удаляем текст из инпута    
        } else {//иначе, если инпут пустой
            alert('Сначала введите текст задачи!'); //выскакивает уведомление
        }
    }
}

ul.onclick = function (e) { //При нажатии на ul включается фунуция (е это информацифя о нажатии)
    console.log(e)
    let target = e.target; // переменная в которую попадает тот объект на который мы нажали (ul, li, span, i)
    if (target.tagName === 'LI') { // Если то, на что мы нажали это li
        target.classList.toggle('off'); // переключаем у li класс off (off делает зачёркнутый шрифт и полупрозрачность)
        localStorage.setItem('TaskList', ul.innerHTML); // сохраняем все задачи в localStorage
    }
    if (target.tagName === 'I') { // Если то, на что мы нажали это i
        target.parentElement.parentElement.remove();
        localStorage.setItem('TaskList', ul.innerHTML); // сохраняем все задачи в localStorage
    }
}
endAllButton.onclick = function () {
    let allTask = ul.querySelectorAll('li');
    for (let i = 0; i < allTask.length; i++){
        allTask[i].classList.add('off');
    }
    localStorage.setItem('TaskList', ul.innerHTML); // сохраняем все задачи в localStorage
}
deleteAllButton.onclick = function () {
    ul.innerHTML = '';
    localStorage.setItem('TaskList', ul.innerHTML); // сохраняем все задачи в localStorage
}