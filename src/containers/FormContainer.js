import { connect } from 'react-redux'
import Form from '../components/Form'

const mapStateToProps = (state) => {
    
  return {
      name: state.name,
      lat: state.lat,
      lng: state.lng
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocation: (location) => {
      dispatch({
        type: 'SAVE_LOCATION',
        data: location,
      })
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
