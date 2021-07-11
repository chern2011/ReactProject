import React, { Component } from 'react';

class Africa extends Component {
    constructor(props) {
        super(props);
        this.state = {
                profileimages: [
                    {
                        id: 0,
                        name: 'South Africa',
                        image: 'assets/images/South Africa.jpg',                        
                        },
                    {
                        id: 1,
                        name: 'Egypt',
                        image: 'assets/images/Egypt.jpg',                    
                    },
                    {
                        id: 1,
                        name: 'Morocco',
                        image: 'assets/images/Morocco.jpg',                      
                    }
                ],
            };
        }
    
        render() {
            const africa = this.state.profileimages.map(profileimage => {
                return (
                    <div className="col-6 text-center">
                        <img src={profileimage.image} alt={profileimage.name}  width="500px" height="75%" />
                        <h2>{profileimage.name}</h2>
                        <p>{profileimage.description}</p>
                    </div>
                );
            });
    
            return (
                <div className="container" style={{backgroundColor: "darkorange"}}>
                    <div className="row">
                        {africa}
                    </div>
                </div>
            );
        }
    
}


export default Africa;  