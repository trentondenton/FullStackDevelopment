class Wallet():
    def __init__(self, name, balance=0, done=False):
        self.name = name
        self.balance = balance
        self.done = done

    def add_funds(self):
        amount = int(input("How much would you like to depost? $"))
        self.balance += amount

        print(
            f"You've added ${amount} to your account. Your new balance is ${self.balance}")

        answer = input('Add more funds? ')
        if answer == 'yes' or answer == 'y':
            self.add_funds()
        else:
            self.main_menu()

    def withdraw_funds(self):
        amount = int(input("How much would you like to withdraw? $"))
        if amount <= self.balance:
            self.balance -= amount
            print(
                f"You've withdrawn ${amount} from your account. Your new balance is ${self.balance}")
        else:
            print(
                f"You don't have enough funds to withdraw ${amount}. Your current balance is ${self.balance}")
            self.withdraw_funds()

        answer = input('Withdraw more funds? ')
        if answer == 'yes' or answer == 'y':
            self.withdraw_funds()
        else:
            self.main_menu()

    def check_balance(self):
        print(f"Your current balance is ${self.balance}")

        answer = input('Would you like to return to the main menu? ')
        if answer == 'yes' or answer == 'y':
            self.main_menu()
        else:
            self.exit()

    def exit(self):

        answer = input("Are you finished?")
        if answer == 'yes' or answer == 'y':
            self.done = True
        else:
            self.main_menu()

    def main_menu(self):
        menu = int(input(f"""
      Hello, {self.name}, Welcome to your Virtual Wallet!
      
      1. Add Funds
      2. Withdraw Funds
      3. Check Balance
      4. Exit
      """))
        if menu == 1:
            self.add_funds()
        elif menu == 2:
            self.withdraw_funds()

        elif menu == 3:
            self.check_balance()

        elif menu == 4:
            self.exit()
            
name = input("Please enter your name: ")

user = Wallet(name)

while user.done == False:
    user.main_menu()
