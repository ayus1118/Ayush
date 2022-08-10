<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!";
$x = 5;
$y = 6;
// echo and print
echo $x , $y ; // echo can pass multiple parameters 
print $x ; // print can return only value
?>
<br>
<?php
//php string 
$s1 = "demo programsds";
$s2 = 'demo program 2';
echo $s1 ,"<br>", $s2;
echo "<br>";
//PHP Integer
$value1 = "5";
$value2 = "6";
$value3 = "-7";
$value4 = "456 jjh";
echo $value1 + $value2;
echo "<br>";
echo "<br>";
echo $value1 + $value3;
echo "<br>";
echo "<br>";
var_dump ($value4);
?>
<br>
<?php
$a = 5;
$b = 4;
$c;

$c = $a;
$a = $b;
$b = $c;

echo $a;
echo $b;
?>
<br>

<?php
 $x = 5;
 $y = 4;
 $x = $x * $y;
 $y = $x / $y;
 $x = $x / $y;

 echo $x;
 echo $y;

 echo "<br>";
echo "<br>";
// PHP Float

$x = 10.365;
var_dump($x);
echo "<br>";
echo "<br>";

//PHP Array

$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
print_r ($cars);

?>
<br>
<?php
define("cars", [
  "Alfa Romeo",
  "BMW",
  "Toyota"
]);
echo cars[1];
?> 
<br>
<br>
<?php
$number = 10;
if($number%2==0)
{
    echo "number is even";
}
else {
    echo "number is odd";
}

echo "<br>";
echo "<br>"; 


$favcolor = "yellow";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  case "yellow":
    echo "your favorite color is yellow";
    break;    
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}

echo "<br>";
echo "<br>"; 

// while loop 
$x = 5;
while($x <= 10)
{
  echo " echo: $x <br>";
  $x++;
}

echo "<br>";
echo "<br>";  

// for loop
for($x=0; $x <= 5; $x++)
{
  echo "value is $x <br>";
}

echo "<br>";
echo "<br>";  
$z = 5;
$c;
for($x=1; $x <= 10; $x++){
  $c = $x * $z;
   echo "$c  <br>";
}

echo "<br>";
echo "<br>";

$star = "*";
for( $num=0; $num <=4; $num++ )
{
    for( $num2=0; $num2 <= $num; $num2++)
    {
      echo $star;
    }
    echo "<br>";
}

echo "<br>";
echo "<br>";
 
$star = "*";
for( $num=0; $num <=4; $num++ )
{
    for( $num3=4; $num3 >= $num; $num3--)
    {
      echo "&nbsp";
    }
    for( $num2=0; $num2 <= $num; $num2++)
    {
      echo $star;
    }
    echo "<br>";
}

echo "<br>";
echo "<br>"; 

$num = array("number1", "number2", "number3");
echo $num[0]. ",". $num[1]. ", ". $num[2];
echo "<br>";
echo "<br>";  
foreach($num as $new)
{
  echo $new;
}
echo "<br>";
echo "<br>";  

$demo = array(
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
);

echo $demo[0][0] .",". $demo[0][1] .",". $demo[0][2] ."<br>";
echo $demo[1][0] .",". $demo[1][1] .",". $demo[1][2] ."<br>";
echo $demo[2][0] .",". $demo[2][1] .",". $demo[2][2] ."<br>";
echo $demo[3][0] .",". $demo[3][1] .",". $demo[3][2] ."<br>";

echo "<br>";
echo "<br>";

$demo = array(
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
);

foreach( $demo as $key => $x_key)
{
  echo $x_key[0] . " , " . $x_key[1] . " , " . $x_key[2 ]; 
  echo "<br>";
}

echo "<br>";
echo "<br>";  
?>
<br>
<br>
<?php
//string reverse
function stringrev( $string){
    $r = 0;
    $k = gettimeofday();
    $b = strlen($string);
    for( $i = $b-1; $i >=0; $i-- )
    {
      $r = $string[$i];
      echo $r;
    }
    echo $k;
}
stringrev("sachin");
?>
<br>
<br>
<?php
//date 
    $datetime1 = date_create('1997-07-11');
    $datetime2 = date_create('2022-08-09');
      
    $interval = date_diff($datetime1, $datetime2);
    $r = $interval->format('%a Day');
    echo $r;
    echo "<br>";
    echo "<br>";
    echo $interval->format('%R%a') / 365.25;
    echo "<br>";
    echo "<br>";
    echo $interval->format('%y Year %m Month %d Day');
?>
<br>
<br>
</body>
</html>