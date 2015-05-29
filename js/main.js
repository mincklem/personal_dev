$(document).ready(function(){
  init();
});
var covers = [];
var titles = ["","ULYSSES by James Joyce", "THE GREAT GATSBY by F. Scott Fitzgerald", "A PORTRAIT OF THE ARTIST AS A YOUNG MAN by James Joyce", "LOLITA by Vladimir Nabokov", "BRAVE NEW WORLD by Aldous Huxley", "THE SOUND AND THE FURY by William Faulkner", "CATCH-22 by Joseph Heller", "DARKNESS AT NOON by Arthur Koestler", "SONS AND LOVERS by D.H. Lawrence", "THE GRAPES OF WRATH by John Steinbeck", "UNDER THE VOLCANO by Malcolm Lowry", "THE WAY OF ALL FLESH by Samuel Butler", "1984 by George Orwell", "I, CLAUDIUS by Robert Graves", "TO THE LIGHTHOUSE by Virginia Woolf", "AN AMERICAN TRAGEDY by Theodore Dreiser", "THE HEART IS A LONELY HUNTER by Carson McCullers", "SLAUGHTER- HOUSE FIVE by Kurt Vonnegut", "INVISIBLE MAN by Ralph Ellison", "NATIVE SON by Richard Wright", "HENDERSON THE RAIN KING by Saul Bellow", "APPOINTMENT IN SAMARRA by John O'Hara", "U.S.A.(trilogy) by John Dos Passos", "WINESBURG, OHIO by Sherwood Anderson", "A PASSAGE TO INDIA by E.M. Forster", "THE WINGS OF THE DOVE by Henry James", "THE AMBASSADORS by Henry James", "TENDER IS THE NIGHT by F. Scott Fitzgerald", "THE STUDS LONIGAN TRILOGY by James T. Farrell", "THE GOOD SOLDIER by Ford Madox Ford", "ANIMAL FARM by George Orwell", "THE GOLDEN BOWL by Henry James", "SISTER CARRIE by Theodore Dreiser", "A HANDFUL OF DUST by Evelyn Waugh", "AS I LAY DYING by William Faulkner", "ALL THE KING'S MEN by Robert Penn Warren", "THE BRIDGE OF SAN LUIS REY by Thornton Wilder", "HOWARDS END by E.M. Forster", "GO TELL IT ON THE MOUNTAIN by James Baldwin", "THE HEART OF THE MATTER by Graham Greene", "LORD OF THE FLIES by William Golding", "DELIVERANCE by James Dickey", "A DANCE TO THE MUSIC OF TIME (series) by Anthony Powell", "POINT COUNTER POINT by Aldous Huxley", "THE SUN ALSO RISES by Ernest Hemingway", "THE SECRET AGENT by Joseph Conrad", "NOSTROMO by Joseph Conrad", "THE RAINBOW by D.H. Lawrence", "WOMEN IN LOVE by D.H. Lawrence", "TROPIC OF CANCER by Henry Miller", "THE NAKED AND THE DEAD by Norman Mailer", "PORTNOY'S COMPLAINT by Philip Roth", "PALE FIRE by Vladimir Nabokov", "LIGHT IN AUGUST by William Faulkner", "ON THE ROAD by Jack Kerouac", "THE MALTESE FALCON by Dashiell Hammett", "PARADE'S END by Ford Madox Ford", "THE AGE OF INNOCENCE by Edith Wharton", "ZULEIKA DOBSON by Max Beerbohm", "THE MOVIEGOER by Walker Percy", "DEATH COMES FOR THE ARCHBISHOP by Willa Cather", "FROM HERE TO ETERNITY by James Jones", "THE WAPSHOT CHRONICLES by John Cheever", "THE CATCHER IN THE RYE by J.D. Salinger", "A CLOCKWORK ORANGE by Anthony Burgess", "OF HUMAN BONDAGE by W. Somerset Maugham", "HEART OF DARKNESS by Joseph Conrad", "MAIN STREET by Sinclair Lewis", "THE HOUSE OF MIRTH by Edith Wharton", "THE ALEXANDRIA QUARTET by Lawrence Durell", "A HIGH WIND IN JAMAICA by Richard Hughes", "A HOUSE FOR MR BISWAS by V.S. Naipaul", "THE DAY OF THE LOCUST by Nathanael West", "A FAREWELL TO ARMS by Ernest Hemingway", "SCOOP by Evelyn Waugh", "THE PRIME OF MISS JEAN BRODIE by Muriel Spark", "FINNEGANS WAKE by James Joyce", "KIM by Rudyard Kipling", "A ROOM WITH A VIEW by E.M. Forster", "BRIDESHEAD REVISITED by Evelyn Waugh", "THE ADVENTURES OF AUGIE MARCH by Saul Bellow", "ANGLE OF REPOSE by Wallace Stegner", "A BEND IN THE RIVER by V.S. Naipaul", "THE DEATH OF THE HEART by Elizabeth Bowen", "LORD JIM by Joseph Conrad", "RAGTIME by E.L. Doctorow", "THE OLD WIVES' TALE by Arnold Bennett", "THE CALL OF THE WILD by Jack London", "LOVING by Henry Green", "MIDNIGHT'S CHILDREN by Salman Rushdie", "TOBACCO ROAD by Erskine Caldwell", "IRONWEED by William Kennedy", "THE MAGUS by John Fowles", "WIDE SARGASSO SEA by Jean Rhys", "UNDER THE NET by Iris Murdoch", "SOPHIE'S CHOICE by William Styron", "THE SHELTERING SKY by Paul Bowles", "THE POSTMAN ALWAYS RINGS TWICE by James M. Cain", "THE GINGER MAN by J.P. Donleavy", "THE MAGNIFICENT AMBERSONS"];
var numImages = 101;
var count = 1;
var ISBNs = ["", "1840226358", "0743273567", "0486280500", "9582701048", "9685146020", "0679732241", "9781451626650", "1416540261", "141143319X", "0143039431", "0061120154", "0486434664", "0151351015", "0413370704", "0156907399", "0451531558", "0618526412", "0440180295", "0679601392","0060929804","0670366552","0375719202","1420925423","1613823347","0156711427","0141441283","0141441321","0543722082","0141186739","0141441844","9780451526342","0141441275","0486434680","0316216267","0375504524","0156004801","0060088877","8307023815","0345806549","0142437999","0812416112","0848804767","0226677141","1564781313", "0743297334", "1484879449","0486424529","1853262501","0486424588","0802131786","0312265050","0553207792","0679410775","0679732268","0140283293","0848824369","0394741080","0486298035","0140067132","0375701966","0679728899","0385333641","0060528877","0316769487","0393312836","0394701372","0486264645","0451530985","0486420493","0571086098","0940322153","0375707166", "1604443561", "0099910101", "0316926175","0140278710","0571108075","0486445089","0486284670","0316216453","0143039571","0141185473","0679722025","0385720173","1853260371","0812978188","0141442115","1493663437","0701200804","0812976533","0434106143","0140070206","0440351626","0393310485","0140014454","0679736379","0679729798","0679723250","0802144667","0554321831"];
var spines = [""];
var review;
var cvalue;
var cookie = document.cookie;
var myShelf = [];
var bookChoice; 
var scaledElement;
var myImageBase64;
var classicLevels = ["No books? Not even a short one? For shame, for shame...Read a few more, you literary ingenue, and bump up your classic score. ", 
"Token effort? Get ye to a library. Stat.", 
"You're about as classic as a pathetic fallacy. (What a mixed metaphor).", 
"Mark Twain said 'classic' is a book people praise but don't read - here's betting you do a lot of praising.", 
"'When I have a house of my own, I shall be miserable if I have not an excellent library' - either you said that, or Jane Austen did, I can never remember.", 
"We can all see that leatherbound edition of The Canterbury Tales under your arm, nice try you Chaucerian bibliofreak you.", 
"'Some books should be tasted, some devoured, but only a few should be chewed and digested thoroughly.' Benefit of the doubt here, guessing you're just a REALLY thorough chewer.", 
"You're as classic as Mark Twain's basket of cats - which is to say, perty darned classic..."];

