var Coverage = {};

//=include('modules/navigation.js');
//=include('modules/content.js');

Coverage.Application = Patchbay.View.extend({
  el: '.l-app',
  
  ui: {
    nav: '.l-nav',
    navControl: '.l-nav-control',
    content: '.l-content'
  },

  setup: function() {
    this.nav = Coverage.Navigation.create({ el: this.ui.nav }, { app: this });
    this.content = Coverage.Content.create({ el: this.ui.content }, { app: this });

    this.listenTo(this.ui.navControl, 'click', _.bind(this.toggleNav, this));
  },

  toggleNav: function() {
    this.state('nav-expanded', !this.state('nav-expanded'));
  }
});

//=include('startup.js');