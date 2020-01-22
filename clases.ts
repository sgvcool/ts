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

    setUserNaname(userName:string){
        this.userName = userName;
    }

    sayHelloUser(){

    }
}

let user = new User('John',6677);
document.write('<hr>');
user.getUserName();
document.write(user.getUserName());