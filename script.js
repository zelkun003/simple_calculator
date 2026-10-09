function calculateGrade() {
    let name = document.getElementById("name").value;
    let grade1 = Number(document.getElementById("grade1").value);
    let grade2 = Number(document.getElementById("grade2").value);
    let grade3 = Number(document.getElementById("grade3").value);

    let average = (grade1 + grade2 + grade3) / 3;
    let status = average >= 75 ? "Passed" : "Failed";

    document.getElementById("result").textContent =
        name + "'s average is " + average.toFixed(2) + ". " + status;
}