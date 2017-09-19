import React, { Component } from 'react';
import Search from './Search.js';
import Login from './Login.js';
import Upload from './Upload.js';
import Item from './Item.js';
import Menu from './Menu.js';
import Results from './Results.js';
import Banner from './Banner.js'
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDQEAoSJQkSWIz_ffBfPBiizAqlAUMbceQ",
    authDomain: "sizeup-172404.firebaseapp.com",
    databaseURL: "https://sizeup-172404.firebaseio.com",
    projectId: "sizeup-172404",
    storageBucket: "sizeup-172404.appspot.com",
    messagingSenderId: "80593664722"
};

firebase.initializeApp(config);

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            email: '',
            password:'',
            currentUser: 'none',
            waist: 0,
            inseam: 0,
            thigh: 0,
            frontRise: 0,
            backRise: 0,
            legOpening: 0,
            searchResults:[]
        };
    }

    componentDidMount(){
        var buf = [];
        
        firebase.database().ref().child('jeans').once('value', snapshot => {
            snapshot.forEach( item => {
                buf.push( item.val())
            });
        });   
        this.setState({searchResults: buf});
    }
  
    render() {
        return (
        <div>
            <Menu/>
            <main>
                <div className='container'>
                    <Search
                        handleWaistChange={this.handleWaistChange}
                        handleInseamChange={this.handleInseamChange}
                        handleThighChange={this.handleThighChange}
                        handleFrontRiseChange={this.handleFrontRiseChange}
                        handleBackRiseChange={this.handleBackRiseChange}
                        handleLegOpeningChange={this.handleLegOpeningChange}
                    />
                    <Results
                        searchResults={this.state.searchResults}
                    />
                </div>
            </main>
        </div>
        );
    }

    handleWaistChange = (e) => {
        e.preventDefault();
        this.setState({waist: e.target.value}, sort => this.sortByFit());
    }

    handleInseamChange = (e) => {
        e.preventDefault();
        this.setState({inseam: e.target.value}, sort => this.sortByFit());
    }

    handleThighChange = (e) => {
        e.preventDefault();
        this.setState( {thigh: e.target.value}, sort => this.sortByFit());
    }

    handleFrontRiseChange = (e) => {
        e.preventDefault();
        this.setState( {frontRise: e.target.value}, sort => this.sortByFit())
    }

    handleBackRiseChange = (e) => {
        e.preventDefault();
        this.setState( {backRise: e.target.value}, sort => this.sortByFit())
    }

    handleLegOpeningChange = (e) => {
        e.preventDefault();
        this.setState( {legOpening: e.target.value}, sort => this.sortByFit())
    }

    handleKneeChange = (e) => {
        e.preventDefault();
        this.setState( {knee: e.target.value}, sort => this.sortByFit())
    }

    sortByFit = (e) => {

        var buf = this.state.searchResults;
        var w=2;
        
        buf.map(item => {

            if(this.state.waist === 0 || isNaN(item.waist)){
                //console.log(parseInt(item.waist));
                var waistScore = 0;        
            } else {
                var waistScore = Math.pow(Math.abs(this.state.waist - parseInt(item.waist)), w); 
            }

            if(this.state.inseam === 0 || isNaN(item.inseam)){
                var inseamScore = 0;
               
            } else {
                var inseamScore = Math.pow(Math.abs(this.state.inseam - parseInt(item.inseam)), w);
            }

            if(this.state.frontRise === 0 || isNaN(item.frontRise)){
                var frontRiseScore = 0;
               
            } else {
                var frontRiseScore = Math.pow(Math.abs(this.state.frontRise - parseInt(item.frontRise)), w); 
            }

            if(this.state.backRise === 0 || isNaN(item.backRise)){
                var backRiseScore = 0;
            } else {
                var backRiseScore = Math.pow(Math.abs(this.state.backRise - parseInt(item.backRise)), w); 
            }

            if(this.state.thigh === 0 || isNaN(item.thigh) ){
                var thighScore = 0;
            } else {
                var thighScore = Math.pow(Math.abs(this.state.thigh - parseInt(item.thigh)), w); 
            }

            if(this.state.legOpening === 0 || isNaN(item.legOpening)){
                var legOpeningScore = 0;
            } else {
                var legOpeningScore = Math.pow(Math.abs(this.state.legOpening - parseInt(item.legOpening)), w); 
                
            }

            item.score = waistScore + inseamScore + frontRiseScore + backRiseScore + thighScore + legOpeningScore;
            console.log (item.score);
                   
        });
      

        buf.sort((a, b) => {
            return parseFloat(a.score) - parseFloat(b.score);
        });

        this.setState({searchResults: buf});
        console.log(buf);
    }

}

