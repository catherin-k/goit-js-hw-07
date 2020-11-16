const inputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

function onInputChange(event) {
  spanTextRef.style.fontSize = event.target.value + "px";
}

inputRef.addEventListener("input", onInputChange);
