console.log("This is calculator.");

let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let screenValue = "";
for (let item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log('Button Text is ', + buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'π') {
            screenValue = "3.14";
            screen.value = screenValue;
        }
        else if (buttonText == '√') {
            screenValue = Math.sqrt(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == 'log') {
            screenValue = Math.log10(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == '◄') {
            screen.value = screen.value.substring(0, screen.value.length - 1);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}