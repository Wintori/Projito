const slider = document.querySelector('.article .gallery');

const imgElement = document.createElement('div');
const imgContainer = slider.querySelector('.image');
const sliderImages = slider.querySelectorAll('.content .image img');
const captionElement = document.createElement('div');
const captionContainer = slider.querySelector('.image');
const sliderCaptions = slider.querySelectorAll('.content .image figcaption');
console.log(sliderImages);

let countImg = 0;
imgElement.append(sliderImages[0]);
captionElement.append(sliderCaptions[0]);
const counterElement = document.createElement('div');
counterElement.style.minWidth = '35px';
counterElement.style.marginLeft = '5px';
counterElement.textContent = `${countImg + 1} / ${sliderImages.length}`;
sliderCaptions[0].append(counterElement);
sliderCaptions[0].style.justifyContent = `space-between`;

for (let i = 1; i < sliderImages.length; i++) {
  sliderImages[i].style.display = 'none';
  imgElement.append(sliderImages[i]);
  sliderCaptions[i].style.justifyContent = 'space-between';
  sliderCaptions[i].style.display = 'none';
  captionElement.append(sliderCaptions[i]);
  const counterElement = document.createElement('div');
  counterElement.textContent = `${i + 1} / ${sliderImages.length}`;
  sliderCaptions[i].append(counterElement);
};

imgElement.style.display = 'flex';
imgContainer.prepend(imgElement);
captionContainer.append(captionElement);

console.log(sliderImages[0].clientWidth);
widthImg = sliderImages[0].clientWidth;

const arrowNext = document.createElement('div');
arrowNext.style.cssText = `
  content: "";
  position: absolute;
  top: 388px;
  right: 116px;
  width: 18px;
  height: 10px;
  background: url('../../images/arrow-next.svg') no-repeat center / cover;
`;
imgContainer.append(arrowNext);

const arrowPrevious = document.createElement('div');
arrowPrevious.style.cssText = `
  content: "";
  position: absolute;
  top: 388px;
  left: 116px;
  width: 18px;
  height: 10px;
  background: url('../../images/arrow-previous.svg') no-repeat center / cover;
  display: none;
`;
imgContainer.append(arrowPrevious);

const mediaQuery = window.matchMedia('(max-width: 909px)');

function handleTabletChange() {
  // countImg === (sliderImages.length - 1) ? (arrowNext.style.display = 'none') : 0;
  if (mediaQuery.matches) {
    arrowNext.style.right = '8px';
    arrowNext.style.top = '224px';
    arrowPrevious.style.left = '8px';
    arrowPrevious.style.top = '224px';
  } else {
    const nextDisplay = arrowNext.style.display;
    const prevDisplay = arrowPrevious.style.display;

    arrowNext.style.cssText = `
      content: "";
      position: absolute;
      top: 388px;
      right: 116px;
      width: 18px;
      height: 10px;
      background: url('../../images/arrow-next.svg') no-repeat center / cover;
    `;
    arrowPrevious.style.cssText = `
      content: "";
      position: absolute;
      top: 388px;
      left: 116px;
      width: 18px;
      height: 10px;
      background: url('../../images/arrow-previous.svg') no-repeat center / cover;
    `;
    arrowNext.style.display = nextDisplay;
    arrowPrevious.style.display = prevDisplay;
  }
};
handleTabletChange();
mediaQuery.addEventListener('change', handleTabletChange);

arrowNext.addEventListener('click', () => {
  sliderImages[countImg].style.display = 'none';
  sliderCaptions[countImg].style.display = 'none';
  countImg++;
  sliderImages[countImg].style.display = 'block';
  sliderCaptions[countImg].style.display = 'flex';
  if (countImg > 0) {
    arrowPrevious.style.display = 'block';
  }
  countImg === (sliderImages.length - 1) ? (arrowNext.style.display = 'none') : 0;
});

arrowPrevious.addEventListener('click', () => {
  sliderImages[countImg].style.display = 'none';
  sliderCaptions[countImg].style.display = 'none';
  countImg--;
  sliderImages[countImg].style.display = 'block';
  sliderCaptions[countImg].style.display = 'flex';
  if (countImg < (sliderImages.length - 1)) {
    arrowNext.style.display = 'block';
  }
  countImg === 0 ? (arrowPrevious.style.display = 'none') : 0;
});
