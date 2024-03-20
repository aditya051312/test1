function markAttendance(status) {
    var studentId = document.getElementById('studentId').value;
    var url = '/api/' + status;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Attendance marked successfully");
        } else if (xhr.readyState === 4) {
            alert("An error occurred while marking attendance");
        }
    };

    var data = JSON.stringify({"studentId": studentId});
    xhr.send(data);
}
