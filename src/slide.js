const imageIsLoaded = url =>

  new Promise(function (resolve, reject) {

    const img = new Image();

    img.addEventListener('load', function () {

      resolve(true);

    }, false);

    img.addEventListener('error', function () {

      reject(new Error(
        'Could not get the image for this slide.' +
        'Using image in preview.'
      ));

    }, false);

    img.src = url;

  });

export const setSlideURLandTitle = globals => {

  const previewUrl = globals.config.slides[globals.slideIndex].preview;
  const slideUrl = globals.config.slides[globals.slideIndex].content;
  const slideCaption = globals.config.slides[globals.slideIndex].caption;

  globals.vsbStage.style.backgroundImage = `url(${previewUrl}`;

  imageIsLoaded(slideUrl).then(() => {

    globals.vsbStage.style.backgroundImage = `url(${slideUrl}`;

  }).catch(value => console.error(value)); // eslint-disable-line no-console

  globals.vsbCaption.innerText = slideCaption;

};

export const setSlideCount = globals => {

  globals.vsbSlideCount.innerText = `${globals.slideIndex + 1} / ${globals.slidesLength}`;

};