function init(){
  setCoversSpines();
  headerScroll();
  classicClick();
  getShelf();
  share();
  help();
  bookClick();
    // if ($(window).width() > 400) {
    //   bookClick();
    // }
    // else {
    //   $("#thumbBox").unbind("click");
    //   mobileBookClick()
    // };
      checkCookie();
    dragDrop();
    swap();
    shelfClick();
};

// function mobileBookClick()
// $(".thumbBox").click(function(){
//   $(ui.draggable).css("margin", "0");
//     $(ui.draggable).animate({
//               width: 0,
//             }, 200);
//    setTimeout(function(){
//       $(ui.draggable).hide();
//             }, 100),
//     bookChoice = $(ui.draggable);
//       myShelf.push($(ui.draggable).attr("id"));
//   if (myShelf.length > 20) {
//         newRow();
//         };
//     howClassic();
//     setShelf();
// })
//   bookChoice = this;
//   setShelf();
// }

function classicLevel(){
  var score = myShelf.length;
  $("#classicLevel").text('');
  if (score == 0) {
    $("#classicLevel").append(classicLevels[0])
  }
  else if (score == 1) {
    $("#classicLevel").append(classicLevels[1])
  }
  else if (score >=2 && score <=4) {
    $("#classicLevel").append(classicLevels[2])
  }
  else if (score >=5 && score <=7) {
    $("#classicLevel").append(classicLevels[3])
  }
  else if (score >=8 && score <=10) {
    $("#classicLevel").append(classicLevels[4])
  }
  else if (score >=11 && score <=13) {
    $("#classicLevel").append(classicLevels[5])
  }
  else if (score >=14 && score <=16) {
    $("#classicLevel").append(classicLevels[6])
  }
  else if (score >=17 && score <=19) {
    $("#classicLevel").append(classicLevels[7])
  }
  else if (score >=20 && score <=22) {
    $("#classicLevel").append(classicLevels[8])
  }
  // else if (score >=2 && score <=4) {
  //   $("#classicLevel").append(classicLevels[9])
  // }
  // else if (score >=2 && score <=4) {
  //   $("#classicLevel").append(classicLevels[10])
  // }
  // else if (score >=2 && score <=4) {
  //   $("#classicLevel").append(classicLevels[11])
  // }
  // else if (score >=2 && score <=4) {
  //   $("#classicLevel").append(classicLevels[12])
  // }
  // else if (score >=2 && score <=4) {
  //   $("#classicLevel").append(classicLevels[13])
  // }
  // else if (score >=2 && score <=4) {
  //   $("#classicLevel").append(classicLevels[14])
  // }
  // else if (score >=2 && score <=4) {
  //   $("#classicLevel").append(classicLevels[15])
  // }
}

