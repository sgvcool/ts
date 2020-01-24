document.write('<hr>');
var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    User.prototype.sayHelloUser = function () {
        console.log("Hello " + this.userName + " User Password: " + this.password);
    };
    return User;
}());
var user = new User('John', 6677);
document.write('<hr>');
user.getUserName();
document.write(user.getUserName());
document.write('<hr>');
user.setUserName('David');
document.write(user.getUserName());
document.write('<hr>');
user.sayHelloUser();
