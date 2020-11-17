const inputRef = document.querySelector("#validation-input");

const dataLength = Number(inputRef.getAttribute("data-length"));

function onInputChange(event) {
  if (event.target.value.length === dataLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else if (event.target.value.length === 0) {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("change", onInputChange);
