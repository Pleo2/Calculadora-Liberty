import { $h2container } from "./nodes";

export const createResponseHTML = (response:string) => {
  $h2container.innerHTML = ``
  const h2title = document.createElement("h2");
  h2title.textContent = response;

  $h2container.appendChild(h2title);
}

