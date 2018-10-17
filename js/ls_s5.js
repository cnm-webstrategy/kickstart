document.addEventListener('DOMContentLoaded', function () {   
 
  var p = Popcorn('#jp_audio_0')
  .volume(0)
  .play()
  //LINKS   

			



			//FOOTNOTES
		    .footnote({
				start: 0 , // seconds
				end: .2, // seconds
				text: '',
				target: 'footnote'
			}) 
		    .footnote({
				start: .2 , // seconds
				end: 5.20, // seconds
				text: 'Below are learning style techniques you can use to help support your learning.',
				target: 'footnote2'
			}) 
			.footnote({
			    start: 5.20, // seconds
				end: 13.71, // seconds
				text: 'Please click the play button next to a term to learn more about it.',
				target: 'footnote2'
			}) 
		    .footnote({
				start: 13.71, // seconds
				end: 42, // seconds
				text: '',
				target: 'footnote2'
			})
			

			
			}, false); 

/*







}, false);    */