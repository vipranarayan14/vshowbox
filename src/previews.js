const setSlideContent = slide =>
  slide.content = (slide.content) ? slide.content : slide.preview;

const makePreviews = config => {

  let vsbPreviews = '';

  config.slides.forEach(slide => {

    vsbPreviews +=
      `<div class="vsb-preview" 
            style="background-image: url('${slide.preview}')" 
            title="${slide.caption}">
      </div>`;

    setSlideContent(slide);

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