function overLay(){
    $("#overlay, #closeDetails").click(function(){
        $("#overlay, #details").css({"visibility" : "hidden", "opacity": "0"});
        setTimeout(function(){
                $("#classicBox").css("z-index", "499");
                }, 800);
        $("#helpBox, #classicDetails").removeClass("visible");
        $("#howClassic").removeClass("flipped");
        $("#helpB").css("display", "initial");
        $("#gr_header").html("");
        $("#the_iframe").attr("src", "");
        return
      })
};

function shelfClick(){
  $(".shelf").click(function(){
      if ($(this).hasClass("minify")) {
        return
      } else {
      $(this).toggleClass("zoom");
      }
      });
}

function appendSocial(x, shelfPNG){
  var shelfPNG = shelfPNG;
  // var shelfPNG = "http://i.imgur.com/Twt4Xbf.gif?1";
  var fb_share_url = "https://www.facebook.com/dialog/feed?_path=feed&app_id=487604788070849&redirect_uri=https://powerful-caverns-4175.herokuapp.com&display=popup&link=https://powerful-caverns-4175.herokuapp.com&picture="+shelfPNG+"&name=My+Modern+Library+Shelf&description=I+just+created+my+shelf%21&from_login=1";
  var pin_share_url = "//pinterest.com/pin/create/button/?url=https://powerful-caverns-4175.herokuapp.com/&amp;media="+shelfPNG+"&amp;description=My+Shelf"; 
  var socialboxnum = x;
    if (socialboxnum==1) {
    $("#socialBox1").append("<div class='social st_sharethis' id='social1'><a href="+fb_share_url+"><span type='sbtn' class='st_facebook_custom'><img src='img/facebook.png'></span></a><span type='sbtn' class='st_twitter_custom'><img src='img/twitter.png'></span><a href="+pin_share_url+"<span type='sbtn' class='st_pinterest_custom'><img src='img/pinterest.png'></span></a><span type='sbtn' class='st_tumblr_custom' st_url='https://powerful-caverns-4175.herokuapp.com/'><img src='img/tumblr.png'></span></div>");
  }
    else if (socialboxnum==2) {
    }
}


