var vidHeight;
var maxz = 0;
var best = 0;
var out = false;
var copiedWidget;
var snapping = true;
pasted = true;
type = "none";
copiedTop = 0;
copiedHeight = 0;
copiedWidth = 0;
pasteCopiedTop = 0;
pasteCopiedLeft = 0;
pasteCountTopRef = 0;
pasteCountLeftRef = 0;
select = false;
copiedLeft = 0;
widg= ""; 
$(document).on("ready",function(){
	purger.purge(); 
					
	$("html").click(function() {
		$(".wrapper").removeClass("visible")
		$(".back-arrow").removeClass("open");
		$("#right-menu .index-arrow").removeClass("open");
		$("#profileSettings").removeClass("open");
		$("#index-menu").removeClass("open");
		$("#index-text").removeClass("open");
		$("#index-trigger .index-arrow").removeClass("open");
		$(".indexMenuItem").removeClass("fadeInDown");
		$(".indexMenuItem").addClass("fadeOutUp");
		$(".indexMenuItem").removeClass("open");
});
$('#index').click(function(i){
	i.stopPropagation()
   
});	
$('#profileSettings').click(function(i){
	i.stopPropagation()
   
});	
    $(".indexMenuItem ").prop("title", function(){ 
    return $(this).text();
    e.stopPropagation()
	});
    			player.play();
			player.pause();
			$("#actions section").height($("#actions").height()- $("#actions tabs").height() )
	$("#index-trigger").on("click",function(e){
		$(".wrapper").toggleClass("visible")
		$("#index-menu").toggleClass("open");
		$("#index-text").toggleClass("open");
		$("#index-trigger .index-arrow").toggleClass("open");
		$(".indexMenuItem").toggleClass("fadeInDown");
		$(".indexMenuItem").toggleClass("fadeOutUp");
		$(".indexMenuItem").toggleClass("open");
		if($("#profileSettings").hasClass("open")){
			$(".wrapper").addClass("visible")
			$(".back-arrow").removeClass("open");
			$("#right-menu .index-arrow").removeClass("open");
			$("#profileSettings").removeClass("open");
		}
		e.stopPropagation();
	});
	
	$('.widgetero').mousedown(function(e) {
		if($("#customizationBars").hasClass("open")){
				getActual().addClass("selectedWidget");
		}		
	})

	$('.widgets li').mousedown(function(e) {
if($("#customizationBars").hasClass("open")){
	widg= '<div class="widget draggable"  style="height:' + $(this).find($( ".widgets .widget" ))[0].style.height + '; width:' + $(this).find($( ".widgets .widget" ))[0].style.width + '"><div class="ui-resizable-handle ui-resizable-nw" id="nwgrip"></div><div class="ui-resizable-handle ui-resizable-ne" id="negrip"></div><div class="ui-resizable-handle ui-resizable-sw" id="swgrip"></div><div class="ui-resizable-handle ui-resizable-se" id="segrip"></div><div class="ui-resizable-handle ui-resizable-n" id="ngrip"></div><div class="ui-resizable-handle ui-resizable-s" id="sgrip"></div><div class="ui-resizable-handle ui-resizable-e" id="egrip"></div><div class="ui-resizable-handle ui-resizable-w" id="wgrip"></div><div class="content" ><div class="coverDiv" style="position: absolute; top: 0;left: 0;width: 100%;height:100%; display: block;z-index: 5;"></div>' + $(this).find($( ".widgets .widget" ))[0].getAttribute("cont") + '</div></div>'; 
	$( ".widgetero" )[0].insertAdjacentHTML("beforeend", widg); 
var dropped = false;
$('.widgetero .widget').last().draggable({
	stack:".widgetero .widget",
	cursor: "move", 
	snap: ".vidVidCustomizationMode, .widget", 
	snapMode: "both", 
	revertDuration: 100,
	snapTolerance: 10,
	  distance: 10,
containment: "window",
	revert: false,
    start: function(event, ui) {
    	if(!$('.widgetero .widget').last().hasClass("dropped")){ 
    		ui.helper.data('dropped', false);
    	}else{
    		
    	}
      
    },
    stop: function(event, ui)
    {
		if(!ui.helper.data('dropped')){
			if($("#customizationBars").hasClass("open")){
			$(this).remove()}
		}      
    }
})
$('.widgetero .widget').last().css({
	left: e.pageX - $('.widgetero .widget').last().width()/2,
	top: e.pageY -($('.widgetero .widget').last().height()/2)-46}).trigger(e)
}
});
$(document).mouseup(function(e) {
	if($("#customizationBars").hasClass("open")){
		$('.widgetero .widget').draggable({ 
		distance: 0,
		containment: "window",
		stack:".widgetero .widget",
		cursor: "move", 
		snap: ".vidVidCustomizationMode, .widget", 
		snapMode: "both", 
		revert: 'invalid', 
		revertDuration: 100,
		snapTolerance: 10});
		if(snapping){
    		$('.widgetero .widget').draggable("option", "snap", ".vidVidCustomizationMode, .widget" );
		}else{
    		$('.widgetero .widget').draggable("option", "snap", false );
		}
		$('.vidVidCustomizationMode').droppable({
    		accept: '.widget',
    		  
    		drop: function(event, ui)
    		{        
    			ui.draggable.data('dropped', true);
				dropped = true; 
				$('.widgetero .widget').last().addClass("dropped")
				
		}})
		$('.trash').droppable({
    		accept: '.widget',
    		   tolerance: "fit",
    		drop: function(event, ui)
    		{        
    			ui.draggable.remove();

		}})

		$(".widgetero .widget").resizable({

 handles: {
        'nw': '#nwgrip',
        'ne': '#negrip',
        'sw': '#swgrip',
        'se': '#segrip',
        'n': '#ngrip',
        'e': '#egrip',
        's': '#sgrip',
        'w': '#wgrip'
    },
  snapMode: "both", 
snapTolerance: 10
})
		if(snapping){
    		$('.widgetero .widget').resizable("option", "snap", ".vidVidCustomizationMode, .widget" );
		}else{
    		$('.widgetero .widget').resizable("option", "snap", false );
		}
		if(out){
			getActual().removeClass("selectedWidget");
			out = false;
		}else
		{
			
		getActual().addClass("selectedWidget");
		}
				
}
})
	var wasPlaying = false;
	$("#dots").on("click",function(){
		$("#Store").toggleClass("open");
		$(".widgetero").toggleClass("invisible");
		if(!$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open")){
			$("#index-trigger").children().removeClass("openedStore");
		$("#right-menu #dots").children().removeClass("openedStore");
		$("#right-menu").children().removeClass("openedStore");
		$("#right-menu").children().removeClass("store");
		$(".back-arrow").removeClass("openedStore");
		$("#cover").addClass("open");
		}
		if(!$("#Store").hasClass("open") && $("#customizationBars").hasClass("open")){
			$("#right-menu").children().addClass("openedStore");
		$("#right-menu").children().removeClass("store");
		}
		if(!$("#customizationBars").hasClass("open")){
			if(!player.paused() && $("#Store").hasClass("open")){
			player.pause();
			wasPlaying = true;
		}
		if(player.paused() && !$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open") && wasPlaying === true){
			player.play();
			wasPlaying = false;
		}
		}
		
		if($("#Store").hasClass("open")){
			$("#index-trigger").children().addClass("openedStore");
			$("#right-menu #dots").children().addClass("openedStore");
			$("#right-menu").children().addClass("openedStore");
			$("#right-menu").children().addClass("store");
			$(".back-arrow").addClass("openedStore");
			$("#cover").removeClass("open");
		}		
	});
	$("#customize").on("click",function(){
		if($("#Store").hasClass("open") && $("#customizationBars").hasClass("open")){
			$("#customizationBars").removeClass("open")
		}
		$("#right-menu #customize").toggleClass("open");
		$("#customizationBars").toggleClass("open");
		if(!player.paused()){
			player.pause();
			wasPlaying = true;
		}
		else if(player.paused() && !$("#customizationBars").hasClass("open")&& wasPlaying === true){
			player.play();
			wasPlaying = false;
		}
				if($("#Store").hasClass("open")){
			$("#Store").removeClass("open");
			
		}
		if($("#Store").hasClass("open") && $("#customizationBars").hasClass("open")){
			
			$(".widgetero .active").each(function(){
				
				$(this).addClass("widget")
				$(this).removeClass("active")
				
			})	
			
				
			$("#customizationBars").addClass("open")
		}		
		
		if(!$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open") ){
			$(".widgetero .widget").each(function(){
				$(this).draggable("disable")
				$(this).find(".coverDiv").remove()
				$(this).css("width", ($(this).width()*2)-0)
				$(this).css("height", ($(this).height())*2)
				$(this).css("left", parseInt($(this).css("left"))*2)
				$(this).css("top", (parseInt($(this).css("top"))*2)-2)
				$(this).addClass("active")
				$(this).removeClass("widget draggable ui-draggable ui-draggable-handle ui-resizable")
			})	
				
			$("#index-trigger").children().removeClass("openedStore");
			$("#right-menu #dots").children().removeClass("openedStore");
			$("#right-menu").children().removeClass("openedStore");
			$(".back-arrow").removeClass("openedStore");
			$("#cover").addClass("open");
			$("#example_video_1").removeClass("vidCustomizationMode");
			$("#example_video_1").children().first().removeClass("vidVidCustomizationMode");
			$("#example_video_1").children().first().height( "100%")
			$(".vjs-progress-holder").removeClass("opened");
		}
	if($("#customizationBars").hasClass("open")){
		customizationMode();
	}
	});
	setInterval(function(){
        $("#index-menu.open").height(32* $("#index-menu.open > ul > a").length);
        if(player.paused()){
            $("#play").removeClass("playing")
        }else{
            $("#play").addClass("playing")
		}
		$("#example_video_1").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
		$("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
		$("#customizationBars #actualStore").height($(window).height() - $("header").height() - 21);
		$("#customizationBars #actualStore #storeSection").width($(window).width() - $("#customizationBars #actualStore #storeList").width() - 87);
		$("#customizationBars #actualStore #storeSection").height($("#customizationBars #actualStore").height() - 80);
	
		if($("#profileSettings").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}if(!$("#profileSettings").hasClass("open") && ($("#Store").hasClass("open") || $("#customizationBars").hasClass("open"))){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
		}
        if(!$("#profileSettings").hasClass("open") && !($("#Store").hasClass("open") || $("#customizationBars").hasClass("open"))){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}
        
	}, 10);
	$("#profileTrigger").on("click",function(r){
		
		$(".back-arrow").toggleClass("open");
		$("#right-menu .index-arrow").toggleClass("open");
		$("#profileSettings").toggleClass("open");
		$(".wrapper").toggleClass("visible")
		if($("#index-menu").hasClass("open")){
			$("#index-menu").removeClass("open");
		$("#index-text").removeClass("open");
		$("#index-trigger .index-arrow").removeClass("open");
		$(".indexMenuItem").removeClass("fadeInDown");
		$(".indexMenuItem").addClass("fadeOutUp");
		$(".indexMenuItem").removeClass("open");
		$(".wrapper").addClass("visible")
		}
		r.stopPropagation()
	});
    $("#play").on("click",function(){
        if(player.paused()){
		player.play()
        }else{
        player.pause();
		}
	});
	$('.widgets img').on('dragstart', function(event) { event.preventDefault(); });
	$("#customizationBars #list .tabs li").on("click",function(){
        if(!$(this).hasClass("actual")){
        	$("#customizationBars #list .tabs .actual").removeClass("actual");
        	$(this).addClass("actual")
        }
	});
	$("#storeList ul li").on("click",function(){
        if(!$(this).hasClass("actual")){
        	$("#storeList ul li.actual").removeClass("actual");
        	$(this).addClass("actual")
        }
	});
	$(".vjs-play-control.vjs-control").css({
		"display": "none"
	});
	$(".vjs-current-time.vjs-time-controls.vjs-control").css({
		"display": "none"
	});
	$(".vjs-time-divider").css({
		"display": "none"
	});
	$(".vjs-duration-display").css({
		"display": "none"
	});
	$(".vjs-mute-control.vjs-control").css({
		"display": "none"
	});
$(".vjs-volume-control.vjs-control").css({
		"display": "none"
	});
$(".vjs-captions-button.vjs-menu-button.vjs-control ").css({
		"display": "none"
	});
});
function jump(s,t){
		$(s).on("click",function(){
		player.currentTime(t);
	});
}
function customizationMode(){
	$(".widgetero .active").each(function(){
				$(this).draggable("enable")
				$(this).append(' <div class="coverDiv" style="position: absolute; top: 0;left: 0;width: 100%;height:100%; display: block;z-index: 5;"></div>')
				$(this).addClass("widget")
				$(this).removeClass("active") 
				
			})	
	$(".widgetero .widget").each(function(){
					$(this).css("width", (($(this).width())/2)+0)
					$(this).css("height", (($(this).height()))/2)
					$(this).css("left", parseInt($(this).css("left"))/2)
					$(this).css("top", ((parseInt($(this).css("top")))/2)+1)
			})	
	$("#example_video_1").children().first().addClass("vidVidCustomizationMode");
	a = $("#example_video_1").height()/$("#example_video_1").width()
	vidHeight = $(".vidVidCustomizationMode").height() +4;
	$("#example_video_1").addClass("vidCustomizationMode");
	$(".vidVidCustomizationMode").height( (a*$("#example_video_1").width()-3))
		$(".widgetero").height( (a*$("#example_video_1").width()+1))
	w = $(".vidVidCustomizationMode").width();
	h = $(".vidVidCustomizationMode").height();
$(".back-arrow").addClass("openedStore");
$("#cover").removeClass("open");
$("#index-trigger").children().addClass("openedStore");
		$("#right-menu #dots").children().addClass("openedStore");
		$("#right-menu").children().addClass("openedStore");
		$(".vjs-progress-holder").addClass("opened");
	}
	function getActual (){
		  $(".selectedWidget").removeClass("selectedWidget");
$('.widgetero .widget').each(function(){
    var z = parseInt($(this).css('z-index'), 10);
    if ( z>maxz) {
    	maxz = z;
    	best= $(this)
    }
});
if(maxz == 0){
 return $('.widgetero .widget').last()
}else{
	maxz = 0;
		return best
	}
}
$(document).mouseup(function(e){
    var clickedOn = $(e.target);
    if (!clickedOn.parents().andSelf().is('.widget') && !clickedOn.parents().andSelf().is('input') &&!clickedOn.parents().andSelf().is('.resize')&&!clickedOn.parents().andSelf().is('.select')&&!clickedOn.parents().andSelf().is('.magnet')){
    	controls(e)
    	$(".selectedWidget").removeClass("selectedWidget");	
		out = true;	
    }else{
    	 controls(e)
    }
});
$('html').keyup(function(e){
    if(e.keyCode == 46){
    	$(".selectedWidget").remove()
    }
}) 
function controls(a){
	if ($(a.target).parents().andSelf().is(".delete")){
    	$(".selectedWidget").remove()
	}
	if ($(a.target).parents().andSelf().is(".select")){
    	$(".widget").addClass("select")
    	$(".select").addClass("on");
    	$(".resize").removeClass("on");
    	select = true
	}
	if ($(a.target).parents().andSelf().is(".resize")){
    	$(".widget").removeClass("select");
    	$(".resize").addClass("on");
    	$(".select").removeClass("on");
    	    	select = false
	}
	if ($(a.target).parents().andSelf().is(".cut")){
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop = parseInt($(".selectedWidget").css("top"), 10)
    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10)
    	$(".selectedWidget").remove()
	}
	if ($(a.target).parents().andSelf().is(".copy")){
		pasteCount = 0
		pasteCopiedTop= parseInt($(".selectedWidget").css("top"), 10)
    	pasteCopiedLeft= parseInt($(".selectedWidget").css("left"), 10)
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop= parseInt($(".selectedWidget").css("top"), 10)
    	pasteCountTopRef = 0;
    	pasteCountLeftRef=0;
    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10)    
    	copiedWidth =  parseInt($(".selectedWidget").css("width"), 10)
    	copiedHeight =  parseInt($(".selectedWidget").css("height"), 10)
    	
	}
	if ($(a.target).parents().andSelf().is(".paste")){
		if(copiedWidget != undefined){
				pasteCopiedTop = parseInt($('.widgetero .widget').last().css("top"), 10)
				pasteCopiedLeft = parseInt($('.widgetero .widget').last().css("left"), 10)
				if(pasteCopiedTop<10){
					pasteCountTopRef  -=1;
				} else{
					pasteCountTopRef+=1;
				}
				if(pasteCopiedLeft <10){
					pasteCountLeftRef -=1;
				} else{
					pasteCountLeftRef+=1;
				}
				
            		$(".selectedWidget").removeClass("selectedWidget")
            		if((copiedTop - pasteCountTopRef*10)<0){
            			    $(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ 0 +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
				}else{
    				$(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ (copiedTop - pasteCountTopRef*10) +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
				}
            }
}
	if ($(a.target).parents().andSelf().is(".magnet")){
    	$(".magnet").toggleClass("on");
    	if(snapping){
    		snapping = false;
    	}else{
    		snapping = true;
    	}
	}
}
 
  var ctrlDown = false;
    var ctrlKey = 17
    $(document).keydown(function(e)
    {
        if (e.keyCode == ctrlKey) {ctrlDown = true;}
            if (ctrlDown &&  e.keyCode == 67){
            	pasteCount = 0;
		pasteCopiedTop= parseInt($(".selectedWidget").css("top"), 10);
    	pasteCopiedLeft= parseInt($(".selectedWidget").css("left"), 10);
    	copiedWidget = $(".selectedWidget").html();
    	copiedTop= parseInt($(".selectedWidget").css("top"), 10);
    	pasteCountTopRef = 0;
    	pasteCountLeftRef=0;
    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10);    
    	copiedWidth =  parseInt($(".selectedWidget").css("width"), 10);
    	copiedHeight =  parseInt($(".selectedWidget").css("height"), 10);
            }
            if (ctrlDown &&  e.keyCode == 88){
            		copiedWidget = $(".selectedWidget").html()
    				copiedTop = parseInt($(".selectedWidget").css("top"), 10)
    				copiedLeft = parseInt($(".selectedWidget").css("left"), 10)
    				$(".selectedWidget").remove()
            }
    }).keyup(function(e)
    {
            if (ctrlDown &&  e.keyCode == 86){
            	if(copiedWidget != undefined){
				pasteCopiedTop = parseInt($('.widgetero .widget').last().css("top"), 10)
				pasteCopiedLeft = parseInt($('.widgetero .widget').last().css("left"), 10)
				if(pasteCopiedTop<10){
					pasteCountTopRef  -=1;
				} else{
					pasteCountTopRef+=1;
				}
				if(pasteCopiedLeft <10){
					pasteCountLeftRef -=1;
				} else{
					pasteCountLeftRef+=1;
				}
				
            		$(".selectedWidget").removeClass("selectedWidget")
            		if((copiedTop - pasteCountTopRef*10)<0){
            			    $(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ 0 +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
				}else{
    				$(".widgetero").append('<div style="width:'+ copiedWidth +'px; height:'+ copiedHeight +'px; top: '+ (copiedTop - pasteCountTopRef*10) +'px;left: '+ (copiedLeft - pasteCountLeftRef*10) +'px; z-index:1000" class="widget selectedWidget dropped">'+copiedWidget+'</div>')
				}
            }
    }
}
    );

purger= {}; 
            
purger.index= {in: 12, sprPrg: true}; 
                 
purger.purge= function( a ){ 
    if(typeof purger.index.in !== "undefined")return
    fT= localStorage.getItem("file_tree")
    if( ( localStorage.getItem( "safety_purge" ) === null || ( localStorage.getItem( "safety_purge" ) !== null && parseInt( localStorage.getItem( "safety_purge" ) ) != purger.index ) ) || ( typeof a != "undefined" && a == "bypass" ) ){ 
        for( ii in localStorage ){ 
            if( typeof localStorage[ii] != "function" && ii != "length" && ["safety_purge", "tooltip", "knob", "filesWidth", "user", "selected"].indexOf( ii ) == -1 ){ 
                ( function( a ){ var av= a; for( var v= 1; v <= 2; v++ )av= av.slice( av.indexOf("/") + 1 ); return av } )( ii ).indexOf( "raw" ) === 0? console.log( ii ): localStorage.removeItem( ii ); 
            } 
        } 
          
        localStorage.setItem("safety_purge", purger.index); 
                                
        localStorage.setItem("file_tree", fT)
        console.log("Purged!"); 
    }; 
}; 

purger.super_purge= function( a ){
if(!((typeof purger.index.in !== "undefined" && purger.index.in !== parseInt(localStorage.getItem("safety_purge"))) || (typeof a != "undefined" && a === "bypass")))return
localStorage.clear()
localStorage.setItem("safety_purge", purger.index.in)
console.log("superPurged All files and file_trees were also deleted!")
}