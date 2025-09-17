stock_prices = {
    "AAPL": 180,
    "TSLA": 250,
    "GOOGL": 150,
    "AMZN": 135,
    "MSFT": 320
}

portfolio = {}

print("Enter the stock ticker and quantity. Type 'done' when you are finished.")

while True:
    stock_ticker = input("Enter stock ticker (e.g., AAPL, TSLA, GOOGL, AMZN, MSFT): ").upper()
    
    if stock_ticker == 'DONE' or not stock_ticker:
        break

    if stock_ticker in stock_prices:
        try:
            quantity = int(input(f"Enter quantity for {stock_ticker}: "))
            if quantity > 0:
                portfolio[stock_ticker] = quantity
            else:
                print("Quantity must be a positive number. Please try again.")
        except ValueError:
            print("Invalid quantity. Please enter a number.")
    else:
        print("Stock not found. Please enter a valid ticker.")

if not portfolio:
    print("No stocks entered. Exiting.")
else:
    print("\n--- Your Portfolio ---")
    total_investment = 0
    for ticker, quantity in portfolio.items():
        price = stock_prices[ticker]
        investment_value = price * quantity
        total_investment += investment_value
        print(f"Stock: {ticker}, Quantity: {quantity}, Current Price: ${price}, Value: ${investment_value}")

    print(f"\nTotal Portfolio Value: ${total_investment}")

    save_option = input("\nDo you want to save the portfolio summary to a file? (yes/no): ").lower()
    if save_option == 'yes':
        filename = "portfolio_summary.txt"
        try:
            with open(filename, 'w') as file:
                file.write("--- Stock Portfolio Summary ---\n")
                for ticker, quantity in portfolio.items():
                    price = stock_prices[ticker]
                    investment_value = price * quantity
                    file.write(f"Stock: {ticker}, Quantity: {quantity}, Price: ${price}, Value: ${investment_value}\n")
                file.write(f"\nTotal Portfolio Value: ${total_investment}")
            print(f"Portfolio summary successfully saved to {filename}")
        except Exception as e:
            print(f"An error occurred while saving the file: {e}")
    