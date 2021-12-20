
class Button{
    key;
    buttonHTML;
    constructor(key){
        this.key = key; 
    }
    CreateButton(){
        var elem = document.createElement('div');
        elem.classList.add('button');
        elem.innerHTML = this.key;
        return elem;
    }
}
class keyboard{
    arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    arr_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    CreateNumber(){
        let Numbers = [];
        this.arr_num.map((item)=>{
            Numbers.push(this.addButton(item));
        })
        return Numbers;
    }
    CreateLetters(){
        let Letters = [];
        this.arr_en.map((item)=>{
            Letters.push(this.addButton(item));
        })
        return Letters;
    }
    CreateKeyboard(insertItem,input){
        let Letters =  this.CreateLetters();
        let Numbers = this.CreateNumber();

        let divNumbers = document.createElement('div');
        divNumbers.classList.add("numbers");
        Numbers.forEach(item => divNumbers.append(item)) 
        insertItem.append(divNumbers)
        this.addEvent(input, Numbers);

        let divLetters = document.createElement('div');
        divLetters.classList.add("letters");
        Letters.forEach(item => divLetters.append(item)) 
        insertItem.append(divLetters)
        this.addEvent(input, Letters);
    }

    addEvent(input, arr){
        arr.forEach(item => item.addEventListener('click',()=>{
            input.value += item.textContent;
        }))

        document.addEventListener('keydown',(event)=>{
            arr.map(function(item){
                if(event.key == item.textContent){
                    input.value += event.key;
                    item.classList.add("button_active");
                }
            })
        })
        document.addEventListener('keyup',(event)=>{
            arr.map(function(item){
                if(event.key == item.textContent){
                    item.classList.remove("button_active");
                }
            })
        })
    }
    addButton(name_button){
        let button = new Button(name_button)
        let newButton =button.CreateButton()
        return newButton
    }

}
const _input = document.querySelector('.input input ');
let Keyboard = new keyboard();
const _buttons = document.querySelector(".buttons")
Keyboard.CreateNumber();

Keyboard.CreateKeyboard(_buttons, _input);


const input = document.querySelector(".value");
const item = document.querySelector(".temp");
let Keyboard2 = new keyboard();
Keyboard2.CreateNumber();

Keyboard2.CreateKeyboard(item, input);
