class BankAccount {
  money: number;
  constructor(initBalance: number=0) {
    this.money = initBalance;
  }

  //tien gui
  deposit(amount: number):void{
    if(amount<=0){
      console.log("khong the gui so am");
      return;
    }
    this.money += amount;
    console.log(`Tien gui: ${amount}, Tong tien hien tai: ${this.money}`);
    
  }

  //tien rut
  withdraw(amount:number):void{
    if(amount<=0){
      console.log("khong the rut so am");
      return;
    }
    if(amount > this.money){
      console.log("khong du tien");
      return;
    }
    this.money -= amount;
    console.log(`Tien rut: ${amount}, Tong tien hien tai: ${this.money}`);
  }

  
   getMoney() : number {
    return this.money;
  }
  
}

const account= new BankAccount(100000);
account.deposit(50000);
console.log("sau khi gui tien: ",account.getMoney());
account.withdraw(20000);
console.log("sau khi rut tien: ",account.getMoney());

