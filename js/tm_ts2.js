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
				start: .2, // seconds
				end: 6.6, // seconds
				text: 'In order to be a successful student you should study at least 2 hours for every hour spent in class.',
				target: 'footnote'
			}) 
			.footnote({
			    start: 6.6, // seconds
				end: 13.1, // seconds
				text: 'For example, if you are taking 12 credit hours it means you are spending 12 hours a week in class.',
				target: 'footnote'
			}) 
			.footnote({
			    start: 13.1, // seconds
				end: 18.6, // seconds
				text: 'To calculate your study time enter your total number of credit hours in the box below.',
				target: 'footnote'
			}) 
			.footnote({
				start: 18.6, // seconds
				end: 25, // seconds
				text: 'Look at your time remaining. If there is time left over, how can you use it productively?',
				target: 'footnote'
			})
			.footnote({
				start: 25, // seconds
				end: 30.8, // seconds
				text: 'If you have a negative amount of time left it means you need to make adjustments to your schedule.',
				target: 'footnote'
			})			
		    .footnote({
				start: 30.8 , // seconds
				end: 34.8, // seconds
				text: 'Great! Thanks for completing the time survey exercise!',
				target: 'footnote'
			}) 
			.footnote({
			    start: 34.8, // seconds
				end: 38.6, // seconds
				text: 'Now let’s look at those results, and evaluate your time usage.',
				target: 'footnote'
			}) 
			.footnote({
				start: 38.6, // seconds
				end: 41, // seconds
				text: 'Continue______________________>',
				target: 'footnote3'
			})
			.footnote({
				start: 14.6, // seconds
				end: 41, // seconds
				text: '<span class="hightlight_arrowS"> > </span>',
				target: 'credit'
			})							
}, false); 

/*







}, false);    */