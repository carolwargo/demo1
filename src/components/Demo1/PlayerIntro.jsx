import { InView } from 'react-intersection-observer';

const PlayerProfile = () => {

  return (
    <div>

<InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} 
            className={`w3-content w3-justify w3-text-grey w3-padding-16 bg-black
               ${inView ? "animate-fade-in" : ""}`}
            id="overview"
        >
 

            <h1 className="w3-text-light-grey">Joe Baseball</h1>
          <hr style={{ width: "235px" }} className="w3-opacity" />
          <p className=" w3-hide-large">
          Starting of the 2024 Season with Pre-Season Honors, Ranked #1 overall 
          in SMAC Conference, #2 overall in state, and #4 Ranked Catcher 
          Nationally.  Excepteur sint occaecat exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <p className=" w3-hide-medium w3-hide-small">
          Starting of the 2024 Season with Pre-Season Honors, Ranked #1 overall in SMAC Conference, #2 overall in state, and #4 Ranked Catcher Nationally.  Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
    {/* Overview PROFILE Section */}
    <div>
    </div>
    </div>
    )}  

    </InView>
 
    </div>

  );
};

export default PlayerProfile;