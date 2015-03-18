define('ember-paper/components/paper-button', ['exports', 'ember-paper/components/base-focusable', 'ember-paper/mixins/ripple-mixin'], function (exports, BaseFocusable, RippleMixin) {

  'use strict';

  exports['default'] = BaseFocusable['default'].extend(RippleMixin['default'],{
    attributeBindings: ['target', 'action'],
    tagName: 'button',
    classNames: ['md-button','md-default-theme'],
    classNameBindings: ['raised:md-raised'],

    /* RippleMixin overrides */
    center: false,
    dimBackground: true,

    click: function(){
      var target = this.get('target');

      if (target) {
        this.get('target').send(this.get('action'));
      } else {
        this.sendAction();
      }

      return typeof this.get('bubbles') === 'undefined' || this.get('bubbles') === true;
    }
  });

});