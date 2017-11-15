function loadPosts() {
$.ajax({
  url: "/posts/"  

})
  .done(function( data ) {      
    $(data).find("tbody tr a").each(function(i){
        if(i>=4)
        {           
            //this will iterate all folders and files found there 
				document.write("hello");
        }

    });

});
}