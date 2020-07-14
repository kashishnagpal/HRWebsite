<?php
$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];
$streetAddress = $_POST['streetAddress'];
$userCity = $_POST['userCity'];

//databaseconnection
$conn = new mysqli('localhost','root','','TaxHealAssignment');
if($conn->connect_error){
         die('Connection Failed' : '.$conn->connect_error');
    
     }else{
         $stmt = $conn->prepare("insert into registration(lastName, firstName, streetAddress, userCity)
          values(?, ?, ?, ?)")
          $stmt->bind_param("ssss",$lastName, $firstName, $streetAddress, $userCity);
         $stmt->execute();
          echo "Submited....";
          $stmt->close();
          $conn->close();


?>





// 
// 