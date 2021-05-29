const firebaseConfig = {
  apiKey: "AIzaSyCxvwUOpQUFkvyLLnvbZJH_mFuGtubIrtI",
  authDomain: "progress-auth.firebaseapp.com",
  projectId: "progress-auth",
  storageBucket: "progress-auth.appspot.com",
  messagingSenderId: "1032173099037",
  appId: "1:1032173099037:web:ef99f0a309d68a52af4ef4",
  measurementId: "G-0SKK6MPZ8H"
};

firebase.initializeApp(firebaseConfig);

const auth = () => {
  const userEmail = document.getElementById('inputEmail').value.trim();
  const userPass = document.getElementById('inputPassword').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then(function(result) {
    localStorage.setItem('userName', result.user.displayName);
    localStorage.setItem('userEmail', result.user.email);
    window.location = './dashboard.html';
  }).catch(function(error) {
    console.log(error, 'error');
  });
}
