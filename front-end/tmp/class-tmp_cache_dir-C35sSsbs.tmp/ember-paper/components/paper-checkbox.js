define('ember-paper/components/paper-checkbox', ['exports', 'ember-paper/components/base-focusable', 'ember-paper/mixins/ripple-mixin'], function (exports, BaseFocusable, RippleMixin) {

  'use strict';

  var KEY_CODE_SPACE = 32;

  exports['default'] = BaseFocusable['default'].extend(RippleMixin['default'], {
    tagName: 'md-checkbox',
    classNames: ['md-checkbox', 'md-default-theme'],
    classNameBindings: ['checked:md-checked'],

    //Alow element to be focusable by supplying a tabindex 0
    attributeBindings: ['tabindex'],
    tabindex: function() {
      return this.get('disabled') ? '-1' : '0';
    }.property('disabled'),

    checked: false,
    toggle: true,

    /* RippleMixin overrides */
    center: true,
    dimBackground: false,
    rippleContainerSelector: '.md-container',

    click: function() {
      if (!this.get('disabled')) {
        this.toggleProperty('checked');
      }
    },

    keyPress: function(ev) {
      if (ev.which === KEY_CODE_SPACE) {
        this.click();
      }
    }
  });

});