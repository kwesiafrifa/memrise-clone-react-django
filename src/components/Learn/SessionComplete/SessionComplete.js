import React from 'react';
import PropTypes from 'prop-types';
import styles from './SessionComplete.module.css';

const SessionComplete = props => (
	<React.Fragment>
		<div className={styles.Content}>Session complete!</div>
		<div onClick={props.home} className={styles.NextButton}>
			<div className={styles.BtnText}>Course</div>
			<div className={styles.RightArrow} />
		</div>
	</React.Fragment>
);

export default React.memo(SessionComplete);

SessionComplete.propTypes = {
	home: PropTypes.func.isRequired,
};
