define('ember-paper/components/paper-divider', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName:'md-divider',
    attributeBindings:['insetAttr:md-inset'],
    classNames:['paper-divider','md-default-theme'],
    /*
     * Not binding boolean values in Ember 1.8.1?
     * https://github.com/emberjs/ember.js/issues/9595
     */
    insetAttr:function(){
      return this.get('inset') ? 'md-inset' : null;
    }.property('inset')
  });

});