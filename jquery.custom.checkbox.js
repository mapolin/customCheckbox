function CustomCheckbox(chkBox, label) {
    if(!chkBox) return false;

    this.chkBox = chkBox;
    this.realCheckbox = $('#' + this.chkBox.attr('rel')).get(0);
    this.label = label || undefined;
    this.init();
}
CustomCheckbox.prototype.handleClick = function() {
    if(this.realCheckbox.checked) {
        this.untick();
    }
    else {
        this.tick();
    }
};
CustomCheckbox.prototype.tick = function() {
    this.realCheckbox.checked = true;
    $(this.realCheckbox).trigger('change');
    this.chkBox.addClass('checked');
};
CustomCheckbox.prototype.untick = function() {
    this.realCheckbox.checked = false;
    $(this.realCheckbox).trigger('change');
    this.chkBox.removeClass('checked');
};
CustomCheckbox.prototype.init = function() {
    var _this = this;
    this.chkBox.on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        _this.handleClick();
    });
    this.label.on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        _this.handleClick();
    });
};
$.fn.customCheckbox = function() {
    return this.each(function() {
        var label = $(this).parent().find('label');
        var cBox = new CustomCheckbox($(this), label);
        $(this).data('customCheckbox', cBox);
    });
};