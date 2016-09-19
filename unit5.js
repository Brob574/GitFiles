function unit5 () {

var name = prompt ("Please enter your name to start the game.");

var user = prompt("You wake up in pitch black and have no idea where you are. Something is very strange. You realise you are standing, or... floating? Suddenly you hear a voice say: Hello " + name + ", I have one question for you. Are you DREAMING, in a DARK ROOM or in SPACE?").toUpperCase();

switch(user){
    case 'DREAMING':
        var lucid = prompt("Are you a lucid dreamer? (YES or NO)").toUpperCase();
        var imagine = prompt ("Have you got at least an inkling of an imagination? (YES or NO)").toUpperCase();
            if (lucid == 'YES' || imagine == 'YES') {
            alert("Great! You take control of your dream and imagine a door marked EXIT. You go through it and wake up.");
            } else {
             alert("Looks like you are trapped in this dark abyss for eternity. Or until you die. Whichever comes first.");
            }
        break;
    case 'DARK ROOM':
        alert("You find yourself in a room with no windows or doors. You feel for walls, and realise that they are caving in. There is no way out. You cannot leave. You die.");
        break;
    case 'SPACE':
        var spaceSuit = prompt("Do you have a space suit? (YES or NO)").toUpperCase();
        var oxygen = prompt("Are you low on Oxygen? (YES or NO)").toUpperCase();
            if(spaceSuit == 'YES' && oxygen == 'NO') {
            alert("There is nowhere you can go. So you wait a while. Time passes, you are not sure for how long. But then you see a light. It's brilliance enshrouds you. You wake up.");
        } else {
        alert("There is no air to breathe. You die.");
        }
        break;
    default:
        alert("Voice: That wasn't one of the options. Maybe you should try again.");
        break;
}
};