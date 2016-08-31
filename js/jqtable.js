(function($) {

  //Sorting function
  
   $.fn.sortFunction = 	function(list, options){  
   options = options == "desc" ? true : false;
   var sortedList = [];
   //alert("test.sort");
   if(options)
   {
     sortedList = list.sort(function(a, b) {
		        var upA = $(a)[0].col1.toUpperCase();
		        var upB = $(b)[0].col1.toUpperCase();		
				return (upA > upB) ? -1 : (upA < upB) ? 1 : 0;
			});	
   }
   else
   {
      sortedList = list.sort(function(a, b) {
		        var upA = $(a)[0].col1.toUpperCase();
		        var upB = $(b)[0].col1.toUpperCase();		
				return (upA < upB) ? -1 : (upA > upB) ? 1 : 0;
			});
   }
   return sortedList;
}

//Searching function

$.fn.searchFunction = function(list, searchKey){
  searchKey = searchKey.toLowerCase();
  var searchedList = [];
  if(searchKey.length > 0)
  {
    $.each(_listItem, function(key, value){				 
						 var title = value.col1;
						 var _listItemLetter = (title[0].toLowerCase());				 
						 if (title.toLowerCase().indexOf(searchKey) >= 0)
						 {
							 searchedList.push(this);
						 }
		});
  }
  else
  {
    alert("Enter some keyword");
  }
  
  return searchedList;
}
})(jQuery);
