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
				end: 5.79, // seconds
				text: 'As you can see there can be a lot of different underlying causes of test anxiety.',
				target: 'footnote'
			}) 
			.footnote({
			    start: 5.79, // seconds
				end: 10.56, // seconds
				text: 'Now we are going to focus on some strategies for dealing with test anxiety.',
				target: 'footnote'
			}) 
			.footnote({
			    start: 10.56, // seconds
				end: 20, // seconds
				text: 'We will break these up into three different sections: before, during, and after tests.',
				target: 'footnote'
			}) 
}, false); 

/*







}, false);    */