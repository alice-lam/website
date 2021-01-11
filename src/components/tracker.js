import React, { Component } from "react";
import "./styles/_tracker.scss";

class tracker extends Component {
  constructor(props){
    super(props);
    this.updateCount = this.updateCount.bind(this);
  }
  componentDidMount(props){
    this.updateCount();
  }
  getJSON(url, callback) {  
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
        callback(null, xhr.response);
        } else {
        callback(status, xhr.response);
        }
    };
    xhr.send();
  }
  updateCount(){
    this.getJSON("https://www.instagram.com/treatsbyalice/?__a=1", 
    function(err,data) {
        if(err !== null || data==null){
            console.log("error");
        } else {
            var counter = document.getElementById("follower-count");
            var userData = data.graphql.user.edge_followed_by.count;
            counter.innerHTML= userData + " followers";
        }
    });
  }

  render() {
    return (
      <div className="tracker-container">
        <a href="https://instagram.com/treatsbyalice" className="tracker">
            <i className="fas fa-users"></i>
            <span id="follower-count">fetching data...</span>
        </a>
      </div>
    );
  }
}

export default tracker;