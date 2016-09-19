function unit4 () {

var slaying = true;
var youHit = Math.floor(Math.random() * 2); //Sets a random value to 0 or 1, representing // a miss or hit respectively
var damageThisRound = Math.floor(Math.random() *5 + 1)
var totalDamage = 0

while(slaying) {
    if (youHit) {
        alert("You hit the Dragon and did "+ damageThisRound +" Damage!");
        totalDamage += damageThisRound;
        
        if (totalDamage >= 4) {
            alert("You defeated the dragon!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        alert("The dragon defeated you.");
        slaying = false;
    }
}
};