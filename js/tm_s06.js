document.addEventListener('DOMContentLoaded', function () {   
 
  var p = Popcorn('#jp_audio_0')
  .volume(0)


  //LINKS   

			//FOOTNOTES
		    .footnote({
				start: 0 , // seconds
				end: .3, // seconds
				text: '',
				target: 'footnote'
			})
		    .footnote({
				start: .3 , // seconds
				end: 4.1, // seconds
				text: 'How many hours are you left with at the end of the week?',
				target: 'footnote'
			}) 
			.footnote({
			    start: 4.1, // seconds
				end: 8.7, // seconds
				text: 'Where and how are you spending most of your time?',
				target: 'footnote'
			}) 
			.footnote({
			    start: 8.7, // seconds
				end: 14.75, // seconds
				text: 'Is there a place that you are using more time than necessary? ',
				target: 'footnote'
			}) 
			.footnote({
				start: 14.75, // seconds
				end: 20.3, // seconds
				text: 'How can you change that?',
				target: 'footnote'
			})
			.footnote({
				start: 20.3, // seconds
				end: 26, // seconds
				text: 'With these questions in mind make a list of productive and unproductive uses of time.',
				target: 'footnote'
			})			
		
						
}, false); 

/*







}, false);    */