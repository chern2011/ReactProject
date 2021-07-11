import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Profile from './ProfileComponent';
import Asia from './AsiaComponent';
import Africa from './AfricaComponent';
import Australia from './AustraliaComponent';
import Europe from './EuropeComponent';
import NorthAmerica from './NorthAmerica';
import SouthAmerica from './SouthAmerica';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, fetchComments, fetchPromotions, fetchProfileimages } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        profileimages: state.profileimages,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    }
}

const mapDispatchToProps = {
    postComment: (profileimageId, rating, author, text) => (postComment(profileimageId, rating, author, text)),
    fetchProfileimages: () => (fetchProfileimages()),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchComments: () => (fetchComments()),
    fetchPromotions: () => (fetchPromotions())
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchProfileimages();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchProfileimages();
    }

    render() {

        const AfricaPage = () => {
            return (
                <Africa

                />
            );
        }

        const AsiaPage = () => {
            return (
                <Asia
                
                />
            );
        }

        const AustraliaPage = () => {
            return (
                <Australia
                
                />
            );
        }

        const EuropePage = () => {
            return (
                <Europe
                
                />
            );
        }

        const NorthAmericaPage = () => {
            return (
                <NorthAmerica
                
                />
            );
        }

        const SouthAmericaPage = () => {
            return (
                <SouthAmerica
                
                />
            );
        }

        const HomePage = () => {
            return (
                <Home
                profileimage={this.props.profileimages.profileimages.filter(profileimage => profileimage.featured)[0]}
                profileimagesLoading={this.props.profileimages.isLoading}
                profileimagesErrMess={this.props.profileimages.errMess}
                    promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    promotionLoading={this.props.promotions.isLoading}
                    promotionErrMess={this.props.promotions.errMess}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const profileimageWithId = ({match}) => {
            return (
                <Profile
                profileimage={this.props.profileimages.profileimages.filter(profileimage => profileimage.id === +match.params.profileimageId)[0]}
                    isLoading={this.props.profileimages.isLoading}
                    errMess={this.props.profileimages.errMess}
                    comments={this.props.comments.comments.filter(comment => comment.profileimageId === +match.params.profileimageId)}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/profile' render={() => <Profile profileimages={this.props.profileimages} />} />
                            <Route path='/profile/:profileimageId' component={profileimageWithId} />
                            <Route path='/africa' render={() => <Africa profileimages={this.props.profileimages} />} />
                            <Route path='/asia' render={() => <Asia profileimages={this.props.profileimages} />} />
                            <Route path='/australia' render={() => <Australia profileimages={this.props.profileimages} />} />
                            <Route path='/europe' render={() => <Europe profileimages={this.props.profileimages} />} />
                            <Route path='/northamerica' render={() => <NorthAmerica profileimages={this.props.profileimages} />} />
                            <Route path='/southamerica' render={() => <SouthAmerica profileimages={this.props.profileimages} />} />
                            <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> } />
                            <Route exact path='/aboutus' render={() => <About partners={this.props.partners} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));