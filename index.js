// Task 1: Array Manipulation Basics

let shoppingList = [];

// Adds an item and returns the updated list
function addItem(item) {
    // Updated for task 2 to prevent duplicates
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
        console.log(`${item} is added to array.`);
    } else {
        console.log(`${item} is already in the list`);
    }
    displayList(); // update UI each time
}


// Removes the last item and returns the removed item
function removeLastItem() {
    const removed = shoppingList.pop();
    if (removed) {
        console.log(`${removed} removed from the list.`);
    } else {
        console.log("The list is already empty.");
    }
    displayList();
}

// Prints every item in the list
function displayList() {
    console.log("Current Shopping List:");
    shoppingList.forEach((item) => console.log(item));

    // Task 3: Render list in browser
    const listContainer = document.querySelector(".dis");
    listContainer.innerHTML = ""; // clear current list
    shoppingList.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        listContainer.appendChild(li);
    });
}

displayList(); // logs each remaining item on its own line

// Task 2: Filter and Search an Array
function filterItems(searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return shoppingList.filter((item) =>
        item.toLowerCase().includes(lowerCaseSearchTerm)
    );
}

// Task 3:
const userInput = document.getElementById("userInput");
const addButton = document.getElementById("submitItem");
const removeButton = document.getElementById("removeItem");

addButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    const newItem = userInput.value.trim();
    if (newItem !== "") {
        addItem(newItem);
        userInput.value = ""; // Clear input
    }
});


removeButton.addEventListener("click", removeLastItem);