function getShelf(){
      $("#shelfClose, #getLayer").click(function(){
          $("#getLayer, #getContent").toggleClass("visible");
          $("body").css("overflow", "visible");
          $('#exportShelf').remove()
      });  
    $("#shareShelf").click(function(){
        $("#loader2").show();
        $("#getLayer, #getContent").toggleClass("visible");
        $("body").css("overflow", "hidden");
        //Create hidden shelf
         $("html").append("<div class='shelf2'></div>");
      for(a=0; a<=myShelf.length-1; a++){ 
          var id = myShelf[a];
          var ind = ISBNs.indexOf(id);
          var spinePick = spines[ind];
        //add spines to hidden shelf 
          $(".shelf2").append("<div class='spine'><img src='"+spinePick+"'></img></div>");
        //capture hidden shelf
      };  
      html2canvas($(".shelf2"), {
        onrendered: function(canvas) {
          $(".shelf2").remove();
          myImageBase64 = canvas.toDataURL("img/png");
          $("#dLoad").attr("href", myImageBase64);
           $('.exportBox').append("<img id='exportShelf' src='"+myImageBase64+"'/>");
            $("#loader2").hide();
        var request = $.ajax({
              type: "POST",
              proccessData: false,
              url: "https://" + location.host + "/php/image.php",
              data: {
                image: myImageBase64
              }
            });
            request.success(function(response, data, status, headers, config){
              shelfPNG = "https://" + location.host + "/outputs/" + response;
              console.log(shelfPNG);
              appendSocial(1, shelfPNG);
              shareThis(shelfPNG)
            });
        }, 
      });

    });
}

//Book Click from Saved Covers//
function bookClick(){
  $(".thumbBox").click(function(){
      $("#clickedCover").css("background-Image", "url('img/cover_" + $(this).attr("count") + ".jpg')");
         goodReads(this);
      $("#details").css({"visibility" : "visible", "opacity": "1"});
      $("#loader").show();
      $("#overlay").css({"visibility" : "visible", "opacity": ".5"});
      overLay()
      });
  $("#coverContainer").click(function(){
    $(".shelf").removeClass("zoom")
  })
}

function setDisplayedShelf() {
  $(".shelf").each(function(){
      var numBooks = this.children.length;
      if (numBooks <=24) 
        { 
        $(this).addClass("displayedShelf")
      } else if ($("#row4").children.length == 25) 
        {
        $("#row4").addClass("displayedShelf")
      } else if (myShelf.length == 0) 
        {
          $("#row1").addClass("displayedShelf")
      }
  });
    shelfClick();
}

  function swap(){
      $(".shelf").click(function(){
      $this = $(this);
      $this.removeClass("minify minify*").children().removeClass("miniSpine");
      $this.addClass("displayedShelf");
            dragDrop();
      $this.siblings().addClass("minify").children().addClass("miniSpine");
      $this.siblings().removeClass("displayedShelf zoom");
    });
    shelfClick();
  }

//Stored Cover Image Files//

function setCoversSpines(){
  for(a=1; a<numImages; a++){             
    $("#covers").append("<div id='"+ISBNs[count]+"' count='"+count+"' class='thumbBox'><div class='title'>"+titles[a]+"</div><div class='triangle'><span id='rank'> "+count+"</span></div><img class='cover' src='img/cover_" + count + ".jpg' />");
    spines.push("img/spine_" + count + ".png");
    covers.push("img/cover_" + count + ".jpg");
    count++;
    if(count == ISBNs.length){
      count = 1;
      }
     }
  }

  function classicClick(){ 
    $("#howClassic").click(function(){
        $(this).toggleClass("flipped");
        $("#helpBox").removeClass("visible");
        howClassic();
        classicLevel();
    if ($("#overlay").css('visibility') == 'hidden') 
         { $("#classicBox").css("z-index", "5001");
        $("#classicDetails").toggleClass("visible");
        $("#overlay").css({"visibility" : "visible", "opacity": ".5"});
        overLay()
    }
    else {
        $("#overlay").css({"visibility" : "hidden", "opacity": "0"});
        $("#classicDetails").toggleClass("visible");
        setTimeout(function(){
      $("#classicBox").css("z-index", "499");
            }, 500);
      overLay();
    }
      })
  }

