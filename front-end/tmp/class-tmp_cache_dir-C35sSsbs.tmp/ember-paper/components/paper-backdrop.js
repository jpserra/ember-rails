define('ember-paper/components/paper-backdrop', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'md-backdrop',
    classNames: ['paper-backdrop', 'md-opaque', 'md-default-theme'],

    // Hammer event handler for tapping backdrop
    tapHammer: null,

    subscribeToTouchEvents: function() {
      var hammer = new Hammer(this.get('element'));
      hammer.on('tap', Ember['default'].run.bind(this, this._collapseSidenav));
      this.set('tapHammer', hammer);
    }.on('didInsertElement'),

    _collapseSidenav: function(event) {
      Ember['default'].$(event.target).trigger('collapseSidenav');
      return false;
    },

    onWillDestroyElement: function() {
      if (Ember['default'].isPresent(this.get('tapHammer'))) {
        this.get('tapHammer').destroy();
      }
    }.on('willDestroyElement')

  });

});