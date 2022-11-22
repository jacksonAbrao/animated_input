jQuery(document).ready(function ($) {
    $('.animated-input-group input').on('change', function() {
        if($(this).val() != null && $('.animated-input-group input:valid') != true) {
            $(this).parent().find("label").addClass("invalid_input");
            $(this).addClass('invalid_input');
        }
        if ($(this).val() == null || $(this).val() == '' ) {
            $(this).parent().find("label").removeClass('invalid_input');
            $(this).removeClass('invalid_input');
        }
    });
});