var jsdom = require('jsdom')
  , window = jsdom.jsdom().createWindow()
  , $ = require('jquery')(window)
  , XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
  ;

$.support.cors = true
$.ajaxSettings.xhr = function () {
  return new XMLHttpRequest();
}

$.get('http://www.stumbleupon.com/p').then(function (data) {
  console.log('success', data);
}, function (data) {
  console.log('fail', data);
});
