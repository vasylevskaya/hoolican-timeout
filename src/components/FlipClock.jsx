import React from "react";
import FlipUnitContainer from "./FlipUnitContainer";

class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
    this.timerID = undefined;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  updateTime() {
    // Target date
    const targetDate = new Date("2025-12-01T00:00:00");
    const currentTime = new Date();
    const timeDifference = targetDate.getTime() - currentTime.getTime();

    // Calculate remaining time
    const days = Math.max(Math.floor(timeDifference / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((timeDifference / (1000 * 60 * 60)) % 24), 0);
    const minutes = Math.max(Math.floor((timeDifference / (1000 * 60)) % 60), 0);
    const seconds = Math.max(Math.floor((timeDifference / 1000) % 60), 0);

    // Update days
    if (days !== this.state.days) {
      this.setState((prevState) => ({
        days,
        daysShuffle: !prevState.daysShuffle,
      }));
    }

    // Update hours
    if (hours !== this.state.hours) {
      this.setState((prevState) => ({
        hours,
        hoursShuffle: !prevState.hoursShuffle,
      }));
    }

    // Update minutes
    if (minutes !== this.state.minutes) {
      this.setState((prevState) => ({
        minutes,
        minutesShuffle: !prevState.minutesShuffle,
      }));
    }

    // Update seconds
    if (seconds !== this.state.seconds) {
      this.setState((prevState) => ({
        seconds,
        secondsShuffle: !prevState.secondsShuffle,
      }));
    }

    // Stop loading
    if (this.props.isLoading) {
      this.props.setIsLoading(false);
    }
  }

  render() {
    const { days, hours, minutes, seconds, daysShuffle, hoursShuffle, minutesShuffle, secondsShuffle } = this.state;

    return (
      <div className="flip-clock">
        <FlipUnitContainer unit="day" digit={days} shuffle={daysShuffle} />
        <FlipUnitContainer unit="hr" digit={hours} shuffle={hoursShuffle} />
        <FlipUnitContainer unit="min" digit={minutes} shuffle={minutesShuffle} />
        <FlipUnitContainer unit="sec" digit={seconds} shuffle={secondsShuffle} />
      </div>
    );
  }
}

export default FlipClock;
