const input = document.querySelector('#input')
const buttons = document.querySelectorAll('.col')
const result = document.querySelector('#result')
const timer = document.querySelector('.header__time')

window.onload = () => {
    const now = new Date();
    timer.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    giveAddEventListenerToAllButtons()
    startTimer()
}

function startTimer() {
    setInterval(() => {
        const now = new Date();
        timer.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    }, 1000)
}

function giveAddEventListenerToAllButtons() {
    console.log('here');

    for (const btn of buttons)
        btn.addEventListener('click', e => calculate(e))

    console.log(buttons);
}

function calculate(event) {
    switch (event.target.innerText) {
        case 'C': {
            clearInput()
            return
        }
        case '=': {
            equal()
            break;
        }
        case '()': {
            brackets()
            break;
        }
        case '+/-': {
            plusMinus()
            break;
        }
        case '%': {
            percent()
            break;
        }
        case '/': {
            divide()
            break;
        }
        case '*': {
            multiply()
            break;
        }
        case '-': {
            subtract()
            break;
        }
        case '+': {
            add()
            break;
        }
        case '.': {
            dot()
            break;
        }
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9': {
            input.value += event.target.innerText;
            break;
        }
        case '0': {
            zero()
            break;
        }

    }

    if (input.value && !isExistsOperator(input.value)) {
        calculateMainResult()
    }
}

function zero() {
    const value = input.value

    if (!value)
        return

    if (isExistsOperator(value)) {
        input.value += '0'
        return
    }

    const indexOfFirstNumber = findIndexForZero(value)

}

function indexOfFirstNumber(value) {

}

function equal() {
    if (!input.value || isExistsOperator(input.value))
        return

    const resultEval = eval(input.value)

    if (!resultEval)
        return

    console.log('resultEval', resultEval);


    clearInput()
    input.value = resultEval
}

function calculateMainResult() {
    result.innerText = eval(input.value)
}

function brackets() {
}

function plusMinus() {
}

function percent() {
    const value = input.value

    if (!value)
        return

    if (isExistsOperator(value)) {
        input.value = value.slice(0, -1) + '%'
        return
    }

    input.value += '%'
}

function divide() {
    const value = input.value

    if (!value)
        return

    if (isExistsOperator(value)) {
        input.value = value.slice(0, -1) + '/'
        return
    }

    input.value += '/'
}

function multiply() {

    const value = input.value

    if (!value)
        return

    if (isExistsOperator(value)) {
        input.value = value.slice(0, -1) + '*'
        return
    }
    input.value += '*'
}

function subtract() {
    const value = input.value

    if (!value)
        return

    if (isExistsOperator(value)) {
        input.value = value.slice(0, -1) + '-'
        return
    }

    input.value += '-'
}

function add() {
    const value = input.value

    if (!value)
        return

    if (isExistsOperator(value)) {
        input.value = value.slice(0, -1) + '+'
        return
    }

    input.value += '+'
}

function isExistsOperator(value) {
    return value[value.length - 1] === '+' || value[value.length - 1] === '-' || value[value.length - 1] === '*' || value[value.length - 1] === '/' || value[value.length - 1] === '%';
}

function dot() {
}

function backspace() {
    const value = input.value

    if (!value.length)
        return

    input.value = value.slice(0, -1)
}

function clearInput() {
    input.value = ''
    result.innerText = '0'
}

function closeWindow() {
    window.close()
}