/*





//Regex To find all '* from "..."'; like:  import { THREE } from "./js/THREE.js"; 


rg= 'from "([^"]*)"'; 
                      
a= editor.getValue(); 
                    
mT= [...a.matchAll(rg)]; 
console.log( mT ); 










*/ 


var contextMenu= {}


contextMenu.children= function( t, k ){
    $( "div#contextmenu > ul" ).append( '<li id= "' + k + '"><button ' + (((t === "Eliminar" || t === "Renombrar") && typeof $f[0] !== "undefined" && ($f[0] === "/user/raw/p/8d299s2gvkL9/js" || $f[0] === "/user/raw/p/8d299s2gvkL9/css"))? 'class= "disabled" ': '') + '>' + t + '</button></li>' ); 
}
 

contextMenu.display= function( _eL ){
if( pId !== "8d299s2gvkL9" )return

$(".wrapper").addClass("visible")

$( "div#contextmenu" ).css( { 
    display: "block", 
    background: 'rgba( 255, 255, 255, 155 )', 
    position: "absolute", 
    width: "127px", 
    height: "211px", 
    left: _eL.pageX + "px", 
    top: ( _eL.pageY + 211 > $( window ).height()? _eL.pageY - 211: _eL.pageY ) + "px", 
    zIndex: "3" 
} ); 
}
 
contextMenu.unDisplay= function(){
$(".wrapper").removeClass("visible")
                                    
$( "div#contextmenu > ul" ).html( "" )
                             
$( "div#contextmenu" ).css( { 
    display: "none", 
    background: '', 
    position: "", 
    width: "", 
    height: "", 
    left: "", 
    top: "", 
    zIndex: "3" 
} ); 
}

contextMenu.es_visible= function(){return $( "div#contextmenu" ).css( "display" ) === "block"}

renamer= function(it, et){
    iT= localStorage.getItem(it)
    localStorage.removeItem(it)
    localStorage.setItem(et, it)
}
 
var s= function(){
    $( "body" ).append( "<badguy></badguy>" )
    
    $( "badguy" ).html( $( "#files ul.file_tree" ).html() ).find( "*" ).removeAttr( "title" ).removeAttr( "style" ).removeAttr( "prevName" ).removeAttr( "contenteditable" ).removeClass( "inScope" ).removeClass( "editing" )

    $( "badguy" ).children().each( function(){$( this ).is( ".folder_cont" )? $( $( this ).find( ".folder" )[0] ).addClass( "inScope" ): $( this ).addClass( "inScope" )} )

    localStorage.setItem( "file_tree", JSON.stringify( $( "badguy" ).html() ) )

    $( "badguy" ).remove()
}

var v= function(skipRenameNoMore){
    $( "#preview ul.file_tree" ).html( $( "#files ul.file_tree" ).html() ).find( "*" ).removeAttr( "title" ).removeAttr( "style" ).removeAttr( "prevName" ).removeAttr( "contenteditable" ).removeClass( "inScope" ).removeClass( "editing" )

    $("#preview .file").click(function(i){ 

    if(typeof $f !== "undefined"){
    if($f[1].is(".folder")){
    renameNoMoreFolder()    
    }else if($f[1].is(".file")){
    renameNoMoreFile()
    }
    }

    uRL= ""; 
                     
    t= $(this); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    } 
      
    //uRL= uRL.slice(0, uRL.length - 1); 
                                       
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 
    pageI++;

                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
    /*window.location.hash= "infor"; */
                              
    updateRoot(separateUrl(uRL)); 

     aar= getToBusiness(decodeURIComponent(window.location.pathname)); 
                 
        spr= ""; 
                 
        if(aar == ""){ 
             el= document.getElementsByClassName("file_tree")[0]; 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                $(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
            } 
            LEB= $("#files .file_tree"); 

                                    
    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
                $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB).trigger("click", true); 

        }else{ 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } 
LEB= $("#files .file_tree"); 

                                    
for(eForensics in sprtdUrl){ 
    for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
        if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
            $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
            $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }
    } 
} 

    $(LEB).trigger("click", true); ; 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } LEB= $("#files .file_tree"); 

                                    
for(eForensics in sprtdUrl){ 
    for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
        if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
            $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
            $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }
    } 
} 

    $(LEB).trigger("click", true); ; 

        }

}); 

for(let folder of document.querySelectorAll("#preview .folder")) { 
  folder.addEventListener("contextmenu", function(e){ 
if(typeof $f !== "undefined"){
if($f[1].is(".folder")){
renameNoMoreFolder()    
}else if($f[1].is(".file")){
renameNoMoreFile()
}
}
        e.preventDefault(); 
    
        LEB= $("#files .file_tree"); 
    
        sprtdUrl[sprtdUrl.length]= $(this).text(); 
        for(eForensics in sprtdUrl){ 
            for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
                if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                    $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
                } 
            } 
        } 
          
        rightClick(LEB.children[0]); 
    }) 


} 

$("#preview .folder").click(function(i, triggered){ 
if(!triggered && typeof $f !== "undefined"){
if($f[1].is(".folder")){
renameNoMoreFolder()    
}else if($f[1].is(".file")){
renameNoMoreFile()
}
}
    if(triggered){ 
        $("#preview #file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
        $("#preview .file").css({"top": "initial"}); 
        $("#preview .folder_cont").css({"top": "initial"}); 
        index= Array.from(i.target.parentElement.parentElement.children).indexOf(i.target.parentElement); 
        $("#preview .inScope").removeClass("inScope"); 
        $(this).siblings().addClass("inScope"); 
             
    

    

        aar= getToBusiness(decodeURIComponent(window.location.pathname)); 

        spr= ""; 
                 
        if(aar == ""){ 

            el= document.getElementsByClassName("file_tree")[1]; 
            $("#preview .inScope").removeClass("inScope"); 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                el.children[Colombia].getAttribute("class").indexOf("folder_cont") == -1? el.children[Colombia].classList.add("inScope"): el.children[Colombia].children[0].classList.add("inScope"); 
            } 
            $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        }else{ 
            $("#preview .inScope").removeClass("inScope"); 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[1]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[1] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[1])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[1]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[1] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[1])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        } 

    }else{ 
        LEB= $("#files .file_tree"); 

        sprtdUrl[sprtdUrl.length]= $(this).text(); 
        for(eForensics in sprtdUrl){ 
            for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
                if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                    $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
                } 
            } 
        } 
          
        LEB.children[0].click(); 
    } 

}); 
}


el= document.getElementsByClassName("file_tree")[0]; 
var pageI= 0; 
var editor; 
var FileToRequest= ""; 
var ok= true; 
var contrl= false
var files= {}

function openModal(a) {
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);

    var user = '<a href="user.html">Walter White</a><br><span class="time">24 de Octubre a las 0:30 am</span>'; 
    $('.theater .comments .info .username').html(user); 

    var time = a.closest('.story').find(".time").html();
    $('.theater .comments .info .time').html(time);

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    if (a.closest('.story').find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }

    var pic = "../resources/images/white.jpg"; 
    $('.theater .comments .info #pic').attr('src', pic); 

    var ref = a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }
      $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      
        $("#theater").height($(window).height() - 40);

    $("#picContainer").width($("#bigPic").width());
    $("#theater .comments").height($("#theater").height() - 40);
    $("#theater .comments .more").height($("#theater .comments").height() - $("#theater .info").outerHeight(true) - $("#theater .comments .title").outerHeight(true) - $("#theater .comments .options").outerHeight(true));
    $("#theater").width("90%");
    responsive()
}

function closeModal() {
    if ($('.theater .comments .options .bookmark').hasClass("true")) {
        $this.find('.options .bookmark').addClass("true");
    } else {
        $this.find('.options .bookmark').removeClass("true");
    }
    if ($('.theater .comments .options .star').hasClass("true")) {
        $this.find('.options .star').addClass("true");
    } else {
        $this.find('.options .star').removeClass("true");
    }
    $(".theater").css({
        "display": "none"
    })
}

title= function(){ 
    $("li").each(function(){ 
        var height= 0; 
        if(document.createRange){ 
            var range= document.createRange(); 
            range.selectNodeContents($(this)[0].childNodes[0]); 
            if(range.getBoundingClientRect){ 
                var rect= range.getBoundingClientRect(); 
                if(rect){ 
                    height= rect.bottom - rect.top; 
                } 
            } 
        } 
          
        if(height > 22){ 
            $(this).attr("title", $(this)[0].innerText); 
        }else{ 
            $(this).attr("title", ""); 
        } 
    }); 
}; 

function tagReplacer( HtML ){ 
    var response= []; 
                                      
    for( e in HtML ){ 
        /*console.log( HtML.slice( parseInt( e ), ( parseInt( e ) + 6 ) ) ); */ 

        //console.log( parseInt( e ) + 4 );  

        switch( HtML.slice( parseInt( e ), ( parseInt( e ) + 6 ) ) ){ 
            case "<scrip": case "< scri": case "<  scr": 
                response[response.length]= [HtML.slice( parseInt( e ), parseInt( e ) + HtML.slice( parseInt( e ), HtML.length - 1 ).indexOf( "</script>" ) + "</script>".length + 1 ), [parseInt( e ), parseInt( e ) + HtML.slice( parseInt( e ), HtML.length - 1 ).indexOf( "</script>" ) + "</script>".length + 1], "sc"]; 
                break; 
            case "<link ": case "< link": case "<  lin": 
                response[response.length]= [HtML.slice( parseInt( e ), parseInt( e ) + HtML.slice( parseInt( e ), HtML.length - 1 ).indexOf( ">" ) + ">".length + 1 ), [parseInt( e ), parseInt( e ) + HtML.slice( parseInt( e ), HtML.length - 1 ).indexOf( ">" ) + ">".length + 1], "st"]; 
                break; 
        }; 
    }; 

    return response; 
}; 
   
root_url= function( url ){ 
    switch( url[0] ){ 
        case "/": 
            return url; 
            break; 
        case ".": 
            switch( url[1] ){ 
                case "/": 
                    return FileToRequest.slice( 0, FileToRequest.lastIndexOf( "/" ) ) + url.slice( 1 ); 
                    break; 
                case ".": 
                    f_t_r= FileToRequest.slice( 0, FileToRequest.lastIndexOf("/") ); 
                    uhl= url; 

                    while( uhl.indexOf("../") == 0 ){ 
                        uhl= uhl.slice( 3 ); 
                        f_t_r= f_t_r.slice( 0, f_t_r.lastIndexOf("/") ); 
                    } 
                      
                    /*console.log(  ); */ 

                    return ( f_t_r + "/" + uhl ); 
                    break; 
            } 
            break; 
        default: 
            return FileToRequest.slice( 0, FileToRequest.lastIndexOf( "/" ) + 1 ) + url; 
            break; 
    } 
}; 
   
function get( tG, f ){ 
    var a= f.slice( f.indexOf( tG ) + tG.length, f.length - 1 ); 
    return (function(){return ( a.slice( a.indexOf('"') + 1 ).slice( 0, a.slice( a.indexOf( '"' ) + 1 ).indexOf( '"' ) ) )})(); 
}; 
   
 
checkFolder= function( i ){
    if( typeof editor.session.getFoldWidgetRange( i - 1 ).start != "undefined" && editor.session.getTextRange( {start: {row: editor.session.getFoldWidgetRange( i - 1 ).start.row - 1, column: editor.session.getFoldWidgetRange( i - 1 ).start.column}, end: {row: editor.session.getFoldWidgetRange( i - 1 ).start.row, column: editor.session.getFoldWidgetRange( i - 1 ).start.column}} ).indexOf("'scriptModificado'") != -1 ){
        editor.session.$toggleFoldWidget( i - 1, {} ); 
    }
}

relative_url= function( url ){ 
    for( var a= 0; a < 5; a++ ) 
        {url= url.slice( url.indexOf( "/" ) + 1 )}; 
    return "/" + url; 
} 
  
root_and_raw_urls_in_HTMLs= function( doc ){
    var eq= ["= ", "=", " = ", "  =", "  = ", " =", "=  "]; 
    
    for( i in eq ){
        rg= 'href' + eq[i] + '"([^"]*)"'; 
                              
        mT= undefined; 
        
        mT= [...doc.matchAll( rg )]; 
        
        for( u in mT ){
            doc= ( mT[u][1].indexOf( "http" ) == -1 && mT[u][1][0] != "/" )? doc.replaceAll( mT[u][1], root_url( mT[u][1] ) ): doc;
         }
        
        
        rg= 'src' + eq[i] + '"([^"]*)"'; 
                              
        mT= undefined; 
        
        mT= [...doc.matchAll( rg )]; 
        
        for( u in mT ){
            doc= ( mT[u][1].indexOf( "http" ) == -1 && mT[u][1][0] != "/" )? doc.replaceAll( mT[u][1], root_url( mT[u][1] ) ): doc;  
        }
    }

    rg= 'from "([^"]*)"'; 
                      
    mT= [...doc.matchAll(rg)]; 

    for( u in mT ){ 
        doc= ( mT[u][1].indexOf( "http" ) == -1 && mT[u][1][0] != "/" )? doc.replaceAll( mT[u][1], root_url( mT[u][1] ) ): doc; 
    } 
    
    return doc; 
}
  
function sort( i, j ){
    A= [i.toString().toLowerCase(), j.toString().toLowerCase()]
    B= [i.toString().toLowerCase(), j.toString().toLowerCase()].sort()

    return A[0] === B[0]? "<": ">"
}

function addFile(){
    const file= prompt( "¡Cuál es el nombre del archivo?" )

    contextMenu.unDisplay()
    
    if(!file)return; 

    x= false

    $("#files .file_tree .file.inScope").each(function(){if( file.toString() === $( this ).text() )x= true})

    if( x )return; 

    u= false

    var f

    if( !!$("#files .file_tree .file.inScope").length ){
        $("#files .file_tree .file.inScope").each( i => ( function( z ){if( z )return; if( sort( file, $("#files .file_tree .file.inScope")[i].innerText ) == "<" ){
            f= [$( $("#files .file_tree .file.inScope")[i] ), "b"]
            $( $("#files .file_tree .file.inScope")[i] ).before( '<li class= "file inScope">' + file + '</li>' )
            u= true
            }

            if( parseInt( i ) == parseInt( $("#files .file_tree .file.inScope").length - 1 ) ){
            f= [$( $("#files .file_tree .file.inScope")[i] ), "a"]
            $( $("#files .file_tree .file.inScope")[i] ).after( '<li class= "file inScope">' + file + '</li>' )
            u= true
            }} )( u ) )
    }else if( oF.children().length !== 1 ){
        f= [oF.children().not( ".folder" ).not( ".file" ).last(), "a"]; 
        ( function(){return f[0]} )().after( '<li class= "file inScope">' + file + '</li>' )
    }else{
        f= [$( oF.children()[0] ), "a"]
        $( oF.children()[0] ).after( '<li class= "file inScope">' + file + '</li>' )
    }
    //( function(){return $( "#files .file_tree .inScope" ).not( ".folder" ).parent().length? $( "#files .file_tree .inScope" ).not( ".folder" ).parent(): oF} )() 

   //( function(){return $( "#files .file_tree .inScope" ).not( ".folder" ).parent().length? $( "#files .file_tree .inScope" ).not( ".folder" ).parent(): oF} )().append( '<li class= "file inScope">' + file + '</li>' ) 

    ( function( f ){FileToRequest= decodeURIComponent(window.location.pathname)
                    $file= f
                    slashCt= 0
                    strtgIx= 0
                              
                    for(eForensics in FileToRequest){
                        FileToRequest[eForensics] == "/"? slashCt++: 1
                                        
                        if(slashCt < 2){
                            strtgIx= parseInt(eForensics)
                        }
                    }
                
                    FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length)
                    
                    localStorage.setItem( decodeURIComponent( FileToRequest + "/" + $file ), JSON.stringify( {value: "", undoManager: "{\"annotations\":[],\"breakpoints\":[],\"folds\":[],\"history\":{\"undo\":[],\"redo\":[],\"rev\":0,\"mark\":0},\"mode\":\"ace/mode/javascript\",\"scrollLeft\":0,\"scrollTop\":0,\"selection\":{\"start\":{\"row\":0,\"column\":0},\"end\":{\"row\":0,\"column\":0},\"isBackwards\":false},\"value\":\"\"}"} ) )} )( file );

