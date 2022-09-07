let studentsData = [['Jack', 24], ['Sara', 23],];

console.log("OUTER DATA");
studentsData.forEach((student) => {
    console.log(student);
});

console.log("INNER DATA");
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

for(var i = 0; i < studentsData.length; i++){
    console.log(studentsData[i]);
}

console.log("--------------")
for(var i = 0; i < studentsData.length; i++){
    for(var j = 0; j < studentsData[i].length; j++){
        console.log("array["+i+"]"+"["+j+"] :"+studentsData[i][j]);
    }
    
}