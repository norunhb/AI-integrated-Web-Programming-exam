const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})




import {configuration, OpenAIApi} from 'openai'



export async function GET (request) {
    const configuration = new configuration({
          apiKey: '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'
    });

    const.createChatCompletion({
        model: "gpt-4"
        messages: [
            {
                role: "user",
                content:"Hello there"
            },
            {
                role:"assistant",
                content:"I am doing well, thank you"
            }
        ]
    })

    return new Response(JSON.stringify({ response: response.data.choices[0]))
  
    
}


