import { connect } from 'react-redux';

import { closeModal } from 'app/globalTimer/actions';
import { getVisibleModal } from 'app/globalTimer/selectors';
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
