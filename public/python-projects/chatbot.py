def chatbot_response(user_input):
    user_input = user_input.lower()
    if "hello" in user_input or "hi" in user_input:
        return "Hi, there! How can I help you today?"
    elif "how are you" in user_input:
        return "I'm a bot! So, I'm always doing great! Thanks for asking."
    elif "bye" in user_input or "goodbye" in user_input:
        return "Goodbye! Have a great day."
    else: 
        return "I'm sorry, I don't understand that. You can try asking 'help'."

def start_chatbot():
    print("Chatbot: I'm a simple Chatbot. Type 'bye' to exit. ")
    while True:
        user_input = input("You: ")
        if "bye" in user_input.lower():
            print("Chatbot: Goodbye! Thanks for chatting. ")
            break
        response = chatbot_response(user_input)
        print(f"Chatbot: {response}")

start_chatbot()
