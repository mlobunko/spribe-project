import { connect } from 'react-redux';

import { getAvatarId } from 'app/globalTimer/selectors';
import { setAvatarId } from 'app/globalTimer/actions';

import CircleImageComponent from 'shared/modal/components/CircleImageComponent';

const mapStateToProps = (state, ownProps) => ({
  imageId: ownProps.imageId,
  showGreenBorder: getAvatarId(state) === ownProps.imageId
});

const mapDispatchToProps = {
  setAvatarId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CircleImageComponent);
