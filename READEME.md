# Calculator • Odin Project Foundations

> A simple on-screen calculator built with **HTML**, **CSS**, and **JavaScript** — completed as part of The Odin Project Foundations course.

## 🧠 About

This is a JavaScript calculator that performs basic arithmetic operations:  
addition, subtraction, multiplication, and division. It was built using the fundamental JavaScript concepts learned in the course, including functions, conditionals, and DOM manipulation. :contentReference[oaicite:1]{index=1}

---

## 🧩 Features

✔️ Basic operations:  
- Add  
- Subtract  
- Multiply  
- Divide

✔️ Clickable buttons for digits and operators  
✔️ Display updates based on user input  
✔️ Handles chained calculations correctly (evaluates one operation at a time)  
✔️ Prevents invalid operations (e.g., dividing by zero)  
✔️ Clear button resets the calculator  
✔️ Rounded decimal results to prevent overflow :contentReference[oaicite:2]{index=2}

---

## 🗂️ How It Works

The calculator logic includes:

1. **Math functions** for each operator (add, subtract, multiply, divide).  
2. A central `operate()` function that takes an operator and two numbers, then returns the result.  
3. Event listeners on buttons to:
   - Populate the display with digits
   - Capture selected operators
   - Calculate the result when the equals button is pressed.  
4. Logic to ensure only one operation happens at a time. :contentReference[oaicite:3]{index=3}

---

## 📂 Live Preview

⬆️ Add a link here if you deploy your project using GitHub Pages:

