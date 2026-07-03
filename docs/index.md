---
layout: home
---
  <div class="footer-skyline">
    <div class="footer-skyline__inner">
      <ul class="footer-skyline__scene" id="footerParallax" aria-hidden="true">
        <li class="footer-skyline__layer" data-depth-x="0.33">
          <img src="{{ '/assets/img/03_silhouette-hinten.svg' | relative_url }}" alt="" width="1600" height="220">
        </li>
        <li class="footer-skyline__layer" data-depth-x="0.66">
          <img src="{{ '/assets/img/02_silhouette-mitte.svg' | relative_url }}" alt="" width="1600" height="220">
        </li>
        <li class="footer-skyline__layer" data-depth-x="1">
          <img src="{{ '/assets/img/01_silhouette-vorne.svg' | relative_url }}" alt="" width="1600" height="220">
        </li>
      </ul>
    </div>
  </div>

  <script src="{{ '/assets/js/footer-parallax.js' | relative_url }}"></script>