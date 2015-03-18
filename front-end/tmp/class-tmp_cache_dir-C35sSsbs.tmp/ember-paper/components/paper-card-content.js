define('ember-paper/components/paper-card-content', ['exports', 'ember', 'ember-paper/mixins/flex-mixin'], function (exports, Ember, FlexMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(FlexMixin['default'], {
    tagName:'md-card-content',
    classNames:['paper-card-content']
  });

});