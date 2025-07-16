// Framer Motion animation variants generator function
export const getVariants = (direction = "up", delay = 0) => {
  // Define initial hidden state (will be updated based on direction)
  let hidden = {};

  // Define visible state with transition details
  let visible = {
    transition: {
      duration: 0.2,       // Animation duration = 0.8 seconds
      ease: "easeInOut",   // Smooth start and end
      delay,               // Delay before animation starts (passed in argument)
    },
  };

  // Check which direction animation should come from
  switch (direction) {
    case "left":
      hidden = { opacity: 0, x: -50 };           // Start 50px left & invisible
      visible = { ...visible, opacity: 1, x: 0 }; // End at x=0 & fully visible
      break;

    case "right":
      hidden = { opacity: 0, x: 50 };            // Start 50px right & invisible
      visible = { ...visible, opacity: 1, x: 0 }; // End at x=0 & fully visible
      break;

    case "up":
      hidden = { opacity: 0, y: -50 };           // Start 50px above & invisible
      visible = { ...visible, opacity: 1, y: 0 }; // End at y=0 & fully visible
      break;

    case "down":
      hidden = { opacity: 0, y: 50 };            // Start 50px below & invisible
      visible = { ...visible, opacity: 1, y: 0 }; // End at y=0 & fully visible
      break;

    default:
      hidden = { opacity: 0 };                   // Only fade in (no x/y movement)
      visible = { ...visible, opacity: 1 };
  }

  // Return both hidden and visible states for Framer Motion
  return {
    hidden,
    visible,
  };
};
