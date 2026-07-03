document.addEventListener("DOMContentLoaded", () => {
  const scene = document.getElementById("footerParallax");
  if (!scene) return;

  const layers = scene.querySelectorAll("[data-depth-x]");
  const trigger = scene.parentElement;
  const maxShift = 18;

  function moveLayers(clientX) {
    const rect = scene.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const offset = (x - 0.5) * 2;

    layers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depthX) || 0;
      const shiftX = offset * maxShift * depth;
      layer.style.transform = `translate3d(${shiftX}px, 0, 0)`;
    });
  }

  trigger.addEventListener("mousemove", (event) => {
    moveLayers(event.clientX);
  });

  trigger.addEventListener("mouseleave", () => {
    layers.forEach((layer) => {
      layer.style.transform = "translate3d(0, 0, 0)";
    });
  });
});
