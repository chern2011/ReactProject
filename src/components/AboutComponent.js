import React from 'react';
import { Media } from 'reactstrap';


function RenderPartner({partner}) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object 
                    src={partner.image} 
                    alt={partner.name}
                    width={150} 
                />
                <Media body className="ml-5 mb-4">
                    <Media heading> {partner.name} </Media>                     
                    {partner.description} 
                </Media> 
            </React.Fragment>
        )
    } else {
        return (
            <div />
        )
    }
}

function About(props) {
    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" 
                key={partner.id}>
            <RenderPartner partner={partner} />
            </Media>
        );
    })

    return (
        <div className="container">
            <hr />
            <div className="row">
                <div className="col text-center">
                    <h2><font size="7">About Earth</font></h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Seven Wonders of the World</h2>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;