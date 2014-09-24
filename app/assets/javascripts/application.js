// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery_nested_form
//= require turbolinks
//= require about_us/about_usjs1
//= require about_us/about_usjs2
//= require about_us/about_usjs3
//= require about_us/about_usjs4
//= require about_us/about_usjs5
//= require about_us/about_usjs6
//= require about_us/about_usjs7
//= require_tree .




/*//project admin new adn edit form js*/

function remove_fields(link) {
$(link).prev("input[type=hidden]").val("1");
$(link).closest(".fields").hide();
}

var topNavPageId = 0

function add_fields(link, association, content) {
var new_id = new Date().getTime();
var regexp = new RegExp("new_" + association, "g");
$(link).parent().before(content.replace(regexp, new_id));
}

function remove_fields(link) {
$(link).prev("input[type=hidden]").val("1");
$(link).closest(".fields").hide();
}


/*home index*/
