'use strict';

{
  const button = document.querySelector('button')
  const result = document.querySelector('p');



  button.addEventListener('click', () => {
    const results = ['変態', 'かわいい赤ちゃん', 'ちいかわ'];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];
  });
}
