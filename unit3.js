function unit3 () {
/*jshint multistr:true */

text = "Hi, how are you \
doing? My name is Brooke. What is \
your name? My name is Brooke.";

var myName = "Brooke";
var hits = [];

for (i = 0; i < text.length; i++) {
    if(text[i] === "B") {
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    alert("Your name wasn't found!");
} else {
    alert(hits);
}
};

