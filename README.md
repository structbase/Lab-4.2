## 🛒 Shopping List App

### Scenario

You are working on a feature that handles dynamic sets of data in the form of arrays.
This project demonstrates how to efficiently **add, remove, and filter items** in an array and display them dynamically in a webpage using JavaScript.

### Learning Objectives

* Use array methods like `push()` and `pop()` to manipulate arrays.
* Filter and transform arrays using array methods.
* Dynamically display array contents on a webpage.
* Write clean, maintainable JavaScript to handle array operations.

---

### Features Implemented

* **Add Items** – Users can add items to the shopping list; duplicates are prevented.
* **Remove Last Item** – Users can remove the most recently added item.
* **Dynamic Display** – The list updates instantly in the browser when items are added or removed.
* **Live Filter Items** – As users type in the search field, items are filtered in real-time (case-insensitive).
* **Responsive UI** – Built with **Bootstrap** for clean and responsive styling.

---

### Technologies Used

* HTML5 & CSS3
* Bootstrap 5
* JavaScript (ES6)

---

### How It Works

1. Type an item in the input field.
2. Click **“Add Item”** to add it to the shopping list. Duplicates are ignored.
3. Click **“Remove Last Item”** to remove the most recently added item.
4. The list updates automatically, showing all items.
5. Type in the search box to filter items live.
6. If the list is empty, a placeholder message is displayed.

---


### 🌐 Live Demo

You can try the Shopping List App directly in your browser without installing anything:

[**Open the Live Demo**](https://your-demo-link.com)

* Add items to the shopping list.
* Remove the last item from the list.
* The list updates dynamically as you interact with it.

---


### 🏁 Getting Started

Follow these steps to run the Shopping List App locally:

1. **Clone or download the project**

   ```bash
   git clone https://github.com/structbase/Lab-4.2
   ```

   Or download the ZIP and extract it.

2. **Open the project in your browser**
   Simply double-click the `index.html` file or open it in a modern browser (Chrome, Firefox, Edge, etc.).

3. **Interact with the app**
   * Add items via the input field.
   * Remove the last item using the button.
   * Filter items live using the search input.

---

### Reflection Questions

**1. How did array methods like `push()` and `filter()` help you manipulate data in this activity?**
`push()` allowed easy addition of new items, and `filter()` enabled live searching and retrieval of specific items without manual iteration.

**2. What challenges did you face when trying to filter and search for items in the array?**
Handling case sensitivity and ensuring the search was live and responsive were the main challenges.

**3. How would you modify this code to make it more efficient or user-friendly?**

* Add **live search** (already implemented) to filter items as the user types.
* Persist data with **localStorage** so the list remains after page reload.
* Use Bootstrap alerts, badges, or toasts for better user feedback.

---
