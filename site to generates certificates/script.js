document.getElementById('certForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const appreciation = document.getElementById('appreciation').value;
    const teacher = document.getElementById('teacher').value;
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Load a certificate template image
    const img = new Image();
    img.src = 'certificate_template.png';  // Add your certificate template image
    img.onload = function() {
        // Draw the template image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Set text properties
        ctx.font = '25px Arial';
        ctx.fillStyle = '#172b83';
        ctx.textAlign = 'center';

        // Draw name
        ctx.fillText(name, canvas.width / 2, 190);  // Adjust the y-coordinate as needed

        // Set and apply text properties for the course name
        const courseFontSize = 18;  // Set your desired font size for the course name
        ctx.font = `${courseFontSize}px Arial`;
        ctx.fillText(course, canvas.width / 2, 245);  // Adjust the y-coordinate as needed
        
        // Set and apply text properties for the appreciation text
        const appreciationFontSize = 20;  // Set your desired font size for appreciation
        ctx.font = `${appreciationFontSize}px Arial`;

        ctx.fillText(appreciation, canvas.width / 2.25, 265);  // Adjust the y-coordinate as needed
        

        const teacherFontSize = 15;  // Set your desired font size for teacher
        ctx.font = `${teacherFontSize}px Arial`;
        ctx.fillText(teacher, canvas.width / 3, 340);  // Adjust the y-coordinate as needed


        // Enable download link
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = canvas.toDataURL();
        downloadLink.style.display = 'block';
    };
});
