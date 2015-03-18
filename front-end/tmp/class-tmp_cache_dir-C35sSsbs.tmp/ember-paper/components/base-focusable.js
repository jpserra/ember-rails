define('ember-paper/components/base-focusable', ['exports', 'ember', 'ember-paper/mixins/events-mixin'], function (exports, Ember, EventsMixin) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(EventsMixin['default'],{
    disabled:false,
    pressed:false,
    active:false,
    focus:false,
    hover:false,
    attributeBindings: ['disabledAttr:disabled'],

    /*
     * Not binding boolean values in Ember 1.8.1?
     * https://github.com/emberjs/ember.js/issues/9595
     */
    disabledAttr:function(){
      return this.get('disabled') ? 'disabled' : null;
    }.property('disabled'),

    toggle:false,

    /*
     * Listen to `focusIn` and `focusOut` events instead of `focus` and `blur`.
     * This way we don't need to explicitly bubble the events.
     */
    focusIn: function() {
      if (!this.get('pressed')){
        // Only render the "focused" state if the element gains focus due to
        // keyboard navigation.
        this.set('focus',true);
      }
    },
    focusOut: function(){
      this.set('focus',false);
    },
    mouseEnter:function(){
      this.set('hover',true);
    },
    mouseLeave:function(e){
      this.set('hover',false);
      this._super(e);
    },

    down:function(){
      this.set('pressed',true);
      if (this.toggle) {
        this.toggleProperty('active');
      } else {
        this.set('active',true);
      }
    },
    up:function(){
      this.set('pressed',false);

      if (!this.toggle) {
        this.set('active',false);
      }
    }
  });

});