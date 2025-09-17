print("Green Bus Menu")
print("1. Hyderabad\n2. Chennai\n3. Bangalore\n4. Tirupati")
dt = input("Enter your choice (1-4): ")

print("a. Sleeper\nb. Semi Sleeper\nc. Double Decker\nd. A/C & Non A/C")
bt = input("Enter your choice (a-d): ")

n = int(input("Enter number of tickets: "))

# Set the price based on destination and bus type
price = 0

if dt == "1":  # Hyderabad
    if bt == "a":
        price = 2000
    elif bt == "b":
        price = 1500
    elif bt == "c":
        price = 1000
    elif bt == "d":
        price = 2500
elif dt == "2":  # Chennai
    if bt == "a":
        price = 2500
    elif bt == "b":
        price = 2000
    elif bt == "c":
        price = 1500
    elif bt == "d":
        price = 3000
elif dt == "3":  # Bangalore
    if bt == "a":
        price = 2000
    elif bt == "b":
        price = 1500
    elif bt == "c":
        price = 1000
    elif bt == "d":
        price = 2500
elif dt == "4":  # Tirupati
    if bt == "a":
        price = 2500
    elif bt == "b":
        price = 2000
    elif bt == "c":
        price = 1500
    elif bt == "d":
        price = 3000
else:
    print("Invalid destination selected.")
    exit()

# Calculate total amount
total_amount = price * n

# Print ticket details
print("\nGreen Bus Ticket")
print("From Station: Kakinada")
print("To Station:", dt)
print("Bus Type:", bt)
print("Number of Tickets:", n)
print("Ticket Price per Ticket:", price)
print("Total Amount:", total_amount)
print("HAPPY JOURNEY 🎉")