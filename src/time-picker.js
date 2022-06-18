import {createHtmlElement} from 'dom-utils';
import './time-picker.css';
import './chevron-down.png';
import './chevron-up.png';


console.log("Executed from time-picker.js");
document.querySelector("body").appendChild(
    createHtmlElement({
        tag: "p",
        properties: {
            textContent: "Hello From time-picker.js",
        }
    })
);
const TimePickerObject = function (){
    let hour = 0;
    let minute = 0;
    let amPm = "AM"
    let rolling = true;

    function incrementHour(step){
        if (isValidHour(hour + step)){
            hour += step;
            return hour;
        }
        else if (rolling === true){
            if ((hour + step) < 1){
                hour = 12;
                return hour;
            }
            else if ( (hour + step) > 12 ){
                hour = 1;
                return hour;
            }
        }

        //If hour couldn't be incremented or rolled over return minute without changes
        return hour;
    }

    function incrementMinute(step){
        if (isValidMinute(minute + step)){
            minute += step;
            return minute;
        }
        else if (rolling === true){
            if ((minute + step) < 0){
                minute = 59;
                return minute;
            }
            else if ( (minute + step) > 59 ){
                minute = 0;
                return minute;
            }
        }

        //If minute couldn't be incremented or rolled over return minute without changes
        return minute;
    }

    function toggleAmPm(){
        amPm = (amPm === "AM") ? "PM" : "AM";

        return amPm;
    }

    function setHour(h){
        //Allow zero for now... allows you to fully delete hour field when
        //entering value through keyboard, not sure if this is a long-term solution
        if (isValidHour(h) || h === 0){
            hour = h;
            return hour;
        }

        return undefined;
    }

    function setMinute(m){
        if (isValidMinute(m)){
            minute = m;
            return minute;
        }

        return undefined;
    }

    function setAmPm(str){
        if (str === "AM" || str === "PM"){
            amPm = str;
            return amPm;
        }

        return undefined;
    }

    function getHour(){
        return hour;
    }

    function getMinute(){
        return minute;
    }
    
    function getAmPm(){
        return amPm;
    }

    function getTime(){
        return `${pad(hour)}:${pad(minute)} ${amPm}`;
    }

    function pad(num){
        return num.toString().padStart(2, '0');
    }
    function isValidHour(hour){
        if (hour >= 1 && hour <= 12){
            return true;
        }

        return false;
    }

    function isValidMinute(minute){
        if (minute >= 0 && minute <= 59){
            return true;
        }
        return false;
    }

    return { 
        incrementHour, 
        incrementMinute, 
        toggleAmPm, 
        setHour, 
        setMinute, 
        setAmPm,
        getHour,
        getMinute,
        getAmPm,
        getTime,
        isValidHour,
        isValidMinute
    }
}
export const createTimePicker = function (){
    const timePickerObj = TimePickerObject();
    const timePickerElement = createHtmlElement({
        tag: "div",
        classes: [ "time-picker" ],
        attributes: {
            tabindex: 0,
        },
        children: [
            createHtmlElement({
                tag: "div",
                classes: [ "picker", "hour-picker" ],
                children: [
                    createHtmlElement({
                        tag: "img",
                        classes: [ "up", "arrow" ],
                        properties: {
                            src: "./chevron-up.png",
                        },
                    }),
                    createHtmlElement({
                        tag: "div",
                        classes: [ "value" ],
                        properties: {
                            id: "hour",
                            textContent: "00",
                        },
                    }),
                    createHtmlElement({
                        tag: "img",
                        classes: [ "down", "arrow" ],
                        properties: {
                            src: "./chevron-down.png",
                        },
                    }),
                ],
            }),

            createHtmlElement({
                tag: "div",
                properties: {
                    textContent: ":",
                },
            }),
            
            createHtmlElement({
                tag: "div",
                classes: [ "picker", "minute-picker" ],
                children: [
                    createHtmlElement({
                        tag: "img",
                        classes: [ "up", "arrow" ],
                        properties: {
                            src: "./chevron-up.png",
                        },
                    }),
                    createHtmlElement({
                        tag: "div",
                        classes: [ "value", "minute" ],
                        properties: {
                            textContent: "00",
                        },
                    }),
                    createHtmlElement({
                        tag: "img",
                        classes: [ "down", "arrow" ],
                        properties: {
                            src: "./chevron-down.png",
                        },
                    }),
                ],
            }),
            
            createHtmlElement({
                tag: "div",
                classes: [ "picker", "am-pm-picker" ],
                children: [
                    createHtmlElement({
                        tag: "img",
                        classes: [ "up", "arrow" ],
                        properties: {
                            src: "./chevron-up.png",
                        },
                    }),
                    createHtmlElement({
                        tag: "div",
                        classes: [ "value", "am-pm" ],
                        properties: {
                            textContent: "AM",
                        },
                    }),
                    createHtmlElement({
                        tag: "img",
                        classes: [ "down", "arrow" ],
                        properties: {
                            src: "./chevron-down.png",
                        },
                    }),
                ],  
            }),
        ],
    });



    const hourPicker = timePickerElement.querySelector(".hour-picker");
    const minutePicker = timePickerElement.querySelector(".minute-picker");
    const amPmPicker = timePickerElement.querySelector(".am-pm-picker");

    hourPicker.addEventListener("click", clickedPicker);
    minutePicker.addEventListener("click", clickedPicker);
    amPmPicker.addEventListener("click", clickedPicker);

    timePickerElement.addEventListener("keydown", keyPressed);
    timePickerElement.addEventListener("blur", blur);
    timePickerElement.addEventListener("focus", makeActive);

    function blur(e){
        const arrows = document.querySelectorAll(".arrow");
    
        arrows.forEach(arrow => arrow.classList.remove("active"));
        clearFocus();
    
    }
    
    function makeActive(e){
        const arrows = e.currentTarget.querySelectorAll(".arrow");
    
        arrows.forEach(arrow => arrow.classList.add("active"));
    }
    
    function clickedPicker(e){
        clearFocus();
        e.currentTarget.classList.add("focused");
        determineAction(e);
    }
    
    function determineAction(e){
        if (e.currentTarget.classList.contains("hour-picker")){
            if (e.target.classList.contains("up")){
                timePickerObj.incrementHour(1);
            }
            else if (e.target.classList.contains("down")){
                timePickerObj.incrementHour(-1);
            }
            displayHour(e.currentTarget);
        }
    
        else if (e.currentTarget.classList.contains("minute-picker")){
            if (e.target.classList.contains("up")){
                timePickerObj.incrementMinute(1);
            }
            else if (e.target.classList.contains("down")){
                timePickerObj.incrementMinute(-1);
            }
            displayMinute(e.currentTarget);
        }
    
        else if (e.currentTarget.classList.contains("am-pm-picker")){
            if (e.target.classList.contains("up") || e.target.classList.contains("down")){
                timePickerObj.toggleAmPm();
            }
            displayAmPm(e.currentTarget);
        }
    }

    function displayHour(picker){
        picker.querySelector(".value").textContent = timePickerObj.getHour().toString().padStart(2, '0');
    }

    function displayMinute(picker){
        picker.querySelector(".value").textContent = timePickerObj.getMinute().toString().padStart(2, '0');
    }

    function displayAmPm(picker){
        picker.querySelector(".value").textContent = timePickerObj.getAmPm().toString().padStart(2, '0');
    }

    function keyPressed(e){
        let focused = document.querySelector(".time-picker .focused");
    
        if (focused){
            if (focused.classList.contains("hour-picker") || focused.classList.contains("minute-picker")){
                if ( e.key.match(/\d/)){
                    let val = focused.querySelector(".value").textContent;
                    let newInput = 0;
    
                    if (val.charAt(0) === "0"){
                        val = (val + e.key).slice(-2);
                    }
    
                    newInput = Number(val);

                    if ( (focused.classList.contains("hour-picker")) && timePickerObj.isValidHour(newInput) ){
                        timePickerObj.setHour(newInput);
                        displayHour(focused)
                    }
                    else if ( (focused.classList.contains("minute-picker")) && timePickerObj.isValidMinute(newInput) ){
                        timePickerObj.setMinute(newInput);
                        displayMinute(focused);
                    }
                }
                else if ( e.key === "Backspace"){
                    let val = focused.textContent;
    
                    val = Number(val.substring(0, 1).padStart(2, '0'));
    
                    if ( focused.id === "hour-picker" ){
                        timePickerObj.setHour(val);
                        displayHour(focused);
                    }
                    else if ( focused.id === "minute-picker" ){
                        timePickerObj.setMinute(val);
                        displayMinute(focused);
                    }
                }
                else if ( e.key === "Enter"){
                    clearFocus();
                }
            }
        }
    }
    

    function clearFocus(){
        let pickers = document.querySelectorAll(".picker");
        
        pickers.forEach( (picker) => picker.classList.remove("focused"));

    }
    
    return { timePickerElement, getTime: timePickerObj.getTime }

};

console.log("End of time-picker.js execution");
