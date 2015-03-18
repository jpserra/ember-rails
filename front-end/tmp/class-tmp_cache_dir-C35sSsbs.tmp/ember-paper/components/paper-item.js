define('ember-paper/components/paper-item', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName:'md-item-content',
    classNames:['paper-item'],
    click: function() {
      this.sendAction('action', this.get('param'));
    }
  });

});