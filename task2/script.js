const textForConsoleLog = 'Метод для вывода сообщения в веб-консоль';
const textForAlert = 'Показывает диалоговое окно с сообщением и кнопкой OK';
const textForPrompt = 'Отображает диалоговое окно с запросом на ввод текста';

const itemConsoleLog = document.querySelector('#consoleLog');
const itemAlert = document.querySelector('#alert');
const itemPrompt = document.querySelector('#prompt');

document.querySelector('#one').textContent = 'Пример использования команды console.log';
document.querySelector('#two').textContent = 'Пример использования команды alert';
document.querySelector('#three').textContent = 'Пример использования команды prompt';

itemConsoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
})

itemAlert.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

itemPrompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})

