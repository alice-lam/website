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
        var counter = document.getElementById("follower-count");
        if(err !== null){
            counter.innerHTML= "-- followers";
        } else {
            var userData = data.graphql.user.edge_followed_by.count;
            counter.innerHTML= userData + " followers";
        }
    });
  }

  render() {
    return (
      <div className="tracker-container">
        <div className="tracker">
            <i className="fas fa-users"></i>
            <span id="follower-count"></span>
        </div>
      </div>
    );
  }
}

export default tracker;