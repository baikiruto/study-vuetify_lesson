import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        ///この間を自分のアプリ情報に変える
        apiKey: "AIzaSyBJ-UgTlhk6hfRJLAbfynbRRdKV58mzsQI",
        authDomain: "study-vuetify-lesson.firebaseapp.com",
        projectId: "study-vuetify-lesson",
        storageBucket: "study-vuetify-lesson.appspot.com",
        messagingSenderId: "45444791337",
        appId: "1:45444791337:web:81c7ffc598fedede533038",
        measurementId: "G-9BREW4GGMC"
        //-------------------------------
    })
}

export default firebase