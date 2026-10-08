1, State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?

Mina todos ligger i ett state som är en array med objekt. När datan uppdateras så lägger användaren till eller tar bort/klarmarkera.
När mitt todo state uppdateras så uppdateras även gränssnittet med datan ifrån statet.

2, Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?
I react så använder man ett state istället för t.ex variabler när man vill visa ett värde som ska uppdateras vid förändring. 
ett state har en förbestämd metod "setState" som vi använder istället. 
setState() tar emot ett absolut värde och därför kan man inte använda sig av t.ex .push eller filter som på en array utan man måste skicka in ett argument som motsvarar det absoluta värde som man vill att statet ska ha. 
Därför använder vi t.ex setState(...Todos, {text: "min nya todo", isDone: false}) för att få med alla befintliga todos samt att lägga till den nya.

3, Nedan är en funktion från en annan utvecklares lösning. Klistra inte in den i din app, utan förklara i din README vad som är felaktigt med koden i ett React-sammanhang och hur du skulle skriva om den för att den ska bli korrekt:

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}

Precis som jag skrev ovan så behöver man använda state för att sidan ska renderas om. 


4, Hur gjorde du när du körde fast eller stötte på ett problem? Om du använde verktyg som AI, Google eller React-dokumentationen: ge ett konkret exempel på hur du tog hjälp för att förstå och lösa problemet själv.

Jag fick hjälp med spreadoperatorn av AI. 















