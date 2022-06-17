import { createTimePicker } from './time-picker.js';

const div = document.querySelector('.tick-tock');
const time1 = createTimePicker();
const time2 = createTimePicker();

const button = document.createElement("Button");

button.textContent = "Click this shit!";
button.addEventListener("click", function () { 
    console.log(time1.getTime());
});

const button2 = document.createElement("Button");

button2.textContent = "Click this shit!";
button2.addEventListener("click", function () { 
    console.log(time2.getTime());
});



div.appendChild(time1.timePickerElement);
div.appendChild(button);
div.appendChild(time2.timePickerElement);
div.appendChild(button2);