import PropTypes from 'prop-types';

export const App = ({ title, number }) => {
  return (
    <div>
      <h1>
        Hola {title} {number}
      </h1>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number,
};

App.defaultProps = {
  number: 2,
};
