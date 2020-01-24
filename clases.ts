document.write('<hr>');

class User{
    userName: string;
    password: number;

    constructor(userName:string, password:number){
        this.userName = userName;
        this.password = password;
    }

    getUserName(){
        return this.userName;
    }

    setUserName(userName:string){
        this.userName = userName;
    }

    sayHelloUser(){
        console.log(`Hello ${this.userName} User Password: ${this.password}`);
    }
}

let user = new User('John',6677);
document.write('<hr>');
user.getUserName();
document.write(user.getUserName());
document.write('<hr>');
user.setUserName('David');
document.write(user.getUserName());
document.write('<hr>');
user.sayHelloUser();