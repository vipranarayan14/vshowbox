const getPreview = slide => (slide.preview) ? slide.preview : slide.content;

const makePreviews = config => {

  let vsbPreviews = '';

  config.slides.forEach(slide => {

    const preview = getPreview(slide);

    vsbPreviews +=
      `<div class="vsb-preview" 
            style="background-image: url('${preview}')" 
            title="${slide.caption}">
      </div>`;

  });

  return vsbPreviews;

};

const makePreviewsContainer = vsbPreviews =>
  `<div class="vsb-previews">${vsbPreviews}</div>`;

export const initPreviews = config => {

  const vsbPreviews = makePreviews(config);

  const vsbPreviewsContainer = makePreviewsContainer(vsbPreviews);

  config.container.insertAdjacentHTML('afterbegin', vsbPreviewsContainer);

  return document.querySelector('.vsb-previews');

};
