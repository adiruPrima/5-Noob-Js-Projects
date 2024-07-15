const input = document.getElementById("input");
const result = document.getElementById("result");

function checkPalindrome() {
  const word = input.value;
  const reverseWord = word.split("").reverse().join("");
  result.style.display = "block";

  if (word === reverseWord) {
    result.textContent = "This word is palindrome ✅";
  } else {
    result.textContent = "This is a normal word ❌";
  }
}

function hideResult() {
  result.style.display = "none";
}
