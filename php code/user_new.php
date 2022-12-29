<?php
include('connect.php');
?>
  <form action="" method="post">
    enter your roll number: <input type="text" name="name"><br>
    <input type="submit" name="submit">
  </form>
<?php
   if(isset($_POST['submit']) ){
      $roll_number = $_POST['name'];
      $query = "select student_name from user where student_roll_num = $roll_number";
      $data = mysqli_query($conn,$query);
      $rows = mysqli_fetch_assoc($data);
      if($rows){
        print_r($rows['student_name']);
      }else{
        echo "No Data Found";
      }
   }
?>