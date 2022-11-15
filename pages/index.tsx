import { Heading } from "@chakra-ui/react";
import { useRef } from "react";
import Countdown from "react-countdown";

export default function Index(): JSX.Element {
  const jstNow = new Date(
    Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
  );
  const jstDeadlineOfSubmit = new Date(
    Date() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
  );
  const difference = jstDeadlineOfSubmit.getTime() - jstNow.getTime();

  const hours = Math.floor(difference / 1000 / 60 / 60);
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  return (
    <div className="time-container">
      <p className="time">
        <span>{hours}</span>hours
      </p>
      <p className="time">
        <span>{minutes}</span>minutes
      </p>
      <p className="time">
        <span>{seconds}</span>seconds
      </p>
    </div>
  );
}
