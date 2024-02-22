let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
    
  try {
    display.value = eval(display.value);
  } 

  catch(error) {
    display.value = 'Error';
  }

}
const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    darkModeToggle.addEventListener('change', () => {
      body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
