jsdom              = require('jsdom')
window             = jsdom.jsdom().createWindow()
$                  = require('jquery')(window)
XMLHttpRequest     = require("xmlhttprequest").XMLHttpRequest

//return console.log("->", $.ajaxSettings)

//$.support.cors     = true;


var get = require('./get')

var xhr = get('http://google.com')

xhr.done(function(data) {
  console.log("done", data)
})

xhr.fail(function(data) {
  console.log("fail", data)
})
