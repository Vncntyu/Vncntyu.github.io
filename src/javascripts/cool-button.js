// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to calculate the contrast color
export function getContrastColor(hex) {
  // Create a new variable instead of reassigning the parameter
  let hexcolor = hex.slice(0, 1) === '#' ? hex.slice(1) : hex;

  // Convert three-character hexcode to six-character
  hexcolor = hexcolor.length === 3 ? hexcolor.split('').map((digit) => digit + digit).join('') : hexcolor;

  // Convert to RGB value
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  // Check contrast
  return yiq >= 128 ? '#000000' : '#FFFFFF';
}

// Main function to change the colors
export function changeColors() {
  const randomColor = getRandomColor();
  const contrastColor = getContrastColor(randomColor);

  // Change the header color
  const header = document.querySelector('header');
  header.style.color = randomColor;

  // Change the button text and background color
  const button = document.getElementById('colorChangeButton');
  button.style.color = randomColor;
  button.style.backgroundColor = contrastColor;
}

// Add event listener to the button with arrow function
document.getElementById('colorChangeButton').addEventListener('click', () => changeColors());
