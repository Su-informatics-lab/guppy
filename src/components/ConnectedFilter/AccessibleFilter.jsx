import ConnectedFilter from '.';
import { ENUM_ACCESSIBILITY } from './utils';

class AccessibleFilter extends ConnectedFilter {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      accessibility: ENUM_ACCESSIBILITY.ACCESSIBLE,
    };
  }
}

export default AccessibleFilter;
