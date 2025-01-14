
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


const form= document.getElementById('contactform')

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    

    const inputs= document.querySelectorAll'name', 'email');

    inputs.array.forEach(input => {
        input.value=''
    });
}

