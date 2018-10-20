import { connect } from 'react-redux';
import { openModal } from '../actions';

import { closeModal } from 'app/localTimer/actions';
import TimerContentComponent from 'shared/timer/components/TimerContentComponent';

const mapDispatchToProps = {
  closeModal,
  openModal
};

export default connect(
  undefined,
  mapDispatchToProps
)(TimerContentComponent);
