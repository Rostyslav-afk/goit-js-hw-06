import { square } from "./math.js";

export function setup() {
  const input = document.getElementById("numberInput");
  const btn = document.getElementById("calcBtn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const value = Number(input.value);
    if (isNaN(value)) {
      result.textContent = "Неправильно ввели число!";
    } else {
      result.textContent = `Квадрат: ${square(value)}`;
    }
  });
}
