import PropTypes from "prop-types";
import React from "react";

export default function Icon({ icons, name }) {
  const icon = icons[name];
  const findicon = () => {
    switch (icon) {
      case "matches": {
        return <div>icon</div>;
      }
      case "settings": {
        return <div>icon</div>;
      }
      case "preview": {
        return <div>icon</div>;
      }
      default: {
        return <div>icon</div>
      }
    }
  };
  const IconRenderer = findicon(icon);
  return IconRenderer;
}

Icon.displayName = "Icon";
Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
};
Icon.defaultProps = {
  icon: null
};
