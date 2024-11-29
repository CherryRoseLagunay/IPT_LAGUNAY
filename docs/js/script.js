(function() {
  emailjs.init('-OhIh79mZK8KuFIrG'); // Replace with your EmailJS User ID
})();

function sendMail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const templateParams = {
    name: name,
    email: email,
    message: message
  };

  emailjs.send('service_w4cispa', 'template_sz9kbyk', templateParams)
    .then(function(response) {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message: ' + error.text);
    });
}
