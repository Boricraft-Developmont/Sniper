
navigator.mediaDevices.getUserMedia({video: true})
.then(function(stream) {
  document.getElementById('camera').srcObject = stream;
}).catch(function() {
  alert('could not connect stream');
});

if (document.getElementById('snap').isClicked == true) {
    let camera = document.getElementById('camera');
    Canvas2Image.saveAsPNG(camera);

  }