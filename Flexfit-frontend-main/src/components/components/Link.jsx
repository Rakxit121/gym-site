import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Link.module.css";

const Link = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

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
