import { connect } from 'react-redux';
import { getDuration } from '../selectors';
import { getLeftValue } from '../selectors';

import ProgressBarComponent from 'shared/timer/components/ProgressBarComponent';

const mapStateToProps = state => ({
  duration: getDuration(state),
  leftValue: getLeftValue(state)
});

export default connect(mapStateToProps)(ProgressBarComponent);
