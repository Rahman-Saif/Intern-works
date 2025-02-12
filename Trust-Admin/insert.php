<?php
// Database connection
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "your_database"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture form data
$name = $_POST['name'] ?? '';
$degree = $_POST['degree'] ?? '';
$designation_army = $_POST['designation_army'] ?? '';
$designation_trust = $_POST['designation_trust'] ?? '';

// Handle file upload
$image_name = $_FILES['myfile']['name'] ?? '';
$image_tmp_name = $_FILES['myfile']['tmp_name'] ?? '';
$upload_dir = "uploads/";
$image_path = $upload_dir . basename($image_name);

// Move uploaded file to the server
if (!file_exists($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}

if ($image_tmp_name && move_uploaded_file($image_tmp_name, $image_path)) {
    echo "Image uploaded successfully.<br>";
} else {
    echo "Failed to upload image.<br>";
}

// Insert data into the database
$sql = "INSERT INTO directors (name, degree, designation_army, designation_trust, image_path) 
        VALUES ('$name', '$degree', '$designation_army', '$designation_trust', '$image_path')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
