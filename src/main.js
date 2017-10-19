const $ = require('jquery');
$('#target').html('!!!!!!!!!!!!!!!!!!!');
$('#target2').html('444444444');


let helloWorld = function () {

    return "Hello World from bundle.js !*!*! ";
};

let jsData = {
    foo: "bar",
    bar: "foo"
};

module.exports = {
  jsData : jsData,
  helloWorld : helloWorld
};
