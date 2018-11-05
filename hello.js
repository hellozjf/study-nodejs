// console.log("Hello World");

function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};

// exports.world = function() {
//     console.log('Hello World');
// }

module.exports = Hello;