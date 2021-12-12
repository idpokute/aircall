import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import store from "./store";
import { Provider } from "react-redux";

import ContainerView from "./components/ContainerView.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const StyledApp = styled.div`
  /* display: flex;
  flex-direction: column; */
  height: 100%;
`;

const App = () => {
  return (
    <StyledApp className="container">
      <Header />

      <ContainerView />
      {/* <div className="container-view">Some activities should be here</div> */}

      <Footer />
    </StyledApp>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);

export default App;
