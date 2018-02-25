import { initModal } from './modal';

export const initGlobals = vsbPreviewsContainer => {

  const vsbPreviews = vsbPreviewsContainer.querySelectorAll('.vsb-preview');

  const slidesLength = vsbPreviews.length;
  const slideLastIndex = vsbPreviews.length - 1;

  const modalComponents = initModal(vsbPreviewsContainer);

  return Object.assign({},

    modalComponents, {

      slideIndex: 0,
      slideLastIndex,
      slidesLength,
      vsbPreviews,
      vsbPreviewsContainer

    }
  );

};
