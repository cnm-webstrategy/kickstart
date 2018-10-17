/* HTML5 background audio player 
* Created: Jan 31st, 2012 by DynamicDrive.com. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/

jQuery.noConflict()

var bgaudioplayer2 = (function($){

	var audio5support = !!document.createElement('audio').canPlayType
	var d_setting = {autoplay:true, loop:true, persistTimeLine:false, volume:0.5, volumelevels:10}

	function bgaudioplayer2(setting){
		var s = $.extend({}, d_setting, setting)
		var persistTimeLine = s.persistTimeLine // cache s.persistTimeLine Boolean
		delete s.persistTimeLine
		var audioplayer = document.getElementById( s.audioid )
		var $audioui = $('#' + s.audiointerface)
		var playerinstance2 = this
		if (!audio5support){ // if browser doesn't support HTML5 audio
			$audioui.hide()
			return
		}

		if (persistTimeLine){ // if persist last known playback info
			if (getCookie('persist_' + s.audioid)){
				try{
					var persistvals =  getCookie('persist_' + s.audioid).split('|') // retrieve values as array [timeline, ispaused, volume]
				}
				catch(e){
					var persistvals = [0, 1, 0.1]
				}
				persistvals = {timeline: parseInt(persistvals[0]), ispaused: !!parseInt(persistvals[1]), volume: parseFloat(persistvals[2])}
				s.autoplay = !persistvals.ispaused //disable autoplay if ispaused is true
				s.volume = persistvals.volume
				if (persistvals.timeline > 0 && !persistvals.ispaused){ // if player should resume auto playing at last known timeline
					audioplayer.load() //preload music
					s.autoplay = false // temporarily set autoplay to false while script loads audio file
					$(audioplayer).on('loadeddata', function(){ // when audio file fully loads
						audioplayer.currentTime = persistvals.timeline
						audioplayer.play2()
					})
				}
			}
			$(window).on('unload', function(){ //persist audio timeline, play2 state, and volume
				setCookie('persist_' + s.audioid, audioplayer.currentTime + '|' + (audioplayer.paused? 1 : 0) + '|' + audioplayer.volume)
			})
		}

		for (prop in s){
			if (s.hasOwnProperty(prop))
				audioplayer[prop] = s[prop] // Add defined properties to audioplayer DOM object
		}

		if (s.autoplay)
			audioplayer.play2('play') // explicitly play2 audio, as in IE9, presence of autoplay=true attribute doesn't seem to do it

		this.playfile = function(action){
			if (action == 'pause')
				audioplayer.pause()
			else if (action == 'play')
				audioplayer.play2()
			else if (action == 'rewind'){
				audioplayer.currentTime = 0
				this.playfile()
			}
			else{ //pause or play2 depending on current state
			if (audioplayer.paused)
				audioplayer.play2()
			else
				audioplayer.pause()
			}
		if ($playcontrol.length == 1){ // if 'play2' button exists within audioui
			var controltype = $playcontrol.data('specs').controltype // get play2 button type (image, input button or div)
			var controlvals = $playcontrol.data('specs').controlvals // get label for each button state (play2 and pause)
			$playcontrol
				.attr('title', (audioplayer.paused)? 'Play' : 'Pause')
				.get(0)[controltype] = (audioplayer.paused)? controlvals[0] : controlvals[1]
		}
		}

		this.setvolume = function(val, previewval){
			if (val!=''){
				audioplayer.volume = (typeof val=='number')? val : audioplayer.volume+new Number(val)
				$volbars.removeClass('on').slice(0, val*s.volumelevels).addClass('on') // add "on" class to relevant vol divs
				$volcontrol.css({opacity:0.5}).animate({opacity:1}, 70) // fade vol container into view
			}
			if (previewval){
				$volbars.removeClass('on').slice(0, previewval*s.volumelevels).addClass('on')
			}
		}

		var $playcontrol = (function(){ // define plus reference play2 button within audioui
			var $control = $audioui.find('.play2:eq(0)')
			var autoplay = (persistTimeLine && persistvals)? !persistvals.ispaused : s.autoplay
			var controltype = $control.is('img')? 'src' : ($control.is('input[type="button"]')? 'value' : 'innerHTML') // get play button type (image, input button or div)
			if (controltype == 'src')
				$control.data('playsrc', $control.attr('src')) // cache src to "play" state image
			var controlvals = (controltype=='src')? [$control.data('playsrc'), $control.data('pausesrc')] : ['Play', 'Pause'] // get label for each button state (play and pause)
			if (autoplay){
				$control.get(0)[controltype] = controlvals[1]
			}
			$control.click(function(){
				playerinstance2.playfile()
			})
			$control
				.attr('title', (!autoplay)? 'Play' : 'Pause')
				.data('specs', {controltype: controltype, controlvals: controlvals})
			return $control			
		})()

		var $restartcontrol = $audioui.find('.rewind:eq(0)') // define plus reference rewind button within audioui
			.attr('title', 'Rewind')
			.on('click', function(){
				playerinstance2.playfile('rewind')
			})
		
		var $volcontrol = $audioui.find('div.volume:eq(0)') // define volume control
			.css({display: 'inline-block'})
			.html((function(){
				for (var sliderhtml='', i=1; i<=s.volumelevels; i++) // create the individual volume bars
					sliderhtml += '<div data-vol="' +  i/s.volumelevels +'" title="Set volume: ' + Math.round(i/s.volumelevels*100) +'%"></div>'
				return sliderhtml	
			}()))
			.on('mouseover', function(e){
				if (e.target.getAttribute('data-vol'))
					playerinstance2.setvolume('', e.target.getAttribute('data-vol'))
			})
			.on('mouseleave', function(){
				playerinstance2.setvolume('', audioplayer.volume)
			})
			.on('click', function(e){
				if (e.target.getAttribute('data-vol'))
					playerinstance2.setvolume(parseFloat(e.target.getAttribute('data-vol')))
			})

		var $volbars = $volcontrol.find('div') // reference the individual volume bars

		this.setvolume(audioplayer.volume)

		function getCookie(Name){ 
			var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
			if (document.cookie.match(re)) //if cookie found
				return document.cookie.match(re)[0].split("=")[1] //return its value
			return null
		}
	
		function setCookie(name, value){
			document.cookie = name+"="+value+"; path=/"
		}

		return this

	} //end immediate function

	return bgaudioplayer2

})(jQuery)