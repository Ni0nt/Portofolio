const txtElement = [ 'Engineer', 'Student', 'Writer', 'Web Developer', 'Open-Source Enthusiast'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function typing() {

  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.typing-effect').textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(typing, 500);

})();