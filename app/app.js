import React from 'react';
import ReactDOM from 'react-dom';
import Modeler from 'bpmn-js/lib/Modeler';
import customModdleExtension from './moddle/custom.json';
import diagramXML from './basic-auth-diagram.bpmn';
import DSLCode from './components/dsl'
import saveShape from './utils/saveShape'

const $modelerContainer = document.querySelector('#modeler-container');
sessionStorage.setItem('shapes', null);

const modeler = new Modeler({
  container: $modelerContainer,
  moddleExtensions: {
    custom: customModdleExtension
  },
  keyboard: {
    bindTo: document.body
  }
});

modeler.on('shape.added', (event) => {
  const shapes = JSON.parse(sessionStorage.getItem('shapes')) || [];
  saveShape(shapes, event);
});

modeler.importXML(diagramXML);

const sidePanel = document.getElementById('side-panel');
ReactDOM.render(
  <DSLCode />,
  sidePanel
);