// Author Mark Boas  @maboa
$(document).ready(function(){ 
	

	
	
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {   
			$(this).jPlayer("setMedia", { 
				// need to put mp3 first so that iOS works (I think) but may mean Chrome uses it instead of ogg - Investigate!
				mp3: "audio/tm_s10.mp3", 
				oga: "audio/tm_s10.ogg"
				
			}).jPlayer("play").jPlayer("volume", 1.00); // required for Safari, which seems (ironically) to autoplay by default (could be a jP issue)
			checkStartParam(); 
		},
			swfPath: "js",
			solution: "html",
		supplied: "oga, mp3",
		wmode: "window",
	
	
		
		//warningAlerts: true,
		//errorAlerts:true
	})
});

