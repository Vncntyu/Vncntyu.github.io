document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const nameButton = document.createElement('button');
  nameButton.textContent = 'The Cool Button';

  nameButton.addEventListener('click', () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Change the background color of the header
    header.style.backgroundColor = randomColor;
  });

  header.appendChild(nameButton);
});
