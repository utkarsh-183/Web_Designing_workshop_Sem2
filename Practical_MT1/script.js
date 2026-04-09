function reverseNumber() {
    let num = document.getElementById("num").value;
    let number = Number(num);
    let reverse = 0;

    let isNegative = number < 0;
    number = Math.abs(number);

    while (number > 0) {
        let rem = number % 10;
        reverse = reverse * 10 + rem;
        number = Math.floor(number / 10);
    }

    if (isNegative) {
        reverse = -reverse;
    }

    document.getElementById("result").innerText =
        "Reversed Number: " + reverse;
    alert("Reversed number is: " + reverse);
}