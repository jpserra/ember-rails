define('ember-paper/mixins/events-mixin', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Mixin.create({
    touchStart: function(e){
      return this.down(e);
    },
    mouseDown: function(e){
      this.down(e);
    },
    touchEnd: function(e){
      return this.up(e);
    },
    mouseUp: function(e){
      return this.up(e);
    },
    touchCancel: function(e){
      return this.up(e);
    },
    mouseLeave: function(e){
      return this.up(e);
    },
    up: Ember['default'].K,
    down: Ember['default'].K,
    contextMenu: Ember['default'].K
  });

});