module.export = function sortFunction(list, options){
  //list.naturalSort = list.naturalSort || function(itemA, itemB, options){
   options.desc = options.desc == "desc" ? true : false;
   var sortedList = [];
   
   if(desc)
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
