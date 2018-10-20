import React from 'react';
import { connect } from 'react-redux';

import Header from 'app/header/components';
import Footer from 'app/footer/components';
import GlobalTimer from 'app/globalTimer/components';
import LocalTimer from 'app/localTimer/components';
import ModalGlobalTimer from 'app/modalGlobalTimer/components';
import ModalLocalTimer from 'app/modalLocalTimer/components';

import { startTimer } from '../actions';
import ErrorBoundary from './ErrorBoundary';
import ModalContentContainer from './ModalContentContainer';
import { StyledMain, StyledContent, StyledTimersContainer } from './styles';

export class Main extends React.Component {
  componentDidMount = () => {
    this.props.startTimer();
  };
  render() {
    return (
      <ErrorBoundary>
        <StyledMain>
          <Header />
          <StyledContent>
            <StyledTimersContainer>
              <LocalTimer />
              <GlobalTimer />
            </StyledTimersContainer>
            <ModalContentContainer>
              <ModalLocalTimer />
              <ModalGlobalTimer />
            </ModalContentContainer>
          </StyledContent>
          <Footer />
        </StyledMain>
      </ErrorBoundary>
    );
  }
}

Main.displayName = 'Main';

const mapDispatchToProps = {
  startTimer
};

export default connect(
  undefined,
  mapDispatchToProps
)(Main);
