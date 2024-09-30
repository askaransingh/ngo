// animations.js
export const scaleInOut = (index) => ({
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: {
      delay: index * 0.1,
      type: "spring",
      stiffness: 200,
    },
  });
  
  export const FadeInOutWIthOpacity = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  };
  