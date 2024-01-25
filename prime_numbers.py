def generate_primes(n=100):
    """
    This function generates all prime numbers between 1 to n.
    A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
    The numbers 0 and 1 are not prime numbers.

    :param n: The upper limit till where to generate prime numbers. Default is 100.
    :return: A list of prime numbers.
    """
    primes = []
    for possiblePrime in range(2, n + 1):
        isPrime = True
        for num in range(2, int(possiblePrime ** 0.5) + 1):
            if possiblePrime % num == 0:
                isPrime = False
                break
        if isPrime:
            primes.append(possiblePrime)
    return primes


def main():
    """
    The main function to execute the program logic.
    """
    primes = generate_primes()
    print(f"Prime numbers between 1 to 100 are: {primes}")


if __name__ == "__main__":
    main()