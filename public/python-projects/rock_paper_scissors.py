import random
ch = ["rock", "paper", "scissors"]
user = input("Enter rock, or paper, or scissors:").lower ()
print("your choice:", user)
comp = random.choice(ch)
print("computer chose:", comp)
if user == comp:
    print("It's a tie!")
elif (user == "rock" and comp == "scissors") or \
     (user == "paper" and comp == "rock") or \
     (user == "scissors" and comp == "paper"):
    print("You win!")
else:
    print("Computer wins!")
user_score = 0
comp_score = 0

while True:
    user = input("Enter rock, paper, or scissors: ").lower()
    if user not in ch:
        print("Invalid input, try again.")
        continue

    comp = random.choice(ch)
    print("Computer chose:", comp)

    if user == comp:
        print("It's a tie!")
    elif (user == "rock" and comp == "scissors") or \
         (user == "paper" and comp == "rock") or \
         (user == "scissors" and comp == "paper"):
        print("You win this round!")
        user_score += 1
    else:
        print("Computer wins this round!")
        comp_score += 1

    print(f"Score - You: {user_score} | Computer: {comp_score}")

    play_again = input("Play again? (y/n): ").lower()
    if play_again != "y":
        print("Thanks for playing!")
        break
user_score = 0
comp_score = 0

print("=== Rock Paper Scissors Game ===")

while True:
    print("\n-----------------------------")
    user = input("Enter rock, paper, or scissors: ").lower()
    if user not in ch:
        print("Invalid input, please choose rock, paper, or scissors.")
        continue

    comp = random.choice(ch)
    print(f"You chose: {user}")
    print(f"Computer chose: {comp}")

    if user == comp:
        print("It's a tie!")
    elif (user == "rock" and comp == "scissors") or \
         (user == "paper" and comp == "rock") or \
         (user == "scissors" and comp == "paper"):
        print("You win this round!")
        user_score += 1
    else:
        print("Computer wins this round!")
        comp_score += 1

    print(f"\nScore -> You: {user_score} | Computer: {comp_score}")

    play_again = input("Play again? (y/n): ").lower()
    if play_again != "y":
        print("\nFinal Score:")
        print(f"You: {user_score} | Computer: {comp_score}")
        print("Thanks for playing! Bye 👋")
        break
