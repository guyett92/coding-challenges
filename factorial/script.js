function factorial(num){
    // This function returns the factorial of a given number.
        if (num < 0) return;
        // Base
        if (num <= 1) return 1;

        return num * factorial(num - 1);
}