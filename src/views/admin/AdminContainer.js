import AdminPanel from './AdminPanel.jsx';
import { connect } from "../../store";

const mapStateToProps = ({ user }, props) => ({
  user,
  ...props
});

const mapDispatchToProps = dispatch => ({
  setUser: payload => dispatch({ type: "setUser", payload })
});

// An example of functional component using the connect HoC (works also with classes)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel)
