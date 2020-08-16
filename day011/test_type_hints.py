from typing import List, Dict, Optional


def generate_user_name(first_name: str, last_name: str):
    user_name = first_name.strip().lower() + '_' + last_name.strip().lower()
    return user_name


def print_age(age: int):
    print('Age is ' + str(age))


def send_emails(users: List[str]):
    for user in users:
        print('Sending email to '+ user)


def print_user_age(users: Dict[str, int]):
    for user, age in users.items():
        print(user + ' is '+ str(age) +' years old')


def say_hi(name: Optional[str] = 'guest'):
    print(f"Hey {name}!")


if __name__ == '__main__':
    print(generate_user_name('Suresh ', 'Kumar'))
    print_age(29)

    # send_emails([1, 2, 3]) # Expected type 'List[str]', got 'List[int]' instead
    send_emails(['abc@example.com'])

    print_user_age({'Suresh': 29, 'Alex': 30})

    say_hi()
    say_hi('suresh')
