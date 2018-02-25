export const initModal = SBPreviewsContainer => {

  SBPreviewsContainer.insertAdjacentHTML('afterend',
    `<section class="sb-modal">

      <span class="sb-slide-count btn"></span>
      <span class="sb-close btn">&times;</span>

      <div class="sb-stage">

        <span class="sb-prev btn">&#10094;</span>
        <span class="sb-next btn">&#10095;</span>

      </div>

      <div class="sb-caption"></div>

    </section>`
  );

  const SBModal = document.querySelector('.sb-modal');
  const SBStage = SBModal.querySelector('.sb-stage');
  const SBCaption = SBModal.querySelector('.sb-caption');
  const SBSlideCount = document.querySelector('.sb-slide-count');

  return {
    SBCaption,
    SBModal,
    SBSlideCount,
    SBStage
  };

};
