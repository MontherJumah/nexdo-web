document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickMe");
  button.addEventListener("click", function () {
    const messages = [
      "أهلاً بك في Nexdo 🎉",
      "نحن هنا لننجز المهام باحتراف 🚀",
      "يومك جميل مع Nexdo! 🌟",
      "انطلق نحو الإنتاجية 🧠"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
  });
});