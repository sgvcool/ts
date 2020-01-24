document.write('<hr>');

class User{
    public userName: string;
    public password: number;
    readonly createDate: object;

    constructor(userName:string){
        this.userName = userName;
        this.createDate = new Date();
    }

    get password(){
        return this.password;
    }

    set password(pass:number){
        this.password = pass;
    }
}

let user = new User('John');
user.password = 122345;

document.write('<hr>');
document.write(user.password.toString());
document.write('<hr>');