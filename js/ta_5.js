document.addEventListener('DOMContentLoaded', function () {   
 
  var p = Popcorn('#jp_audio_0')
  .volume(0)


  //LINKS   

			//FOOTNOTES
		    .footnote({
				start: 0 , // seconds
				end: .1, // seconds
				text: '',
				target: 'footnote2'
			}) 
		    .footnote({
				start: .1 , // seconds
				end: 3.42, // seconds
				text: 'Negative self-talk can include 11 different types.',
				target: 'footnote2'
			}) 
			.footnote({
			    start: 3.42, // seconds
				end: 11, // seconds
				text: 'Please click the play button next to a term to learn more about it.',
				target: 'footnote2'
			}) 
		
	}, false); 

/*







}, false);    */