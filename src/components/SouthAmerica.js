import React, { Component } from 'react';

class SouthAmerica extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileimages: [
                {
                    id: 0,
                    name: 'Argentina',
                    image: 'assets/images/Argentina.jpg',                        
                    },
                {
                    id: 1,
                    name: 'Costa Rica',
                    image: 'assets/images/Costa Rica.jpg',                    
                },
                {
                    id: 2,
                    name: 'Perus incan roots',
                    image: 'assets/images/Perus incan roots.jpg',                      
                },
                {
                    id: 3,
                    name: '20190929_122503',
                    image: 'assets/images/20190929_122503.jpg',                        
                    }
                ],
            };
        }
    
        render() {
            const southamerica = this.state.profileimages.map(profileimage => {
                return (
                    <div className="col-6 text-center">
                        <img src={profileimage.image} alt={profileimage.name}  width="500px" height="75%" />
                        <h2>{profileimage.name}</h2>
                        <p>{profileimage.description}</p>
                    </div>
                );
            });
    
            return (
                <div className="container" style={{backgroundColor: "purple"}}>
                    <div className="row">
                        {southamerica}
                    </div>
                </div>
            );
        }
}

export default SouthAmerica;  