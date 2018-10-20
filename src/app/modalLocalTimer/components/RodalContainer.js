import { connect } from 'react-redux';

import { closeModal } from 'app/localTimer/actions';
import { getVisibleModal } from 'app/localTimer/selectors';
import RodalComponent from 'shared/modal/components/RodalComponent';

const mapStateToProps = state => ({
  visibleModal: getVisibleModal(state)
});

const mapDispatchToProps = {
  closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RodalComponent);
