/**
 * Prevent event bubbling when using the checked binding
 **/
ko.bindingHandlers.stopBubble = {
  init: function(element) {
    ko.utils.registerEventHandler(element, "click", function(event) {
         event.cancelBubble = true;
         if (event.stopPropagation) {
            event.stopPropagation(); 
         }
    });
  }
};
