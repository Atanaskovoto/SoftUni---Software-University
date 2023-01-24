function solve() {
  const arrayFromText = document.getElementById('text').value.split(' ');
  const command = document.getElementById('naming-convention').value;
  let result = [];

  function convert(string) {
    const array = string.split('');
    array[0] = array[0].toUpperCase();
    for (let i = 1; i < array.length; i++) {
      array[i] = array[i].toLowerCase()
    }
    return array.join('');
  }

  switch (command) {
    case 'Pascal Case':
      arrayFromText.forEach(element => {
        result.push(convert(element));
      });
      break;
    case 'Camel Case': const firstWord = arrayFromText
      .shift()
      .toLowerCase();
      result.push(firstWord);
      arrayFromText.forEach(element => {
        result.push(convert(element));
      });
      break;
    default: result.push('Error!'); break;
  }

  document.getElementById('result').textContent = result.join('');
}