( function(){
            switch( f[1] ){
                case "b": 
                    return $( f[0] ).prev(); 
                    break; 
                case "a": 
                    return $( f[0] ).next(); 
                    break; 
                default: 
                    return oF
                    break; 
            }} )().on( "input", function( _x ){
                _in(_x)
} );
   ( function(){
            switch( f[1] ){
                case "b": 
                    return $( f[0] ).prev(); 
                    break; 
                case "a": 
                    return $( f[0] ).next(); 
                    break; 
                default: 
                    return oF
                    break; 
            }} )().click(function(i, tr){ 
if( $( this ).is( ".editing" ) )return
    $T= $("#files .file_tree")[0].scrollTop
    if( !$("#information #historia li").is( ".selected" ) && $("#file_expl #information_cont").hasClass("visible") && !!FileToRequest )return; 
    $("#information_cont #information li.selected").removeClass("selected"); 
    if(!ok){return}; 
    $("#preview .file_tree").removeClass("visible"); 
    $("#preview #file_preview #file")[0].innerHTML=""; 
    arr= []; 

    eleo= $(this)[0]; 
    
    for(eForensics in eleo.parentElement.children){ 
        if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
            arr[arr.length]= eleo.parentElement.children[eForensics]
        }
    } 

    topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): (!arr[0] && $(eleo.parentElement.children[$(eleo).index() - 1]).hasClass("inScope") && ((26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y)) <= 26))?topS=  26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y): arr.length * 26; 

    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 


    !tr? topS= topS: topS= 0; 

    $(this).css({"position": "absolute", "top": topS + "px"}); 

    $(this).css({"opacity": "1"}); 
    $(this).css({"height": "auto"}); 
    $(this).css({"padding": ""}); 
    $(this).css({"border-bottom": ""}); 

    
    setTimeout(function(){i.target.style.top= 0; ok= false; 
    }, 1); 
    setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); $(".Historia").on("click", function(){var oReq= new XMLHttpRequest();oReq.addEventListener("load", ee);oReq.open("GET", "https://api.github.com/repos/LirilCo/lirilco.github.io/commits?path=" + FileToRequest);oReq.setRequestHeader('Authorization', "token " + token);crawl();oReq.send();}); })(): 666; ok= true; 
    }, 101); 

    uRL= ""; 
                     
    t= $(this); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    }
       
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 
    pageI++;
                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
                                  
    updateRoot(separateUrl(uRL)); 

    FileToRequest= decodeURIComponent(window.location.pathname)
    slashCt= 0; 
    strtgIx= 0; 
    
    for(eForensics in FileToRequest){ 
        FileToRequest[eForensics] == "/"? slashCt++: 1; 
    
        if(slashCt < 2){ 
            strtgIx= parseInt(eForensics); 
        }   
    } 
    FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length); 

    if($("#preview #file_preview #options #Archivo").hasClass("selected")){
        $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
            case "png": 
            case "jpg": 
            case "webp": 
            case "ico": 
            case "svg": 
                $("#preview #file_preview #file")[0].innerHTML= "<img src=" + '"' + FileToRequest + '"' + "></img>"; 
                break; 
            case "webm": 
            case "mp4": 
                $("#preview #file_preview #file")[0].innerHTML= "<video src=" + '"' + FileToRequest + '"' + " controls= 'true' autoplay= 'true'></video>"; 
                break; 
            default: 
                $("#preview #file_preview #file")[0].innerHTML= "<pre data-src=" + '"' + FileToRequest + '"' + "></pre>"; 

                const mainNode = document.getElementsByTagName('pre')[0]

                function callback(mutationsList, observer) {
                    mutationsList.forEach(mutation => {
                        if (mutation.attributeName === 'data-src-status') {
                            //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                            $("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
                        }
                    })
                }
                
                const mutationObserver = new MutationObserver(callback)
                
                mutationObserver.observe(mainNode, { attributes: true }) 
                
                function create(t) {
                  // create an observer instance
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      var foo = t.getAttribute("data-src-status")
                
                      if (foo == "loaded")
                        responsive(); 
                    });
                  });
                  // configuration of the observer
                  var config = {
                    attributes: true
                  };
                
                  // pass in the target node, as well as the observer options
                  observer.observe(t, config);
                }

                Prism.highlightAll(); 
                break; 
        } 
    }else if($("#Live").hasClass("selected")){ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 

        if( !$( "#Live" ).is( ".modified" ) )return

            function reqListener () {
                respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

                // FileToRequest.indexOf( ".html" ) respuesta

                //console.log( respuesta ); 
            z= 0; 
            for( t in tagReplacer( respuesta ) ){ 
                if(tagReplacer( respuesta )[t - z] != undefined)
                    if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    } 
                    if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] )  ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    }; 
                /*console.log( get( "src", tagReplacer( respuesta )[t - z][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
            }; 

                console.log(respuesta); respuesta= respuesta.indexOf( "<!DOCTYPE html>" ) === -1? "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>": respuesta; 

                var ifrm= document.getElementsByTagName('iframe')[0]; 

                ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
                ifrm.document.open(); 
                ifrm.document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
                ifrm.document.close(); 
            };
            
            var xxa = new XMLHttpRequest(); 
            xxa.addEventListener("load", reqListener); 
            xxa.open("GET", FileToRequest); 
            xxa.send(); 
    }else{ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
    a= ""; 

    switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
        case "js": case "css": case "html": case "as": case "py": 
            function reqListener () {
                respuestaOriginal= this.responseText; 
                $("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
                ace.require("ace/ext/language_tools"); 
                editor = ace.edit("editor"); 
                editor.setTheme("ace/theme/monokai"); 
                editor.setValue( this.responseText ); 
                                                      
                if( localStorage.getItem( FileToRequest ) != null ){
                    (function(){editor.setValue( JSON.parse( localStorage.getItem( FileToRequest ) ).value ); $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" )})(); 
                                                                                                              
                    session= JSON.parse( JSON.parse( localStorage.getItem(FileToRequest) ).undoManager ); 
                                                              
                    session.folds.forEach(function(fold){ 
                        editor.session.addFold("...", ace.Range.fromPoints(fold.start, fold.end)); 
                    }); 
                    editor.session.setAnnotations(session.annotations); 
                    editor.session.setBreakpoints(session.breakpoints); 
                    editor.session.$undoManager.$undoStack= session.history.undo; 
                    editor.session.$undoManager.$redoStack= session.history.redo; 
                    editor.session.$undoManager.$rev= session.history.rev; 
                    editor.session.$undoManager.mark= session.history.mark; 
                    editor.session.setMode(session.mode); 
                    editor.session.setScrollLeft(session.scrollLeft); 
                    editor.session.setScrollTop(session.scrollTop); 
                    editor.session.selection.fromJSON(session.selection); 
                } 
                  
                editor.getSession().on('change', function(){ 
                    localStorage.setItem( FileToRequest, JSON.stringify( {value: editor.getValue(), undoManager: JSON.stringify( editor.getSession() )} ) ); 
                    JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ): $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" ); 
                    JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? localStorage.removeItem( FileToRequest ): 1; 
                }); 

                setTimeout(function(){ 
                    editor.focus(); 
                }, 310); 

                editor.valorOriginal= this.responseText; 
                editor.setOption("enableEmmet", true);
                editor.setOption("enableBasicAutocompletion", true); 
                editor.setOption("enableLiveAutocompletion", true); 
                editor.setOption("enableSnippets", true); 




                switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                    case "js": 
                        var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "css": 
                        var JavaScriptMode = ace.require("ace/mode/css").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "html": 
                        var JavaScriptMode = ace.require("ace/mode/html").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "as": 
                        var JavaScriptMode = ace.require("ace/mode/actionscript").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "py": 
                        var JavaScriptMode = ace.require("ace/mode/python").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                } 
                
            }
            break; 
        case "png": case "jpg": case "webp": case "ico": case "svg": 
            $("#preview #file_preview #edit")[0].innerHTML= '<iframe src= ' + '"' + 'https://www.photopea.com/#{&quot;files&quot;:[&quot;' + window.location.origin + FileToRequest + '&quot;],&quot;environment&quot;:{&quot;vmode&quot;:1,&quot;theme&quot;:1,&quot;showtools&quot;:[23,0,1,2,5,6,7,8,9,10,14,16,18,19,20,24,27,31,34,35,36,37,38,39,40,41,47,42,43,51,52,54,55,57,56,58,59,6],&quot;menus&quot;:[[0,0,1,0,0,0,0,0,1],0,0,0,0,0,0,1]}}' + '" ' + '></iframe>'
    }

    
    
        var xxa = new XMLHttpRequest();
        xxa.addEventListener("load", reqListener);
        xxa.open("GET", FileToRequest);
        xxa.send(); 


    
    
    } 
    /*function reqListener () {
        
    }

    
    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", FileToRequest);
    oReq.send(); */ 
                    

    title(); 

    typeof LEB != "undefined"? $(LEB).addClass("inScope"): 949767649767; 
}); 

FileToRequest= ""

v()
s()
}

function addFolder(){
    var folder= prompt( "¡Cuál es el nombre de la carpeta?" )

    contextMenu.unDisplay()
    
    if(!folder)return; 

    x= false

    $(".folder.inScope").each(function(){if( folder.toString() === $( this ).text() )x= true})

    if( x )return; 

    u= false

    var f

    if( !!$( "#files .file_tree .folder.inScope" ).length ){
        $( "#files .file_tree .folder.inScope" ).each( i => ( function( z ){if( z )return; if( sort( folder, $( "#files .file_tree .folder.inScope" )[i].innerText ) == "<" ){
            f= [$( $( "#files .file_tree .folder.inScope" )[i] ).parent(), "b"]
            $( $( "#files .file_tree .folder.inScope" )[i] ).parent().before( `<div class="folder_cont">
                        <li class="folder inScope" title="">` + folder+ `</li>
                    </div>` )
            u= true
            }

            if( parseInt( i ) == parseInt( $( "#files .file_tree .folder.inScope" ).length - 1 ) ){
            f= [$( $( "#files .file_tree .folder.inScope" )[i] ).parent(), "a"]
            $( $( "#files .file_tree .folder.inScope" )[i] ).parent().after( `<div class="folder_cont">
                        <li class="folder inScope" title="">` + folder+ `</li>
                    </div>` )
            u= true
            }} )( u ) )
    }else{
        f= [$( oF.children()[0] ), "a"]
        $( oF.children()[0] ).after( `<div class="folder_cont">
            <li class="folder inScope" title="">` + folder+ `</li>
        </div>` )
    }

    //$( "#files .file_tree .inScope" ).not( ".folder" ).parent().append(  ) 

    // FileToRequest= decodeURIComponent(window.location.pathname)
    // slashCt= 0
    // strtgIx= 0
              
    // for(eForensics in FileToRequest){
    //     FileToRequest[eForensics] == "/"? slashCt++: 1
                        
    //     if(slashCt < 2){
    //         strtgIx= parseInt(eForensics)
    //     }
    // }

    // FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length) 
    
    // localStorage.setItem( ( FileToRequest + "/" + file ), JSON.stringify( {value: "", undoManager: "{\"annotations\":[],\"breakpoints\":[],\"folds\":[],\"history\":{\"undo\":[],\"redo\":[],\"rev\":0,\"mark\":0},\"mode\":\"ace/mode/javascript\",\"scrollLeft\":0,\"scrollTop\":0,\"selection\":{\"start\":{\"row\":0,\"column\":0},\"end\":{\"row\":0,\"column\":0},\"isBackwards\":false},\"value\":\"\"}"} ) ) 
f= ( function(){
            switch( f[1] ){
                case "b":
                    return $( f[0] ).prev()
                    break
                case "a":
                    return $( f[0] ).next()
                    break
                default:
                    //console.log( oF.children()[1] )
                    return f.children().not( f.find( ".folder" )[0] )
                    break
            }} )(); 

    f.children().filter( ".folder" ).click(function(i){ 
if( $( this ).is( ".editing" ) )return
    if(!ok){return}; 
    ok= false; 
    oF= $( this ).parent()
    /*console.log( oF )*/

    setTimeout(function(){ok= true; 
    }, 101); 
    $("#preview .file_tree").removeClass("visible"); 
    $("#preview #file_preview #file")[0].innerHTML=""; 
    $("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
    $(".file").css({"top": "initial"}); 
    $(".folder_cont").css({"top": "initial"}); 
    index= Array.from(i.target.parentElement.parentElement.children).indexOf(i.target.parentElement); 
    $(".inScope").removeClass("inScope"); 
    $(this).siblings().addClass("inScope"); 
             
    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 

    uRL= ""; 
             
    t= $(this).parent(); 
                
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
          
        t= t.parent();  
    } 
      
    uRL= uRL.slice(0, uRL.length - 1); 
                                  
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 

    pageI++; 
                                                                      
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children.length - 1].outerHTML= '<div><a href=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children.length - 1].innerText + '</a></div>': 1; 
                                  
    updateRoot(separateUrl(uRL)); 

    

    aar= getToBusiness(decodeURIComponent(window.location.pathname)); 

        spr= ""; 
                 
        if(aar == ""){ 
            $(".inScope").removeClass("inScope"); 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                el.children[Colombia].getAttribute("class").indexOf("folder_cont") == -1? el.children[Colombia].classList.add("inScope"): el.children[Colombia].children[0].classList.add("inScope"); 
            } 
            $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        }else{ 
            $(".inScope").removeClass("inScope"); 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        } 
          
}); 

$(f.children().filter( ".folder" )[0]).on( "input", function( _i ){
while(["%20", "%C2%A0"].indexOf(encodeURI($(this).text()[0])) != -1){
$(this).text($(this).text().slice(1))
}
while(["%20", "%C2%A0"].indexOf(encodeURI($(this).text()[$(this).text().length - 1])) != -1 && ["%20", "%C2%A0"].indexOf(encodeURI($(this).text()[$(this).text().length - 2])) != -1){
$(this).text($(this).text().slice(0, $(this).text().length - 1))
}
if( $( this )[0].innerText.indexOf( "\n" ) !== -1 )$( this ).text( $( this ).text().replaceAll( "\n", "" ) )
if( !!$( "#information_cont" ).is( ".visible" ) ){
history.pushState( {page: pageI}, "", ( !$( "#information_cont" ).is( ".visible" )? _w.location.pathname: _w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ) ) + "/" + $( this ).text() )
$( "#root div span span" ).parent().prev().text($( this ).text())
}
$( this ).attr( "prevName", $( this ).text() )
v()
s()
spr= separateUrl(getToBusiness(_w.location.pathname))
el= document.getElementsByClassName("file_tree")[0]                                 
for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){
if(el.children[eForensics].children[0].textContent == spr[Ty99]){
el= el.children[eForensics]
}
}
}
}
for(Colombia in getSiblings(el.children[0])){
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope")
}
LEB= $("#preview .file_tree")
for(eForensics in sprtdUrl){
for(fi= 0; fi <= $(LEB).children().length - 1; fi++){
if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){
$($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1
}
}
}
$(LEB.children[0]).trigger("click", true)
} );
f.children().filter( ".folder" )[0].addEventListener("contextmenu", function(e){ 
// if( $( this ).is( ".editing" ) )return
    e.preventDefault(); 
    /*$("#information_cont #information li.selected").removeClass("selected"); */ 

if( contrl ){
$f= [decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )), $( e.target )]
if( $( "#information_cont" ).is( ".visible" ) ){
contextMenu.display( e )
contextMenu.children( "Eliminar", "removeFolder" )
contextMenu.children( "Renombrar", "renameFolder" )
}else{
contextMenu.display( e )
if( !$f[1].is( ".editing" ) ){
$f= [decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" ) + "/" + $(e.target).text().replaceAll("\n", "")), $( e.target )]
contextMenu.children( "Eliminar", "removeFolder" )
contextMenu.children( "Renombrar", "renameFolder" )
contextMenu.children( "Agrega Archivo", "addFile" )
contextMenu.children( "Agrega Carpeta", "addFolder" )
}
}
return
}else if(typeof $f != "undefined" && $f[1].is( ".editing" )){
contextMenu.display( e )
contextMenu.children( "Eliminar", "removeFolder" )
contextMenu.children( "Ya No Renombrar", "renameNoMoreFolder" )
contextMenu.children( "Agrega Archivo", "addFile" )
contextMenu.children( "Agrega Carpeta", "addFolder" )
return
}
                        
    $("#preview .file_tree").addClass("visible"); 

    arr= []; 

    eleo= $(this).parent()[0]; 
    
    for(eForensics in eleo.parentElement.children){ 
        if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
            arr[arr.length]= eleo.parentElement.children[eForensics]
        }
    } 

    topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): arr.length * 26; 

    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 

    $(".inScope").removeClass("inScope"); 
    $(this).addClass("inScope"); 

    $($(eleo).children()[0]).css({"opacity": "1"}); 
    $($(eleo).children()[0]).css({"height": "auto"}); 


    $(this).parent().css({"position": "absolute", "top": topS + "px"}); 

    (function () {
        $('.file.inScope').filter(function () {
            return $(this).css('height') != '0';
        }).css({"padding": "","border-bottom": ''});
    })(); 
    (function () {
        $('.folder.inScope').filter(function () {
            return $(this).css('height') != '0';
        }).css({"padding": "","border-bottom": ''});
    })(); 
    setTimeout(function(){eleo.style.top= 0; ok= false; 
    }, 1); 
    setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); })(): 666; ok= true; 
    }, 101); 

    uRL= ""; 
                     
    t= $(this).parent(); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    } 
      
    uRL= uRL.slice(0, uRL.length - 1); 
                                       
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL + "#infor"); 
    pageI++;

                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
       // window.location.hash= "infor";  
                              
    updateRoot(separateUrl(uRL)); 

     aar= getToBusiness(decodeURIComponent(window.location.pathname)); 
                 
        spr= ""; 
                 
        if(aar == ""){ 
             el= document.getElementsByClassName("file_tree")[0]; 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                $(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
            } 
            LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 

        }else{ 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } 
LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 

        }
    
    //alert(sprtdUrl); 

    

    }) 
v()
s()
}

function removeFile( $file ){
if( $( "#information_cont" ).is( ".visible" ) ){
$( "div#root" ).find( "a" ).last().click()
localStorage.removeItem( $f[0] )
$f[1].remove()
v()
}else{
localStorage.removeItem( $f[0] )
$f[1].remove()
v()
s()
}
contextMenu.unDisplay()
}

