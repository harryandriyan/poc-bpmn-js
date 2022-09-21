const saveShape = (shapes, shapeEvent) => {
  if (shapeEvent) {
    const { element, gfx: { textContent } } = shapeEvent

    const shapeList = [...shapes, {...element, textContent}]
    window.sessionStorage.setItem('shapes', JSON.stringify(shapeList));
  }

  return shapes;
};

export default saveShape;
