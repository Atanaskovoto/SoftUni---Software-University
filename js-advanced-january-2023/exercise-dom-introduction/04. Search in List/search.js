function search() {
   const text = document.querySelectorAll('ul li');
   const input = document.getElementById('searchText').value;
   let matches = 0;
   for (const el of text) {
      if (el.textContent.includes(input)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         matches++;
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = '';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}
