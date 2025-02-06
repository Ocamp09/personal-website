import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-text">
          Aug 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          Started @ Miami University
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-text">
          May 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          1st Internship at Compassion
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-text">
          May 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          Graduated early w/ Bachelor's degree
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-text">
          May 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          Internship w/ London Computer Systems
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-text">
          Aug 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          Chosen as Graduate Assistant
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-text">
          Apr 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          Published journal at SysCon
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-text">
          May 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          Graduated w/ Master's in 4 years
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          2nd internship w/ Compassion
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-text">
          Aug 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          Hired as Software Engineer for Air Force
        </TimelineContent>
      </TimelineItem>
    </div>
  );
};

export default Timeline;
