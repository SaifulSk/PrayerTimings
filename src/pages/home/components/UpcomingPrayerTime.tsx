import React, { useEffect, useState, useRef } from "react";
import data from "../../../config/data/data.json";
import moment from "moment";
import getCurrentWaqt from "../../../config/functions";
import AzanModal from "./AzanModal";
import { WAQT_NAMAJ } from "../../../config";
import parse from "html-react-parser";

export default function UpcomingPrayerTime({ type }: any) {
  const [upcomingTime, setUpcomingTime] = useState<any>();
  const [waqt, setWaqt] = useState<any>();
  const [remainingTime, setRemainingTime] = useState<any>();
  const [intervalId, setIntervalId] = useState<any>();
  const [showAzanModal, setShowAzanModal] = useState<boolean>(false);
  const [showCurrentWaqt, setShowCurrentWaqt] = useState<boolean>(false);
  const intervalRef = useRef<any>(null);
  const dataa: any = data;
  const namaj: any = WAQT_NAMAJ;

  const pad = (num: any) => {
    return ("0" + num).slice(-2);
  };
  const hhmmss = (secs: any) => {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    // return pad(hours)+":"+pad(minutes)+":"+pad(secs) for old browsers
  };

  const openAzanModal = () => {
    setShowAzanModal(true);
  };

  const closeAzanModal = () => {
    setShowAzanModal(false);
    // window.location.reload()
    findUpcomingWaqt();
  };

  const findUpcomingWaqt = () => {
    let currentDate = moment();

    let day = currentDate.format("D");
    let month = currentDate.format("MMMM");

    let x: any = data;
    let y = getCurrentWaqt();
    let waqts = Object.keys(x[month][day]);
    let i = waqts.indexOf(y);
    if (i == waqts.length - 1) {
      y = waqts[0];
      let t = currentDate.format("HH:mm");
      if (t > "22:00") {
        day = moment().add(1, "days").format("D");
        month = moment().add(1, "days").format("MMMM");
      }
    } else {
      y = waqts[i + 1];
    }
    setWaqt(y);
    console.log(month, day);
    let tm = moment(x[month][day][y]["Start"], "HH:mm").format("h:mm a");
    setUpcomingTime(tm);
    countDown(tm);
    return tm;
  };

  const countDown = (tm: any) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let targetMoment = moment(tm, "h:mm a");
    if (targetMoment.diff(moment(), "seconds") < 0) {
      targetMoment.add(1, "days");
    }

    let id = setInterval(() => {
      let sec = targetMoment.diff(moment(), "seconds");
      if (sec < -60) {
        clearInterval(id);
        findUpcomingWaqt();
      } else if (sec <= 0) {
        clearInterval(id);
        openAzanModal();
      } else {
        setRemainingTime(hhmmss(sec));
      }
    }, 1000);
    intervalRef.current = id;
    setIntervalId(id);
  };

  const refreshData = () => {
    let cWaqt = getCurrentWaqt();
    let uWaqt = findUpcomingWaqt();
    let diff = dataa[moment().format("MMMM")][moment().format("D")][cWaqt][
      "End"
    ]
      ? moment().diff(
          moment(
            dataa[moment().format("MMMM")][moment().format("D")][cWaqt]["End"],
            "HH:mm"
          )
        )
      : moment().diff(moment(uWaqt, "h:mm a").subtract(1, "minutes"));
    if (diff < 0) {
      setShowCurrentWaqt(true);
    } else {
      setShowCurrentWaqt(false);
    }
  };

  useEffect(() => {
    refreshData();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        refreshData();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {showCurrentWaqt ? (
        <>
          {getCurrentWaqt() != "Tahajjud" && (
            <>
              <h3 className="page-title">{getCurrentWaqt()} Prayers</h3>
              {namaj[getCurrentWaqt()].map((x: any, i: any) => (
                <div className="content text-white" key={i}>
                  {parse(x)}
                </div>
              ))}
            </>
          )}
          <div className="highlight-text content">
            Current Waqt <span>({getCurrentWaqt()})</span> ends at{" "}
            <span>
              {dataa[moment().format("MMMM")][moment().format("D")][
                getCurrentWaqt()
              ]["End"]
                ? moment(
                    dataa[moment().format("MMMM")][moment().format("D")][
                      getCurrentWaqt()
                    ]["End"],
                    "HH:mm"
                  ).format("h:mm a")
                : moment(upcomingTime, "h:mm a")
                    .subtract(1, "minutes")
                    .format("h:mm a")}
            </span>
          </div>
        </>
      ) : null}
      <h3 className="page-title">Upcoming Prayer</h3>
      <div className="content text-white">
        Waqt: <span>{waqt}</span>
      </div>
      <div className="content text-white">
        Time: <span>{upcomingTime}</span>
      </div>
      <div className="content text-white">
        Time Left: <span>{remainingTime}</span>
      </div>
      {/* <div className="content text-white">
        Tasbih: <span>{}</span>
      </div> */}
      {/* <div className="zikr-wrap">
        <div className="zikr-img"></div>
        <div className="zikr-meaning text-white"></div>
        <div className="zikr-meaning"></div>
      </div> */}
      {showAzanModal && waqt && waqt != "Tahajjud" && (
        <AzanModal
          shouldShow={showAzanModal}
          closeAzanModal={closeAzanModal}
          waqt={waqt}
        />
      )}
    </>
  );
}
