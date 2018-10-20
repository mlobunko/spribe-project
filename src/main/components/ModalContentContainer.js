import { connect } from 'react-redux';

import localTimer from 'app/localTimer';
import globalTimer from 'app/globalTimer';

import { StyledModalContent } from './styles';

const mapStateToProps = state => ({
  visibleModals:
    localTimer.selectors.getVisibleModal(state) ||
    globalTimer.selectors.getVisibleModal(state)
});

export default connect(mapStateToProps)(StyledModalContent);
