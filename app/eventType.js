const eventType = [
  'diagram.destroy',
  'render.shape',
  'render.connection',
  'render.getShapePath',
  'render.getConnectionPath',
  'diagram.init',
  'shape.added',
  'connection.added',
  'shape.removed',
  'connection.removed',
  'elements.changed',
  'diagram.clear',
  'canvas.destroy',
  'canvas.init',
  'shape.changed',
  'connection.changed',
  'interactionEvents.createHit',
  'interactionEvents.updateHit',
  'shape.remove',
  'connection.remove',
  'element.hover',
  'element.out',
  'selection.changed',
  'create.end',
  'connect.end',
  'shape.move.end',
  'element.click',
  'canvas.viewbox.changing',
  'canvas.viewbox.changed',
  'element.changed',
  'element.marker.update',
  'attach',
  'detach',
  'editorActions.init',
  'keyboard.keydown',
  'element.mousedown',
  'commandStack.connection.start.canExecute',
  'commandStack.connection.create.canExecute',
  'commandStack.connection.reconnect.canExecute',
  'commandStack.connection.updateWaypoints.canExecute',
  'commandStack.shape.resize.canExecute',
  'commandStack.elements.create.canExecute',
  'commandStack.elements.move.canExecute',
  'commandStack.shape.create.canExecute',
  'commandStack.shape.attach.canExecute',
  'commandStack.element.copy.canExecute',
  'shape.move.start',
  'shape.move.move',
  'elements.delete',
  'tool-manager.update',
  'i18n.changed',
  'drag.move',
  'contextPad.create',
  'palette.create',
  'autoPlace.end',
  'autoPlace',
  'drag.start',
  'drag.cleanup',
  'commandStack.shape.create.postExecuted',
  'commandStack.elements.move.postExecuted',
  'commandStack.shape.toggleCollapse.postExecuted',
  'commandStack.shape.resize.postExecuted',
  'commandStack.element.autoResize.canExecute',
  'bendpoint.move.hover',
  'bendpoint.move.out',
  'bendpoint.move.cleanup',
  'bendpoint.move.end',
  'connectionSegment.move.start',
  'connectionSegment.move.move',
  'connectionSegment.move.hover',
  'connectionSegment.move.out',
  'connectionSegment.move.cleanup',
  'connectionSegment.move.cancel',
  'connectionSegment.move.end',
  'element.mousemove',
  'element.updateId',
  'bendpoint.move.move',
  'bendpoint.move.start',
  'bendpoint.move.cancel',
  'connect.move',
  'connect.hover',
  'connect.out',
  'connect.cleanup',
  'create.move',
  'create.hover',
  'create.out',
  'create.cleanup',
  'create.init',
  'copyPaste.copyElement',
  'copyPaste.pasteElements',
  'moddleCopy.canCopyProperties',
  'moddleCopy.canCopyProperty',
  'moddleCopy.canSetCopiedProperty',
  'copyPaste.pasteElement',
  'popupMenu.getProviders.bpmn-replace',
  'contextPad.getProviders',
  'resize.move',
  'resize.end',
  'commandStack.shape.resize.preExecute',
  'spaceTool.move',
  'spaceTool.end',
  'create.start',
  'commandStack.connection.create.postExecuted',
  'commandStack.connection.layout.postExecuted',
  'shape.move.init',
  'resize.start',
  'resize.cleanup',
  'element.dblclick',
  'autoPlace.start',
  'drag.init',
  'popupMenu.open',
  'commandStack.changed',
  'directEditing.activate',
  'directEditing.resize',
  'directEditing.complete',
  'directEditing.cancel',
  'commandStack.connection.updateWaypoints.postExecuted',
  'commandStack.label.create.postExecuted',
  'commandStack.elements.create.postExecuted',
  'commandStack.shape.append.preExecute',
  'commandStack.shape.move.postExecute',
  'commandStack.elements.move.preExecute',
  'commandStack.connection.create.postExecute',
  'commandStack.connection.reconnect.postExecute',
  'commandStack.shape.create.executed',
  'commandStack.shape.create.reverted',
  'commandStack.shape.create.preExecute',
  'shape.move.hover',
  'global-connect.hover',
  'global-connect.out',
  'global-connect.end',
  'global-connect.cleanup',
  'connect.start',
  'commandStack.shape.create.execute',
  'commandStack.shape.create.revert',
  'commandStack.shape.create.postExecute',
  'commandStack.elements.create.preExecute',
  'commandStack.elements.create.revert',
  'commandStack.elements.create.postExecute',
  'commandStack.connection.layout.executed',
  'commandStack.connection.create.executed',
  'commandStack.connection.layout.reverted',
  'commandStack.shape.move.executed',
  'commandStack.shape.delete.executed',
  'commandStack.connection.move.executed',
  'commandStack.connection.delete.executed',
  'commandStack.shape.move.reverted',
  'commandStack.shape.delete.reverted',
  'commandStack.connection.create.reverted',
  'commandStack.connection.move.reverted',
  'commandStack.connection.delete.reverted',
  'commandStack.canvas.updateRoot.executed',
  'commandStack.canvas.updateRoot.reverted',
  'commandStack.shape.resize.executed',
  'commandStack.shape.resize.reverted',
  'commandStack.connection.reconnect.executed',
  'commandStack.connection.reconnect.reverted',
  'commandStack.connection.updateWaypoints.executed',
  'commandStack.connection.updateWaypoints.reverted',
  'commandStack.element.updateAttachment.executed',
  'commandStack.element.updateAttachment.reverted',
  'commandStack.shape.delete.postExecute',
  'commandStack.canvas.updateRoot.postExecute',
  'spaceTool.selection.init',
  'spaceTool.selection.ended',
  'spaceTool.selection.canceled',
  'spaceTool.ended',
  'spaceTool.canceled',
  'spaceTool.selection.end',
  'commandStack.shape.delete.postExecuted',
  'commandStack.connection.create.preExecuted',
  'commandStack.shape.replace.preExecuted',
  'bpmnElement.added',
  'commandStack.element.updateProperties.postExecute',
  'commandStack.label.create.postExecute',
  'commandStack.connection.layout.postExecute',
  'commandStack.connection.updateWaypoints.postExecute',
  'commandStack.shape.replace.postExecute',
  'commandStack.shape.resize.postExecute',
  'shape.move.rejected',
  'create.rejected',
  'elements.paste.rejected',
  'commandStack.shape.delete.preExecute',
  'commandStack.connection.reconnect.preExecute',
  'commandStack.element.updateProperties.postExecuted',
  'commandStack.shape.replace.postExecuted',
  'commandStack.shape.toggleCollapse.executed',
  'commandStack.shape.toggleCollapse.reverted',
  'spaceTool.getMinDimensions',
  'commandStack.connection.delete.preExecute',
  'commandStack.canvas.updateRoot.preExecute',
  'commandStack.spaceTool.preExecute',
  'commandStack.lane.add.preExecute',
  'commandStack.lane.resize.preExecute',
  'commandStack.lane.split.preExecute',
  'commandStack.elements.delete.preExecute',
  'commandStack.shape.move.preExecute',
  'commandStack.spaceTool.postExecuted',
  'commandStack.lane.add.postExecuted',
  'commandStack.lane.resize.postExecuted',
  'commandStack.lane.split.postExecuted',
  'commandStack.elements.delete.postExecuted',
  'commandStack.shape.move.postExecuted',
  'saveXML.start',
  'commandStack.connection.create.preExecute',
  'commandStack.connection.move.preExecute',
  'shape.move.out',
  'shape.move.cleanup',
  'commandStack.elements.move.preExecuted',
  'commandStack.shape.delete.execute',
  'commandStack.shape.delete.revert',
  'spaceTool.selection.start',
  'spaceTool.selection.move',
  'spaceTool.selection.cleanup',
  'spaceTool.cleanup',
  'lasso.selection.init',
  'lasso.selection.ended',
  'lasso.selection.canceled',
  'lasso.ended',
  'lasso.canceled',
  'lasso.selection.end',
  'lasso.end',
  'lasso.start',
  'lasso.move',
  'lasso.cleanup',
  'hand.init',
  'hand.ended',
  'hand.canceled',
  'hand.move.ended',
  'hand.move.canceled',
  'hand.end',
  'hand.move.move',
  'hand.move.end',
  'global-connect.init',
  'global-connect.ended',
  'global-connect.canceled',
  'global-connect.drag.ended',
  'global-connect.drag.canceled',
  'palette.getProviders',
  'propertiesPanel.isEntryVisible',
  'propertiesPanel.isPropertyEditable',
  'propertiesPanel.getProviders',
  'root.added',
  'propertiesPanel.changed',
  'propertiesPanel.resized',
  'elementTemplates.changed',
  'propertiesPanel.providersChanged',
  'canvas.resized',
  'import.parse.complete',
  'commandStack.element.updateLabel.executed',
  'create.canceled'
];


export default eventType;