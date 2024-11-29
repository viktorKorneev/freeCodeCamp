const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");
const helpRegex = /please help|assist me/i;
const dollarRegex =
  /([0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars)/i;
  const freeRegex = /\sfr[e3][e3] m[o0]n[e3]y\s/i;

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

const denyList = [helpRegex, dollarRegex, freeRegex];

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
