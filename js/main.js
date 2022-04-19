const password = document.querySelector('#password')
const span = document.querySelector('span')
const confirm = document.querySelector('#confrim-pw')
const button = document.querySelector('button')
function pwconfirm(){
    if(confirm.value!==password.value)
    {confirm.value=''
     password.value=''
     password.className = 'error'
     confirm.className = 'error'
   }
   else{
       password.remove.className
       confirm.remove.className
   }
}

button.addEventListener('click', e=> pwconfirm())

