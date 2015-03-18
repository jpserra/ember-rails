define('ember-paper/components/paper-sidenav-toggle', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'md-sidenav-toggle',
    classNames: ['paper-sidenav-toggle'],
    toggle: true,

    click: function(evt) {
      var eventName;
      if (this.get('toggle')) {
        eventName = 'toggleSidenav';
      } else {
        eventName = 'expandSidenav';
      }
      Ember['default'].$(evt.target).trigger(eventName);
      return false;
    }
  });

});