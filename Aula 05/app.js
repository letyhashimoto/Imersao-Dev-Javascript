var arrayVideos = [
	"RDu9Q0nhRSg",
	"nSuy2l2oFRc",
	"xvkuNF_8Coc",
	"0-Gtl8nAw3c",
	"hm-dumJj6-Q",
	"M_0mHWeY98E",
	"DIruIZ51614",
	"Lc14sqm3G08",
	"_j-2a1nFZ_A",
	"tQ6DNZhO-7E",
	"w3NcXc4NiAs",
	"cfEnbDO-Mjg",
	"F_amkJL27T0",
	"xGUUadGTZ5M"
];

document.addEventListener("click", function (event) {
	if (!event.target.closest(".ythumb")) return;
	let videoId = event.target.getAttribute("data-embed");
	console.log(videoId);
	loadVideo(videoId);
});

arrayVideos.forEach(function (id) {
	addThumb(id);
});

function addThumb(videoId) {
	const image = document.createElement("img");
	image.src = "https://img.youtube.com/vi/" + videoId + "/0.jpg";
	image.className = "ythumb";
	image.setAttribute("data-embed", "https://www.youtube.com/embed/" + videoId);
	document.getElementById("thumbs").append(image);
}

function loadVideo(videoEmbed) {
	let embedCode =
		'<iframe width="560" height="315" src="' +
		videoEmbed +
		'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	document.getElementById("player").innerHTML = embedCode;
}
