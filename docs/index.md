---
layout: home
---
<div class="footer-skyline" style="position:relative;overflow:hidden;margin-top:2rem;">
  <div class="footer-skyline__inner" style="max-width:1200px;margin:0 auto;">
    <div
      class="footer-skyline__scene"
      id="footerParallax"
      aria-hidden="true"
      style="position:relative;display:block;height:220px;overflow:hidden;pointer-events:none;"
    >
      <div
        class="footer-skyline__layer footer-skyline__layer--back"
        data-depth-x="0.33"
        style="position:relative;top:0;left:0;width:100%;margin:0;padding:0;transform:translate3d(0,0,0);"
      >
        <img src="{{ '/assets/img/03_silhouette-hinten.svg' | relative_url }}" alt="" width="1600" height="220" style="display:block;width:100%;height:auto;">
      </div>

      <div
        class="footer-skyline__layer"
        data-depth-x="0.66"
        style="position:absolute;top:0;left:0;width:100%;margin:0;padding:0;transform:translate3d(0,0,0);"
      >
        <img src="{{ '/assets/img/02_silhouette-mitte.svg' | relative_url }}" alt="" width="1600" height="220" style="display:block;width:100%;height:auto;">
      </div>

      <div
        class="footer-skyline__layer"
        data-depth-x="1"
        style="position:absolute;top:0;left:0;width:100%;margin:0;padding:0;transform:translate3d(0,0,0);"
      >
        <img src="{{ '/assets/img/01_silhouette-vorne.svg' | relative_url }}" alt="" width="1600" height="220" style="display:block;width:100%;height:auto;">
      </div>
    </div>
  </div>
</div>