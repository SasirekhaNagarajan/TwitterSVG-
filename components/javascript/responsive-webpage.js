Lyte.Component.register("responsive-webpage",{
	data : function(){
		return {
			bgcolor : Lyte.attr("string",{'default':'theme7'}),
			previousClass : Lyte.attr("string")
		}
	},

	init : function() {
		window.responsiveWebpage = this;
		twttr.ready(function(event){
			twttr.events.bind('loaded',function (event) {
				event.widgets.forEach(function (widget) {
					if(widget.id == "twitter-widget-0"){
						widget.contentWindow.addEventListener("click", function(event1){
							event1.preventDefault();
							let tweetId = responsiveWebpage.actions.parentNodeOfClass(event1.target, "timeline-Tweet").dataset.tweetId;
							responsiveWebpage.actions.openTwitterModal(tweetId);
						});
					}
				});			   
			});
			
		});

		document.addEventListener("DOMContentLoaded", function(event) { 
			document.getElementById("popupTweet").addEventListener("click", function(event){
				if(event.target.id != "popupDiv"){
					this.closeTwitterModal();
				}
			});		
		});
	},
	
	createTweet : function(response){
		let modelContent = document.getElementById("popupDiv");
		modelContent.innerHTML = response.html;
		twttr.widgets.load();	
	},

	removeAnimation : async function(option) {
		let svgZoho = this.$node.querySelector('.zohoLogo');
		svgZoho.classList.remove(option);
	},	

	actions : {
		applyTheme : function(bgcolor) {
			this.setData('bgcolor',bgcolor);
		},

		openTwitterModal : function(tweetId){
			let script = document.createElement('script');
			let url = "https://publish.twitter.com/oembed?url=https://twitter.com/zoho/status/"+tweetId;
			script.src = url + "&callback=responsiveWebpage.createTweet" ;
			document.getElementsByTagName('head')[0].appendChild(script);
		
			let modal = document.getElementById('popupTweet');	
			modal.style.display = "block";
			sessionStorage.setItem('lastTwitterId', tweetId);
		},
	
		closeTwitterModal : function(){
			let modal = document.getElementById('popupTweet');
			modal.style.display = "none";
		},
		
		parentNodeOfClass : function(element, classname) {
			if (element.className.split(' ').indexOf(classname)>=0) {
				return element;
			} 
			else {
				return element.parentNode && this.parentNodeOfClass(element.parentNode, classname);
			}
		},

		applyAnimation : function(option){
			let svgZoho = this.$node.querySelector('.zohoLogo');
			svgZoho.classList.remove(this.data.previousClass);
			svgZoho.classList.add(option);
			this.setData('previousClass',option);
		}
	}
});

