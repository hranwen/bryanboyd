// Header burger animation
const navDrop = () => {
  const burger = document.querySelector(".burger");
  const navAnimation = document.querySelector(".nav-links");
  const lineOne = document.querySelector(".line1");
  const lineTwo = document.querySelector(".line2");
  const lineThree = document.querySelector(".line3");

  burger.addEventListener("click", () => {
    navAnimation.classList.toggle("nav-links-active");
    lineOne.classList.toggle("line1-active");
    lineTwo.classList.toggle("line2-active");
    lineThree.classList.toggle("line3-active");
  });
};

// svg path length
const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(logo[i].getTotalLength());
}

// Execute function
navDrop();
