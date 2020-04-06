import React from 'react';
import './App.css';
//import pic_side from './pic_side.jpeg';
import pic_main from './pic_main.jpg';


function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Cooking site</h1>
      </div>

      
      <div className="navbar">
        <a href="#">Appetizers</a>
        <a href="#">Main dishes</a>
        <a href="#">Desserts</a>
        <a href="#">Drinks</a>
      </div>

      <div className="row">

        <div className="side">
          <h2>About us:</h2>
          <p>We are brand new site with most delicious recepies.<br/> Enyoj! </p>
          <div className="imgSide"> <img src={require('./pic_side.jpg')} /> </div>
         
         <div className="signInForm">
            <h2 className="signInText">Sign in:</h2>
            Email:  <input  name="name" type="text"  placeholder="Enter email.."></input> <br/>
            Password:  <input  name="summary" type="password"  placeholder="Enter password.." ></input><br/>
            <button className="singInButton" href="https://"> Submit </button>
          </div>
        </div>

        <div className="main">
          <h2>RECIPE OF THE DAY</h2>
          <h5>Dessert, April 1, 2020</h5>
          <img src={pic_main} height='300px' width='300px' />
          <div className="mainText" align='center'> 
           <h4>Ingredients:</h4>
           Graham Cracker Crumbs <br/>
           Granulated Sugar <br/>
           Melted Butter<br/>
           Cream Cheese<br/>
           Sour Cream<br/>
           Vanilla Extract<br/>
           Eggs<br/>

            <h3>Preparing:</h3>
            Start by making the graham cracker crust: stir graham cracker crumbs, sugar and melted butter together and press into a 9-inch springform pan. Bake for 7 minutes in a 350 degree oven. Set aside to cool.
            Make the cheesecake filling by stirring the very soft cream cheese together with the granulated sugar. Stir in the vanilla and sour cream. Scrape the sides really really well and stir again to ensure there are no lumps.
            Whisk eggs together in a separate bowl and slowly add to the cheesecake filling with the mixer on. Once eggs are incorporated turn mixer off. Scrape the sides really well to ensure a very smooth batter. If there are lumps, stir them in by hand.
            Tap bowl on the counter for 30-45 seconds to remove air bubbles.<br/>
            Pour batter into graham cracker crust, smooth the top and bake.
            Bake at 325 degrees, reduce heat to 250 to finish cooking.
            Let cheesecake sit in the hot oven with the oven closed for 30 minutes before cracking the door and letting it continue cooling for another hour.
            Remove from oven and bring cheesecake to room temperature.<br/>
            Cover and refrigerate until completely chilled. Serve.<br/>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Support</h2>
        <a className="fLink" href="#">Site Map</a> 
        <a className="fLink" href="#">Contact Us</a> 
        <a className="fLink" href="#">Customer Support</a>
      </div>
     
    </div>     
  );
}

export default App;
