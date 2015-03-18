define('ember-paper/mixins/flex-mixin', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Mixin.create({
    attributeBindings:['flexAttr:flex','flex-layout:layout'],
    /*
     * Not binding boolean values in Ember 1.8.1?
     * https://github.com/emberjs/ember.js/issues/9595
     */
    flexAttr:function(){
      return this.get('flex') ? 'flex' : null;
    }.property('flex')
  });

});