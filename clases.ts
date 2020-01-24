document.write('<hr>');

class User{
    public userName: string;
    private password: number;
    readonly createDate: object;

    constructor(userName:string, password:number){
        this.userName = userName;
        this.password = password;
        this.createDate = new Date();

    }

    getUserName(){
        return this.userName;
    }

    public getPassword(){
        return this.password;
    }

    setUserName(userName:string){
        this.userName = userName;
    }

    sayHelloUser(){
        return `Hello ${this.userName} User Password: ${this.password}`;
    }
}

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

class Admin extends User{

    role: string;
    constructor(userName:string, password:number, role: string){
        super(userName,password);

       /* this.userName = userName;
        this.password = password;*/
        this.role = role;
    }

    sayHelloAdmin(){
        return `Hi user: ${this.userName}. I am a ${this.role}`;
    }
}

let admin = new Admin('Bonjovi',324,'Super Admin');

/*
document.write('<hr>');
document.write(admin.sayHelloAdmin());
document.write('<hr>');*/


let user = new User('John',6677);

document.write('<hr>');
document.write(user.getPassword().toString());
document.write('<hr>');



document.write(user.createDate.toString());

document.write('<hr>');
//user.createDate = {'key':1}; read only error

