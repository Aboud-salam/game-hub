import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
const getCroppedImgUrl = (url: string) => {
  if (!url) return noImage;
  let target = "media/";
  let targetIndex = url.indexOf(target) + target.length - 1;
  let modImgUrl = url
    .split("")
    .map((l, index) => (index === targetIndex ? `${l}crop/600/400/` : l))
    .join("");
  // alternative
  //   let modImgUrl =
  //     url.slice(0, targetIndex + 1) +
  //     "crop/600/400/" +
  //     url.slice(targetIndex + 1);
  return modImgUrl;
};
export default getCroppedImgUrl;
