def generate_odd_numbers(start, end):
    return [num for num in range(start, end+1) if num % 2 != 0]

def main():
    start = 1
    end = 100
    odd_numbers = generate_odd_numbers(start, end)
    for num in odd_numbers:
        print(num)

if __name__ == "__main__":
    main()