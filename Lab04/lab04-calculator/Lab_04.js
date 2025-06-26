// Todo 3 : Write some function to handle the pass value from HTML
// for example, you may have following functions to handle the different actions
let screen;
let resetNext = false;
let enterPressCount = 0; 

window.onload = function () {
    screen = document.getElementById("screen");
};

// Handle button input


function press(val) {
    if (resetNext) {

        if (["+", "-", "*", "/", ")", "("].includes(val)) {
            resetNext = false;
        }else {
            screen.value = "";
            resetNext = false;
        }
    }

    // 防止連續小數點
    if (val === "." && screen.value.slice(-1) === ".") {
        return;
    }

    if (screen.value === "0") {
        if (val === ".") {
            screen.value = "0.";
        } else if (!isNaN(val)) {
            screen.value = val;
        } else if (val === "-") {
            screen.value = "-"; // ✅ 處理 0 → -
        } else {
            screen.value += val;
        }
    } else {
        screen.value += val;
    }

    screen.value = cleanLeadingZeros(screen.value);
}


function cleanLeadingZeros(expression) {
    return expression.replace(/\b0+(\d)/g, (match, digit, offset, full) => {

        if (offset > 0 && full[offset - 1] === ".") {
            return match;
        }
        return digit;
    });
}


// Handle clear button
function clearScreen() {
    screen.value = "0";
}

// Handle calculation

function calculate() {
    if (resetNext){
        screen.value = "0";
        resetNext = false;
        return;
    }
    try {
        let expression = screen.value.replace(/×/g, '*').replace(/÷/g, '/');
        expression = cleanLeadingZeros(expression);
        const result = eval(expression);
        screen.value = result;
        resetNext = true;
    } catch (e) {
        screen.value = "Error";
        resetNext = true;
    }
}


// Handle key press event
function handleKey(event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === '(' || key === ')') {
        press(key);
    } else if (key === 'Enter') {
    
        calculate();
        
    } else if (key === 'Backspace') {
        backspace();
    } /*else if (key === 'Escape') {
        clearScreen();
    }*/
}

// Handle backspace
function backspace() {
    if (screen.value.length <= 1) {
        screen.value = "0";
    } else {
        screen.value = screen.value.slice(0, -1);
    }
}


console.log("Fighting!");
