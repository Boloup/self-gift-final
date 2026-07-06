const pageConfig = window.SELF_GIFT_PAGE || {};

document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.querySelector("[data-hero-image]");
  if (heroImage && pageConfig.heroImage) {
    heroImage.src = pageConfig.heroImage;
  }

  document.querySelectorAll("[data-copy]").forEach((node) => {
    const key = node.dataset.copy;
    if (pageConfig.copy && pageConfig.copy[key]) {
      node.textContent = pageConfig.copy[key];
    }
  });

  const backButton = document.querySelector("[data-back]");
  if (backButton) {
    backButton.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
      }
    });
  }

});
