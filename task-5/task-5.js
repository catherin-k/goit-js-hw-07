const inputRef = document.querySelector("#name-input");
const nameLaberRef = document.querySelector("#name-output");
console.dir(nameLaberRef);

function onInputChange(event) {
  nameLaberRef.textContent =
    event.target.value === "" ? "Незнакомец" : event.target.value;
}

inputRef.addEventListener("input", onInputChange);
