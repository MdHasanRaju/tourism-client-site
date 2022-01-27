import React, { useState, useEffect, useRef } from "react";
import "./NewSession.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const NewSession = ({countdownTimestampMs}) => {
  // const [focus, setFocus] = useState(false);

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="session">
      <div className="container text-center">
        <h2 className="text-warning mb-5">NEW ADVENTURES BEGIN IN</h2>
        <div className="d-flex justify-content-evenly align-items-center">
          <div>
            <h2 className="fs-1 text-light">
              {remainingTime.days}

              {/* only for first time display after loading the page-start */}
              {/* <CountUp
                start={focus ? 0 : null}
                end={48}
                duration={2}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <a></a>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp> */}
              {/* only for first time display after loading the page-end */}

              {/* <CountUp end={47} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp> */}

              {/* timer for counting days-start*/}
            </h2>
            <p className="text-danger">Days</p>
          </div>
          <div>
            <h2 className="fs-1 text-light">
              {remainingTime.hours}
              {/* only for first time display after loading the page-start */}
              {/* <CountUp
                start={focus ? 0 : null}
                end={45}
                duration={2}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <a></a>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp> */}{" "}
              {/* only for first time display after loading the page-end */}
              {/* <CountUp end={35} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp> */}
            </h2>
            <p className="text-danger">Hours</p>
          </div>
          <div>
            <h2 className="fs-1 text-light">
              {remainingTime.minutes}
              {/* only for first time display after loading the page-start */}
              {/* <CountUp
                start={focus ? 0 : null}
                end={48}
                duration={2}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <a></a>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp> */}
              {/* only for first time display after loading the page-end */}{" "}
              {/* <CountUp end={27} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp> */}
            </h2>
            <p className="text-danger">Minutes</p>
          </div>
          <div>
            <h2 className="fs-1 text-light">
              {remainingTime.seconds}

              {/* only for first time display after loading the page-start*/}
              {/* <CountUp
                start={focus ? 0 : null}
                end={59}
                duration={2}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <a></a>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp> */}
              {/* only for first time display after loading the page-start */}

              {/* <CountUp end={59} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp> */}
            </h2>
            <p className="text-danger">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSession;
