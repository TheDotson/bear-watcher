const printToDom = (selector, text) => {
  // document.querySelector(selector).innerHTML = text;
  $(selector).html(text);
};

export default { printToDom };
