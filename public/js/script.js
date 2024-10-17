function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU82e6fbf2ac2c09cc2bac72f015137a9470aefcce8fa1ccb4b3f2d816f4c0020827dea50eeb51769ddea5bead4dae6e13'
        },
        body: JSON.stringify({ "UserName": username, "PassWord": password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === true) {
            // แสดง popup พร้อมข้อมูลผู้ใช้
            document.getElementById('popupMessage').innerHTML = `
                <p><strong>Message:</strong> ${data.message}</p>
                <p><strong>Type:</strong> ${data.type}</p>
                <p><strong>Username:</strong> ${data.username}</p>
                <p><strong>Student Status:</strong> ${data.tu_status}</p>
                <p><strong>Status ID:</strong> ${data.statusid}</p>
                <p><strong>Name (TH):</strong> ${data.displayname_th}</p>
                <p><strong>Name (EN):</strong> ${data.displayname_en}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Department:</strong> ${data.department}</p>
                <p><strong>Faculty:</strong> ${data.faculty}</p>
            `;
            document.getElementById('loginPopup').style.display = 'flex';
        } else {
            // ล็อกอินล้มเหลว แสดงข้อความแจ้งเตือน
            document.getElementById('message').innerText = "Incorrect username or password.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerText = "An error occurred while trying to log in.";
    });
}

function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
}
