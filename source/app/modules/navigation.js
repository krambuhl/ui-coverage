Coverage.Navigation = Patchbay.View.extend({
  ui: {
    list: '.nav'
  },

  groupTemplate: _.template('<li><span class="nav-title"><%= describes %></span><ul class="nav-sub"><%= tests %></ul></li>'),
  itemTemplate: _.template('<li><a href="<%= href %>" class="nav-item"><%= title %></a></li>'),

  setup: function() {
    this.listenTo(this.options.app, 'data:update', function(data) {
      this.data = data;
      this.renderNav(data);
    });
  },

  buildDom: function(data) {
    return _.reduce(data, function(dom, group) {
      var tests = _.reduce(group.tests, function(items, test) {
        return items + this.itemTemplate(test);
      }, '', this);

      return dom + this.groupTemplate({
        describes: group.describes,
        tests: tests
      });
    }, '', this);
  },

  renderNav: function(data) {
    this.ui.list.html(this.buildDom(data));
  }
});