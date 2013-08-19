exports.action = function(data, callback, config){
console.log('data.vlcFile: ' + data.vlcFile); 
console.log('data._key: ' + data._key); 




switch (data._key) {
	case "RunVLC":
			var spawn = require('child_process').spawn;
			if (!data.vlcFile) {
				
				var vlc = spawn('C:\\Progra~2\\VideoLAN\\VLC\\vlc.exe ',['-I', 'http', '--http-host=localhost', '--http-port=8282', './plugins/sourates/mp3/1.mp3'], { detached: true });
			}
			else
			{
			var vlc = spawn('C:\\Progra~2\\VideoLAN\\VLC\\vlc.exe ',['-I', 'http', '--http-host=localhost', '--http-port=8282', data.vlcFile], { detached: true });
			}
			// Callback with TTS
			callback({'tts': "Bissmi lèh "});

			vlc.on('exit', function(code){
			console.log('Exit code: ' + code); 
			});
		break;
	case "CloseVLC":
			var spawn = require('child_process').spawn;
			var vlc = spawn('TASKKILL.exe',['/F', '/IM', 'vlc.exe', '/T']);
			
			// Callback with TTS
			callback({'tts': "Fermeture du Noble Coran"});

			vlc.on('exit', function(code){
			console.log('Exit code: ' + code); 
			});
		break;		
		
		
	case "noSound":
		  var url = "http://localhost:8282/requests/status.xml?command=volume&val=0";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': "le son a été coupé"});
			}
		  });
		break;
	case "lowSound":
		  var url = "http://localhost:8282/requests/status.xml?command=volume&val=-10";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': ""});
			}
		  });
		break;
	case "normalSound":
		  var url = "http://localhost:8282/requests/status.xml?command=volume&val=300";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': ""});
			}
		  });
		break;
	case "highSound":
		  var url = "http://localhost:8282/requests/status.xml?command=volume&val=+10";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': ""});
			}
		  });
		break;
	case "Forward10":
		  var url = "http://localhost:8282/requests/status.xml?command=seek&val=%2B10";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': "dix secondes en avant"});
			}
		  });
		break;	
	case "Forward30":
		  var url = "http://localhost:8282/requests/status.xml?command=seek&val=%2B30";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': "trente secondes en avant "});
			}
		  });
		break;
	case "Forward60":
		  var url = "http://localhost:8282/requests/status.xml?command=seek&val=%2B60";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': "trente secondes en avant "});
			}
		  });
		break;	
	case "Back10":
		  var url = "http://localhost:8282/requests/status.xml?command=seek&val=-10";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': "dix secondes en arrière "});
			}
		  });
		break;	
	case "Back30":
		  var url = "http://localhost:8282/requests/status.xml?command=seek&val=-30";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': "trente secondes en arrière "});
			}
		  });
		break;	
	case "Back60":
		  var url = "http://localhost:8282/requests/status.xml?command=seek&val=-60";
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': "soixante secondes en arrière "});
			}
		  });
		break;	
	default: 
		  var url = "http://localhost:8282/requests/status.xml?command=" + data._key;
		  console.log('url: ' + url); 
		  // Send Request
		  var request = require('request');
		  request({ 'uri' : url }, function (err, response, body){
			
			if (err || response.statusCode != 200) {
			  callback({'tts': "L'action a échoué"});
			  return;
			}
			else
			{
			callback({'tts': "Commande VLC éxécuté " + data._key});
			}
		  });
		break;

};

};
