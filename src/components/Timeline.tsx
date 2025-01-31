import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const Timeline = () => {
  return (
    <div>
      <TimelineItem>
        <TimelineOppositeContent>Aug 2020</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Started @ Miami University</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>May 2022</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>1st Internship at Compassion</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>May 2023</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Graduated early w/ Bachelor's degree</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>May 2023</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Internship w/ London Computer Systems</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>Aug 2023</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Chosen as Graduate Assistant</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>Apr 2024</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Published journal at SysCon</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>May 2024</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Graduated w/ Master's in 4 years</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2nd internship w/ Compassion</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>Aug 2024</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          Hired as Software Engineer for Air Force
        </TimelineContent>
      </TimelineItem>
    </div>
  );
};

export default Timeline;
