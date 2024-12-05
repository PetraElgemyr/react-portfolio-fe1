// export const findSlide = (slides: ISlide[], pageName: string) => {
//     const spainSlide = slides.find((slide) => {
//       return slide.slideTitle.toLowerCase() === pageName.toLowerCase();
//     });
//     if (spainSlide) return spainSlide;
//   };

import { LinkUrls } from "../enums/LinkUrls";

export const getActivePageFromLocation = (pathname: string) => {
  if (pathname.includes(LinkUrls.ABOUT)) {
    return LinkUrls.ABOUT;
  } else if (pathname.includes(LinkUrls.CONTACT)) {
    return LinkUrls.CONTACT;
  } else if (pathname.includes(LinkUrls.PORTFOLIO)) {
    return LinkUrls.PORTFOLIO;
  } else if (pathname.includes(LinkUrls.SKILLS)) {
    return LinkUrls.SKILLS;
  } else if (pathname.includes(LinkUrls.HOME)) {
    return LinkUrls.HOME;
  }
};
