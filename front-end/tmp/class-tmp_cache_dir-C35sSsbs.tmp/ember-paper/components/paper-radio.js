define('ember-paper/components/paper-radio', ['exports', 'ember', 'ember-paper/components/base-focusable', 'ember-paper/mixins/ripple-mixin'], function (exports, Ember, BaseFocusable, RippleMixin) {

  'use strict';

  exports['default'] = BaseFocusable['default'].extend(RippleMixin['default'], {
    tagName: 'md-radio-button',
    classNames: ['md-radio-button', 'md-default-theme'],
    classNameBindings: ['checked:md-checked'],
    toggle: false,
    selected: null,

    center: true,
    rippleContainerSelector: '.md-container',

    checked: function() {
      return this.get('value') === this.get('selected');
    }.property('value', 'selected'),

    checkedDidChange: Ember['default'].observer('checked', function() {
      if (this.get('checked')) {
        this.set('selected', this.get('value'));
      }
    }),

    click: function() {
      if (this.get('toggle')) {
        this.set('selected', this.get('checked') ? null : this.get('value'));
      } else {
        this.set('selected', this.get('value'));
      }
    }
  });

});