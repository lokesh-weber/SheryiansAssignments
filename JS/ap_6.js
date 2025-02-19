function operation(n1 , n2 , op)
{
    switch (op) {
        case '+':
            return n1+n2
        case '-':
            return n1-n2
        case '*':
            return n1*n2
        case '/':
            return n1/n2
        default:
            console.log("Enter valid operation +,-,*,/");
            break;
    }
}
console.log(operation(4, 2, "/"));
