const totalMarks = 200
const students = [
    {
        name: "Ali",
        scienceMarks: 90,
        englishMarks: 70
    },
    {
        name: "Huzaifa",
        scienceMarks: 10,
        englishMarks: 40
    },
    {
        name: "Asim",
        scienceMarks: 40,
        englishMarks: 60
    }
]

function calculateMarks(student) {
    const total = student.scienceMarks + student.englishMarks
    const percentage = total / totalMarks * 100
    return { percentage, total }
}


for (let index = 0; index < students.length; index++) {
    const result = calculateMarks(students[index])
    console.log("-------------------------------------")
    console.log("-------------------------------------")
    console.log("Name: " + students[index].name)
    console.log("Science: " + students[index].scienceMarks)
    console.log("English: " + students[index].englishMarks)
    console.log("Total Marks: " + result.total)
    console.log("Percentage: " + result.percentage)
    result.percentage >= 40 ? console.log("PASSED") : console.log("FAILED")

}