function renameFile( $file ){
contextMenu.unDisplay()
$( $f[1] ).attr( "prevName", $( $f[1] )[0].innerText )
function reqListener () {
if( localStorage.getItem( $f[0] ) != null ){
respuesta= JSON.parse( localStorage.getItem( $f[0] ) ).value
files[$f[0]]= JSON.parse( localStorage.getItem( $f[0] ) )
}else{
respuesta= this.responseText
files[$f[0]]= {value: respuesta, undoManager: "{\"annotations\":[],\"breakpoints\":[],\"folds\":[],\"history\":{\"undo\":[],\"redo\":[],\"rev\":0,\"mark\":0},\"mode\":\"ace/mode/javascript\",\"scrollLeft\":0,\"scrollTop\":0,\"selection\":{\"start\":{\"row\":0,\"column\":0},\"end\":{\"row\":0,\"column\":0},\"isBackwards\":false},\"value\":\"\"}"}
}

$f[1][0].contentEditable= true
$f[1].addClass( "editing" )
$f[1].focus()
v()
s()
}

var xxa= new XMLHttpRequest()
xxa.addEventListener( "load", reqListener )
xxa.open( "GET", $f[0] )
xxa.send()
}
 
function renameNoMoreFile( $files ){
if(typeof $files !== undefined)var $f= $files
contextMenu.unDisplay()
$f[1].removeAttr( "contentEditable" )
$f[1].removeClass( "editing" )
delete $f
}
 
function renameNoMoreFolder( $folder ){
if(typeof $folder !== undefined)var $f= $folder
$f[1].scrollTop(0)
if(["%20", "%C2%A0"].indexOf(encodeURI($f[1].text()[$f[1].text().length - 1])) !== -1)$f[1].text($f[1].text().slice(0, $f[1].text().length - 1))
typeof contained_files !== "undefined"? (function(){for(r in contained_files){
var F= localStorage.getItem(contained_files[r])
localStorage.removeItem(contained_files[r])
localStorage.setItem(contained_files[r].replace($f[0], !$("#file_expl #information_cont").hasClass("visible")? decodeURIComponent(_w.location.pathname).replace( "/p/" + pId, "/raw/p/" + pId) + "/" + $f[1].text(): decodeURIComponent(_w.location.pathname).replace( "/p/" + pId, "/raw/p/" + pId)), F)
}})():1
contextMenu.unDisplay()
$f[1].removeAttr( "contentEditable" )
$f[1].removeClass( "editing" )
delete $f
}

function renameFolder( $folder ){
if(typeof $f[0] !== "undefined" && ($f[0] === "/user/raw/p/8d299s2gvkL9/js" || $f[0] === "/user/raw/p/8d299s2gvkL9/css"))return
contextMenu.unDisplay()
$( $f[1] ).attr( "prevName", $( $f[1] )[0].innerText )

var localStorage_files=[]

for(i in localStorage)
{
if(i[0] === "/")
    localStorage_files[localStorage_files.length]=i
}

var paTH= !$("#file_expl #information_cont").hasClass("visible")? decodeURIComponent(_w.location.pathname).replace( "/p/" + pId, "/raw/p/" + pId) + "/" + $f[1][0].innerText: decodeURIComponent(_w.location.pathname).replace( "/p/" + pId, "/raw/p/" + pId)

contained_files=[]

for(e in localStorage_files){
    if(localStorage_files[e].indexOf(paTH) === 0){
        contained_files[contained_files.length]= localStorage_files[e]
    }else{}
}

$f[1][0].contentEditable= true
$($f[1][0]).addClass( "editing" )
$($f[1][0]).focus()
v()
s()
spr= separateUrl(getToBusiness(_w.location.pathname))
el= document.getElementsByClassName("file_tree")[0]                                 
for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){
if(el.children[eForensics].children[0].textContent == spr[Ty99]){
el= el.children[eForensics]
}
}
}
}
for(Colombia in getSiblings(el.children[0])){
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope")
}
LEB= $("#preview .file_tree")
for(eForensics in sprtdUrl){
for(fi= 0; fi <= $(LEB).children().length - 1; fi++){
if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){
$($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1
}
}
}
$(LEB.children[0]).trigger("click", true)
}

function removeFolder( $folder ){
if(typeof $f[0] !== "undefined" && ($f[0] === "/user/raw/p/8d299s2gvkL9/js" || $f[0] === "/user/raw/p/8d299s2gvkL9/css"))return
crawl_in_folder($f[1])
contextMenu.unDisplay()
confirm("¿Quieres eliminar esta carpeta y todos sus subdirectorios y archivos, siendo éstos:\n"+ aL + "\n?")
aL= ""

var localStorage_files=[]

for(i in localStorage)
{
if(i[0] === "/")
    localStorage_files[localStorage_files.length]=i
}

var paTH= !$("#file_expl #information_cont").hasClass("visible")? decodeURIComponent(_w.location.pathname).replace( "/p/" + pId, "/raw/p/" + pId) + "/" + $f[1][0].innerText: decodeURIComponent(_w.location.pathname).replace( "/p/" + pId, "/raw/p/" + pId)

contained_files=[]

for(e in localStorage_files){
    if(localStorage_files[e].indexOf(paTH) === 0){
        contained_files[contained_files.length]= localStorage_files[e]
    }else{}
}

}


identaciones= 0

function ident(i){
sp= ""
for(a= 0; a< i; a++){
sp+= "-"
}
return(sp)
}
aL= ""

function crawl_in_folder(fo, id){
var identaciones= typeof id !== "undefined"? id: 0
$(fo.parent().children().not($(fo.parent().children()[0]))).each(function(){
if($(this).is(".folder_cont")){
aL= aL + "\n" + (ident(identaciones) + $($(this).children()[0]).text())
identaciones++
crawl_in_folder($($(this).children()[0]), identaciones)
}else{
aL= aL + "\n" + (ident(identaciones) + $(this).text())
}
})
}

ace.EditSession.prototype.toJSON= function(){ 
    return { 
        annotations: this.getAnnotations(), 
        breakpoints: this.getBreakpoints(), 
        folds: this.getAllFolds().map(function(fold){ 
            return fold.range; 
        }), 
        history: { 
            undo: this.getUndoManager().$undoStack, 
            redo: this.getUndoManager().$redoStack, 
            rev: this.getUndoManager().$rev, 
            mark: this.getUndoManager().mark 
        }, 
        mode: this.getMode().$id, 
        scrollLeft: this.getScrollLeft(), 
        scrollTop: this.getScrollTop(), 
        selection: this.getSelection().toJSON(), 
        value: this.getValue() 
    }; 
}; 


$( window ).load( function(){ 
_w= window
    /*title(); 
    setTimeout( function(){
        title(); 
    }, 9 ); */

_w.addEventListener( 'popstate', function(event) {

if($(event.explicitOriginalTarget).is(".folder"))return
const pId_from_end_of_url= (function(w){return (w.p.indexOf( pId ) + 1, 
w.p.length, 
w.p.length - (w.p.indexOf( pId ) + 1 + pId.length))})({p:_w.location.pathname})

console.log(pId_from_end_of_url)
if( pId_from_end_of_url == -1 || _w.location.pathname === "/" + username + "/p/" + pId + ".html" ){
$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".inScope").removeClass("inScope")
$("#preview .file_tree").removeClass("visible")
$(".code-filler").width(0)
$("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"})
$("#preview #file_preview #filePr")[0].innerHTML= ""
$("#preview #file_preview #file")[0].innerHTML=""
$("#preview #file_preview #edit")[0].innerHTML=""
$("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666
$(".file").css({"top": "initial"})
$(".folder_cont").css({"top": "initial"})
/*$( "#root > div > DIV" ).last().children().filter("a").trigger( "click" )*/
$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$( "#files .file_tree" ).children().each( function(){$( this ).is( ".folder_cont" )? $( $( this ).find( ".folder" )[0] ).addClass( "inScope" ): $( this ).addClass( "inScope" )} )
$( "#files .file_tree" ).children().removeAttr( "style" )
$( "#files .file_tree > .folder_cont > .folder" ).removeAttr( "style" )
$("#root")[0].children[0].innerHTML= "<div><a url= \"/" + username + "\">" + users_name + `</a></div><div><a url="/` + username + `/p">Proyectos</a></div><span><span>` + pNa + `</span></span>`
return
}

$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".inScope").removeClass("inScope")
$("#preview .file_tree").removeClass("visible")
$(".code-filler").width(0)
$("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"})
$("#preview #file_preview #filePr")[0].innerHTML= ""
$("#preview #file_preview #file")[0].innerHTML=""
$("#preview #file_preview #edit")[0].innerHTML=""
$("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666
$(".file").css({"top": "initial"})
$(".folder_cont").css({"top": "initial"})
/*$( "#root > div > DIV" ).last().children().filter("a").trigger( "click" )*/
$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".folder_cont .folder").removeAttr( "style" )
$(".file").removeAttr( "style" )

sprtdUrl= separateUrl(getToBusiness(decodeURIComponent(_w.location.pathname))); 

LEB= $("#files .file_tree"); 
                             
for(eForensics in sprtdUrl){
for(fi= 0; fi <= $(LEB).children().length - 1; fi++){
if(($($(LEB).children()[fi]).hasClass("folder_cont") || $($(LEB).children()[fi]).hasClass("file"))){
(!$($(LEB).children()[fi]).hasClass("file") && $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics])? LEB= $($(LEB).children()[fi])[0]: $($(LEB).children()[fi])[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1
}
}
}
 
$(LEB).is(".folder_cont")? LEB= $(LEB).children()[0]: 1; 
$(".inScope").removeClass("inScope"); 
//_w.location.hash == "#infor"? $(LEB)[0].dispatchEvent(new CustomEvent('contextmenu')): $(LEB).trigger("click", true);  
/*LEB= $( LEB )*/
if($(LEB).is("#files .file_tree"))return
if( $(LEB).is( ".file" )  ){
$(LEB).addClass( "inScope" )
var i= {target: LEB}
// var this= LEB
var tr= false
// if( $(LEB).is( ".editing" ) )return
//$T= $("#files .file_tree")[0].scrollTop 
if( !$("#information #historia li").is( ".selected" ) && $("#file_expl #information_cont").hasClass("visible") && !!FileToRequest )return

$("#information_cont #information li.selected").removeClass("selected")
if(!ok){return}
$("#preview .file_tree").removeClass("visible")
$("#preview #file_preview #file")[0].innerHTML=""
arr= [];

eleo= $(LEB)[0]
    
for(eForensics in eleo.parentElement.children){
if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){
arr[arr.length]= eleo.parentElement.children[eForensics]
}
}

topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): (!arr[0] && $(eleo.parentElement.children[$(eleo).index() - 1]).hasClass("inScope") && ((26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y)) <= 26))?topS=  26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y): arr.length * 26

$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"})


!tr? topS= topS: topS= 0

$(LEB).css({"position": "absolute", "top": topS + "px"})

$(LEB).css({"opacity": "1"})
$(LEB).css({"height": "auto"})
$(LEB).css({"padding": ""})
$(LEB).css({"border-bottom": ""})

    
setTimeout(function(){i.target.style.top= 0; ok= false; 
}, 1); 
setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); $(".Historia").on("click", function(){var oReq= new XMLHttpRequest();oReq.addEventListener("load", ee);oReq.open("GET", "https://api.github.com/repos/LirilCo/lirilco.github.io/commits?path=" + FileToRequest);oReq.setRequestHeader('Authorization', "token " + token);crawl();oReq.send();}); })(): 666; ok= true; 
}, 101); 

uRL= ""; 

t= $(LEB); 

while(!t.is(".file_tree")){ 
if(!t.hasClass("folder_cont")){ 
uRL= t[0].innerText + uRL; 
}else{ 
uRL= t[0].children[0].textContent + "/" + uRL; 
} 

t= t.parent(); 
}

// history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 
pageI++;

(!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 

updateRoot(separateUrl(uRL)); 

FileToRequest= decodeURIComponent(window.location.pathname)
slashCt= 0; 
strtgIx= 0; 
    
for(eForensics in FileToRequest){ 
FileToRequest[eForensics] == "/"? slashCt++: 1; 
    
if(slashCt < 2){ 
strtgIx= parseInt(eForensics); 
}   
} 
FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length); 

if($("#preview #file_preview #options #Archivo").hasClass("selected")){
$("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
$("#preview #file_preview #filePr")[0].innerHTML= ""; 
$("#preview #file_preview #edit")[0].innerHTML= ""; 
switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
case "png": 
case "jpg": 
case "webp": 
case "ico": 
case "svg": 
$("#preview #file_preview #file")[0].innerHTML= "<img src=" + '"' + FileToRequest + '"' + "></img>"; 
break; 
case "webm": 
case "mp4": 
$("#preview #file_preview #file")[0].innerHTML= "<video src=" + '"' + FileToRequest + '"' + " controls= 'true' autoplay= 'true'></video>"; 
break; 
default: 
$("#preview #file_preview #file")[0].innerHTML= "<pre data-src=" + '"' + FileToRequest + '"' + "></pre>"; 

const mainNode = document.getElementsByTagName('pre')[0]

function callback(mutationsList, observer) {
mutationsList.forEach(mutation => {
if (mutation.attributeName === 'data-src-status') {
//$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
}
})
}

const mutationObserver = new MutationObserver(callback)

mutationObserver.observe(mainNode, { attributes: true }) 

function create(t) {
// create an observer instance
var observer = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
var foo = t.getAttribute("data-src-status")

if (foo == "loaded")
responsive(); 
});
});
// configuration of the observer
var config = {
attributes: true
};

// pass in the target node, as well as the observer options
observer.observe(t, config);
}

Prism.highlightAll(); 
break; 
} 
}else if($("#Live").hasClass("selected")){ 
$(".code-filler").width(0); 

$("#preview #file_preview #file")[0].innerHTML= ""; 
$("#preview #file_preview #edit")[0].innerHTML= ""; 
$("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 

if( !$( "#Live" ).is( ".modified" ) )return

function reqListener () {
respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

//console.log( respuesta ); 
            z= 0; 
            for( t in tagReplacer( respuesta ) ){ 
                if(tagReplacer( respuesta )[t - z] != undefined)
                    if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    } 
                    if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] )  ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    }; 
                /*console.log( get( "src", tagReplacer( respuesta )[t - z][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
            }; 

console.log(respuesta); respuesta= respuesta.indexOf( "<!DOCTYPE html>" ) === -1? "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>": respuesta; 

var ifrm= document.getElementsByTagName('iframe')[0]; 

ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
ifrm.document.open(); 
ifrm.document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
ifrm.document.close(); 
};

var xxa = new XMLHttpRequest(); 
xxa.addEventListener("load", reqListener); 
xxa.open("GET", FileToRequest); 
xxa.send(); 
}else{ 
$(".code-filler").width(0); 

$("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
$("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
$("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
a= ""; 

switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
case "js": case "css": case "html": case "as": case "py": 
function reqListener () {
respuestaOriginal= this.responseText; 
$("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
ace.require("ace/ext/language_tools"); 
editor = ace.edit("editor"); 
editor.setTheme("ace/theme/monokai"); 
editor.setValue( this.responseText ); 

if( localStorage.getItem( FileToRequest ) != null ){
(function(){editor.setValue( JSON.parse( localStorage.getItem( FileToRequest ) ).value ); $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" )})(); 

session= JSON.parse( JSON.parse( localStorage.getItem(FileToRequest) ).undoManager ); 

session.folds.forEach(function(fold){ 
editor.session.addFold("...", ace.Range.fromPoints(fold.start, fold.end)); 
}); 
editor.session.setAnnotations(session.annotations); 
editor.session.setBreakpoints(session.breakpoints); 
editor.session.$undoManager.$undoStack= session.history.undo; 
editor.session.$undoManager.$redoStack= session.history.redo; 
editor.session.$undoManager.$rev= session.history.rev; 
editor.session.$undoManager.mark= session.history.mark; 
editor.session.setMode(session.mode); 
editor.session.setScrollLeft(session.scrollLeft); 
editor.session.setScrollTop(session.scrollTop); 
editor.session.selection.fromJSON(session.selection); 
} 

editor.getSession().on('change', function(){ 
localStorage.setItem( FileToRequest, JSON.stringify( {value: editor.getValue(), undoManager: JSON.stringify( editor.getSession() )} ) ); 
JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ): $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" ); 
JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? localStorage.removeItem( FileToRequest ): 1; 
}); 

setTimeout(function(){ 
editor.focus(); 
}, 310); 

editor.valorOriginal= this.responseText; 
editor.setOption("enableEmmet", true);
editor.setOption("enableBasicAutocompletion", true); 
editor.setOption("enableLiveAutocompletion", true); 
editor.setOption("enableSnippets", true); 




switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
case "js": 
var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
case "css": 
var JavaScriptMode = ace.require("ace/mode/css").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
case "html": 
var JavaScriptMode = ace.require("ace/mode/html").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
case "as": 
var JavaScriptMode = ace.require("ace/mode/actionscript").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
case "py": 
var JavaScriptMode = ace.require("ace/mode/python").Mode; 
editor.session.setMode(new JavaScriptMode()); 
break; 
} 

}
break; 
case "png": case "jpg": case "webp": case "ico": case "svg": 
$("#preview #file_preview #edit")[0].innerHTML= '<iframe src= ' + '"' + 'https://www.photopea.com/#{&quot;files&quot;:[&quot;' + window.location.origin + FileToRequest + '&quot;],&quot;environment&quot;:{&quot;vmode&quot;:1,&quot;theme&quot;:1,&quot;showtools&quot;:[23,0,1,2,5,6,7,8,9,10,14,16,18,19,20,24,27,31,34,35,36,37,38,39,40,41,47,42,43,51,52,54,55,57,56,58,59,6],&quot;menus&quot;:[[0,0,1,0,0,0,0,0,1],0,0,0,0,0,0,1]}}' + '" ' + '></iframe>'
}

    
    
var xxa = new XMLHttpRequest();
xxa.addEventListener("load", reqListener);
xxa.open("GET", FileToRequest);
xxa.send(); 


    
    
} 
/*function reqListener () {

}

    
    
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", FileToRequest);
oReq.send(); */ 


