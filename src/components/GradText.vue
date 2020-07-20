<template>
  <div class="reveal-word">sword art online</div>
</template>
<script>
export default {
  mounted() {
    let duration = 0.8;
    let delay = 0.3;
    let revealText = document.querySelector(".reveal-word");
    let letters = revealText.textContent.split("");
    revealText.textContent = "";
    let middle = letters.filter(e => e !== " ").length / 2;
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
      revealText.append(span);
    });
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
.reveal-word {
  position: relative;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  color: #6ee1f5;
  font-size: 2em;
  font-family: Raleway, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: pre;

  span {
    opacity: 0;
    transform: scale(0);
    animation: fadeIn 2.4s forwards;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    background: white;
    opacity: 0;
    transform: scale(0);
  }

  &::before {
    left: 50%;
    animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }

  &::after {
    right: 50%;
    animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
</style>