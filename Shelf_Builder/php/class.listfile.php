<?php

class ListFile {
 
  var $imagedata;

  function __construct( $imagedata ) {
    $this->imagedata = $imagedata;
  }
  
  function create() {
    $filename_path = md5(time().uniqid()).".png";
    $location =  "../outputs/" . $filename_path;
    list($type, $this->imagedata) = explode(';', $this->imagedata);
    list(, $this->imagedata) = explode(',', $this->imagedata);
    $decoded = base64_decode( $this->imagedata );
    $success = file_put_contents( $location, $decoded );
    return $filename_path;
  }
  
}