let $form = document.querySelector("#form");
let $list = document.querySelector('#list')
let pizza = document.querySelectorAll('.mt-1')
let add = document.querySelectorAll('.mt-2')
let userArray = []
let choose_Arr1 = []
let choose_Arr = []
let inpt_Arr1 = []
let inpt_Arr = []
let size_Arr1 = []
let size_Arr = []
let add_Arr1 = []
let add_Arr = []





$form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    
    let { user_name, user_phone, user_email, inpt, size } = evt.target.elements
    let choose_Arr = [];
    let Arr1 = [];
    let Arr2 = [];
    let Arr3 = [];
    let Arr4 = [];

    

    for (let i = 0; i < pizza.length; i++) {
        if (pizza[i].checked) {
            choose_Arr.push(pizza[i].value)   
        }
    }

    for (let i = 0; i < pizza.length; i++) {
        if (pizza[i].checked) {
            choose_Arr.push(pizza[i].value)
            Arr1.push(Number(pizza[i].dataset.push))
        }
    }
    for (let i = 0; i < inpt.length; i++) {
        if (inpt[i].selected) {
            inpt_Arr.push(inpt[i].value)
    
            Arr2.push(Number(inpt[i].dataset.push))
        }
    }

    for (let i = 0; i < size.length; i++) {
        if (size[i].checked) {
            size_Arr.push(size[i].value)
    
            Arr3.push(Number(size[i].dataset.push))
        }
    }

    for (let i = 0; i < add.length; i++) {
        if (add[i].checked) {
            add_Arr.push(add[i].value)
            Arr4.push(Number(add[i].dataset.push))
        }
    }


    let asd = [];
    for (let i = 0; i < add.length; i++){
        if (add[i].checked) {
            asd.push(add[i].value)
        }
    }
    let money1 = Arr1.map(a => d+=a, d=0 ).reverse()[0],
    money2 =  Arr2.map(a => d+=a, d=0 ).reverse()[0],
    money3 = Arr3.map(a => d+=a, d=0 ).reverse()[0],
    money4 = Arr4.map(a => d+=a, d=0 ).reverse()[0],
    money = money1 + money2 + money3 + money4;
    
    
    let newObj = {
        
        id: userArray.length + 1,
        name: user_name.value.trim(),
        phone: user_phone.value.trim(),
        email: user_email.value.trim(),
        meat: inpt.value.trim(),
        size: size.value.trim(),
        choose: choose_Arr1.join(', '),
        asd: asd.join(', '),
        on_pizza: choose_Arr1.map(a => d+=a, d=0 ).reverse()[0],
        choose: inpt_Arr1.map(a => d+=a, d=0 ).reverse()[0],
        Size: size_Arr1.map(a => d+=a, d=0 ).reverse()[0],
        Add: add_Arr1.map(a => d+=a, d=0 ).reverse()[0],
        sum: money
        
        
    }
    userArray.push(newObj)
    console.log(userArray);
    renderFunction(userArray, $list)
    
})



var renderFunction = (array, element) => {
    element.innerHTML = null
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `
        <li class = "item" >
        <p class="text">  <span class = "span">Order :</span> ${array[i].id}</p>
        <p class="text"> <span class = "span">Name:</span> ${array[i].name}</p>
        <p class="text">  <span class = "span">Phone:</span> ${array[i].phone}</p>
        <p class="text">  <span class = "span">Address: </span> ${array[i].email}</p>
        <p class="text">  <span class = "span">Dough thickness:</span> ${array[i].meat}</p>
        <p class="text">  <span class = "span">Size:</span> ${array[i].size}</p>
        <p class="text">  <span class = "span">Add:</span> ${array[i].asd}</p>
        <p class="text">  <span class = "span">Total:</span> ${array[i].sum}$</p>
        </li>
        `
        
    }
}

renderFunction(userArray, $list)