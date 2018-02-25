export const initModal = vsbPreviewsContainer => {

  vsbPreviewsContainer.insertAdjacentHTML('afterend',
    `<section class="vsb-modal">

      <span class="vsb-slide-count btn"></span>
      <span class="vsb-close btn">&times;</span>

      <div class="vsb-stage">

        <span class="vsb-prev btn">&#10094;</span>
        <span class="vsb-next btn">&#10095;</span>

      </div>

      <div class="vsb-caption"></div>

    </section>`
  );

  const vsbModal = document.querySelector('.vsb-modal');
  const vsbStage = vsbModal.querySelector('.vsb-stage');
  const vsbCaption = vsbModal.querySelector('.vsb-caption');
  const vsbSlideCount = document.querySelector('.vsb-slide-count');

  return {
    vsbCaption,
    vsbModal,
    vsbSlideCount,
    vsbStage
  };

};