title(); 

return
}
if(_w.location.hash === "#infor")
{
sprtdUrl= separateUrl(getToBusiness(decodeURIComponent(_w.location.pathname)))
console.log( "#" )
/*$("#information_cont #information li.selected").removeClass("selected"); */ 
                        
$("#preview .file_tree").addClass("visible")

arr= []; 

eleo= $(LEB).parent()[0]; 
    
for(eForensics in eleo.parentElement.children){ 
if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
arr[arr.length]= eleo.parentElement.children[eForensics]
}
} 

$(".inScope").removeClass("inScope"); 
topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): arr.length * 26; 

$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 


$($(eleo).children()[0]).css({"opacity": "1"}); 
$($(eleo).children()[0]).css({"height": "auto"}); 


$(LEB).parent().css({"position": "absolute", "top": topS + "px"}); 

(function () {
$('.file.inScope').filter(function () {
return $(LEB).css('height') != '0';
}).css({"padding": "","border-bottom": ''});
})(); 
(function () {
$('.folder.inScope').filter(function () {
return $(LEB).css('height') != '0';
}).css({"padding": "","border-bottom": ''});
})(); 
setTimeout(function(){eleo.style.top= 0; ok= false; 
}, 1); 
setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); })(): 666; ok= true; 
}, 101); 

uRL= ""; 

t= $(LEB).parent(); 

while(!t.is(".file_tree")){ 
if(!t.hasClass("folder_cont")){ 
uRL= t[0].innerText + uRL; 
}else{ 
uRL= t[0].children[0].textContent + "/" + uRL; 
} 
      
t= t.parent(); 
    } 
      
uRL= uRL.slice(0, uRL.length - 1); 

// history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL);  
//pageI++;

$(LEB).addClass("inScope")
LEB.removeAttribute( "style" );

(!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
//window.location.hash= "infor"

updateRoot(separateUrl(uRL)); 

aar= getToBusiness(decodeURIComponent(window.location.pathname)); 

spr= ""; 

if(aar == ""){ 
el= document.getElementsByClassName("file_tree")[0]; 

for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
$(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
} 
LEB_2= $("#preview .file_tree"); 

for(eForensics in sprtdUrl){ 
for(fi= 0; fi <= $(LEB_2).children().length - 1; fi++){ 
if($($(LEB_2).children()[fi]).hasClass("folder_cont") && !$($(LEB_2).children()[fi]).hasClass("folder")){ 
$($(LEB_2).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB_2= $($(LEB_2).children()[fi])[0]: 1; 
}
} 
} 
}else{ 

setTimeout(function(){ 
spr= separateUrl(aar); 

el= document.getElementsByClassName("file_tree")[0]; 

for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

for(Colombia in getSiblings(el.children[0])){ 
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
} 
LEB_2= $("#preview .file_tree"); 

for(eForensics in sprtdUrl){
for(fi= 0; fi <= $(LEB_2).children().length - 1; fi++){
if($($(LEB_2).children()[fi]).hasClass("folder_cont") && !$($(LEB_2).children()[fi]).hasClass("folder")){
$($(LEB_2).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB_2= $($(LEB_2).children()[fi])[0]: 1
}
}
}
}, 10); 

spr= separateUrl(aar); 

el= document.getElementsByClassName("file_tree")[0]; 

for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

for(Colombia in getSiblings(el.children[0])){ 
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
} LEB_2= $("#preview .file_tree"); 

for(eForensics in sprtdUrl){ 
for(fi= 0; fi <= $(LEB_2).children().length - 1; fi++){ 
if($($(LEB_2).children()[fi]).hasClass("folder_cont") && !$($(LEB_2).children()[fi]).hasClass("folder")){ 
$($(LEB_2).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB_2= $($(LEB_2).children()[fi])[0]: 1; 
}
}
}
}
$($(LEB_2).children()[0]).trigger("click", true)
return
}
var i= {target: LEB}
oF= $(LEB).parent()
console.log( oF )

setTimeout(function(){ok= true; 
}, 101); 
$("#preview .file_tree").removeClass("visible"); 
$("#preview #file_preview #file")[0].innerHTML=""; 
$("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
$(".file").css({"top": "initial"}); 
$(".folder_cont").css({"top": "initial"}); 
index= Array.from(i.target.parentElement.parentElement.children).indexOf(i.target.parentElement); 
$(".inScope").removeClass("inScope"); 
$(LEB).siblings().addClass("inScope"); 

$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 

uRL= ""; 

t= $(LEB).parent(); 

while(!t.is(".file_tree")){ 
if(!t.hasClass("folder_cont")){ 
uRL= t[0].innerText + uRL; 
}else{ 
uRL= t[0].children[0].textContent + "/" + uRL; 
} 

t= t.parent();  
    } 
      
uRL= uRL.slice(0, uRL.length - 1); 

/*history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); */ 

pageI++; 

(!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children.length - 1].outerHTML= '<div><a href=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children.length - 1].innerText + '</a></div>': 1; 

updateRoot(separateUrl(uRL)); 

    

aar= getToBusiness(decodeURIComponent(window.location.pathname)); 

spr= ""; 

if(aar == ""){ 
$(".inScope").removeClass("inScope"); 

for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
el.children[Colombia].getAttribute("class").indexOf("folder_cont") == -1? el.children[Colombia].classList.add("inScope"): el.children[Colombia].children[0].classList.add("inScope"); 
} 
$(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
$(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
}else{ 
$(".inScope").removeClass("inScope"); 

setTimeout(function(){ 
spr= separateUrl(aar); 

el= document.getElementsByClassName("file_tree")[0]; 

for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

for(Colombia in getSiblings(el.children[0])){ 
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
} $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
$(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
}, 10); 

spr= separateUrl(aar); 

el= document.getElementsByClassName("file_tree")[0]; 

for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

for(Colombia in getSiblings(el.children[0])){ 
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
} $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
$(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
$(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
} 
th= {isLast: (LEB === $(".inScope").parent().children()[0])}
if( th.isLast && typeof $T !== "undefined" )( function(){console.log("entered!"); $("#files .file_tree")[0].scrollTop= $T} )()
} ) 

_w.addEventListener( 'blur', function(){
    contrl= false; 
} )
} ); 

$(document).on("ready",function(e){
    purger.purge()
    purger.super_purge()

    if( pId === "8d299s2gvkL9" && JSON.parse( localStorage.getItem( "file_tree" ) ) != null && localStorage.getItem( "file_tree" ) != "\"\"" )$( "#files ul.file_tree" ).html( JSON.parse( localStorage.getItem( "file_tree" ) ) )


    Live.addEventListener( "contextmenu", function( a ){
        a.preventDefault()

        if( !$( "#information_cont" ).is( ".visible" ) )return
        $(".code-filler").width(0); 
        $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #filePr").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #file")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 

        
        $("#file_preview #options ul li.selected").removeClass("selected"); 
        $( this ).addClass("selected")
        $( "#Live" ).addClass( "modified" )



        if( !$( "#Live" ).is( ".modified" ) ){
            $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 
        }else{
            $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=''></iframe></div>"

        if( !$("#information #historia li").is( ".selected" ) ){
            function reqListener () {
            respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

            //console.log( respuesta ); 
            z= 0; 
            for( t in tagReplacer( respuesta ) ){ 
                if(tagReplacer( respuesta )[t - z] != undefined)
                    if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    } 
                    if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] )  ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    }; 
                /*console.log( get( "src", tagReplacer( respuesta )[t - z][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
            }; 

            console.log(respuesta); respuesta= respuesta.indexOf( "<!DOCTYPE html>" ) === -1? "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>": respuesta; 

            var ifrm= document.getElementsByTagName('iframe')[0]; 

            ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
            ifrm.document.open(); 
            ifrm.document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
            ifrm.document.close();
            };
            
            var xxa = new XMLHttpRequest(); 
            xxa.addEventListener("load", reqListener); 
            xxa.open("GET", FileToRequest); 
            xxa.send(); 
        }else{
            function reqListener () {
                $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=''></iframe></div>"; 

                respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 
                        
                //console.log( respuesta ); 
            z= 0; 
            for( t in tagReplacer( respuesta ) ){ 
                if(tagReplacer( respuesta )[t - z] != undefined)
                    if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    } 
                    if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] )  ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    }; 
                /*console.log( get( "src", tagReplacer( respuesta )[t - z][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
            }; 


                console.log(respuesta);  respuesta= "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>"; 

                var ifrm= document.getElementsByTagName('iframe')[0]; 
                        
                ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
                ifrm.document.open(); 
                ifrm.document.write( respuesta ); 
                ifrm.document.close(); 
            };

            var xxa = new XMLHttpRequest(); 
            xxa.addEventListener("load", reqListener); 
            xxa.open("GET", FileToRequest); 
            xxa.send();     
        }
        }
    } )

    Live.addEventListener( "click", function( a ){
        if( !!$( "#information_cont" ).is( ".visible" ) )$( "#Live" ).removeClass( "modified" )
    } )

    oF= $( "#files .file_tree" ); 
    /*console.log( 1 )*/

    $( "body" ).append('<div id= "contextmenu"><ul></ul></div>'); 

    $( "div#contextmenu" ).css( {display: "none"} )

    $( "div#contextmenu" ).on( "contextmenu", function( _e ){_e.preventDefault()} )

    $( $(".file_tree")[0] ).on( "contextmenu", function( _e ){ 
    if( $( _e.target ).is( ".file_tree" ) ){
    _e.preventDefault(); 
    
    if( contextMenu.es_visible() ){ 
        contextMenu.unDisplay(); 
    }else{ 
        contextMenu.display( _e )
        contextMenu.children( "Agrega Archivo", "addFile" )
        contextMenu.children( "Agrega Carpeta", "addFolder" )
    } 
    }else if( $( _e.target ).is( "#files .file_tree .file" ) ){
        _e.preventDefault()
        if( $( "#information_cont" ).is( ".visible" ) ){
        contextMenu.display( _e )
        $f= [decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )), $( _e.target )]
        if( !$f[1].is( ".editing" ) ){
        contextMenu.children( "Eliminar", "removeFile" )
        contextMenu.children( "Renombrar", "renameFile" )
        }else{
        contextMenu.children( "Eliminar", "removeFile" )
        contextMenu.children( "Ya No Renombrar", "renameNoMoreFile" )
        }
        }else{
        contextMenu.display( _e )
        $f= [decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )) + "/" + _e.target.innerText, $( _e.target )]
        if( !$f[1].is( ".editing" ) ){
        contextMenu.children( "Eliminar", "removeFile" )
        contextMenu.children( "Renombrar", "renameFile" )
        contextMenu.children( "Agrega Archivo", "addFile" )
        contextMenu.children( "Agrega Carpeta", "addFolder" )
        }else{
        contextMenu.children( "Eliminar", "removeFile" )
        contextMenu.children( "Ya No Renombrar", "renameNoMoreFile" )
        contextMenu.children( "Agrega Archivo", "addFile" )
        contextMenu.children( "Agrega Carpeta", "addFolder" )
        }
        }
    }
    } )

                                                
    switch( localStorage.getItem("selected") ){ 
        case "Editar": 
            $( ".selected" ).removeClass( "selected" ); 
            $( "#options #Editar" ).addClass( "selected" ); 
            $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
            break; 
        case "Live": 
            $( ".selected" ).removeClass( "selected" ); 
            $( "#options #Live" ).addClass( "selected" ); 
            $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #filePr").css({"visibility": "visible", "opacity": "1"}); 
            break; 
        case "Archivo": 
            $( ".selected" ).removeClass( "selected" ); 
            $( "#options #Archivo" ).addClass( "selected" ); 
            $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
            break; 
        case null: 
            break; 
    } 

    sprtdUrl= []; 

    $( "html" ).on( "contextmenu", function( h ){
        if( $( h.target ).is(".wrapper") ){ 
            $(".wrapper").removeClass("visible"); 
            contextMenu.unDisplay()
            h.preventDefault(); 
        } 
    } )
    $("html").click(function( h ) {
        if( !$( h.target ).closest( "div#contextmenu" ).length ){ 
            $(".wrapper").removeClass("visible"); 
            contextMenu.unDisplay()
        } 
        if( !!$( h.target ).closest( "div#contextmenu ul > li" ).length ){ 
            switch( $( h.target ).closest( "div#contextmenu ul > li" ).attr( "id" ) ){
                case "addFile": 
                    addFile()
                    break
                case "addFolder": 
                    addFolder()
                    break
                case "removeFile": 
                    removeFile( $f )
                    break
                case "renameFile": 
                    if($(".file.editing").length){
                    renameNoMoreFile([decodeURIComponent(_w.location.pathname).replace( "/p/", "/raw/p/" ) + "/" + $(".file.editing").text().replaceAll("\n", ""), $(".file.editing")])
                    }
                    if($(".folder.editing").length){
                    renameNoMoreFolder([decodeURIComponent(_w.location.pathname).replace( "/p/", "/raw/p/" ) + "/" + $(".folder.editing").text().replaceAll("\n", ""), $(".folder.editing")])
                    }
                    renameFile()
                    break
                case "renameNoMoreFile": 
                    renameNoMoreFile( $f )
                    break
                case "removeFolder": 
                    removeFolder( $f )
                    break
                case "renameFolder": 
                    renameFolder( $f )
                    break
                case "renameNoMoreFolder": 
                    renameNoMoreFolder( $f )
                    break
            }
        } 
        $("#right-menu .index-arrow").removeClass("open");
        $("#profileSettings").removeClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      




});

$('#profileSettings').click(function(){
    i.stopPropagation()
   
}); 

_in= function(_i){

axX= []
$(".file.inScope").each(function(){if($(this).text() != $(".file.inScope.editing").text() && sort($(this).text(), $(".file.inScope.editing").text()) == "<"){axX[axX.length]= $(this); return;}})

if(axX.length - 1 < $(".file.inScope").index($(".editing"))){
for(var vZ= $(".file.inScope").index($(".editing")) - 1; vZ > axX.length - 1; vZ--){
$(".file.editing").after($(".file.inScope")[vZ].outerHTML)
$(".editing").next().on("click", function(i, tr){if( $( this ).is( ".editing" ) )return
    $T= $("#files .file_tree")[0].scrollTop
    if( !$("#information #historia li").is( ".selected" ) && $("#file_expl #information_cont").hasClass("visible") && !!FileToRequest )return; 

    $("#information_cont #information li.selected").removeClass("selected"); 
    if(!ok){return}; 
    $("#preview .file_tree").removeClass("visible"); 
    $("#preview #file_preview #file")[0].innerHTML=""; 
    arr= []; 

    eleo= $(_i.target)[0]; 
    
    for(eForensics in eleo.parentElement.children){ 
        if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
            arr[arr.length]= eleo.parentElement.children[eForensics]
        }
    } 

    topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): (!arr[0] && $(eleo.parentElement.children[$(eleo).index() - 1]).hasClass("inScope") && ((26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y)) <= 26))?topS=  26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y): arr.length * 26; 

    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 


    !tr? topS= topS: topS= 0; 

    $(_i.target).css({"position": "absolute", "top": topS + "px"}); 

    $(_i.target).css({"opacity": "1"}); 
    $(_i.target).css({"height": "auto"}); 
    $(_i.target).css({"padding": ""}); 
    $(_i.target).css({"border-bottom": ""}); 

    
    setTimeout(function(){i.target.style.top= 0; ok= false; 
    }, 1); 
    setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); $(".Historia").on("click", function(){var oReq= new XMLHttpRequest();oReq.addEventListener("load", ee);oReq.open("GET", "https://api.github.com/repos/LirilCo/lirilco.github.io/commits?path=" + FileToRequest);oReq.setRequestHeader('Authorization', "token " + token);crawl();oReq.send();}); })(): 666; ok= true; 
    }, 101); 

    uRL= ""; 
                     
    t= $(_i.target); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    }
       
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 
    pageI++;
                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
                                  
    updateRoot(separateUrl(uRL)); 

    FileToRequest= decodeURIComponent(window.location.pathname)
    slashCt= 0; 
    strtgIx= 0; 
    
    for(eForensics in FileToRequest){ 
        FileToRequest[eForensics] == "/"? slashCt++: 1; 
    
        if(slashCt < 2){ 
            strtgIx= parseInt(eForensics); 
        }   
    } 
    FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length); 

    if($("#preview #file_preview #options #Archivo").hasClass("selected")){
        $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
            case "png": 
            case "jpg": 
            case "webp": 
            case "ico": 
            case "svg": 
                $("#preview #file_preview #file")[0].innerHTML= "<img src=" + '"' + FileToRequest + '"' + "></img>"; 
                break; 
            case "webm": 
            case "mp4": 
                $("#preview #file_preview #file")[0].innerHTML= "<video src=" + '"' + FileToRequest + '"' + " controls= 'true' autoplay= 'true'></video>"; 
                break; 
            default: 
                $("#preview #file_preview #file")[0].innerHTML= "<pre data-src=" + '"' + FileToRequest + '"' + "></pre>"; 

                const mainNode = document.getElementsByTagName('pre')[0]

                function callback(mutationsList, observer) {
                    mutationsList.forEach(mutation => {
                        if (mutation.attributeName === 'data-src-status') {
                            //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                            $("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
                        }
                    })
                }
                
                const mutationObserver = new MutationObserver(callback)
                
                mutationObserver.observe(mainNode, { attributes: true }) 
                
                function create(t) {
                  // create an observer instance
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      var foo = t.getAttribute("data-src-status")
                
                      if (foo == "loaded")
                        responsive(); 
                    });
                  });
                  // configuration of the observer
                  var config = {
                    attributes: true
                  };
                
                  // pass in the target node, as well as the observer options
                  observer.observe(t, config);
                }

                Prism.highlightAll(); 
                break; 
        } 
    }else if($("#Live").hasClass("selected")){ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 

        if( !$( "#Live" ).is( ".modified" ) )return

            function reqListener () {
                respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

                //console.log( respuesta ); 
            z= 0; 
            for( t in tagReplacer( respuesta ) ){ 
                if(tagReplacer( respuesta )[t - z] != undefined)
                    if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    } 
                    if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] )  ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    }; 
                /*console.log( get( "src", tagReplacer( respuesta )[t - z][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
            }; 

                console.log(respuesta); respuesta= respuesta.indexOf( "<!DOCTYPE html>" ) === -1? "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>": respuesta; 

                var ifrm= document.getElementsByTagName('iframe')[0]; 

                ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
                ifrm.document.open(); 
                ifrm.document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
                ifrm.document.close(); 
            };
            
            var xxa = new XMLHttpRequest(); 
            xxa.addEventListener("load", reqListener); 
            xxa.open("GET", FileToRequest); 
            xxa.send(); 
    }else{ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
    a= ""; 

    switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
        case "js": case "css": case "html": case "as": case "py": 
            function reqListener () {
                respuestaOriginal= this.responseText; 
                $("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
                ace.require("ace/ext/language_tools"); 
                editor = ace.edit("editor"); 
                editor.setTheme("ace/theme/monokai"); 
                editor.setValue( this.responseText ); 
                                                      
                if( localStorage.getItem( FileToRequest ) != null ){
                    (function(){editor.setValue( JSON.parse( localStorage.getItem( FileToRequest ) ).value ); $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" )})(); 
                                                                                                              
                    session= JSON.parse( JSON.parse( localStorage.getItem(FileToRequest) ).undoManager ); 
                                                              
                    session.folds.forEach(function(fold){ 
                        editor.session.addFold("...", ace.Range.fromPoints(fold.start, fold.end)); 
                    }); 
                    editor.session.setAnnotations(session.annotations); 
                    editor.session.setBreakpoints(session.breakpoints); 
                    editor.session.$undoManager.$undoStack= session.history.undo; 
                    editor.session.$undoManager.$redoStack= session.history.redo; 
                    editor.session.$undoManager.$rev= session.history.rev; 
                    editor.session.$undoManager.mark= session.history.mark; 
                    editor.session.setMode(session.mode); 
                    editor.session.setScrollLeft(session.scrollLeft); 
                    editor.session.setScrollTop(session.scrollTop); 
                    editor.session.selection.fromJSON(session.selection); 
                } 
                  
                editor.getSession().on('change', function(){ 
                    localStorage.setItem( FileToRequest, JSON.stringify( {value: editor.getValue(), undoManager: JSON.stringify( editor.getSession() )} ) ); 
                    JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ): $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" ); 
                    JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? localStorage.removeItem( FileToRequest ): 1; 
                }); 

                setTimeout(function(){ 
                    editor.focus(); 
                }, 310); 

                editor.valorOriginal= this.responseText; 
                editor.setOption("enableEmmet", true);
                editor.setOption("enableBasicAutocompletion", true); 
                editor.setOption("enableLiveAutocompletion", true); 
                editor.setOption("enableSnippets", true); 




                switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                    case "js": 
                        var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "css": 
                        var JavaScriptMode = ace.require("ace/mode/css").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "html": 
                        var JavaScriptMode = ace.require("ace/mode/html").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "as": 
                        var JavaScriptMode = ace.require("ace/mode/actionscript").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "py": 
                        var JavaScriptMode = ace.require("ace/mode/python").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                } 
                
            }
            break; 
        case "png": case "jpg": case "webp": case "ico": case "svg": 
            $("#preview #file_preview #edit")[0].innerHTML= '<iframe src= ' + '"' + 'https://www.photopea.com/#{&quot;files&quot;:[&quot;' + window.location.origin + FileToRequest + '&quot;],&quot;environment&quot;:{&quot;vmode&quot;:1,&quot;theme&quot;:1,&quot;showtools&quot;:[23,0,1,2,5,6,7,8,9,10,14,16,18,19,20,24,27,31,34,35,36,37,38,39,40,41,47,42,43,51,52,54,55,57,56,58,59,6],&quot;menus&quot;:[[0,0,1,0,0,0,0,0,1],0,0,0,0,0,0,1]}}' + '" ' + '></iframe>'
    }

    
    
        var xxa = new XMLHttpRequest();
        xxa.addEventListener("load", reqListener);
        xxa.open("GET", FileToRequest);
        xxa.send(); 


    
    
    } 
    /*function reqListener () {
        
    }

    
    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", FileToRequest);
    oReq.send(); */ 
                    

    title(); 

    typeof LEB != "undefined"? $(LEB).addClass("inScope"): 949767649767; })
