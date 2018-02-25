import { initModal } from './modal';

export const initGlobals = () => {

  const slidesLength = SBPreviews.length;
  const slideLastIndex = SBPreviews.length - 1;

  const modalComponents = initModal(SBPreviewsContainer);

  return Object.assign({},
    modalComponents, {
      SBPreviews,
      SBPreviewsContainer,
      slideIndex: 0,
      slideLastIndex,
      slideTitle: '',
      slideUrl: '',
      slidesLength
    }
  );

};
