document.addEventListener('DOMContentLoaded', function () {   
 
  var p = Popcorn('#jp_audio_0')
  .volume(0)


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
				end: 3.2, // seconds
				text: 'How many hours are you left with at the end of the week?',
				target: 'footnote'
			}) 
			.footnote({
			    start: 3.2, // seconds
				end: 6.4, // seconds
				text: 'Where and how are you spending most of your time?',
				target: 'footnote'
			}) 
			.footnote({
			    start: 6.4, // seconds
				end: 9.9, // seconds
				text: 'Is there a place that you are using more time than necessary? ',
				target: 'footnote'
			}) 
			.footnote({
				start: 9.9, // seconds
				end: 11.8, // seconds
				text: 'How can you change that?',
				target: 'footnote'
			})
			.footnote({
				start: 11.8, // seconds
				end: 21, // seconds
				text: 'With these questions in mind make a list of productive and unproductive uses of time.',
				target: 'footnote'
			})			
	
}, false); 

/*







}, false);    */