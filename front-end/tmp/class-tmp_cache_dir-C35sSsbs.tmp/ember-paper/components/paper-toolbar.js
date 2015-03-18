define('ember-paper/components/paper-toolbar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName:'md-toolbar',
    classNames:['paper-toolbar','md-default-theme']
  });

});