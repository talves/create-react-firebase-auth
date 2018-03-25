import firebase from 'firebase'

const uiConfig = {
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '/terms/',
  // Sets the `signedIn` state property to `true` once signed in.
  callbacks: {
    signInSuccess: () => {
      console.log('signedIn: true')
      return false // Avoid redirects after sign-in.
    }
  }
}

export default uiConfig
