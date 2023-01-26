function solve() {
  const text = document.getElementById('input');
  const array = text.value.split('.');
  array.pop();
  const output = document.getElementById('output');
  let result = '';
  for (let i = 0; i < array.length; i += 3) {
    let current = [];
    for (let t = i; t < i + 3; t++) {
      if (array[t]) {
        current.push(array[t])
      }
    }

    result += `<p>${current.join('.')}.</p>`;
  }

  output.innerHTML = result;
}