contacts = {}   


def add_contact():
    name = input("Enter name: ").strip()
    phone = input("Enter phone number: ").strip()
    email = input("Enter email: ").strip()
    address = input("Enter address: ").strip()
    
    contacts[name] = {
        "phone": phone,
        "email": email,
        "address": address
    }
    print(f"\nContact '{name}' added successfully!\n")


def view_contacts():
    if not contacts:
        print("\nNo contacts available.\n")
        return
    print("\n--- Contact List ---")
    for name, info in contacts.items():
        print(f"Name: {name}, Phone: {info['phone']}")
    print()


def search_contact():
    keyword = input("Enter name or phone number to search: ").strip()
    found = False
    for name, info in contacts.items():
        if keyword.lower() in name.lower() or keyword == info["phone"]:
            print("\n--- Contact Found ---")
            print(f"Name: {name}")
            print(f"Phone: {info['phone']}")
            print(f"Email: {info['email']}")
            print(f"Address: {info['address']}\n")
            found = True
    if not found:
        print("\nNo contact found with that detail.\n")


def update_contact():
    name = input("Enter the name of the contact to update: ").strip()
    if name in contacts:
        print("Leave blank if you don't want to change.")
        phone = input(f"Enter new phone ({contacts[name]['phone']}): ").strip()
        email = input(f"Enter new email ({contacts[name]['email']}): ").strip()
        address = input(f"Enter new address ({contacts[name]['address']}): ").strip()

        if phone: contacts[name]['phone'] = phone
        if email: contacts[name]['email'] = email
        if address: contacts[name]['address'] = address

        print(f"\nContact '{name}' updated successfully!\n")
    else:
        print("\nContact not found.\n")


def delete_contact():
    name = input("Enter the name of the contact to delete: ").strip()
    if name in contacts:
        del contacts[name]
        print(f"\nContact '{name}' deleted successfully!\n")
    else:
        print("\nContact not found.\n")



while True:
    print("===== Contact Book Menu =====")
    print("1. Add Contact")
    print("2. View Contact List")
    print("3. Search Contact")
    print("4. Update Contact")
    print("5. Delete Contact")
    print("6. Exit")
    
    choice = input("Enter your choice (1-6): ")
    
    if choice == '1':
        add_contact()
    elif choice == '2':
        view_contacts()
    elif choice == '3':
        search_contact()
    elif choice == '4':
        update_contact()
    elif choice == '5':
        delete_contact()
    elif choice == '6':
        print("Exiting Contact Book. Goodbye!")
        break
    else:
        print("Invalid choice. Try again.\n")
