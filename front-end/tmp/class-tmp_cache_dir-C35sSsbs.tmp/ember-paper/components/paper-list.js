define('ember-paper/components/paper-list', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName:'md-list',
    classNames:['paper-list']
  });

});