const Amaterasu = (dom, level = 10, duration = 1) => {
  const original = {
    transition: dom.style.transition,
    filter: dom.style.filter
  };
  let timerID = null;
  const cleanUp = () => {
    timerID !== null && clearInterval(timerID);
    dom.style.filter = original.filter;
    dom.style.transition = original.transition;
  };
  const effect = () => {
    cleanUp();
    dom.style.transition = `${duration}s ease all`;
    let current = 0;
    timerID = setInterval(() => {
      if (current === level) {
        clearInterval(timerID);
      }
      dom.style.filter = `blur(${current}px)`;
      current++;
    }, duration * 1000);
  };

  return [effect, cleanUp];
};
export default Amaterasu;
