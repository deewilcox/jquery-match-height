<script type="text/javascript">
  jQuery(document).ready(function($){
    var sidebar = $("#sidebar").height();
    var main = $("#main_content").height();
	
	if(sidebar > main){
		$("#main_content").css('height', sidebar);
		//$("#main_content").html("<p>Sidebar is taller than main.</p>");
	}
	
	else if (main > sidebar) {
		$("#sidebar").css('height', main);
		//$("#main_content").html("<p>Main is taller than sidebar.</p>");
	}
	
	else {
		//$("#main_content").html("<p>No one knows which one is taller.</p>");
	}
});
</script>	
