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
				end: 3.83, // seconds
				text: 'In this workshop we will cover two main areas.',
				target: 'footnote'
			}) 
			.footnote({
			    start: 3.83, // seconds
				end: 7.46, // seconds
				text: 'First, we will examine how you currently take notes.',
				target: 'footnote'
			}) 
			.footnote({
				start: 7.46, // seconds
				end: 15.58, // seconds
				text: 'Second, we will learn some new note-taking techniques that you can add to your current note-taking style to make it even stronger.',
				target: 'footnote'
			})
		    .footnote({
				start: 15.58, // seconds
				end: 42, // seconds
				text: 'Continue______________________^',
				target: 'footnote'
			})
			
			
		    .footnote({
				start: .2, // seconds
				end: 3.83, // seconds
				text: '<img src="images/ws/nt_2_1.jpg" width="1022" height="310" />',
				target: 'bodynote'
			})

		    .footnote({
				start: 3.83, // seconds
				end: 7.46, // seconds
				text: '<img src="images/ws/nt_2_2.jpg" width="1022" height="310" />',
				target: 'bodynote'
			})			
		    .footnote({
				start: 7.46, // seconds
				end: 42, // seconds
				text: '<img src="images/ws/nt_2_3.jpg" width="1022" height="310" />',
				target: 'bodynote'
			})

			
			}, false); 

/*







}, false);    */