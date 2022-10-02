# Frontend Mentor - E-commerce product page solution

This is my solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size ✅
- See hover states for all interactive elements on the page ✅
- Open a lightbox gallery by clicking on the large product image ✅
- Switch the large product image by clicking on the small thumbnail images ✅
- Add items to the cart ✅
- View the cart and remove items from it ✅

### Screenshot

![](/public//product-page.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [here](https://product-page-fawn-phi.vercel.app/)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

It was my first time building a lightbox gallery. I had to think deep to come up with the logic.

```js
function swipeRight() {
  // function to view next image
  setImageIndex((prev) => {
    if (prev >= 0 && prev < 3) {
      return prev + 1;
    } else {
      return 0;
    }
  });
}

function swipeLeft() {
  // function to view previous image
  setImageIndex((prev) => {
    if (prev <= 3 && prev > 0) {
      return prev - 1;
    } else {
      return 3;
    }
  });
}
```

### Continued development

I will use this project as a stepping stone to build a full e-commerce site.

### Useful resources

- [scrimba](https://www.scrimba.com) - This is in my opinion the best place to learn web development.
- [stack overflow](https://stackoverflow.com/) - Whenever I got stuck, I always found some insight here.

## Author

- Website - [tanuikiprop](https://www.tanuikiprop.gq/)
- Frontend Mentor - [@kiprop-dave](https://www.frontendmentor.io/profile/kiprop-dave)
