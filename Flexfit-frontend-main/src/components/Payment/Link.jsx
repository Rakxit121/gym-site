import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Link.module.css";

const Link = ({ className = "" }) => {
  const onLinkClick = useCallback(() => {
    // Please sync "Payment" to the project
  }, []);

  return (
    <button
      className={[styles.link, className].join(" ")}
      onClick={onLinkClick}
    >
      <div className={styles.cancel}>Cancel</div>
    </button>
  );
};

Link.propTypes = {
  className: PropTypes.string,
};

export default Link;
