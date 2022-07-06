import one from "./images/one.png";
import two from "./images/two.png";
import three from "./images/three.png";
import four from "./images/four.png";
import five from "./images/five.png";
import six from "./images/six.png";

export default function dados({ roll }) {
  const images = () => {
    if (roll === 1) {
      return <img src={one} />;
    } else if (roll === 2) {
      return <img src={two} />;
    } else if (roll === 3) {
      return <img src={three} />;
    } else if (roll === 4) {
      return <img src={four} />;
    } else if (roll === 5) {
      return <img src={five} />;
    } else if (roll === 6) {
      return <img src={six} />;
    }
  };
  return <>{images()}</>;
}
