const elementType = {
  'bpmn:Task': [
    'Call', 'Trigger', 'RRF', 'Quit', 'Finish', 'Assign'
  ],
  'bpmn:TextAnnotation': '',
  'bpmn:InclusiveGateway': ['WHEN'],
}

export const shapeToCode = (shapes) => {
  let code = ``;
  let line = 1;

  shapes.forEach((shape, key) => {
    const { type, textContent } = shape;

    if (type === 'bpmn:Task') {
      code += `\n FLOW ${textContent}`
      if (line === 1) {
        code += `\n BASEPATH "hello" \n`
      }
    } else if (type === 'bpmn:InclusiveGateway') {
      const whenSuffix = shapes[key + 1].type === 'bpmn:TextAnnotation' ? ` ` : `\n`
      code += `\n WHEN ${whenSuffix}`
    } else if (type === 'bpmn:TextAnnotation') {
      code += `${textContent}`
    }

    line = line + 1
  });

  return code;
}
