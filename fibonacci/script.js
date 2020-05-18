function fibonacci(num){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    // Base
    if (num <= 2) return 1;
      
    return fibonacci(num - 1) + fibonacci(num - 2);
}