// Task 1: Array Manipulation Basics

let shoppingList = [];

// Adds an item and returns the updated list
function addItem(item) {
    shoppingList.push(item);
    return shoppingList;
}

console.log(addItem("World")); // prints the updated array
console.log(shoppingList); // same array

// Removes the last item and returns the removed item
function removeLastItem() {
    return shoppingList.pop(); // pop() already returns the removed element
}

removeLastItem(); // pops "Backpack"
console.log(shoppingList); // array without the last item

// Prints every item in the list
function displayList() {
    shoppingList.forEach((item) => console.log(item));
}

displayList(); // logs each remaining item on its own line
