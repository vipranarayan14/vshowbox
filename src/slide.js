export const setSlideURLandTitle = globals => {

  const slideUrl = globals.config.slides[globals.slideIndex].content;
  const slideCaption = globals.config.slides[globals.slideIndex].caption;

  globals.vsbStage.style.backgroundImage = `url(${slideUrl}`;
  globals.vsbCaption.innerText = slideCaption;

};

export const setSlideCount = globals => {

  globals.vsbSlideCount.innerText = `${globals.slideIndex + 1} / ${globals.slidesLength}`;

};
