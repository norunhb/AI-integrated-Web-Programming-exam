
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


const openai = new OpenAI({
    apiKey:''

});

async function generateText(prompt) {
    const response = await openai.completions.created({
        model: "gpt-3.5"
        prompt:prompt
    })
    return response.choices [0].text;
}

const form= document.getElementById('chat-container')

form.addEventListener("submit", handleSubmit);

export async function GET (request) {
    const configuration = new configuration({
          apiKey: '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'
function handleSubmit(event){
    event.preventDefault();
    const userInput=document.getElementById('user-input').value;
   

    const inputs= document.querySelectorAll'user-input');

    inputs.array.forEach(input => {
        input.value=''
    });
}




