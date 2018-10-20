import { connect } from 'react-redux';

import { saveModalEdit } from 'app/localTimer/actions';
import ButtonComponent from 'shared/modal/components/ButtonComponent';

const mapDispatchToProps = {
  saveModalEdit
};

export default connect(
  undefined,
  mapDispatchToProps
)(ButtonComponent);
