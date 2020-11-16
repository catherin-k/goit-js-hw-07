const inputRef = document.querySelector("#name-input");
const nameLaberRef = document.querySelector("#name-output");
console.dir(nameLaberRef);

function onInputChange(event) {
  event.target.value === ""
    ? (nameLaberRef.textContent = "Незнакомец")
    : (nameLaberRef.textContent = event.target.value);
}

inputRef.addEventListener("input", onInputChange);
