function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let text = document.getElementById('searchField');
      let searchList = document.querySelectorAll('tbody tr');
      let input = text.value.toLowerCase();
      for (const el of searchList) {
         if (el.textContent.toLowerCase().includes(input)) {
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      }

      text.value = '';
   }
}