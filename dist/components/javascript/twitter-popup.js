Lyte.Component.register("twitter-popup", {
_template:"<template tag-name=\"twitter-popup\"> <blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Sunsets don't get much better than this one over <a href=\"https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw\">@GrandTetonNPS</a>. <a href=\"https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw\">#nature</a> <a href=\"https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw\">#sunset</a> <a href=\"http://t.co/YuKy2rcjyU\">pic.twitter.com/YuKy2rcjyU</a></p>— US Department of the Interior (@Interior) <a href=\"https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw\">May 5, 2014</a></blockquote> <script async=\"\" src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script> </template>",
_dynamicNodes : [],


_observedAttributes :["tweetLink"],
	data : function(){
		return {
			tweetLink: Lyte.attr('string')
		};	
	}
});
