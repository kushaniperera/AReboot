import './App.css';
import './fonts.css'
import "antd/dist/antd.css";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Statistics from "./components/Statistics/Statistics";
import Review from "./components/Review/Review";
import Treatment from "./components/Treatment/Treatment";
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';

function App() {
  return (
    <div className="App">
      <Layout>
          <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
            <div className="title">
              <span className="title-text">AReboot</span>
            </div>
            <Navigation />
          </Header>
          <Content className="site-layout-content">
            <Switch>
              <Route path={"/home"}>
                <Home />
              </Route>
              <Route path="/stats">
                <Statistics />
              </Route>
              <Route path="/reviews">
                <Review />
              </Route>
              <Route path="/treatment">
                <Treatment />
              </Route>
            </Switch>
          </Content>
        <Footer>&copy; 2021 Copyright: Anxiety Inc.</Footer>
      </Layout>
    </div>
  );
}

export default App;
