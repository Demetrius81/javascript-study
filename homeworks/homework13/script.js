"use strict";

// Task 1

const getMin = (arr) => Math.min(...arr);

//Task 2

const createCounter = () => {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getValue: () => count,
  };
};

//Task 3

const findElementByClass = (domEl, className) => {
  if (domEl === null) {
    return null;
  }

  if (domEl === undefined) {
    return null;
  }

  if (domEl.classList.contains(className)) {
    return domEl;
  }

  const childElements = [...domEl.children];
  if (childElements.length > 0) {
    for (let i = 0; i < childElements.length; i++) {
      let targetEl = findElementByClass(childElements[i], className);
      if (targetEl) {
        return targetEl;
      }
    }
  }
};
