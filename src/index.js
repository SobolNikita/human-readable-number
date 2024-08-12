module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    let get3 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let get2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let get1 = [
        "-",
        "-",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let ans = "";
    if (number >= 100) {
        ans += get3[String(number)[0]] + " hundred";
        number = Number(String(number).slice(1));
    }
    if (number >= 10 && number <= 19) {
        ans += " " + get2[number - 10];
        return ans.trim();
    }
    if (number >= 10) {
        ans += " " + get1[String(number)[0]];
        if (String(number)[1] != "0") {
            ans += " " + get3[String(number)[1]];
        }
    } else {
        if (String(number)[0] != "0") {
            ans += " " + get3[String(number)[0]];
        }
    }
    return ans.trim();
};
