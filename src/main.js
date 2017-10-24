const $ = require('jquery');

// check the connection between bundle & html file
$('#target').html('@@@@@');
$('#target2').html('111222333444');


function helloWorld() {
    return "Hello Wold from bundle.js !*!*! ";
}

let jsData = {
    foo: "bar",
    bar: "foo"
};

module.exports = {
  jsData : jsData,
  helloWorld : helloWorld
};
