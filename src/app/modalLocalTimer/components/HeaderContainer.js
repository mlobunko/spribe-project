import { connect } from 'react-redux';

import { closeModal } from 'app/localTimer/actions';
import HeaderComponent from 'shared/modal/components/HeaderComponent';

const mapDispatchToProps = {
  closeModal
};

export default connect(
  undefined,
  mapDispatchToProps
)(HeaderComponent);
