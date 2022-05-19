(function($) {
  var CheckboxDropdown = function(el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = $('.dropdown-label');
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[type="checkbox"]');

    this.onCheckAll();


    this.$checkAll.on('click', function(e) {
      e.preventDefault();
      _this.onCheckAll();
    });

    this.$inputs.on('change', function(e) {
      _this.onCheckBox();
    });
  };

  CheckboxDropdown.prototype.onCheckBox = function() {
    this.updateStatus();
  };

  CheckboxDropdown.prototype.updateStatus = function() {
    var checked = this.$el.find(':checked');
    this.areAllChecked = false;
    this.$checkAll.html('Check All');

    if (checked.length <= 0) {
      this.$label.html('Select Options');
    } else if (checked.length === 1) {
      this.$label.html(checked.parent('label').text());
    } else if (checked.length === this.$inputs.length) {
      this.$label.html('เลือกทั้งหมด');
      this.areAllChecked = true;
      this.$checkAll.html('Uncheck All');
    } else {
      this.$label.html(checked.length + ' หมวด');
    }
  };

  CheckboxDropdown.prototype.onCheckAll = function(checkAll) {
    if (!this.areAllChecked || checkAll) {
      this.areAllChecked = true;
      this.$checkAll.html('Uncheck All');
      this.$inputs.prop('checked', true);
    } else {
      this.areAllChecked = false;
      this.$checkAll.html('Check All');
      this.$inputs.prop('checked', false);
    }

    this.updateStatus();
  };

  var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
  for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
})(jQuery);
