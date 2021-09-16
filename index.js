const thankYouNotes = ["Anna", "Bob", "Cathy"];

function writeCards(thankYouNotes) {
    for (let i =0; i < thankYouNotes.length; i++) {
    console.log(`Thank you ${thankYouNotes[i]} for the awesome gift!`);
}
return thankYouNotes;
}

writeCards(thankYouNotes);

//=> while loop



function countDown() {
    let countDown = 18; 
    while (countDown > -1) {
        console.log (countDown--);
        }
        return countDown
    }
countDown();

