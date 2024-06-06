import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent, {
  timelineContentClasses,
} from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import React from "react";

const OrderTimeline = () => {
  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#4caf50" }}>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              $2400, Design changes
            </Typography>
            <Typography>22 DEC 7:20 PM</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#f44335" }}>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              New order #1832412
            </Typography>
            <Typography>21 DEC 11 PM</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#1a73e8" }}>
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Server payments for April
            </Typography>
            <Typography>21 DEC 9:34 PM</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#fb8c00" }}>
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              New card added for order #4395133
            </Typography>
            <Typography>20 DEC 2:20 AM</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#e91e63" }}>
              <FastfoodIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              New card added for order #4395133
            </Typography>
            <Typography>18 DEC 4:54 AM</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default OrderTimeline;
