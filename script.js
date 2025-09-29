/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

document.addEventListener("DOMContentLoaded", () => {

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
 
const welcomeMsg = document.getElementById("t1-msg");
welcomeMsg.textContent = "Hello, World! Welcome to City Life!";



/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
 
const btn = document.getElementById("t2-btn");
  const status = document.getElementById("t2-status");

  btn.addEventListener("click", () => {
    status.textContent = "You clicked the button! 🎉";
  });

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
 
const quoteBtn = document.getElementById("t3-loadQuote");
const quoteEl = document.getElementById("t3-quote");
const authorEl = document.getElementById("t3-author");

quoteBtn.addEventListener("click", async () => {
  quoteEl.textContent = "Loading quote...";
  authorEl.textContent = "";

  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();

    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `— ${data.author}`;
  } catch (err) {
    quoteEl.textContent = "Could not load a new quote 😢";
    authorEl.textContent = "Try again later.";
  }
});

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

const weatherBtn = document.getElementById("t4-loadWx");
  const tempEl = document.getElementById("t4-temp");
  const humEl = document.getElementById("t4-hum");
  const windEl = document.getElementById("t4-wind");
  const errEl = document.getElementById("t4-err");

  const API_KEY = "64ab3104dff2adb6ea9e4ad9dc6a2c70";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=${API_KEY}&units=metric`;

document.getElementById("t4-loadWx").addEventListener("click", async () => {
  const errEl = document.getElementById("t4-err");
  try {
    errEl.textContent = "Loading…";
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP " + res.status);

    const data = await res.json();
    document.getElementById("t4-temp").textContent = `${data.main.temp} °C`;
    document.getElementById("t4-hum").textContent = `${data.main.humidity} %`;
    document.getElementById("t4-wind").textContent = `${data.wind.speed} m/s`;
    errEl.textContent = "";
  } catch (err) {
    console.error(err);
    errEl.textContent = "⚠️ Could not load weather data.";
  }
});

  

});