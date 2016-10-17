window.onload = function() {
	      $(function() {
	        $('a[rel="insert"]').click(function() {
	          $('#'+$(this).attr('href')).fadeIn(300);
	          return false;
	        });
	      });
}
