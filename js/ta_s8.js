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
				end: 5.76, // seconds
				text: 'After a test there are some strategies that you can employ that will encourage good mental health and feelings. ',
				target: 'footnote2'
			}) 
		    .footnote({
				start: 5.76 , // seconds
				end: 10, // seconds
				text: 'Please click the play button next to a term to learn more about it.',
				target: 'footnote2'
				
			}) 			}, false); 