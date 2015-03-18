define('ember-paper/components/paper-nav-container', ['exports', 'ember', 'ember-paper/mixins/flex-mixin'], function (exports, Ember, FlexMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(FlexMixin['default'], {
    tagName: 'md-nav-container',
    classNames: ['paper-nav-container'],
    classNameBindings: ['open:sidenav-expanded'],

    open: false,

    // Custom events
    toggleSidenav: function() {
      this.toggleProperty('open');
    },

    expandSidenav: function() {
      this.set('open', true);
    },

    collapseSidenav: function() {
      this.set('open', false);
    }
  });

});