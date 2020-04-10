import React from 'react';


const API = 'AIzaSyDEylJcQqwVKDxZ-RN9nb4vVnYZxmAlqCo';
const channelID = 'UCrTNhL_yO3tPTdQ5XgmmWjA';
const result = 5;



var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export default class Movies extends React.Component { 

  constructor(props){
    super(props);

    this.state = {
      YTvideos: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {      
      const YTvideos = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({YTvideos});
    })
    .catch((error) => {
      console.error(error);
    });
}
  render(){
    return(
      <div>
        <button onClick={this.clicked}>Get youtube videos</button>
          {
            this.state.YTvideos.map((link, i) => {              
              var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }  
};


//AIzaSyDEylJcQqwVKDxZ-RN9nb4vVnYZxmAlqCo