function howClassic(){
   var classic = (myShelf.length) + "%";
        $("#classicScore").html(classic);
   }

function dragDrop(){
    $('.thumbBox').draggable( {
      containment: '#mainContainer',
      zIndex: 3000,
      cursor: 'move',
      stack: "#mainContainer",
      start: function(event, ui){
          $('#header, .spine, #siteName, .shelf, #classicScore, .back, .front').removeClass("scrolled");
          $(".social").removeClass("visible")
          $('#header').children("*").removeClass("scrolled");
          $(this).unbind("click");
      },
      revert: function(){
        if ($(window).width() > 400) {
            $(this).click(bookClick);
            };
        return true}
    });
  $(".displayedShelf").droppable({
        accept: ".thumbBox, .thumbBox.ui-draggable", 
        activeClass: "ui-state-highlight",
        tolerance: "touch",
       drop: function( event, ui ){
            $(ui.draggable).css("margin", "0");
            $(ui.draggable).animate({
              width: 0,
            }, 200);
          setTimeout(function(){
               $(ui.draggable).hide();
            }, 100);
            bookChoice = $(ui.draggable);
            myShelf.push($(ui.draggable).attr("id"));
            howClassic();
            setShelves();
            ratio = myShelf.length/25
            if (ratio % 1 == 0) {
              setShelves(1)
            }
            else {
              setShelves()
            }
            $.cookie("savedShelf", myShelf, { expires : 10 });
          }
        });   
  $("#coverContainer").droppable({
        accept: ".spine",
        tolerance: "touch",
        activeClass: "ui-state-highlight",
        drop: function( event, ui ) { 
            var x = $(ui.draggable).attr("count");
            $(ui.draggable).remove();
            $("div[count='"+x+"']").css("margin", "20px").show().animate({
              width: 130,
            }, 200); 
            if ($(window).width() > 400) {
            bookClick("div[count='"+x+"']");
            };
            var itemRemove = $(ui.draggable).attr("id");
            myShelf.splice($.inArray(itemRemove, myShelf),1);
            setShelves();
            // if (myShelf.length <= 25) {
            // removeNewRow(2)
            // }
            // else if (myShelf.length <= 50){
            // removeNewRow(3)
            // }
            //  else if (myShelf.length <= 75){
            //   removeNewRow(4)
            // };
            howClassic();
            $.cookie("savedShelf", myShelf, { expires : 10 });
        }
      });
    }

function goodReads(clicked){
    var ISBN = $(clicked).attr("id");
    $.ajax({
      method:"GET",
      crossDomain: true,
      key: "LbfI8uwSm3Hd7X4Q1VoDsA",
      dataType: "jsonp",
      url:"https:www.goodreads.com/book/isbn?format=jsonp&key=LbfI8uwSm3Hd7X4Q1VoDsA&isbn="+ISBN+""
      })
    .success(function(data){
      console.log(data);
          var widget = data.reviews_widget;
          var gHeader = $(widget).find("#gr_header");
          var gReview = $(widget).find("#the_iframe").attr("src");
          $("#the_iframe")
            .attr("src", gReview)
            .load(function(){
              $("#loader").hide()
          });
          $('#gr_header').html(gHeader);
          $('#gr_header h1 a').append(" on Goodreads").attr("target", "'_blank'");
          $('#gr_reviews_widget6957527').contents().find('div.gr_reviews_showing').css({
                opacity: '0 !important',
                  });
             });
  }
function headerScroll(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 90) {
      $('#header, #classicBox, .shelf, #siteName, .spine, #shareShelf').addClass("scrolled");
        $('#header').children("*").addClass("scrolled");
        $("#arrowBox").removeClass("visible");
        $('.shelf').removeClass("zoom");
    } else {
      $('#header, .shelf, .spine, #siteName, #classicBox, #shareShelf').removeClass("scrolled");
      $('#header').children("*").removeClass("scrolled");
      $(".social").removeClass("visible")
     }
  });
}

function help(){
  $(document).ready(function(){
    $("#helpBox").addClass("visible");
    $("#overlay").css({"visibility" : "visible", "opacity": ".5"});
      overLay();
       });
        $("#helpB").click(function(){
    if ($("#overlay").css('visibility') == 'visible') {
      $("#overlay").css({"visibility" : "hidden", "opacity": "0"});
   $("#helpBox").removeClass("visible scrolled")
    }
    else {
    $("#overlay").css({"visibility" : "visible", "opacity": ".5"});
    $("#helpBox").addClass("visible").removeClass("scrolled");
      overLay();
    }
  })
}

