var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
document.write('<hr>');
var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    User.prototype.sayHelloUser = function () {
        return "Hello " + this.userName + " User Password: " + this.password;
    };
    return User;
}());
/*
let user = new User('John',6677);
document.write('<hr>');
user.getUserName();
document.write(user.getUserName());
document.write('<hr>');
user.setUserName('David');
document.write(user.getUserName());
document.write('<hr>');
document.write(user.sayHelloUser());
document.write('<hr>');
*/
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(userName, password, role) {
        var _this = _super.call(this, userName, password) || this;
        /* this.userName = userName;
         this.password = password;*/
        _this.role = role;
        return _this;
    }
    Admin.prototype.sayHelloAdmin = function () {
        return "Hi user: " + this.userName + ". I am a " + this.role;
    };
    return Admin;
}(User));
var admin = new Admin('Bonjovi', 324, 'Super Admin');
/*
document.write('<hr>');
document.write(admin.sayHelloAdmin());
document.write('<hr>');*/
var user = new User('John', 6677);
document.write('<hr>');
document.write(user.getPassword().toString());
document.write('<hr>');
