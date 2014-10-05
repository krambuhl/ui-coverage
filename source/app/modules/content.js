Coverage.Content = Patchbay.View.extend({
  ui: {
    groups: '.group'
  },

  setup: function() {
    this.options.app.trigger('data:update', this.gatherData());
  },

  gatherData: function() {
    var data = [];

    this.ui.groups.each(function() {
      var group = $(this),
        tests = group.find('[data-test]');

      var row = {
        describes: group.attr('data-describes'),
        tests: []
      };

      tests.each(function() {
        var test = $(this);
        row.tests.push({
          href: ['#', row.describes, test.attr('data-test')].join('/'),
          title: test.find('.item-title').text()
        })
      });

      data.push(row);
    });

    return data;
  }
});