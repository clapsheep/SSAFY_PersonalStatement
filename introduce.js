document.addEventListener("DOMContentLoaded", function () {
  // 기술 스택 애니메이션
  const techs = document.querySelectorAll(".tech");
  let currentIndex = 0;

  function activateNext() {
    techs[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % techs.length;
    techs[currentIndex].classList.add("active");
  }

  techs[0].classList.add("active");
  setInterval(activateNext, 1000);

  // 텍스트 타이핑 애니메이션
  const typingTexts = document.querySelectorAll("h2");

  typingTexts.forEach((element) => {
    const text = element.textContent;
    element.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    setTimeout(() => {
      typeWriter();
    }, 1000); // 각 섹션이 나타난 후 타이핑 시작
  });
});