function share(){
  $("#shareButton").click(function(){
    $("#social1").toggleClass("visible");
});
  $("#shareButton2").click(function(){
  $("#social2").toggleClass("visible");    
})
}

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }

function checkCookie() {
    var cookie = $.cookie("savedShelf");
    if (cookie != "" && cookie != undefined) {
        // var split = cookie.split('=');
        var cookieShelf = cookie.split(',');
        myShelf = cookieShelf;
        setShelves();
          } 
    else {
        if (myShelf != "" && myShelf != null) {
            $.cookie("savedShelf", myShelf, { expires : 10 });
        }
        else {setShelves(1);
        }
    }
}

//Ben's functionfor loading shelves, setting spines
function setShelves(first_load) { 
    if (first_load == 1) {
      $('.extraRowBox').append('<div class="shelf" id="row1"></div>')
    }
    else {
        $('.shelf').remove();
        var maxBooks = 100;
        var maxShelves = 4;
        var booksPerShelf = maxBooks/maxShelves;
        var numberOfShelves = Math.ceil((myShelf.length/maxBooks)*maxShelves);
        if (myShelf.length % 25 == 0) {
          numberOfShelves++
        };  
        // Loop through books and create shelves.
        var current;
        var shelves = [];
        for( shelf = 0; shelf < numberOfShelves; shelf++ ) {
          shelves[shelf] = []
          for( book = 0; book < booksPerShelf; book++ ) {
            current = book + (shelf * booksPerShelf);
            shelves[shelf][book] = myShelf[current];
          }
        };
        // Remove previously shelved books from main page
        for(a=0; a<myShelf.length; a++){ 
          var id = myShelf[a];
          var ind = ISBNs.indexOf(id);
          var spinePick = spines[ind];  
          $("#covers").find("#"+id+"").hide().css({
              "margin": "0px",  
              "width": "0px",
          });
        }
        // Loop shelves array created above and append shelves + books to the page.
        var new_shelf, new_book;  
        for( var s = 0; s < shelves.length; s++) {
          rownum = s+1;
          new_shelf = $('<div class="shelf" id="row'+rownum+'"></div>');
          $("#row"+s+"").children().addClass("miniSpine");
          $("#row"+s+"").addClass("minify");
          $("#row"+rownum+"").css("visibility", "visible");
          $('.extraRowBox').append( new_shelf ).each( function() {
            for( var b = 0; b <= shelves[s].length; b++ ) {
              if ( shelves[s][b] != undefined ) {
                var id = shelves[s][b];
                var ind = ISBNs.indexOf(id);
                var spinePick = spines[ind];  
                new_spine = $("<div class='spine' count='"+ind+"' id='"+id+"'><img src="+spinePick+"></img></div");
                $("#row"+rownum+"").append( new_spine );
                $(".spine").draggable({
                  zIndex: 13,
                  cursor: 'move',
                  stack: "#mainContainer",
                  revert: function(event, ui){
                    this.css({
                      "top": "10px !important",
                      "bottom": "12px",
                    })
                    return true;
                  }
                });
 
              }
            }
          });
        }
      }
           setDisplayedShelf();
          dragDrop();
          swap();
          shelfClick();
      }
  
function shareThis(shelfPNG){
         var shelfPNG = shelfPNG;
         stWidget.addEntry({
                 "service":"twitter",
                 "element":document.getElementById('socialBox1'),
                 "url":"https://powerful-caverns-4175.herokuapp.com/",
                 "title":"Just made my Modern Library Shelf! #books",
                 "type":"large",
                 "text":"Just made my Modern Library Shelf! #books",
                 "image": shelfPNG,
                 "summary":"this is description1"
         });

                  stWidget.addEntry({
                 "service":"sharethis",
                 "element":document.getElementById('socialBox1'),
                 "url":"https://powerful-caverns-4175.herokuapp.com/",
                 "title":"Just made my Modern Library Shelf! #books",
                 "type":"large",
                 "text":"Just made my Modern Library Shelf! #books",
                 "image": shelfPNG,
                 "summary":"this is description1"
         });
}
