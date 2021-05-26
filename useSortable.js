// Default SortableJS
import Sortable from './node_modules/sortablejs/modular/sortable.core.esm.js';

var el = document.getElementById('listWithHandle');
// List with handle
Sortable.create(el, {
    handle: '.my-handle',
    animation: 150,
    // Element dragging ended
    onEnd: function (/**Event*/evt) {
      var itemEl = evt.item;  // dragged HTMLElement
      evt.to;    // target list
      evt.from;  // previous list
      evt.oldIndex;  // element's old index within old parent
      evt.newIndex;  // element's new index within new parent
      evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
      evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
      evt.clone // the clone element
      evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving

      console.log("element's old index within old parent: ", evt.oldIndex);
      console.log("element's new index within new parent: ", evt.newIndex);
    },
  });
  
  