let card = document.getElementById("card");

card.style.backgroundImage = 
    "url('https://i.pinimg.com/736x/6e/4c/4d/6e4c4d73cec9c7d3e0ae8a1fcd57f111.jpg')";
// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxqNThkOHp5eXE1dmJ5MnRvMmhzNDJkMzVyZGoyNWE0bDBsNnFhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xzXALMfzsXbyBzbda5/giphy.gif')";
  question.style.display = "none";
  message.style.display = "flex";
});

// Movimento aleatório do botão 'não'
document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 50;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});