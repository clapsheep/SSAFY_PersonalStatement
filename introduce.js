document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // 플로팅 버튼 기능
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const techs = document.querySelectorAll(".tech");
  let currentIndex = 0;

  function activateNext() {
    techs[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % techs.length;
    techs[currentIndex].classList.add("active");
  }

  // 초기 활성화
  techs[0].classList.add("active");

  // 1초마다 다음 요소 활성화
  setInterval(activateNext, 1000);
});
