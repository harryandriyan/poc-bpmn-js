import React, { useEffect, useState } from 'react';
import CodeRender from './code-render';
import { shapeToCode } from '../../utils/dslUtils'

function DSLCode() {
  const [code, setCode] = useState('')

  const generateCode = () => {
    const shapes = JSON.parse(sessionStorage.getItem('shapes')) || [];
    const sortedShape = shapes.sort((a, b) => a.x - b.x);
    const generatedCode = shapeToCode(sortedShape)

    setCode(generatedCode)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      generateCode()
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return ( 
    <>
      <h4>DSL Code</h4>
      <CodeRender 
        codeString={code}
        handleChange={(e) => setCode(e.target.value)}
      />
    </>
  );
}

export default DSLCode;
