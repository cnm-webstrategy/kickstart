document.addEventListener('DOMContentLoaded', function () {   
 
  var p = Popcorn('#jp_audio_0')
  .volume(0)
  .play()
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
				end: 3.267, // seconds
				text: 'Now, let’s look at some strategies for during the test.',
				target: 'footnote2'
			}) 
		    .footnote({
				start: 3.267, // seconds
				end: 10, // seconds
				text: 'Please click the play button next to a term to learn more about it.',
				target: 'footnote2'
				
			}) 				}, false); 

/*







}, false);    */