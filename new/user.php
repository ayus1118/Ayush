<?php
include('connect.php');?>
<form action="" method="post">
    <input type="number" name="roll_no" placeholder="Enter Roll No."><br>
    <input type="submit" name="submit">
</form>

<?php
if(isset($_POST["submit"])){
    $roll_no = $_POST['roll_no'];
    $query = "Select student_name from user where student_roll_num = $roll_no";
      $data = mysqli_query($conn,$query);
      $rows = mysqli_fetch_assoc($data);
      if($rows){
        print_r($rows['student_name']);
      }else{
        echo "No Data Found";
      }
}
?>