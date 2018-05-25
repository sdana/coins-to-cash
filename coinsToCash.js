const piggyBank = {
    pennies:50,
    nickels:30,
    dimes:200,
    quarters:40,
    addMoney: function(){
        let allTheMoney = `You've got:\$${(piggyBank.pennies + (piggyBank.nickels*5) + (piggyBank.dimes*10) + (piggyBank.quarters*25))/100}`
        return allTheMoney
    }
}

let dollarAmount = piggyBank.addMoney()
console.log(dollarAmount)    

