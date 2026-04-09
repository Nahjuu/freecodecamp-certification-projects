class Category:
    categories= []
    funds = 0
    def __init__(self, cat):
        self.cat = cat
        self.ledger = []
        self.funds =  0
        funds = self.funds
        Category.categories.append(self)

    def deposit(self, amount, desc=""):
        self.ledger.append({"amount": amount, "description": desc})
        self.funds += amount

    def withdraw(self, amount, desc=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": - amount, "description": desc})
            self.funds -= amount
            return True
        else:
            return False
    
    def get_balance(self):
        return self.funds

    def transfer(self, amount, cat2):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {cat2.cat}")
            cat2.deposit(amount, f"Transfer from {self.cat}")
            return True
        else:
            return False

    def check_funds(self, amount):
        if self.funds < amount:
            return False
        else:
            return True

    def __str__ (self):
        centered = (30 - len(self.cat))//2
        right_centered = 30-(centered + len(self.cat))
        title = centered * "*" + self.cat + right_centered * "*"
        items = ""
        for item in self.ledger:
            desc = item["description"][:23]
            amount = item["amount"]
            items +=  "\n"f'{desc}{" " * ( 23 - len(desc))}{amount:>7.2f}'
        total = self.funds
        total = "\n" f'Total: {self.funds:.2f}'
        
        return title + items + total

def create_spend_chart():
    categories = Category.categories
    withdrawals = []
    for category in categories:
        total_withdrawals = 0
        for item in category.ledger:
            if item["amount"] < 0:
                total_withdrawals += abs(item["amount"])
        withdrawals.append(total_withdrawals)
                      
        spent = sum(withdrawals)
       
        percentage = []
        for i in withdrawals:
            if spent != 0:
                unrounded = ((int(i)/spent))*1000
                percentage += [unrounded//10]
            else:
                0
        
        chart = 'Percentage spent by category'
        chart += "\n"
        for i in range(100, -10, -10):
            chart += f'{i:3}| '
            for j in percentage:
                if j >= i:
                    chart += "o  "
                    
                else:
                    chart += "   "
            chart += "\n"

        chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

        
        max_length = max(len(category.cat) for category in categories)
        for i in range(max_length):
            chart += "     "
            for category in categories:
                if i < len(category.cat):
                    chart += category.cat[i] + "  "
                else:
                    chart += "   "
            if i < max_length - 1:
                    chart += "\n"
            else:
                ""
     
    return chart
        
        
food = Category('Food')
food.deposit(1000, 'deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)
auto = Category('Auto')
auto.deposit(400)
auto.withdraw(80)
clothing.withdraw(40)
print(food)

print(create_spend_chart())









