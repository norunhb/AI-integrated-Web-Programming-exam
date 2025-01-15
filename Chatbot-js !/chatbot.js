const axios = require('axios');

const apiKey = 'Your APIKey here';
 //Her legges OpenAI APIKey inn mellom ''//

let conversationHistory = [
  {
    role: 'system',
    content: "Du er en kundeservice-assistent for en matleveringstjeneste som tilbyr  produkter fra små gårder. Du hjelper kundene med spørsmål om produkter, og informasjon om de forskjellige gårdene som leverer til tjenesten."
  } //eventuelt: Du er en chat-bot som skal svare på spørsmål om en matleveringstjeneste som tilbyr ferske produkter fra små lokale gårder. ELLER Du er en hjelpsom kondeservice-assistent som svarer på spørsmål kunder har om gårdene og produktene.//
];

async function askQuestion(question) {
  try {
  
    conversationHistory.push({
      role: 'user',
      content: question
    });

   
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4', 
        messages: conversationHistory, 
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

   
    const botMessage = response.data.choices[0].message.content;

    console.log("Bot:", botMessage);

    conversationHistory.push({
      role: 'assistant',
      content: botMessage
    });

    return botMessage;
  } catch (error) {
    console.error('Feil:', error.message);
  }
}

//ettersom denne ikke fungerer uten key eller backend, så har jeg lagt med noen spørsmål her som man kan endre på i koden for å få varierende svar, dette er bare noen eksempler// //jeg valgte også å skrive disse på norsk for å ikke miste det helt i kodene//
async function startConversation() {
  // Første spørsmå, oversatt fra meldingen som er brukt som eksempel i figma filen.//
  await askQuestion("Jeg vil gjerne vite mer om gårdene dere jobber med. Hvordan endte dere opp med å samarbeide med de for denne tjenesten?");
  
  // Andre spørsmål, kan endres til ønskelig spørsmål om gården. Hvilke produkter er tilgjengelige nå? Hvordan velger dere ut råvarer?//
  await askQuestion("Hvor kommer produktene deres fra?");
  
  // Tredje spørsmål, kan endres til ønskelig spørsmål om gården. Hvordan fungerer retur systemet deres? Hvordan legger jeg inn en bestilling?//
  await askQuestion("Hvordan fungerer leveringen?");
}


startConversation();
