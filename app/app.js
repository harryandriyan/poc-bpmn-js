import React from 'react';
import ReactDOM from 'react-dom';
import Modeler from 'bpmn-js/lib/Modeler';
import customModdleExtension from './moddle/custom.json';
import diagramXML from './diagram.bpmn';
import DSLCode from './components/dsl'

const $modelerContainer = document.querySelector('#modeler-container');

const modeler = new Modeler({
  container: $modelerContainer,
  moddleExtensions: {
    custom: customModdleExtension
  },
  keyboard: {
    bindTo: document.body
  }
});

modeler.on('create.init', (event) => {
  console.log('create.init', event)
});

modeler.on('shape.added', (event) => {
  console.log('shape.added', event)
});

modeler.importXML(diagramXML);

const sidePanel = document.getElementById('side-panel');
ReactDOM.render(
  <DSLCode />,
  sidePanel
);