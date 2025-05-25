#intially code written in python
import random
items=["rock","paper","scissor"]
print("hi cutie💖, welcome")
while True:
    user_choice=input("what's your choice? (rock/paper/scissor) >")
    computer_choice=random.choice(items)
    user_choice=user_choice.lower()

    print(f"user's choice is {user_choice}, computer's choice is {computer_choice}.")
    if user_choice==computer_choice:
        print("it's a tie!")
    elif user_choice=="rock":
        if computer_choice=="paper":
            print("you lost! computer won.")
        else:
            print("yahooo, you won! computer lost.")
    elif user_choice=="scissor":
        if computer_choice=="rock":
            print("you lost! computer won.")
        else:
            print("yahooo, you won! computer lost.")
    elif user_choice == "paper":
        if computer_choice == "scissor":
            print("you lost! computer won.")
        else:
            print("yahooo, you won! computer lost.")
    else:
        print("invalid input! Please choose rock, paper, or scissor.")
    play_again = input("Do you want to play again? (yes/no): ").lower()
    if play_again == "no":
        print("bye bye cutieee 💖")
        break
    elif play_again !="yes" and play_again != "no":
        print("YOU STUPID! just type yes/no, nothing other than this!!!")
        play_again = input("Do you want to play again? (yes/no): ").lower()


