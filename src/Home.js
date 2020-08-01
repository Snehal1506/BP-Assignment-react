import React from 'react';
import fire from "./config/fire.js";
import "./index.css";
import CardProfile from "./music.js"
class Home extends React.Component {

    logout() {
        fire.auth().signOut();
    }
    
    render() {
        return (
            < div >
                <div class="main">
                    <div> <h1> Spotify</h1></div>
                </div>

                
                <div id="root"><CardProfile /></div>
                <div> <button className="btn" onClick={this.logout}><h3>Logout</h3></button></div>


                <a target="_blank" title="instagram/web__addict" href="https://www.instagram.com/web__addict/"><i class="fab fa-instagram"></i></a>
            </div>



            )
            }
}

export default Home; 