import React, { Component } from 'react';

class Europe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileimages: [
                {
                    id: 0,
                    name: 'IMG_2585',
                    image: 'assets/images/IMG_2585.jpg',                        
                    },
                {
                    id: 1,
                    name: 'IMG_2855',
                    image: 'assets/images/IMG_2855.jpg',                    
                },
                {
                    id: 2,
                    name: 'NewZealand',
                    image: 'assets/images/NewZealand.jpg',                      
                }
                ],
            };
        }
    
        render() {
            const europe = this.state.profileimages.map(profileimage => {
                return (
                    <div className="col-6 text-center">
                        <img src={profileimage.image} alt={profileimage.name}  width="500px" height="75%" />
                        <h2>{profileimage.name}</h2>
                        <p>{profileimage.description}</p>
                    </div>
                );
            });
    
            return (
                <div className="container" style={{backgroundColor: "blue"}}>
                    <div className="row">
                        {europe}
                    </div>
                </div>
            );
        }
    
}


export default Europe;  