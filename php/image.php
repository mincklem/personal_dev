<?php require_once("class.listfile.php");

$postdata = $_POST["image"];
$image_data = $postdata;
$image_file = new ListFile($image_data);
$image = $image_file->create();

echo $image;