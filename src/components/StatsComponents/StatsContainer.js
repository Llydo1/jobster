import React from "react";
import Wrapper from "../../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { useSelector } from "react-redux";

const StatsContainer = () => {
  const {
    stats: { pending, interview, declined },
  } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <StatItem
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
        count={pending}
        text="Pending Applications"
      />
      <StatItem
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
        count={interview}
        text="Interviews Scheduled"
      />
      <StatItem
        color="#d66a6a"
        bcg="#ffeeee"
        icon={<FaBug />}
        count={declined}
        text="Jobs Declined"
      />
    </Wrapper>
  );
};

export default StatsContainer;
