<template>
  <header class="header">
    <!-- Header Top -->
    <div class="header-top">
      <div class="container">
        <div class="contact-item">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a href="tel:608010294">608-01-02-94</a>
        </div>
        <div class="contact-item">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a href="mailto:ag.detektyw@wp.pl">ag.detektyw@wp.pl</a>
        </div>
      </div>
    </div>

    <!-- Actual header -->
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <a href="/">AGENCJA DETEKTYWISTYCZNA</a>
      </div>
      <nav class="navigation">
        <ul>
          <li><a href="#">Strona główna</a></li>
          <li><a href="#">Oferta indywidualna</a></li>
          <li><a href="#">Oferta biznesowa</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </nav>
      <button
        class="hamburger hamburger--collapse"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner" />
        </span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    let hamburger = document.querySelector(".hamburger");
    let navigation = document.querySelector(".navigation");
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
      navigation.classList.toggle("is-active");
    });
  },
};

</script>

<style lang="scss">
@import "@/assets/header.scss";
</style>
