import { connect } from 'react-redux';
import { getVisibleModal } from '../selectors';

import EditComponent from 'shared/timer/components/EditComponent';

const mapStateToProps = state => ({
  visibleModal: getVisibleModal(state)
});

export default connect(mapStateToProps)(EditComponent);
