import { connect } from 'react-redux';
import { getAvatarId } from '../selectors';

import ImageComponent from 'shared/timer/components/ImageComponent';

const mapStateToProps = state => ({
  avatarId: getAvatarId(state)
});

export default connect(mapStateToProps)(ImageComponent);
