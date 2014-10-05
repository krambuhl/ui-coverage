var Coverage = {};

//=include('modules/navigation.js');
//=include('modules/content.js');

Coverage.Application = Patchbay.View.extend({
  el: '.l-app',
  
  ui: {
    nav: '.l-nav',
    content: '.l-content'
  },

  setup: function() {
    this.nav = Coverage.Navigation.create({ el: this.ui.nav }, { app: this });
    this.content = Coverage.Content.create({ el: this.ui.content }, { app: this });
  }
});

//=include('startup.js');