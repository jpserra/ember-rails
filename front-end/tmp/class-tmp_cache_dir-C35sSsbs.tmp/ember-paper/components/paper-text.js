define('ember-paper/components/paper-text', ['exports', 'ember', 'ember-paper/components/base-focusable'], function (exports, Ember, BaseFocusable) {

  'use strict';

  exports['default'] = BaseFocusable['default'].extend({
    tagName:'md-input-group',
    classNames:['md-default-theme'],
    classNameBindings:['hasValue:md-input-has-value','focus:md-input-focused'],
    type:'text',
    hasValue: Ember['default'].computed.notEmpty('value'),
    inputElementId: function(){
      return 'input-' + this.get('elementId');
    }.property('elementId'),
    actions:{
      focusIn:function(){
        this.set('focus',true);
      },
      focusOut:function(){
        this.set('focus',false);
      }
    }
  });

});