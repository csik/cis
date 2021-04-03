  $(window).on('load', function(){
   if ( !document.location.search.includes('as_q') && document.location.pathname.split('/')[1] == 'cusearch') {
	  var query = document.location.pathname.split('/');
	  var key = query[query.length-1];
	  window.location = '/cusearch?as_q=' + key;
	 // event.preventDefault();
  }