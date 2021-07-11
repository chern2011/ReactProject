import React, { Component } from 'react';

class Australia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileimages: [
                {
                    id: 0,
                    name: 'IMG_2860',
                    image: 'assets/images/IMG_2860.jpg',                        
                    },
                {
                    id: 1,
                    name: 'IMG_2723',
                    image: 'assets/images/IMG_2723.jpg',                    
                },
                {
                    id: 2,
                    name: 'Australia',
                    image: 'assets/images/Australia.jpg',                      
                }
                ],
            };
        }
    
        render() {
            const australia = this.state.profileimages.map(profileimage => {
                return (
                    <div className="col-6 text-center">
                        <img src={profileimage.image} alt={profileimage.name}  width="500px" height="75%" />
                        <h2>{profileimage.name}</h2>
                        <p>{profileimage.description}</p>
                    </div>
                );
            });
    
            return (
                <div className="container" style={{backgroundColor: "#ff5252"}}>
                    <div className="row">
                        {australia}
                    </div>
                </div>
            );
        }
    
}


export default Australia;  