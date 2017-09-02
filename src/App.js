import React, { Component } from 'react';
import Search from './Search.js';
import Login from './Login.js';
import Upload from './Upload.js';
import Item from './Item.js';
import Navbar from './Navbar.js';
import Results from './Results.js';
import Banner from './Banner.js'

import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


class App extends Component {

  
    constructor(){
        super()

        this.config = {
            apiKey: "AIzaSyDQEAoSJQkSWIz_ffBfPBiizAqlAUMbceQ",
            authDomain: "sizeup-172404.firebaseapp.com",
            databaseURL: "https://sizeup-172404.firebaseio.com",
            projectId: "sizeup-172404",
            storageBucket: "sizeup-172404.appspot.com",
            messagingSenderId: "80593664722"
        };

        firebase.initializeApp(this.config);


        this.state = {
            email: '',
            password:'',
            currentUser: 'none',
            waist: 0,
            inseam: 0,
            thigh: 0,
            frontRise: 0,
            uploadBrand: '',
            uploadModel:'',
            uploadWaist: 0,
            uploadInseam: 0,
            uploadThigh: 0,
            uploadFrontRise: 0,
            searchResults:[]
        };
        

        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        
            this.setState({currentUser: user.email});
            console.log(this.state.currentUser);
        } else {
        
            this.setState({currentUser: 'none'});
            console.log(this.state.currentUser);
        }
        });

    }
  
    render() {
        return (
        <div>
            <Navbar/>
            <Banner/>
            <Search/>
            <Results/>
        </div>
        );
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log('submitted', this.state.email, this.state.password);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            console.log(error.Code, error.Message);
        });
    }

    handleRegister = (e) => {
        e.preventDefault();
        console.log('register button pressed');
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            console.log (error.code, error.message);
        });
    }

    handleLogout = (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('signout success');
        }).catch(function(error) {
        // An error happened
        console.log(error);
        });
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    loadTestData = (e) => {
        e.preventDefault();
    }

    handleWaistChange = (e) => {
        e.preventDefault();
        this.setState({waist: e.target.value});
    }

    handleInseamChange = (e) => {
        e.preventDefault();
        this.setState({inseam: e.target.value});
    }

    handleThighChange = (e) => {
        e.preventDefault();
        this.setState( {thigh: e.target.value});
    }

    handleFrontRiseChange = (e) => {
        e.preventDefault();
        this.setState( {frontRise: e.target.value})
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log("search Button pressed");
        console.log(this.state.query);

        var buf = [];
        firebase.database().ref().child('jeans').once('value', snapshot => {
            snapshot.forEach( item => {
                buf.push( item.val())
                
            });
       
            var w  = 2;

            buf.map(item => {
                item.score = 
                Math.pow(Math.abs(this.state.waist - item.waist), w) +
                Math.pow(Math.abs(this.state.inseam - item.inseam), w) +
                Math.pow(Math.abs(this.state.frontRise - item.frontRise), w) +
                Math.pow(Math.abs(this.state.thigh - item.thigh), w) 
            });
            console.log(buf);

           

            // buf.map(item =>
                
                
            // );

            buf.sort((a, b) => {
                return parseFloat(a.score) - parseFloat(b.score);
            });

            console.log(buf);
            this.setState({searchResults: buf});
            //console.log(this.state.searchResults);
        });

       
    }

    handleUpload = (e) => {
        e.preventDefault();

        var jeansRef = firebase.database().ref().child('jeans');

        // Write the new post's data simultaneously in the posts list and the user's post list.
        console.log(this.state);
        jeansRef.push({
            brand: this.state.uploadBrand,
            model: this.state.uploadModel,
            waist: this.state.uploadWaist,
            inseam: this.state.uploadInseam,
            thigh: this.state.uploadThigh,
            frontRise: this.state.uploadFrontRise
        });
        

    }

 
    uploadModelChange = (e) => {
        e.preventDefault();
        this.setState({uploadModel: e.target.value});
    }

    uploadBrandChange = (e) => {
        e.preventDefault();
        this.setState({uploadBrand: e.target.value});   
    }

    uploadWaistChange = (e) => {
        e.preventDefault();
        this.setState({uploadWaist: e.target.value});
    }

    uploadInseamChange = (e) => {
        e.preventDefault();
        this.setState({uploadInseam: e.target.value});
    }

    uploadThighChange = (e) => {
        e.preventDefault();
        this.setState({uploadThigh: e.target.value});
    }

    uploadFrontRiseChange = (e) => {
        e.preventDefault();
        this.setState({uploadFrontRise: e.target.value})
    }







  
}





export default App;