$(".file.editing").next().on("input", function(_u){_in(_u)})
$($(".file.inScope")[vZ]).remove()
}
}else{
for(var e= axX.length - 1; e >= 0; e--){
if($(".file.inScope").index(axX[e]) > $(".file.inScope").index($(".editing"))){
$(".editing").before(axX[e][0].outerHTML)

$(".editing").prev().on("click", function(i, tr){if( $( this ).is( ".editing" ) )return
    $T= $("#files .file_tree")[0].scrollTop
    if( !$("#information #historia li").is( ".selected" ) && $("#file_expl #information_cont").hasClass("visible") && !!FileToRequest )return; 

    $("#information_cont #information li.selected").removeClass("selected"); 
    if(!ok){return}; 
    $("#preview .file_tree").removeClass("visible"); 
    $("#preview #file_preview #file")[0].innerHTML=""; 
    arr= []; 

    eleo= $(this)[0]; 
    
    for(eForensics in eleo.parentElement.children){ 
        if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
            arr[arr.length]= eleo.parentElement.children[eForensics]
        }
    } 

    topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): (!arr[0] && $(eleo.parentElement.children[$(eleo).index() - 1]).hasClass("inScope") && ((26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y)) <= 26))?topS=  26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y): arr.length * 26; 

    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 


    !tr? topS= topS: topS= 0; 

    $(this).css({"position": "absolute", "top": topS + "px"}); 

    $(this).css({"opacity": "1"}); 
    $(this).css({"height": "auto"}); 
    $(this).css({"padding": ""}); 
    $(this).css({"border-bottom": ""}); 

    
    setTimeout(function(){i.target.style.top= 0; ok= false; 
    }, 1); 
    setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); $(".Historia").on("click", function(){var oReq= new XMLHttpRequest();oReq.addEventListener("load", ee);oReq.open("GET", "https://api.github.com/repos/LirilCo/lirilco.github.io/commits?path=" + FileToRequest);oReq.setRequestHeader('Authorization', "token " + token);crawl();oReq.send();}); })(): 666; ok= true; 
    }, 101); 

    uRL= ""; 
                     
    t= $(this); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    }
       
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 
    pageI++;
                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
                                  
    updateRoot(separateUrl(uRL)); 

    FileToRequest= decodeURIComponent(window.location.pathname)
    slashCt= 0; 
    strtgIx= 0; 
    
    for(eForensics in FileToRequest){ 
        FileToRequest[eForensics] == "/"? slashCt++: 1; 
    
        if(slashCt < 2){ 
            strtgIx= parseInt(eForensics); 
        }   
    } 
    FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length); 

    if($("#preview #file_preview #options #Archivo").hasClass("selected")){
        $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
            case "png": 
            case "jpg": 
            case "webp": 
            case "ico": 
            case "svg": 
                $("#preview #file_preview #file")[0].innerHTML= "<img src=" + '"' + FileToRequest + '"' + "></img>"; 
                break; 
            case "webm": 
            case "mp4": 
                $("#preview #file_preview #file")[0].innerHTML= "<video src=" + '"' + FileToRequest + '"' + " controls= 'true' autoplay= 'true'></video>"; 
                break; 
            default: 
                $("#preview #file_preview #file")[0].innerHTML= "<pre data-src=" + '"' + FileToRequest + '"' + "></pre>"; 

                const mainNode = document.getElementsByTagName('pre')[0]

                function callback(mutationsList, observer) {
                    mutationsList.forEach(mutation => {
                        if (mutation.attributeName === 'data-src-status') {
                            //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                            $("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
                        }
                    })
                }
                
                const mutationObserver = new MutationObserver(callback)
                
                mutationObserver.observe(mainNode, { attributes: true }) 
                
                function create(t) {
                  // create an observer instance
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      var foo = t.getAttribute("data-src-status")
                
                      if (foo == "loaded")
                        responsive(); 
                    });
                  });
                  // configuration of the observer
                  var config = {
                    attributes: true
                  };
                
                  // pass in the target node, as well as the observer options
                  observer.observe(t, config);
                }

                Prism.highlightAll(); 
                break; 
        } 
    }else if($("#Live").hasClass("selected")){ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 

        if( !$( "#Live" ).is( ".modified" ) )return

            function reqListener () {
                respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

                //console.log( respuesta ); 
            z= 0; 
            for( t in tagReplacer( respuesta ) ){ 
                if(tagReplacer( respuesta )[t - z] != undefined)
                    if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    } 
                    if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] )  ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    }; 
                /*console.log( get( "src", tagReplacer( respuesta )[t - z][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
            }; 

                console.log(respuesta); respuesta= respuesta.indexOf( "<!DOCTYPE html>" ) === -1? "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>": respuesta; 

                var ifrm= document.getElementsByTagName('iframe')[0]; 

                ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
                ifrm.document.open(); 
                ifrm.document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
                ifrm.document.close(); 
            };
            
            var xxa = new XMLHttpRequest(); 
            xxa.addEventListener("load", reqListener); 
            xxa.open("GET", FileToRequest); 
            xxa.send(); 
    }else{ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
    a= ""; 

    switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
        case "js": case "css": case "html": case "as": case "py": 
            function reqListener () {
                respuestaOriginal= this.responseText; 
                $("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
                ace.require("ace/ext/language_tools"); 
                editor = ace.edit("editor"); 
                editor.setTheme("ace/theme/monokai"); 
                editor.setValue( this.responseText ); 
                                                      
                if( localStorage.getItem( FileToRequest ) != null ){
                    (function(){editor.setValue( JSON.parse( localStorage.getItem( FileToRequest ) ).value ); $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" )})(); 
                                                                                                              
                    session= JSON.parse( JSON.parse( localStorage.getItem(FileToRequest) ).undoManager ); 
                                                              
                    session.folds.forEach(function(fold){ 
                        editor.session.addFold("...", ace.Range.fromPoints(fold.start, fold.end)); 
                    }); 
                    editor.session.setAnnotations(session.annotations); 
                    editor.session.setBreakpoints(session.breakpoints); 
                    editor.session.$undoManager.$undoStack= session.history.undo; 
                    editor.session.$undoManager.$redoStack= session.history.redo; 
                    editor.session.$undoManager.$rev= session.history.rev; 
                    editor.session.$undoManager.mark= session.history.mark; 
                    editor.session.setMode(session.mode); 
                    editor.session.setScrollLeft(session.scrollLeft); 
                    editor.session.setScrollTop(session.scrollTop); 
                    editor.session.selection.fromJSON(session.selection); 
                } 
                  
                editor.getSession().on('change', function(){ 
                    localStorage.setItem( FileToRequest, JSON.stringify( {value: editor.getValue(), undoManager: JSON.stringify( editor.getSession() )} ) ); 
                    JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ): $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" ); 
                    JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? localStorage.removeItem( FileToRequest ): 1; 
                }); 

                setTimeout(function(){ 
                    editor.focus(); 
                }, 310); 

                editor.valorOriginal= this.responseText; 
                editor.setOption("enableEmmet", true);
                editor.setOption("enableBasicAutocompletion", true); 
                editor.setOption("enableLiveAutocompletion", true); 
                editor.setOption("enableSnippets", true); 




                switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                    case "js": 
                        var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "css": 
                        var JavaScriptMode = ace.require("ace/mode/css").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "html": 
                        var JavaScriptMode = ace.require("ace/mode/html").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "as": 
                        var JavaScriptMode = ace.require("ace/mode/actionscript").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "py": 
                        var JavaScriptMode = ace.require("ace/mode/python").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                } 
                
            }
            break; 
        case "png": case "jpg": case "webp": case "ico": case "svg": 
            $("#preview #file_preview #edit")[0].innerHTML= '<iframe src= ' + '"' + 'https://www.photopea.com/#{&quot;files&quot;:[&quot;' + window.location.origin + FileToRequest + '&quot;],&quot;environment&quot;:{&quot;vmode&quot;:1,&quot;theme&quot;:1,&quot;showtools&quot;:[23,0,1,2,5,6,7,8,9,10,14,16,18,19,20,24,27,31,34,35,36,37,38,39,40,41,47,42,43,51,52,54,55,57,56,58,59,6],&quot;menus&quot;:[[0,0,1,0,0,0,0,0,1],0,0,0,0,0,0,1]}}' + '" ' + '></iframe>'
    }

    
    
        var xxa = new XMLHttpRequest();
        xxa.addEventListener("load", reqListener);
        xxa.open("GET", FileToRequest);
        xxa.send(); 


    
    
    } 
    /*function reqListener () {
        
    }

    
    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", FileToRequest);
    oReq.send(); */ 
                    

    title(); 

    typeof LEB != "undefined"? $(LEB).addClass("inScope"): 949767649767; })
$(".file.editing").prev().on("input", function(_u){_in(_u)})
axX[e].remove()
}
}
}
if( $( _i.target )[0].innerText.indexOf( "\n" ) !== -1 )$( _i.target ).text( $( _i.target ).text().replaceAll( "\n", "" ) )
localStorage.setItem( ((!$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ).replace( "/p/", "/raw/p/" )))  + "/" + $( _i.target ).text()), JSON.stringify( files[((!$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ).replace( "/p/", "/raw/p/" ))) + "/" + $( _i.target ).attr( "prevName" ))] ) )
delete files[((!$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ).replace( "/p/", "/raw/p/" ))) + "/" + $( _i.target ).attr( "prevName" ))]
localStorage.removeItem( ((!$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ).replace( "/p/", "/raw/p/" ))) + "/" + $( _i.target ).attr( "prevName" )) )
if( localStorage.getItem( ((!$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ).replace( "/p/", "/raw/p/" )))  + "/" + $( _i.target ).text()) ) != null ){
files[((!$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ).replace( "/p/", "/raw/p/" )))  + "/" + $( _i.target ).text())]= JSON.parse( localStorage.getItem( ((!$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ).replace( "/p/", "/raw/p/" )))  + "/" + $( _i.target ).text()) ) )
}else{
files[((!$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ).replace( "/p/", "/raw/p/" )))  + "/" + $( _i.target ).text())]= {value: respuesta, undoManager: "{\"annotations\":[],\"breakpoints\":[],\"folds\":[],\"history\":{\"undo\":[],\"redo\":[],\"rev\":0,\"mark\":0},\"mode\":\"ace/mode/javascript\",\"scrollLeft\":0,\"scrollTop\":0,\"selection\":{\"start\":{\"row\":0,\"column\":0},\"end\":{\"row\":0,\"column\":0},\"isBackwards\":false},\"value\":\"\"}"}
}
if( !!$( "#information_cont" ).is( ".visible" ) ){
history.pushState( {page: pageI}, "", ( !$( "#information_cont" ).is( ".visible" )? decodeURIComponent(_w.location.pathname): decodeURIComponent(_w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ) ) + "/" + $( _i.target )[0].innerText) )
document.querySelector( "#root div span span" ).innerText= $( _i.target )[0].innerText
FileToRequest= FileToRequest.slice( 0, FileToRequest.lastIndexOf( "/" ) + 1 ) + $( _i.target )[0].innerText

