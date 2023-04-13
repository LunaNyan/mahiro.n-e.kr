setInterval(function() {
	const remainingTime1 = parseInt((new Date('2038/1/12') - Date.now()) / 1000);
	if(remainingTime1 > 0) {
		const parsedTime = parseTime(remainingTime1);
		document.getElementById('message').innerHTML = '<h2>마히로가 다시 올 때까지...</h2><div id="counter"><div id="value"><h1>' + parsedTime.days + '일<br>' + parsedTime.hours +'시간 ' + parsedTime.minutes + '분 ' + parsedTime.seconds + '초</h1></div></div>남았습니다.';
	} else {
		const remainingTime2 = parseInt((new Date('2021/6/30') - Date.now()) / 1000);
		const parsedTime = parseTime(remainingTime2);
		document.getElementById('message').innerHTML = '<h2>마히로가 다시 방을 뺄 때까지...</h2><div id="counter"><div id="value"><h1>' + parsedTime.days + '일<br>' + parsedTime.hours +'시간 ' + parsedTime.minutes + '분 ' + parsedTime.seconds + '초</h1></div></div>기회는 지금뿐입니다!';
	}
	function parseTime(seconds) {
		const days = parseInt(seconds / (3600 * 24));
		seconds -= days * (3600 * 24);
		const hours = parseInt(seconds / 3600);
		seconds -= hours * 3600;
		const minutes = parseInt(seconds / 60);
		seconds -= minutes * 60;
		return { days: days, hours: hours, minutes: minutes, seconds: seconds };
	}
}, 100);
