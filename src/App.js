import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { HomePage, ShopPage, SignInAndSignUpPage } from './pages';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const pages = [
  {
    exact: true,
    path: '/',
    component: HomePage
  },
  {
    exact: true,
    path: '/shop',
    component: ShopPage
  },
  {
    exact: true,
    path: '/signIn',
    component: SignInAndSignUpPage
  }
];

class App extends React.Component {

  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      else this.setState({ currentUser: userAuth })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          {
            pages.map(({...props}, index) =>
              <Route key={index} {...props} />
            )
          }
        </Switch>
      </div>
    );
  }
}

export default App;
