import React, { useState } from "react";
import "./NewSession.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const NewSession = () => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="session">
      <div className="container text-center">
        <h2 className="text-warning mb-5">NEW ADVENTURES BEGIN IN</h2>
        <div className="d-flex justify-content-evenly align-items-center">
          <div>
            <h2 className="fs-1 text-light">
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
              <CountUp end={47} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="text-danger">Days</p>
          </div>
          <div>
            <h2 className="fs-1 text-light">
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
              <CountUp end={35} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="text-danger">Hours</p>
          </div>
          <div>
            <h2 className="fs-1 text-light">
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
              </CountUp> */}{" "}
              <CountUp end={27} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="text-danger">Minutes</p>
          </div>
          <div>
            <h2 className="fs-1 text-light">
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
              <CountUp end={59} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="text-danger">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSession;
