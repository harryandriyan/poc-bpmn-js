import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-xcode'

function CodeRender({ codeString, handleChange }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>Loading the code</div>
    )
  }

  return (
    <>
      <AceEditor
        mode={'java'}
        readOnly
        theme="xcode"
        fontSize={16}
        width="100%"
        onChange={(e) => handleChange(e)}
        name={'dsl-code'}
        defaultValue={codeString}
        editorProps={{ $blockScrolling: true }}
      />
    </>
  );
}

export default CodeRender;