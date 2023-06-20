let result = document.querySelector("#chat-list");

const send = () => {
  let user = document.querySelector("#input-user").value;
  let msg = document.querySelector("#input-msg").value;
  result.innerHTML += `<p><span>${user}</span>: ${msg}</p>`;
};
