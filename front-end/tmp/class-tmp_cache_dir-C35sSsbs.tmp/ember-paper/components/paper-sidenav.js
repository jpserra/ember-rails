define('ember-paper/components/paper-sidenav', ['exports', 'ember', 'ember-paper/mixins/flex-mixin'], function (exports, Ember, FlexMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(FlexMixin['default'], {
    tagName: 'md-sidenav',
    classNames: ['paper-sidenav']
  });

});