sprtdUrl= separateUrl(getToBusiness(decodeURIComponent(_w.location.pathname)))
switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){
case "js":
var JavaScriptMode = ace.require("ace/mode/javascript").Mode
editor.session.setMode(new JavaScriptMode())
break
case "css":
var JavaScriptMode = ace.require("ace/mode/css").Mode
editor.session.setMode(new JavaScriptMode())
break
case "html":
var JavaScriptMode = ace.require("ace/mode/html").Mode
editor.session.setMode(new JavaScriptMode())
break
case "as":
var JavaScriptMode = ace.require("ace/mode/actionscript").Mode
editor.session.setMode(new JavaScriptMode())
break
case "py":
var JavaScriptMode = ace.require("ace/mode/python").Mode
editor.session.setMode(new JavaScriptMode())
break
}
}
$( _i.target ).attr( "prevName", $( _i.target )[0].innerText )
v()
s()

}
$( "#files .file_tree .file" ).on( "input", function( _x ){
    _in(_x)
} )
$("#files .file").click(function(i, tr){ 
if( $( this ).is( ".editing" ) )return
    $T= $("#files .file_tree")[0].scrollTop
    if( !$("#information #historia li").is( ".selected" ) && $("#file_expl #information_cont").hasClass("visible") && !!FileToRequest )return; 

    $("#information_cont #information li.selected").removeClass("selected"); 
    if(!ok){return}; 
    $("#preview .file_tree").removeClass("visible"); 
    $("#preview #file_preview #file")[0].innerHTML=""; 
    arr= []; 

    eleo= $(this)[0]; 
    
    for(eForensics in eleo.parentElement.children){ 
        if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
            arr[arr.length]= eleo.parentElement.children[eForensics]
        }
    } 

    topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): (!arr[0] && $(eleo.parentElement.children[$(eleo).index() - 1]).hasClass("inScope") && ((26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y)) <= 26))?topS=  26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y): arr.length * 26; 

    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 


    !tr? topS= topS: topS= 0; 

    $(this).css({"position": "absolute", "top": topS + "px"}); 

    $(this).css({"opacity": "1"}); 
    $(this).css({"height": "auto"}); 
    $(this).css({"padding": ""}); 
    $(this).css({"border-bottom": ""}); 

    
    setTimeout(function(){i.target.style.top= 0; ok= false; 
    }, 1); 
    setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); $(".Historia").on("click", function(){var oReq= new XMLHttpRequest();oReq.addEventListener("load", ee);oReq.open("GET", "https://api.github.com/repos/LirilCo/lirilco.github.io/commits?path=" + FileToRequest);oReq.setRequestHeader('Authorization', "token " + token);crawl();oReq.send();}); })(): 666; ok= true; 
    }, 101); 

    uRL= ""; 
                     
    t= $(this); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    }
       
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 
    pageI++;
                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
                                  
    updateRoot(separateUrl(uRL)); 

    FileToRequest= decodeURIComponent(window.location.pathname)
    slashCt= 0; 
    strtgIx= 0; 
    
    for(eForensics in FileToRequest){ 
        FileToRequest[eForensics] == "/"? slashCt++: 1; 
    
        if(slashCt < 2){ 
            strtgIx= parseInt(eForensics); 
        }   
    } 
    FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length); 

    if($("#preview #file_preview #options #Archivo").hasClass("selected")){
        $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
            case "png": 
            case "jpg": 
            case "webp": 
            case "ico": 
            case "svg": 
                $("#preview #file_preview #file")[0].innerHTML= "<img src=" + '"' + FileToRequest + '"' + "></img>"; 
                break; 
            case "webm": 
            case "mp4": 
                $("#preview #file_preview #file")[0].innerHTML= "<video src=" + '"' + FileToRequest + '"' + " controls= 'true' autoplay= 'true'></video>"; 
                break; 
            default: 
                $("#preview #file_preview #file")[0].innerHTML= "<pre data-src=" + '"' + FileToRequest + '"' + "></pre>"; 

                const mainNode = document.getElementsByTagName('pre')[0]

                function callback(mutationsList, observer) {
                    mutationsList.forEach(mutation => {
                        if (mutation.attributeName === 'data-src-status') {
                            //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                            $("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
                        }
                    })
                }
                
                const mutationObserver = new MutationObserver(callback)
                
                mutationObserver.observe(mainNode, { attributes: true }) 
                
                function create(t) {
                  // create an observer instance
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      var foo = t.getAttribute("data-src-status")
                
                      if (foo == "loaded")
                        responsive(); 
                    });
                  });
                  // configuration of the observer
                  var config = {
                    attributes: true
                  };
                
                  // pass in the target node, as well as the observer options
                  observer.observe(t, config);
                }

                Prism.highlightAll(); 
                break; 
        } 
    }else if($("#Live").hasClass("selected")){ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 

        if( !$( "#Live" ).is( ".modified" ) )return

            function reqListener () {
                respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

                //console.log( respuesta ); 
            z= 0; 
            for( t in tagReplacer( respuesta ) ){ 
                if(tagReplacer( respuesta )[t - z] != undefined)
                    if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    } 
                    if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] )  ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    }; 
                /*console.log( get( "src", tagReplacer( respuesta )[t - z][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
            }; 

                console.log(respuesta);  respuesta= respuesta.indexOf( "<!DOCTYPE html>" ) === -1? "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>": respuesta; 

                var ifrm= document.getElementsByTagName('iframe')[0]; 

                ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
                ifrm.document.open(); 
                ifrm.document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
                ifrm.document.close(); 
            };
            
            var xxa = new XMLHttpRequest(); 
            xxa.addEventListener("load", reqListener); 
            xxa.open("GET", FileToRequest); 
            xxa.send(); 
    }else{ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
    a= ""; 

    switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
        case "js": case "css": case "html": case "as": case "py": 
            function reqListener () {
                respuestaOriginal= this.responseText; 
                $("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
                ace.require("ace/ext/language_tools"); 
                editor = ace.edit("editor"); 
                editor.setTheme("ace/theme/monokai"); 
                editor.setValue( this.responseText ); 
                                                      
                if( localStorage.getItem( FileToRequest ) != null ){
                    (function(){editor.setValue( JSON.parse( localStorage.getItem( FileToRequest ) ).value ); $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" )})(); 
                                                                                                              
                    session= JSON.parse( JSON.parse( localStorage.getItem(FileToRequest) ).undoManager ); 
                                                              
                    session.folds.forEach(function(fold){ 
                        editor.session.addFold("...", ace.Range.fromPoints(fold.start, fold.end)); 
                    }); 
                    editor.session.setAnnotations(session.annotations); 
                    editor.session.setBreakpoints(session.breakpoints); 
                    editor.session.$undoManager.$undoStack= session.history.undo; 
                    editor.session.$undoManager.$redoStack= session.history.redo; 
                    editor.session.$undoManager.$rev= session.history.rev; 
                    editor.session.$undoManager.mark= session.history.mark; 
                    editor.session.setMode(session.mode); 
                    editor.session.setScrollLeft(session.scrollLeft); 
                    editor.session.setScrollTop(session.scrollTop); 
                    editor.session.selection.fromJSON(session.selection); 
                } 
                  
                editor.getSession().on('change', function(){ 
                    localStorage.setItem( FileToRequest, JSON.stringify( {value: editor.getValue(), undoManager: JSON.stringify( editor.getSession() )} ) ); 
                    JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ): $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" ); 
                    JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? localStorage.removeItem( FileToRequest ): 1; 
                }); 

                setTimeout(function(){ 
                    editor.focus(); 
                }, 310); 

                editor.valorOriginal= this.responseText; 
                editor.setOption("enableEmmet", true);
                editor.setOption("enableBasicAutocompletion", true); 
                editor.setOption("enableLiveAutocompletion", true); 
                editor.setOption("enableSnippets", true); 




                switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                    case "js": 
                        var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "css": 
                        var JavaScriptMode = ace.require("ace/mode/css").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "html": 
                        var JavaScriptMode = ace.require("ace/mode/html").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "as": 
                        var JavaScriptMode = ace.require("ace/mode/actionscript").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                    case "py": 
                        var JavaScriptMode = ace.require("ace/mode/python").Mode; 
                        editor.session.setMode(new JavaScriptMode()); 
                        break; 
                } 
                
            }
            break; 
        case "png": case "jpg": case "webp": case "ico": case "svg": 
            $("#preview #file_preview #edit")[0].innerHTML= '<iframe src= ' + '"' + 'https://www.photopea.com/#{&quot;files&quot;:[&quot;' + window.location.origin + FileToRequest + '&quot;],&quot;environment&quot;:{&quot;vmode&quot;:1,&quot;theme&quot;:1,&quot;showtools&quot;:[23,0,1,2,5,6,7,8,9,10,14,16,18,19,20,24,27,31,34,35,36,37,38,39,40,41,47,42,43,51,52,54,55,57,56,58,59,6],&quot;menus&quot;:[[0,0,1,0,0,0,0,0,1],0,0,0,0,0,0,1]}}' + '" ' + '></iframe>'
    }

    
    
        var xxa = new XMLHttpRequest();
        xxa.addEventListener("load", reqListener);
        xxa.open("GET", FileToRequest);
        xxa.send(); 


    
    
    } 
    /*function reqListener () {
        
    }

    
    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", FileToRequest);
    oReq.send(); */ 
                    

    title(); 

    typeof LEB != "undefined"? $(LEB).addClass("inScope"): 949767649767; 
}); 

$("#preview .file").click(function(i){ 


    uRL= ""; 
                     
    t= $(this); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    } 
      
    //uRL= uRL.slice(0, uRL.length - 1); 
                                       
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 
    pageI++;

                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
    /*window.location.hash= "infor"; */
                              
    updateRoot(separateUrl(uRL)); 

     aar= getToBusiness(decodeURIComponent(window.location.pathname)); 
                 
        spr= ""; 
                 
        if(aar == ""){ 
             el= document.getElementsByClassName("file_tree")[0]; 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                $(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
            } 
            LEB= $("#files .file_tree"); 

                                    
    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
                $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB).trigger("click", true); 

        }else{ 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } 
LEB= $("#files .file_tree"); 

                                    
for(eForensics in sprtdUrl){ 
    for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
        if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
            $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
            $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }
    } 
} 

    $(LEB).trigger("click", true); ; 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } LEB= $("#files .file_tree"); 

                                    
for(eForensics in sprtdUrl){ 
    for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
        if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
            $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
            $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }
    } 
} 

    $(LEB).trigger("click", true); 

        }

}); 

for(let folder of document.querySelectorAll("#files .folder")) { 
$(folder).on( "input", function( _i ){
while(["%20", "%C2%A0"].indexOf(encodeURI($(this).text()[0])) != -1){
$(this).text($(this).text().slice(1))
}
while(["%20", "%C2%A0"].indexOf(encodeURI($(this).text()[$(this).text().length - 1])) != -1 && ["%20", "%C2%A0"].indexOf(encodeURI($(this).text()[$(this).text().length - 2])) != -1){
$(this).text($(this).text().slice(0, $(this).text().length - 1))
}
if( $( this ).text().indexOf( "\n" ) !== -1 )$( this ).text( $( this ).text().replaceAll( "\n", "" ) )
if( !!$( "#information_cont" ).is( ".visible" ) ){
history.pushState( {page: pageI}, "", ( !$( "#information_cont" ).is( ".visible" )? _w.location.pathname: _w.location.pathname.slice( 0, _w.location.pathname.lastIndexOf( "/" ) ) ) + "/" + $( this ).text() )
$( "#root div span span" ).parent().prev().text($( this ).text())
}
$( this ).attr( "prevName", $( this ).text() )
v()
s()
spr= separateUrl(getToBusiness(_w.location.pathname))
el= document.getElementsByClassName("file_tree")[0]                                 
for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){
if(el.children[eForensics].children[0].textContent == spr[Ty99]){
el= el.children[eForensics]
}
}
}
}
for(Colombia in getSiblings(el.children[0])){
getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope")
}
LEB= $("#preview .file_tree")
for(eForensics in sprtdUrl){
for(fi= 0; fi <= $(LEB).children().length - 1; fi++){
if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){
$($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1
}
}
}
$(LEB.children[0]).trigger("click", true)
} );
  folder.addEventListener("contextmenu", function(e){ 
// if( $( this ).is( ".editing" ) )return
    e.preventDefault(); 

if( contrl ){
$f= [decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" )), $( e.target )]
if( $( "#information_cont" ).is( ".visible" ) ){
contextMenu.display( e )
contextMenu.children( "Eliminar", "removeFolder" )
contextMenu.children( "Renombrar", "renameFolder" )
}else{
contextMenu.display( e )
if( !$f[1].is( ".editing" ) ){
$f= [decodeURIComponent(_w.location.pathname.replace( "/p/", "/raw/p/" ) + "/" + $(e.target).text().replaceAll("\n", "")), $( e.target )]
contextMenu.children( "Eliminar", "removeFolder" )
contextMenu.children( "Renombrar", "renameFolder" )
contextMenu.children( "Agrega Archivo", "addFile" )
contextMenu.children( "Agrega Carpeta", "addFolder" )
}
}
return
}else if(typeof $f != "undefined" && $f[1].is( ".editing" )){
contextMenu.display( e )
contextMenu.children( "Eliminar", "removeFolder" )
contextMenu.children( "Ya No Renombrar", "renameNoMoreFolder" )
contextMenu.children( "Agrega Archivo", "addFile" )
contextMenu.children( "Agrega Carpeta", "addFolder" )
return
}
    /*$("#information_cont #information li.selected").removeClass("selected"); */ 
// alert("cs")                       
    $("#preview .file_tree").addClass("visible"); 

    arr= []; 

    eleo= $(this).parent()[0]; 
    
    for(eForensics in eleo.parentElement.children){ 
        if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
            arr[arr.length]= eleo.parentElement.children[eForensics]
        }
    } 

    topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): arr.length * 26; 

    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 

    $(".inScope").removeClass("inScope"); 
    $(this).addClass("inScope"); 

    $($(eleo).children()[0]).css({"opacity": "1"}); 
    $($(eleo).children()[0]).css({"height": "auto"}); 


    $(this).parent().css({"position": "absolute", "top": topS + "px"}); 

    (function () {
        $('.file.inScope').filter(function () {
            return $(this).css('height') != '0';
        }).css({"padding": "","border-bottom": ''});
    })(); 
    (function () {
        $('.folder.inScope').filter(function () {
            return $(this).css('height') != '0';
        }).css({"padding": "","border-bottom": ''});
    })(); 
    setTimeout(function(){eleo.style.top= 0; ok= false; 
    }, 1); 
    setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? (function(){$("#file_expl #information_cont").toggleClass("visible"); $("#file_expl #information_cont #information").html("<i>Infor</i><button class='Historia'>Historia</button>"); })(): 666; ok= true; 
    }, 101); 

    uRL= ""; 
                     
    t= $(this).parent(); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    } 
      
    uRL= uRL.slice(0, uRL.length - 1); 
                                       
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL + "#infor"); 
    pageI++;

                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 
       // window.location.hash= "infor"; 
                              
    updateRoot(separateUrl(uRL)); 

     aar= getToBusiness(decodeURIComponent(window.location.pathname)); 
                 
        spr= ""; 
                 
        if(aar == ""){ 
             el= document.getElementsByClassName("file_tree")[0]; 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                $(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
            } 
            LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 

        }else{ 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } 
LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 

        }
    
    //alert(sprtdUrl); 

    

    }) 

             
    title(); 
} 

for(let folder of document.querySelectorAll("#preview .folder")) { 
  folder.addEventListener("contextmenu", function(e){ 
        e.preventDefault(); 
    
        LEB= $("#files .file_tree"); 
    
        sprtdUrl[sprtdUrl.length]= $(this).text(); 
        for(eForensics in sprtdUrl){ 
            for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
                if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                    $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
                } 
            } 
        } 
          
        rightClick(LEB.children[0]); 
    }) 


} 

$("#files .folder").click(function(i){ 
if( $( this ).is( ".editing" ) )return
    if(!ok){return}; 
    ok= false; 
    oF= $( this ).parent()
    /*console.log( oF )*/

    setTimeout(function(){ok= true; 
    }, 101); 
    $("#preview .file_tree").removeClass("visible"); 
    $("#preview #file_preview #file")[0].innerHTML=""; 
    $("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
    $(".file").css({"top": "initial"}); 
    $(".folder_cont").css({"top": "initial"}); 
    index= Array.from(i.target.parentElement.parentElement.children).indexOf(i.target.parentElement); 
    $(".inScope").removeClass("inScope"); 
    $(this).siblings().addClass("inScope"); 
             
    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 

    uRL= ""; 
             
    t= $(this).parent(); 
                
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
          
        t= t.parent();  
    } 
      
    uRL= uRL.slice(0, uRL.length - 1); 
                                  
    history.pushState({page: pageI}, "", "/" + username + "/p/" + pId + "/" + uRL); 

    pageI++; 
                                                                      
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children.length - 1].outerHTML= '<div><a href=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children.length - 1].innerText + '</a></div>': 1; 
                                  
    updateRoot(separateUrl(uRL)); 

    

    aar= getToBusiness(decodeURIComponent(window.location.pathname)); 

        spr= ""; 
                 
        if(aar == ""){ 
            $(".inScope").removeClass("inScope"); 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                el.children[Colombia].getAttribute("class").indexOf("folder_cont") == -1? el.children[Colombia].classList.add("inScope"): el.children[Colombia].children[0].classList.add("inScope"); 
            } 
            $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        }else{ 
            $(".inScope").removeClass("inScope"); 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        } 
          
}); 
    
$("#preview .folder").click(function(i, triggered){ 
    if(triggered){ 
        $("#preview #file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
        $("#preview .file").css({"top": "initial"}); 
        $("#preview .folder_cont").css({"top": "initial"}); 
        index= Array.from(i.target.parentElement.parentElement.children).indexOf(i.target.parentElement); 
        $("#preview .inScope").removeClass("inScope"); 
        $(this).siblings().addClass("inScope"); 
             
    

    

        aar= getToBusiness(decodeURIComponent(window.location.pathname)); 

        spr= ""; 
                 
        if(aar == ""){ 

            el= document.getElementsByClassName("file_tree")[1]; 
            $("#preview .inScope").removeClass("inScope"); 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                el.children[Colombia].getAttribute("class").indexOf("folder_cont") == -1? el.children[Colombia].classList.add("inScope"): el.children[Colombia].children[0].classList.add("inScope"); 
            } 
            $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        }else{ 
            $("#preview .inScope").removeClass("inScope"); 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[1]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[1] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[1])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[1]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[1] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[1])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        } 

    }else{ 
        LEB= $("#files .file_tree"); 

        sprtdUrl[sprtdUrl.length]= $(this).text(); 
        for(eForensics in sprtdUrl){ 
            for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
                if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                    $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
                } 
            } 
        } 
          
        LEB.children[0].click(); 
    } 

}); 
    
