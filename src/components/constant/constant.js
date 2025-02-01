import {
   REET,
   BANK,
   SSC,
   NEET,
   TNPSC,
   CURRENT_AFF 
  } from "../../assets/index";

export  const apps = [
    {
      name: "NEET Quiz",
      description: "Practice & Revision Tests for NEET",
      image: NEET,
      
    },
    {
      name: "REET Quiz",
      description: "राजस्थान शिक्षक भर्ती - Grade I, II, III",
      image: REET,
    },
    {
      name: "Current Affairs",
      description: "Daily Current Affairs for Competitive Exams",
      image: CURRENT_AFF,
    },
    {
      name: "TNPSC",
      description: "Group 2 & 4",
      image:TNPSC,
    },
    {
      name: "BANK Quiz",
      description: "IBPS, RBI, SBI",
      image: BANK,
    },
    {
      name: "SSC Quiz",
      description: "SSC CGL, SSC CHSL, SSC MTS, SSC CPO, SSC GD, SSC JE, SSC Stenographer",
      image: SSC,
    },
  ];

export function getTimeLeftUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); 

  const differenceMs = midnight - now; 

 
  const hours = Math.floor(differenceMs / (1000 * 60 * 60));
  const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);

  return `${hours} : ${minutes} : ${seconds}`; 
}



export const formatTime = (seconds) => {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};


 