document.write('<hr>');
var User = /** @class */ (function () {
    function User(userName) {
        this.userName = userName;
        this.createDate = new Date();
    }
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this.password;
        },
        set: function (pass) {
            this.password = pass;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user = new User('John');
user.password = 122345;
document.write('<hr>');
document.write(user.password.toString());
document.write('<hr>');
