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

function measurementScore(measurement, target, weight) {
    return Math.pow((Math.abs(measurement - target)/target), weight); 
}

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
            good:[],
            bad: [],
            searchResults:[
                {brand:'Left Field NYC', model: "Indigo Miner Chino", price: 199,
                waist: 30, inseam: 30, thigh: 11, frontRise: 10, backRise: 13, legOpening: 7,
                wScore: 5, iScore: 5, tScore: 5, fScore: 5, bScore: 5, lScore: 5, 
                img: "images/jeans.jpg", url:"www.pants.com"},
                {brand:'Left Field NYC', model: "Indigo Miner Chino", price: 199, score: 0,
                waist: 31, inseam: 31, thigh: 11.25, frontRise: 10.25, backRise: 13.25, legOpening: 7.25,
                wScore: 5, iScore: 5, tScore: 5, fScore: 5, bScore: 5, lScore: 5, 
                img: "images/jeans.jpg", url:"www.pants.com"},
                {brand:'Left Field NYC', model: "Indigo Miner Chino", price: 199, score: 0,
                waist: 32, inseam: 32, thigh: 11.5, frontRise: 10.5, backRise: 13.5, legOpening: 7.5,
                wScore: 5, iScore: 5, tScore: 5, fScore: 5, bScore: 5, lScore: 5, 
                img: "images/jeans.jpg", url:"www.pants.com"},
                {brand:'Left Field NYC', model: "Indigo Miner Chino", price: 199, score: 0,
                waist: 33, inseam: 33, thigh: 11.75, frontRise: 10.75, backRise: 13.5, legOpening: 7.5,
                wScore: 5, iScore: 5, tScore: 5, fScore: 5, bScore: 5, lScore: 5, 
                img: "images/jeans.jpg", url:"www.pants.com"},
                {brand:'Left Field NYC', model: "Indigo Miner Chino", price: 199, score: 0,
                waist: 34, inseam: 33.5, thigh: 12, frontRise: 11, backRise: 13.75, legOpening: 7.75,
                wScore: 5, iScore: 5, tScore: 5, fScore: 5, bScore: 5, lScore: 5, 
                img: "images/jeans.jpg", url:"www.pants.com"},
                {brand:'Left Field NYC', model: "Indigo Miner Chino", price: 199, score: 0,
                waist: 35, inseam: 34, thigh: 12.25, frontRise: 11.25, backRise: 14, legOpening: 7.75,
                wScore: 5, iScore: 5, tScore: 5, fScore: 5, bScore: 5, lScore: 5, 
                img: "images/jeans.jpg", url:"www.pants.com"},
                {brand:'Left Field NYC', model: "Indigo Miner Chino", price: 199, score: 0,
                waist: 36, inseam: 34.5, thigh: 12.5, frontRise: 11.5, backRise: 14.25, legOpening: 8,
                wScore: 5, iScore: 5, tScore: 5, fScore: 5, bScore: 5, lScore: 5, 
                img: "images/jeans.jpg", url:"www.pants.com"},
                {brand:'Left Field NYC', model: "Indigo Miner Chino", price: 199, score: 0,
                waist: 37, inseam: 35, thigh: 12.75, frontRise: 11.75, backRise: 14.5, legOpening: 8,
                wScore: 5, iScore: 5, tScore: 5, fScore: 5, bScore: 5, lScore: 5, 
                img: "images/jeans.jpg", url:"www.pants.com"},]
        };
    }

  
    render() {
        return (
        <div>
            <Menu/>
            <Banner/>
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
                        good={this.state.good}
                        bad={this.state.bad}
                        trending={this.state.searchResults}
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
        var w = 1;
        var fit = 0.5;

        buf.map(item => {

            var waistScore = measurementScore(this.state.waist, item.waist, w);
            var inseamScore = measurementScore(this.state.inseam, item.inseam, w);
            var frontRiseScore = measurementScore(this.state.frontRise, item.frontRise, w);
            var backRiseScore = measurementScore(this.state.backRise, item.backRise, w);
            var thighScore = measurementScore(this.state.thigh, item.thigh, w);
            var legOpeningScore = measurementScore(this.state.legOpening, item.legOpening, w);
           
            item.wScore = waistScore;
            item.tScore = thighScore;
            item.iScore = inseamScore;
            item.fScore = frontRiseScore;
            item.bScore = backRiseScore;
            item.lScore = legOpeningScore;
            

        });
        var good = buf.filter(item => {
            return (
                item.wScore < fit && 
                item.tScore < fit && 
                item.iScore < fit && 
                item.fScore < fit && 
                item.bScore < fit && 
                item.lScore < fit
            )
                
        });

        var bad = buf.filter(item => {
            return item.score >= fit
        });

        // good.sort((a, b) => {
        //     return parseFloat(a.score) - parseFloat(b.score);
        // });
        // bad.sort((a, b) => {
        //     return parseFloat(a.score) - parseFloat(b.score);
        // });

        this.setState({good: good});
        this.setState({bad: bad});
      
    }

}

