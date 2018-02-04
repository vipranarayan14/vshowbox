export const setSlideURLandTitle = globals => {

  globals.slideURL = globals.SBPreviews[globals.slideIndex].style.backgroundImage;
  globals.slideTitle = globals.SBPreviews[globals.slideIndex].getAttribute('title');

  globals.SBStage.style.backgroundImage = globals.slideURL;
  globals.SBCaption.innerText = globals.slideTitle;

};

export const setSlideCount = globals => {

  globals.SBSlideCount.innerText = `${globals.slideIndex + 1} / ${globals.slidesLength}`;

};
