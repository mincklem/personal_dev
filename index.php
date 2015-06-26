<!DOCTYPE html>
<html>
<head>
	<title>Modern Library Shelf-Builder</title>
	  <link rel="stylesheet" type="text/css" href="css/main.css">
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js"></script>
   <script type="text/javascript" src="js/main.js"></script>
  <script type="text/javascript" src="js/html2canvas.js"></script>
<script src="js/jquery-cookie-master/src/jquery.cookie.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- JQUERY MOBILE -->
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css" />
<script src="//code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="//code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
   <script src="js/touch-punch.js"></script>

<!-- SHARE THIS -->

<script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="https://ws.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">
        stLight.options({
                publisher:'12345',
                onhover: false
        });</script>
<!-- SHARE THIS -->


</head>
<body>	

	<div id='getLayer'></div>
	<div id='overlay'></div>
		<div id='getContent'>
			<img src="img/loader.gif" id="loader2">
			<div id="shelfHeader">Hey, nice shelf you've got there.</div>
			<div class='exportBox'></div>
				<a href="" id="dLoad" class="button" download="My Modern Library Bookshelf.png" title="My Modern Library Bookshelf">Download</a>
				<div id="shareButton" class="button">Share</div>
				<div class="socialBox" id="socialBox1">
				</div>
				<div id="shelfClose" class="button">x</div>
			</div>
<div class="mainContainer">
	
		<div id="header">
			<a target="_blank" href="http://www.modernlibrary.com"><div id="siteName"></div></a>
			<div class="shelfBox">
			<div class="extraRowBox">

			</div>
			<div id="shareShelf" class="button"> Share my shelf</div>
		</div>
		</div>
		<div id="classicBox">
     			<div id="howClassic">
        	 	<figure class="front">
        	 		<span id="s1">How</span>
        	 		<br><span id="s2">CLASSIC</span>
        	 		<br>
        	 		<span id="s1">are you?</span>
        	 		</figure>
         		<figure class="back">
         			<span id='classicScore'></span>
         		</figure>
      			</div>
    		</div>
<div id="classicDetails">
		<div id="c1">Your Classic<br>Score Is</div>
		<img id="arrowUp" src="img/arrow-up.png">
		<div id="classicLevel"></div>
		<div id="shareButton2" class="button">Share</div>
		<div class="socialBox" id="socialBox2">
				<div id="social2" class="social">
				<span type="sbtn" class="st_facebook_custom" st_url="http://www.google.com" st_image=""><img src="img/facebook.png" > </span>
				<span type="sbtn" class="st_twitter_custom" st_url='' st_via=""><img src="img/twitter.png" > </span>
				<span type="sbtn" class="st_pinterest_custom" st_url=''><img src="img/pinterest.png" > </span>
				<span type="sbtn" class="st_tumblr_custom" st_url=''><img src="img/tumblr.png"> </span>
				</div>
			</div>
	</div>
		<div id="coverContainer">
			<div id="covers"></div>
			</div>
    <div id='details'>
    	<div id="closeDetails" class="button">x</div>
    		<div id="clickedCover"></div>
    		<img src="img/loader.gif" id="loader">
				<div id="gr_header"></div>
				<div id='goodreads-widget'>
					<iframe id='the_iframe' src=''frameborder='0'>
				</iframe>
				</div>
			
	</div>
	</div>
	<div id="helpBox">
		<ul id="helpList"> <h3>Welcome to the Modern Library's Top 100 Novels Shelf Builder!</h3>
		<li><span id="li1">Peruse the Top 100 Novels of the 20th Century, as chosen by the Modern Library board.</span></li>
		<li><span id="li2">Drag classic books to your "have-read" shelf, download your shelf, or share it online.</span></li>
		<li id="m1"><span id="li3">Click a cover for reviews.</span><br></li>
		<li><span id="li4">Find out, "How CLASSIC are you?"</span></li>
		<li><span id="li4"> <a target= _blank href="http://www.modernlibrary.com/top-100/">Learn how the Top 100 Novels were chosen.</a></span></li><br>
		</ul></div>
		<div id="helpB">?</div>
	<div id="footer"></div>
</body>
</div>
</html>
