// // singleton

// // objects literal
// // Object.create

// // Object Literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Chirag",
    age: 20,
    location: "Mumbai",
    [mySym]: "key1",
    email: "chirag@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// // console.log(JsUser.email);
// // console.log(JsUser("email"));
// // console.log(JsUser[mySym]);

// // Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
