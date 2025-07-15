const text = "Hey there, I’m Swar :)";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Delay between characters (in milliseconds)
  }
}

// Start typing after the page fully loads
window.addEventListener("load", () => {
  typeText();
});
