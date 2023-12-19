window.fbAsyncInit = function() {
  FB.init({
    appId      : '1559093321523510',
    cookie     : true,
    xfbml      : true,
    version    : 'v10.0'
  });
};

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    // User is logged into Facebook and your app.
    console.log('Logged in successfully');
    console.log(response.authResponse);
  } else {
    // User is not logged into Facebook or not logged into your app.
    console.log('Not logged in');
  }
}

document.getElementById('loginBtn').addEventListener('click', function() {
  FB.login(checkLoginState, { scope: 'email' });
});

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
