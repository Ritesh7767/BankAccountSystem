let AccountDetails = []

function BankAccount(name, type, balance){

    this.name = name
    this.type = type
    this.balance = balance
    this.deposit = function(amount){
        return this.balance += amount
    }
    this.withdraw = function(amount){
        if(amount <= this.balance){
            this.balance -= amount
            console.log(`₹${amount} is withdrawn ,remaining balance is ${this.balance}`)
        }
        else{
            console.log("Insufficient Balance")
        }
    }
    this.checkBalance = function(){
        console.log(`Your account's balance is ${this.balance}`)
    }
    this.isActive = function(){
        if(this.balance){
            return true
        }
        else{
            return false
        }
    }

    AccountDetails.push(this)

}

let BankAccount1 = new BankAccount("Ritesh", "Saving", 50000)
let BankAccount2 = new BankAccount("Yogesh", "Current", 30000)
let BankAccount3 = new BankAccount("Vivek", "Saving", 10000)
let BankAccount4 = new BankAccount("Ankit", "Current", 1000)

console.log(BankAccount1)
console.log(BankAccount2)

BankAccount1.deposit(3000)
BankAccount1.checkBalance()
BankAccount1.withdraw(2000)
BankAccount1.checkBalance()
console.log(BankAccount1.isActive())

BankAccount1.withdraw(51000)
console.log(BankAccount1.isActive())

console.log(AccountDetails)

function getTotalBalance(){

    let TotalBalance = 0
    AccountDetails.forEach(function(ele){
        
        if(ele.isActive()){
            TotalBalance += ele.balance
        }
    })

    return TotalBalance
}

console.log(getTotalBalance())

