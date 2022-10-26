var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
   keyPath: "device-private-key",
  certPath: "device-certificate-path",
    caPath: "<amazon-root-certificate-path>",
  clientId: "<client-id>",
      host: "<hostname>"
});

device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('/topic');
    device.publish('topic', JSON.stringify({ test_data: 1}));
  });



device
  .on('/twin', function(topic, payload) {
    console.log('topic', topic, payload.toString());
  });