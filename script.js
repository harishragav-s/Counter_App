const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const maxLimit = 100;

textarea.addEventListener('input', () => {
  const charLength = textarea.value.length;
  counter.textContent = `${charLength} / ${maxLimit}`;

  if (charLength > maxLimit) {
    counter.style.color = 'red';
    counter.textContent += ' ❗ Limit exceeded!';
  } else if (charLength >= maxLimit * 0.9) {
    counter.style.color = 'orange';
  } else {
    counter.style.color = '#333';
  }
});