$('#root div').not("#root div:nth-child(1)").not("#root div:nth-child(2)").click( function(e){ 
    if(typeof $f !== "undefined"){
    if($f[1].is(".folder")){
    renameNoMoreFolder()    
    }else if($f[1].is(".file")){
    renameNoMoreFile()
    }
    }
    FileToRequest= ""; 

    $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ); 
    history.pushState({page: pageI}, "", e.target.getAttribute("url")); 

    pageI++;
    updateRoot(separateUrl(getToBusiness(e.target.getAttribute("url")))); 
}); 
    
$("#Archivo, #Live, #Editar").click(function(){ 
    if($("#files .file_tree .inScope").filter(function(){return !!$(this).height()}).is(".file") && $("#information").css("visibility") == "visible"){
        $("#preview .file_tree").removeClass("visible"); 
        $("#file_preview #options ul li.selected").removeClass("selected"); 
        $(this).addClass("selected"); 

        localStorage.setItem("selected", $(this)[0].innerText); 
                                                
        /*FileToRequest= decodeURIComponent(window.location.pathname) */ 
        slashCt= 0; 
        strtgIx= 0; 
                
        for(eForensics in FileToRequest){ 
            FileToRequest[eForensics] == "/"? slashCt++: 1; 

            if(slashCt < 2){ 
                strtgIx= parseInt(eForensics); 
            } 
        } 
      
        //FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length);  
                                                
        if($("#Archivo").hasClass("selected")){ 
            $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
            $("#preview #file_preview #filePr")[0].innerHTML= ""; 
            $("#preview #file_preview #edit")[0].innerHTML= ""; 
            switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                case "png": 
                case "jpg": 
                case "webp": 
                case "ico": 
                case "svg": 
                    $("#preview #file_preview #file")[0].innerHTML= "<img src=" + '"' + FileToRequest + '"' + "></img>"; 
                    break; 
                case "webm": 
                case "mp4": 
                    $("#preview #file_preview #file")[0].innerHTML= "<video src=" + '"' + FileToRequest + '"' + " controls= 'true' autoplay= 'true'></video>"; 
                    break; 
                default: 
                    $("#preview #file_preview #file")[0].innerHTML= "<pre onchange= 'alert(" +"'Yayy'" + ");' data-src=" + '"' + FileToRequest + '"' + "></pre>"; 
                    const mainNode = document.getElementsByTagName('pre')[0]

                    function callback(mutationsList, observer) {
                        mutationsList.forEach(mutation => {
                            if (mutation.attributeName === 'data-src-status') {
                                //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                                $("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
                            }
                        })
                    }
                        
                    const mutationObserver = new MutationObserver(callback)
                        
                    mutationObserver.observe(mainNode, { attributes: true }) 
                        
                    function create(t) {
                    // create an observer instance
                    var observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                        var foo = t.getAttribute("data-src-status")
                        
                        if (foo == "loaded")
                            responsive(); 
                        });
                    });
                    // configuration of the observer
                    var config = {
                        attributes: true
                    };
                        
                    // pass in the target node, as well as the observer options
                    observer.observe(t, config);
                    }
                                              
                    Prism.highlightAll(); 
                    break; 
            } 
        }else if($("#Live").hasClass("selected")){ 
            $(".code-filler").width(0); 
            $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #filePr").css({"visibility": "visible", "opacity": "1"}); 
            $("#preview #file_preview #file")[0].innerHTML= ""; 
            $("#preview #file_preview #edit")[0].innerHTML= ""; 

            if( !$( "#Live" ).is( ".modified" ) ){
                $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 
            }else{
            if( !$("#information #historia li").is( ".selected" ) ){
                function reqListener () {
                respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

                //console.log( respuesta ); 
            z= 0; 
            for( t in tagReplacer( respuesta ) ){ 
                if(tagReplacer( respuesta )[t - z] != undefined)
                    if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    } 
                    if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] )  ) ) ){ 
                        respuesta= respuesta.slice( 0, tagReplacer( respuesta )[t - z][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[t - z][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[t - z][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[t - z][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[t - z][1][1] - 1, respuesta.length ) ; 
                        z++
                    }; 
                /*console.log( get( "src", tagReplacer( respuesta )[t - z][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
            }; 

                console.log(respuesta); respuesta= respuesta.indexOf( "<!DOCTYPE html>" ) === -1? "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>": respuesta; 

                var ifrm= document.getElementsByTagName('iframe')[0]; 

                ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
                ifrm.document.open(); 
                ifrm.document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
                ifrm.document.close();
                };
            
                var xxa = new XMLHttpRequest(); 
                xxa.addEventListener("load", reqListener); 
                xxa.open("GET", FileToRequest); 
                xxa.send(); 
            }else{
                function reqListener () {
                    $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=''></iframe></div>"; 

                    respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 
                            
                    // //console.log( respuesta );  
                    // for( t in tagReplacer( respuesta ) ){  
                    //     if(tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )] != undefined) 
                    //         if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ){  
                    //             respuesta= respuesta.slice( 0, tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][1] - 1, respuesta.length ) ;  
                    //         }  
                    //         if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] )  ) ) ){  
                    //             respuesta= respuesta.slice( 0, tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][1] - 1, respuesta.length ) ;  
                    //         };  
                    //     /*console.log( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */  
                    // };  


                    console.log(respuesta); respuesta= "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>"; 

                    var ifrm= document.getElementsByTagName('iframe')[0]; 
                            
                    ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
                    ifrm.document.open(); 
                    ifrm.document.write( respuesta ); 
                    ifrm.document.close(); 
                };

                var xxa = new XMLHttpRequest(); 
                xxa.addEventListener("load", reqListener); 
                xxa.open("GET", FileToRequest); 
                xxa.send();     
            }
            }
        }else{ 
            $(".code-filler").width(0); 

            $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
            $("#preview #file_preview #file")[0].innerHTML= ""; 
            $("#preview #file_preview #filePr")[0].innerHTML= ""; 
            a= ""; 


/*
var ifrm= document.getElementsByTagName('iframe')[0]; 

ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
    ifrm.document.open(); 
    ifrm.document.write( a ); 
    ifrm.document.close();
*/ 
        switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
            case "js": case "css": case "html": case "as": case "py": 
                function reqListener () {
                    respuestaOriginal= this.responseText; 
                    $("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
                    ace.require("ace/ext/language_tools"); 
                    editor = ace.edit("editor"); 
                    editor.setTheme("ace/theme/monokai"); 
                    editor.setValue( this.responseText ); 
                    
                    if( localStorage.getItem( FileToRequest ) != null ){
                        (function(){editor.setValue( JSON.parse( localStorage.getItem( FileToRequest ) ).value ); $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" )})(); 
                                                                                                              
                        session= JSON.parse( JSON.parse( localStorage.getItem(FileToRequest) ).undoManager ); 
                                                              
                        session.folds.forEach(function(fold){ 
                            editor.session.addFold("...", ace.Range.fromPoints(fold.start, fold.end)); 
                        }); 
                        editor.session.setAnnotations(session.annotations); 
                        editor.session.setBreakpoints(session.breakpoints); 
                        editor.session.$undoManager.$undoStack= session.history.undo; 
                        editor.session.$undoManager.$redoStack= session.history.redo; 
                        editor.session.$undoManager.$rev= session.history.rev; 
                        editor.session.$undoManager.mark= session.history.mark; 
                        editor.session.setMode(session.mode); 
                        editor.session.setScrollLeft(session.scrollLeft); 
                        editor.session.setScrollTop(session.scrollTop); 
                        editor.session.selection.fromJSON(session.selection); 
                    } 
                    
                    editor.getSession().on('change', function(){ 
                        localStorage.setItem( FileToRequest, JSON.stringify( {value: editor.getValue(), undoManager: JSON.stringify( editor.getSession() )} ) ); 
                        JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ): $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" ); 
                        JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? localStorage.removeItem( FileToRequest ): 1; 
                    }); 

                    setTimeout(function(){ 
                        editor.focus(); 
                    }, 310); 

                    editor.valorOriginal= this.responseText; 
                    editor.setOption("enableEmmet", true) 
                    editor.setOption("enableBasicAutocompletion", true); 
                    editor.setOption("enableLiveAutocompletion", true); 
                    editor.setOption("enableSnippets", true); 

                    switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                        case "js": 
                            var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                        case "css": 
                            var JavaScriptMode = ace.require("ace/mode/css").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                        case "html": 
                            var JavaScriptMode = ace.require("ace/mode/html").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                        case "as": 
                            var JavaScriptMode = ace.require("ace/mode/actionscript").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                        case "py": 
                            var JavaScriptMode = ace.require("ace/mode/python").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                    } 
                    
                }
                var xxa = new XMLHttpRequest(); 
                xxa.addEventListener("load", reqListener); 
                xxa.open("GET", FileToRequest); 
                xxa.send(); 
                break; 
            case "png": case "jpg": case "webp": case "ico": case "svg": 
                $("#preview #file_preview #edit")[0].innerHTML= '<iframe src= ' + '"' + 'https://www.photopea.com/#{&quot;files&quot;:[&quot;' + window.location.origin + FileToRequest + '&quot;],&quot;environment&quot;:{&quot;vmode&quot;:1,&quot;theme&quot;:1,&quot;showtools&quot;:[23,0,1,2,5,6,7,8,9,10,14,16,18,19,20,24,27,31,34,35,36,37,38,39,40,41,47,42,43,51,52,54,55,57,56,58,59,6],&quot;menus&quot;:[[0,0,1,0,0,0,0,0,1],0,0,0,0,0,0,1]}}' + '" ' + '></iframe>'
                break; 
        }

    
    


    }



    
    }
}); 
    

$("#Raw").on("contextmenu", function(e){ 
    e.preventDefault(); 
    !!FileToRequest? window.open(FileToRequest.replace( "raw/p/", "raw/#/" ), '_blank').focus(): 1; 
}); 

$("#Raw").click(function(){ 
    !!FileToRequest? window.open(FileToRequest, '_blank').focus(): 1; 
}); 
$("#Editar").click(function(){ 
    

    
}); 
$('.code-scroll').on('scroll', function () { 
    $("#preview #file_preview #file pre").scrollLeft($(this).scrollLeft()); 
}); 
v()
});
var c = 0
var $this
$(window).on("load", function () {
    responsive();
    $("#chat ul li").on("click",function(){
        if($(this).attr('class').split(' ')[2] == null){
            $(this).addClass( c.toString() );
            newChat($(this), c);
            c++
        }else{
            $dat =$(".chats .chat."+$(this).attr('class').split(' ')[2])
            if(! $dat.hasClass("open")){
                prependClass($dat,"open");  
            }
            $(".chats .chat."+$(this).attr('class').split(' ')[2]+" .newMessage textarea").focus();
        }
    }


        )

  
    $("#chats .chats ").on("mouseover mouseout", ".chatTitle", function() {
        $( this ).find(".close").toggleClass( "visible" );
      });
    $( ".chatTitle .close" ).on("click",
      function() {
        destroyChat($(this));
      }
    );
    $("#chats .chats ").on("click", ".chatTitle", function() {
         $( this ).closest(".chat").toggleClass("open");
       $( this ).parent().find($(".newMessage textarea")).focus()

      });
    $("#chats .chats ").on("click", ".chatTitle .close", function() {
         destroyChat($( this ))
      });
    $(".story").on("click", function () {
        $(".current").removeClass("current");
        $(this).addClass("current")
    })
    $("li").prop("title", function () {
        return $(this).find("p").text();
    });

    $('.knob').trigger(
        'configure', {
            "fgColor": "#2ecc71"
        }
    );

    $(".star").on("click", function () {
        $(this).toggleClass("true")
    });
    $(".bookmark").on("click", function () {
        $(this).toggleClass("true")
    });

    $("#dots").on("click", function () {
        $("#Store").toggleClass("open");
        $("#index-trigger").children().toggleClass("openedStore");
        $("#right-menu #dots").children().toggleClass("openedStore");
        $("#right-menu").children().toggleClass("openedStore");
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        
        if ($("#Store").hasClass("open")) {
            $("header").addClass("open");
           
                 $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                
            
            })
        } else {
           $("header").removeClass("open");
           $('.knob').trigger(
                   'configure', {
                       "fgColor": "#2ecc71"
                   }
               );
           }
          
               
            
        });
    
    $("#profilePic").on("click", function () {
        openProfilePicModal($(this))
    }); 
    
    $("#gallery img").on("click", function () {
        openModal($(this));
        responsive(); 
                $('#target').tooltip()

    });

    $("#close").on("click", function () {

        closeModal()
    });

    $("#wrapper").on("click", function () {
        closeModal()
    });
   
document.onkeydown = function (evt) {
        if(evt.ctrlKey)contrl= true; 
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            if($("#theater").css("display")== "none"){
             destroyChat($(document.activeElement))
        }else{
                        closeModal();

        }
            }
    };
    document.onkeyup = function (evt) {
        // console.log(evt) 
        if(!evt.ctrlKey)contrl= false; 
    };
   
     $(".chat").on("click", function(){})

        if ($("#profileSettings").hasClass("open") && $("#Store").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
$("#chats .chats ").on("click", ".chat", function(ev) {
        if(getSelectionText()  == ""){
        $(this).find("textarea").focus();
}
});
    $("#profileTrigger").on("click", function (e) {
        $(".wrapper").toggleClass("visible")
        $("#right-menu .index-arrow").toggleClass("open");
        $("#profileSettings").toggleClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 




    });
$("#chats .chats").on("keypress", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
    if(ev.keyCode == 13 &&  $(this).val() != 0 && !ev.shiftKey){
      ev.preventDefault();
      var content = this.value;                
       $(this).closest(".chat").find(".messages").append("<p class='sent'>" + content + "</p>")
       $(this).val("")
       scrollBottom($(this).closest(".chat").find(".chatBox .messages"))
  }
 })
$("#chats .chats").on("keyup", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
 
 })
$("#chats .chats").on("keydown", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
 
 })
});

$(window).on("resize", function(){ 
    responsive(); 
}) 

$(document).on("resize", function(){ 
    title(); 
}) 
   
   
function responsive() {

    $("#file_expl").height($(window).height() - $("header").outerHeight() - $("#root").outerHeight());
     $("#picContainer").width($("#theater").width()- $(".comments").outerWidth())
    $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
     $("#picContainer").width($("#bigPic").width());

$("#theater .comments").height($("#theater").height() - 40);
    $("#theater .comments .more").height($("#theater .comments").height() - $("#theater .info").outerHeight(true) - $("#theater .comments .title").outerHeight(true) - $("#theater .comments .options").outerHeight(true));
    $("#theater").height($(window).height() - 40);
    
        $("#sidebar").height($(window).height() - 46);
        $("#sidebar #container").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        $("#sidebar #chat").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        if ($("#resizeBottom").height() > ($(window).height() - $("#sidebar #search").outerHeight() - 51)) {
            $("#resizeBottom").css({
                "height": "50%"
            })
        }

        if (parseInt($(window).width() - $("#sidebar").outerWidth()) <= 600) {
            $("#feed .story").css({
                "padding": "10px 0"
               
            })
            $("#feed .story .info").css({
                "text-align": "center"
            })

        } else {
            $("#feed .story").css({
                "padding": "10px"
            })
            $("#feed .story .info").css({
                "text-align": "left"
            })
        }
        $("#chats .chats").width($(window).width() - $("#sidebar").outerWidth() -10);
        $("#biography").width($(window).width() - $("#sidebar").outerWidth());
        $("#file_expl #preview").width($(window).width() - $("#file_expl #files").width()); 
        $("#file_expl #information_cont").height($("#file_expl").height() - 26);
        $("#preview #file").height($("#preview").height() - $("#preview #options").height()); 
        $("#preview #filePr").height($("#preview").height() - $("#preview #options").height()); 
        $("#preview #edit").height($("#preview").height() - $("#preview #options").height()); 
        $("#preview .file_tree").height($("#preview").height() - $("#options").height()); 
        $("#files .file_tree").height($("#files").height()); 
        if(!!$("#preview pre")[0]){ 
            if($("#preview pre")[0].scrollWidth > $("#preview pre").outerWidth() + 1){$("#preview pre").css({"padding-top": "32px"})}else{$("#preview pre").css({"padding-top": "16px"})}; 
        }
        if($("#Archivo").hasClass("selected")){
            $(".code-filler").width(function () {
                return parseFloat($("#file pre code").width()) + 29.5; 
            });
        }
 }

 function newChat(a, b){
   
        $(".chats").prepend("<div class='chat open "+b.toString()+"'><div class='chatTitle button'><p class='user'>"+ a.find("p").text() +"</p><span class='close'></span></div><div class='chatBox'><div class='messages'></div><div class='newMessage'><textarea rows='1'/><div class='emoticon'></div></div></div>");
        $(".chats .chat:first-child .newMessage textarea").focus();
        $('textarea').textareaAutoSize();

}
function destroyChat(a){
    var i = a.closest(".chat").hasClass("open") ? a.closest(".chat").attr('class').split(' ')[2] : a.closest(".chat").attr('class').split(' ')[1]
    $("#chat ul li."+i).removeClass(i)
    a.closest(".chat").remove();
    $(".chats .chat:first-child .newMessage textarea").focus();

}
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function prependClass(sel, strClass) {
    var $el = jQuery(sel);

    /* prepend class */
    var classes = $el.attr('class');
    classes = strClass +' ' +classes;
    $el.attr('class', classes);
}
function getCaret(el) {
  if (el.selectionStart) {
     return el.selectionStart;
  } else if (document.selection) {
     el.focus();

   var r = document.selection.createRange();
   if (r == null) {
    return 0;
   }

    var re = el.createTextRange(),
    rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }  
  return 0;
}
function sizeMessages(a){
    CBH= a.closest(".chat").find(".chatBox").height()
    NMH = a.closest(".chat").find(".chatBox .newMessage" ).outerHeight()
    a.closest(".chat").find(".chatBox .messages").height(CBH - NMH - 8);
    a.closest(".chat").find(".chatBox .messages").css({bottom: NMH})
}
function scrollBottom(d){
    d.scrollTop(d.prop("scrollHeight"));
}
  
