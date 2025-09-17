# Program to calculate electricity bill based on units consumed
print("eastern power disibution service")
def calculate_bill(units):
    if units <= 100:
        return 300
    elif units <= 300:
        return 300 + (units - 100) * 3
    elif units <= 500:
        return 300 + (200 * 3) + (units - 300) * 6
    elif units <= 600:
        return 300 + (200 * 3) + (200 * 6) + (units - 500) * 10
    else:
        return 300 + (200 * 3) + (200 * 6) + (100 * 10) + (units - 600) * 15  # Adding higher rate for extra units

# Get customer details and units consumed
customer_name = input("Enter customer name: ")
current_meter_number = input("Enter current meter number: ")
units_consumed = int(input("Enter units consumed for the current month: "))

# Calculate bill amount
bill_amount = calculate_bill(units_consumed)

# Display bill details
print("eastern power disibution service")
print(f"\nCustomer Name: {customer_name}")
print(f"Meter Number: {current_meter_number}")
print(f"Units Consumed: {units_consumed}")
print(f"Total Bill Amount: {bill_amount} INR")