function callAssistant(){
	document.getElementById('callAssis').innerHTML = 'Hello there! Why don\'t you pick something that looks promising?';
}

function myAssistantAdviceWomen() {
	var r = Math.floor((Math.random() * 100) + 1);
	switch (r%6) {
    case 0:
        document.getElementById("adv1").style.backgroundImage = "url('fractal.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Your inner new-yorker fashionista deepest desire.';
		document.getElementById('callAssisPara').innerHTML = 'Life is too short to dress boring.';
		document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
        break;
    case 1:
        document.getElementById("adv2").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'A symbol of power, grace and elegance.';
		document.getElementById('callAssisPara').innerHTML = 'Worn by Queen Mary the 5th at a Charity Ball, this dimamond crown will never be out of style.';
        break;
    case 2:
        document.getElementById("adv3").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Black and elegant with soft bow on the side, this is the best choice if you\'re planning to visit London any time soon';
		document.getElementById('callAssisPara').innerHTML = 'Or if you\'re feeling nostalgic. Or you binge-watch Downton Abbey in your spare time';
        break;
    case 3:
        document.getElementById("adv4").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'A little bit of mistery. A lot of elegance.';
		document.getElementById('callAssisPara').innerHTML = 'This is definitely a statement piece. Fitted for parties, fancy dinners, horse racing watching or just shocking your friends and family.';
        break;
    case 4:
        document.getElementById("adv5").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Obsessed with chinese culture? You should be. They have best hairstyles.';
		document.getElementById('callAssisPara').innerHTML = 'Now, before you go to your stylist and ask him to make your hair look like this, see here how it would look on you. It\'s not for everyone, you know?';
        break;
    case 5:
        document.getElementById("adv6").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Never hurts having this one in your closet!';
		document.getElementById('callAssisPara').innerHTML = 'Go ahead...See how it would look to be sun-worry-wrinkle-free!';
        break;
	}
}

function myAssistantAdviceMale() {
	var r = Math.floor((Math.random() * 100) + 1);
	switch (r%6) {
    case 0:
        document.getElementById("adv1").style.backgroundImage = "url('fractal.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Passionate of racing? Say no more.';
		document.getElementById('callAssisPara').innerHTML = 'Who said that being safe isn\'t sexy.';
		document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
        break;
    case 1:
        document.getElementById("adv2").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Look outside. Winter isn\'t going anywhere.';
		document.getElementById('callAssisPara').innerHTML = 'Neither are army-green beanies. They never go out of style.';
        break;
    case 2:
        document.getElementById("adv3").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Don\'t pick this one if you don\'t wanna stand out!';
		document.getElementById('callAssisPara').innerHTML = 'We get some Indiana Jones, adventure vibes with this, don\'t you?';
        break;
    case 3:
        document.getElementById("adv4").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Here you go: your next Halloween costume.';
		document.getElementById('callAssisPara').innerHTML = 'You\'re welcome!';
        break;
    case 4:
        document.getElementById("adv5").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Just your basic Iluminati souvenires.';
		document.getElementById('callAssisPara').innerHTML = 'I suggest you don\'t enquire more if you wanna keep your head.';
        break;
    case 5:
        document.getElementById("adv6").style.backgroundImage = "url('fractal.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Yea, you\'re a guy. Still, it never hurts having this one in your closet!';
		document.getElementById('callAssisPara').innerHTML = 'Go ahead...See how it would look to be sun-worry-wrinkle-free!';
        break;
	}
}

function assisInFittingRoom(){
	var r = Math.floor((Math.random() * 100) + 1);
	switch (r%9) {
	case 0:
		document.getElementById('callAssisHeader').innerHTML = 'WHOA! You look magnificent. Fits you like a glove!';
		break;
	case 1:
		document.getElementById('callAssisHeader').innerHTML = 'Well, they say it\'s inner beauty that counts...';
		break;
	case 2:
		document.getElementById('callAssisHeader').innerHTML = 'I should just take my glasses off for this one... Now, much better!';
		break;
	case 3:
		document.getElementById('callAssisHeader').innerHTML = 'I would consider modelling if I were you!';
		break;
	case 4:
		document.getElementById('callAssisHeader').innerHTML = 'This color suits you. Brilliant.';
		break;
	case 5:
		document.getElementById('callAssisHeader').innerHTML = 'I\'m here if you need anything.';
		break;
	case 6:
		document.getElementById('callAssisHeader').innerHTML = 'Who am I to judge? You should ask a real person\'s opinion.';
		break;
	case 7:
		document.getElementById('callAssisHeader').innerHTML = 'Your head is too big for this. Do you want me to see if we have a bigger size? Haha.';
		break;
	case 8:
		document.getElementById('callAssisHeader').innerHTML = 'I\'m speachless.';
		break;
	}
}

function aux(){
var video = document.querySelector("#videoElement");
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    console.log("errooooooor");
}
}

