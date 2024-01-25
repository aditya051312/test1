def get_even_numbers(start, end):
    """
    This function generates all even numbers between start and end.
    """
    return [i for i in range(start, end + 1) if i % 2 == 0]


if __name__ == "__main__":
    even_numbers = get_even_numbers(1, 100)
    print(even_numbers)