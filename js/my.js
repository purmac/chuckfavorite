var snd = new Audio();

function PlaySound(){
		snd.play();
}

function LoadSound(snd_Num){
	switch(snd_Num)
	{
		case 1:
			snd.src='./media/think.m4a';
			PlaySound();
			break;
		case 2:
			snd.src='./media/google.m4a';			
			PlaySound();
			break;
		case 3:
			snd.src='./media/finite.m4a';
			PlaySound();
			break;
		case 4:
			snd.src='./media/rfid.m4a';
			PlaySound();
			break;
		default:
			snd.src='./media/think.m4a';
			PlaySound();
	}
}
window.onload = function() {
		window.addEventListener('shake', shakeEventDidOccur, false);
		function shakeEventDidOccur () {	
			PlaySound();
		}
};// Put your custom code here