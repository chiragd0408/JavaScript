
function sayMyName() {
    console.log("H");   
}


// sayMyName => reference () => execution
// sayMyName ()

// function addTwoNums(number1 , number2) { 
//     // console.log(number1 + number2);
//     // return addTwoNum;
// }

function addTwoNums(number1 , number2) { 
    let s = (number1 + number2);
    return s;
}

const result = addTwoNums(3,4)  // arguments in braces
// console.log(result);

function loginUserMessage(username) {
    if (username === undefined) {
        // console.log("Please enter a user name");
        return;
    }
    return `${username} just logged in`;
}

// const user = loginUserMessage()
// console.log(user);



// E-cart Calulate
function calculateCartPrice(...num1) {   // Rest Operator (...) spread 
    return num1;
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "Chirag",
    price: 199
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 369
})

const newArray = [200,300,400,500]
function returnArray(getArray) {
    return getArray[1]
}

console.log(returnArray(newArray));