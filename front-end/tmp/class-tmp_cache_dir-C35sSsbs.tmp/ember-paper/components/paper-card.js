define('ember-paper/components/paper-card', ['exports', 'ember', 'ember-paper/mixins/flex-mixin'], function (exports, Ember, FlexMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(FlexMixin['default'], {
    tagName:'md-card',
    classNames:['paper-card']
  });

});