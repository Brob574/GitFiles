function unit 6() {
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(123) 456-7890",
  address: ['1 Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(987) 654-3210",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var key in obj) {
    console.log(key);
  }
};

var search = function(name) {
  for(var key in friends) {
    if(friends[key].firstName === name) {
      console.log(friends[key]);
      return friends[key];
    }
  }
};

list(friends);
search("Steve");
};