/*separateUrl= function (r3){ 
    sprtdUrl= []; 
    fragment= ""; 
    for(eForensics in r3){ 
        if(parseInt(eForensics) == r3.length - 1 || r3[eForensics] == "/"){ 
            parseInt(eForensics) == r3.length - 1? fragment+= r3[eForensics]: 1; 
            sprtdUrl[sprtdUrl.length]= fragment.replaceAll("%20", " ").replaceAll("%C3%A1", "á").replaceAll("%C3%81", "Á").replaceAll("%C3%A9", "é").replaceAll("%C3%89", "É").replaceAll("%C3%AD", "í").replaceAll("%C3%8D", "Í").replaceAll("%C3%B3", "ó").replaceAll("%C3%93", "Ó").replaceAll("%C3%BA", "ú").replaceAll("%C3%9A", "Ú"); 
            fragment= ""; 
        }else{ 
            fragment+= r3[eForensics]; 
        } 
    } 
      
    return sprtdUrl; 
} */ 
separateUrl= function (r3){ 
    sprtdUrl= []; 
    fragment= ""; 
    for(eForensics in r3){ 
        if(parseInt(eForensics) == r3.length - 1 || r3[eForensics] == "/"){ 
            parseInt(eForensics) == r3.length - 1? fragment+= r3[eForensics]: 1; 
            sprtdUrl[sprtdUrl.length]= decodeURIComponent(fragment)
            fragment= ""; 
        }else{ 
            fragment+= decodeURIComponent(r3[eForensics]); 
        } 
    } 
      
    return sprtdUrl; 
} 
  
updateRoot= function(a7){ 
    $("#root")[0].children[0].innerHTML= "<div><a url= \"/" + username + "\">" + users_name + `</a></div><div><a url="/` + username + `/p">Proyectos</a></div><span><span>` + pNa + `</span></span>`; 

    (!!getToBusiness(decodeURIComponent(window.location.pathname)).length)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= "<div><a url= " + '"/' + username + `/p/` + pId + '"' + ">" + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + `</a></div>`: 1; 

    for(eForensics in a7){ 
        if(window.location.hash== "#infor" && parseInt(eForensics) == a7.length - 1){ 
            genurl= "/" + username + "/p/" + pId + ""; 
                              
            for(idr= 0; idr <= parseInt(eForensics); idr++){ 
                genurl+= "/" + a7[idr]; 
            } 
      
            $("#root")[0].children[0].innerHTML= $("#root")[0].children[0].innerHTML + "<div class= 'noArrow'><a url=" + '"' + genurl + '"' + ">" + a7[eForensics] + "</a></div>" + "<span><span>" + "#infor" + "</span></span>"
        }else if(parseInt(eForensics) != a7.length - 1){ 
            genurl= "/" + username + "/p/" + pId + ""; 
                              
            for(idr= 0; idr <= parseInt(eForensics); idr++){ 
                genurl+= "/" + a7[idr]; 
            } 
      
            $("#root")[0].children[0].innerHTML= $("#root")[0].children[0].innerHTML + "<div><a url= " + '"' + genurl + '"' + ">" + a7[eForensics] + "</a></div>"
        }else{ 
            $("#root")[0].children[0].innerHTML= $("#root")[0].children[0].innerHTML + "<span><span>" + a7[eForensics] + "</span></span>"; 
        } 
    } 

    root.scrollLeft= $( root ).width()

    $('#root div div').not("#root div div:nth-child(1)").not("#root div div:nth-child(2)").click( function(e){ 
        
        th= {isLast: $( this ).closest( "div" ).is( $( "#root > div" ).children().filter( "div" ).last() )}

        //debugger; 
        FileToRequest= ""; 
        $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ); 
       if(!!e.target.getAttribute("url")){ 
        $("#preview .file_tree").removeClass("visible"); 
        $(".code-filler").width(0); 
        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #file")[0].innerHTML=""; 
        $("#preview #file_preview #edit")[0].innerHTML=""; 
        $("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
        $(".file").css({"top": "initial"}); 
        $(".folder_cont").css({"top": "initial"}); 
        history.pushState({page: pageI}, "", e.target.getAttribute("url")); 
        pageI++; 
        updateRoot(separateUrl(getToBusiness(e.target.getAttribute("url")))); 
        $("#root")[0].children[0].lastChild.outerHTML= `<span><span>` + $("#root")[0].children[0].lastChild.textContent + `</span></span>`; 

        $(".file").css({"position": "initial"}); 
        $(".folder_cont").css({"position": "initial"})


    $(this).css({"display": "block"}); 
   
 
    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 

        aar= getToBusiness(decodeURIComponent(window.location.pathname)); 
                 
        spr= ""; 
                 
        if(aar == ""){ 
             el= document.getElementsByClassName("file_tree")[0]; 
            $(".inScope").removeClass("inScope"); 

            for(Colombia= 0; Colombia <= el.children.length - 1; Colombia++){ 
                $(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
            } 
            $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        }else{ 
            $(".inScope").removeClass("inScope"); 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } 

                $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
                $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
                $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
                $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        }

        $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 

        $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 

        if( th.isLast && typeof $T !== "undefined" )( function(){console.log("entered!"); $("#files .file_tree")[0].scrollTop= $T} )()

        title(); 

oF= ( function(){
        for( var k= 0; k <= $( ".inScope" ).length - 1; k++ ){
    if( $( $( ".inScope" )[k] ).is( ".file" ) ){
        return $( $( ".inScope" )[k] ).parent()
  }else{//Loprimerooloúnicoqueencuentre
        return $( $( ".inScope" )[k] ).parent().parent()
    }
}
} )()
/*console.log(oF)*/
if( $( "#root > div > div" ).length == 2 )oF= $( "#files ul.file_tree" )
/*console.log(oF)*/
if(typeof oF === "undefined"){
spr= separateUrl(decodeURI(_w.location.pathname)); 
el= document.getElementsByClassName("file_tree")[0];                               
for(Ty99 in spr){ 
for(eForensics= 0; eForensics <= el.children.length - 1; eForensics++){ 
if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
el= el.children[eForensics]; 
} 
} 
} 
} 

oF= $(el)
}
    /*$("#root div").click(function(){ 
}
    
})*/
       } 
    }); 
} 

getToBusiness= function(r6){ 
    slashCount= 0; 
    iX= 0123666123; 
           
    for(eForensics in r6){ 
        r6[eForensics] == "/"? slashCount++: "Whatever"; 

        (slashCount == 4 && iX == 0123666123)? iX= parseInt(eForensics) + 1: 1; 
    } 
      
    return decodeURIComponent(r6.slice(iX, r6.length))// -1??
}

var getSiblings = function (elem) {

    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }

    return siblings;

}; 

rightClick= function(axx){ 
    if (window.CustomEvent) {
        axx.dispatchEvent(new CustomEvent('contextmenu'));
    } else if (document.createEvent) {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent('contextmenu', true, false);
        axx.dispatchEvent(ev);
    } else { // Internet Explorer
        axx.fireEvent('oncontextmenu');
    }
}

crawl= function(){
    a= setInterval(function(){
        $("*").css("cursor") == "grabbing"? $("*").css({"cursor": "grab"}): $("*").css({"cursor": "grabbing"});  
    }, 256)
}

K0= function(){ 
    token= this.responseText; 
} 

/*var oReq = new XMLHttpRequest(); 
oReq.addEventListener("load", K0); 
oReq.open("get", "https://cdn.filestackcontent.com/4cpMUkITTAGimI5om7YA"); 
oReq.send(); */ 

ee= function(){ 
    (function(){clearInterval(a); $("*").css({"cursor": ""}); })(); 

    $("#information").html("<ul id= 'historia'></ul>"); 

    for(eee in JSON.parse(this.responseText)){ 
        parseInt(eee) != 0? $("#information #historia").append("<li sha= '" + JSON.parse(this.responseText)[eee].sha+ "'>" + JSON.parse(this.responseText)[eee].commit.message.slice(0, JSON.parse(this.responseText)[eee].commit.message.indexOf("\n\n")) + "</li>"): 115161; 
    }; 

    title(); 

    $("#information #historia li").on("click", function(){ 
        FileToRequest= "https://raw.githubusercontent.com/LirilCo/Lirilco.github.io/" + $(this).attr("sha") + "/" + username + "/raw/p/" + pId + "/" + getToBusiness(window.location.pathname); 
        $("#information #historia li.selected").removeClass("selected"); 
        $(this).addClass("selected"); 
        if($("#Archivo").hasClass("selected")){ 
            $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
            $("#preview #file_preview #filePr")[0].innerHTML= ""; 
            $("#preview #file_preview #edit")[0].innerHTML= ""; 
            switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                case "png": 
                case "jpg": 
                case "webp": 
                case "ico": 
                case "svg": 
                    $("#preview #file_preview #file")[0].innerHTML= "<img src=" + '"' + FileToRequest + '"' + "></img>"; 
                    break; 
                case "webm": 
                case "mp4": 
                    $("#preview #file_preview #file")[0].innerHTML= "<video src=" + '"' + FileToRequest + '"' + " controls= 'true' autoplay= 'true'></video>"; 
                    break; 
                default: 
                    $("#preview #file_preview #file")[0].innerHTML= "<pre onchange= 'alert(" +"'Yayy'" + ");' data-src=" + '"' + FileToRequest + '"' + "></pre>"; 
                    const mainNode = document.getElementsByTagName('pre')[0]

                    function callback(mutationsList, observer) {
                        mutationsList.forEach(mutation => {
                            if (mutation.attributeName === 'data-src-status') {
                                //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                                $("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
                            }
                        })
                    }
                        
                    const mutationObserver = new MutationObserver(callback)
                        
                    mutationObserver.observe(mainNode, { attributes: true }) 
                        
                    function create(t) {
                    // create an observer instance
                    var observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                        var foo = t.getAttribute("data-src-status")
                        
                        if (foo == "loaded")
                            responsive(); 
                        });
                    });
                    // configuration of the observer
                    var config = {
                        attributes: true
                    };
                        
                    // pass in the target node, as well as the observer options
                    observer.observe(t, config);
                    }
                                              
                    Prism.highlightAll(); 
                    break; 
            } 
        }else if($("#Live").hasClass("selected")){ 
            $(".code-filler").width(0); 
            $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
            $("#preview #file_preview #filePr").css({"visibility": "visible", "opacity": "1"}); 
            $("#preview #file_preview #file")[0].innerHTML= ""; 
            $("#preview #file_preview #edit")[0].innerHTML= ""; 

            if( !$( "#Live" ).is( ".modified" ) ){
                $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=" + '"' + FileToRequest + '"' + "></iframe></div>"; 
            }else{
                function reqListener () {
                    $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src=''></iframe></div>"; 

                    respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 
                            
                    // //console.log( respuesta );  
                    // for( t in tagReplacer( respuesta ) ){  
                    //     if(tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )] != undefined) 
                    //         if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ){  
                    //             respuesta= respuesta.slice( 0, tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][0] ) + "<script class= 'scriptModificado' id= " + '"' + get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + '"' + ">\n\n /*" + get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][1] - 1, respuesta.length ) ;  
                    //         }  
                    //         if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] )  ) ) ){  
                    //             respuesta= respuesta.slice( 0, tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][0] ) + "<style class= 'styleModificado' id= " + '"' + get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + '"' + ">\n\n /*" + get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][1] - 1, respuesta.length ) ;  
                    //         };  
                    //     /*console.log( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */  
                    // };  


                    console.log(respuesta); respuesta= "<pre>" + respuesta.replaceAll("<", "&lt;").replaceAll(">", "&gt") + "</pre>"; 

                    var ifrm= document.getElementsByTagName('iframe')[0]; 
                            
                    ifrm= (ifrm.contentWindow)? ifrm.contentWindow: (ifrm.contentDocument.document)? ifrm.contentDocument.document: ifrm.contentDocument; 
                    ifrm.document.open(); 
                    ifrm.document.write( respuesta ); 
                    ifrm.document.close(); 
                };

                var xxa = new XMLHttpRequest(); 
                xxa.addEventListener("load", reqListener); 
                xxa.open("GET", FileToRequest); 
                xxa.send();     
            }
        }else{ 
            $(".code-filler").width(0); 

            $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #file")[0].innerHTML= ""; 
        a= ""; 

        switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
            case "js": case "css": case "html": case "as": case "py": 
                function reqListener () {
                    respuestaOriginal= this.responseText; 
                    $("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
                    ace.require("ace/ext/language_tools"); 
                    editor = ace.edit("editor"); 
                    editor.setTheme("ace/theme/monokai"); 
                    editor.setValue( this.responseText ); 
                                                          
                    if( localStorage.getItem( FileToRequest ) != null ){
                        (function(){editor.setValue( JSON.parse( localStorage.getItem( FileToRequest ) ).value ); $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" )})(); 
                                                                                                              
                        session= JSON.parse( JSON.parse( localStorage.getItem(FileToRequest) ).undoManager ); 
                                                              
                        session.folds.forEach(function(fold){ 
                            editor.session.addFold("...", ace.Range.fromPoints(fold.start, fold.end)); 
                        }); 
                        editor.session.setAnnotations(session.annotations); 
                        editor.session.setBreakpoints(session.breakpoints); 
                        editor.session.$undoManager.$undoStack= session.history.undo; 
                        editor.session.$undoManager.$redoStack= session.history.redo; 
                        editor.session.$undoManager.$rev= session.history.rev; 
                        editor.session.$undoManager.mark= session.history.mark; 
                        editor.session.setMode(session.mode); 
                        editor.session.setScrollLeft(session.scrollLeft); 
                        editor.session.setScrollTop(session.scrollTop); 
                        editor.session.selection.fromJSON(session.selection); 
                    } 
                      
                    editor.getSession().on('change', function(){ 
                        localStorage.setItem( FileToRequest, JSON.stringify( {value: editor.getValue(), undoManager: JSON.stringify( editor.getSession() )} ) ); 
                        JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? $( "#file_expl #preview #file_preview #options ul li#Editar" ).removeClass( "modified" ): $( "#file_expl #preview #file_preview #options ul li#Editar" ).addClass( "modified" ); 
                        JSON.parse( localStorage.getItem( FileToRequest ) ).value === editor.valorOriginal? localStorage.removeItem( FileToRequest ): 1; 
                    }); 

                    setTimeout(function(){ 
                        editor.focus(); 
                    }, 310); 

                    editor.valorOriginal= this.responseText; 
                    editor.setOption("enableEmmet", true) 
                    editor.setOption("enableBasicAutocompletion", true); 
                    editor.setOption("enableLiveAutocompletion", true); 
                    editor.setOption("enableSnippets", true); 
                    switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                        case "js": 
                            var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                        case "css": 
                            var JavaScriptMode = ace.require("ace/mode/css").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                        case "html": 
                            var JavaScriptMode = ace.require("ace/mode/html").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                        case "as": 
                            var JavaScriptMode = ace.require("ace/mode/actionscript").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                        case "py": 
                            var JavaScriptMode = ace.require("ace/mode/python").Mode; 
                            editor.session.setMode(new JavaScriptMode()); 
                            break; 
                    } 
                    
                }
                var xxa = new XMLHttpRequest(); 
                xxa.addEventListener("load", reqListener); 
                xxa.open("GET", FileToRequest); 
                xxa.send(); 
                break; 
            case "png": case "jpg": case "webp": case "ico": case "svg": 
                $("#preview #file_preview #edit")[0].innerHTML= '<iframe src= ' + '"' + 'https://www.photopea.com/#{&quot;files&quot;:[&quot;' + window.location.origin + FileToRequest + '&quot;],&quot;environment&quot;:{&quot;vmode&quot;:1,&quot;theme&quot;:1,&quot;showtools&quot;:[23,0,1,2,5,6,7,8,9,10,14,16,18,19,20,24,27,31,34,35,36,37,38,39,40,41,47,42,43,51,52,54,55,57,56,58,59,6],&quot;menus&quot;:[[0,0,1,0,0,0,0,0,1],0,0,0,0,0,0,1]}}' + '" ' + '></iframe>'
                break; 
        }

    
    


    }
    }) 
} 
  
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