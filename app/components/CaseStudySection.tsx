"use client";

import { useState } from "react";

interface RawRowP1 {
  emp_id: string;
  date_of_hire: string;
  JobTitle: string;
  dept: string;
  DateOfBirth: string;
  State: string;
  gender: string;
  Engagement: string;
  Satisfaction: string;
  WLB: string;
  Training_Name: string;
  Training_Outcome: string;
  Training_Days: string;
  Training_Cost: string;
}

interface CleanRowP1 {
  employeeId: string;
  startDate: string;
  title: string;
  departmentType: string;
  dob: string;
  state: string;
  genderCode: string;
  engagement: string;
  satisfaction: string;
  wlb: string;
  trainingProgram: string;
  trainingOutcome: string;
  trainingDays: string;
  trainingCost: string;
  age: string;
  tenure: string;
  ageGroup: string;
}

interface RawRowP2 {
  empId: string;
  name: string;
  dob: string;
  dateOfHire: string;
  dateOfTerm: string;
  termReason: string;
  status: string;
  dept: string;
  engagement: string;
  satisfaction: string;
  lastReview: string;
  daysLate: string;
}

interface CleanRowP2 {
  empId: string;
  name: string;
  dob: string;
  dateOfHire: string;
  dateOfTerm: string;
  termReason: string;
  status: string;
  dept: string;
  engagement: string;
  satisfaction: string;
  tenureDays: string;
  tenureYears: string;
  hireMonth: string;
  isActive: string;
}

const project1RawSample: RawRowP1[] = [
  {
    emp_id: "3427",
    date_of_hire: "2019/09/20",
    JobTitle: "Production Technician I",
    dept: "PRODUCTION",
    DateOfBirth: "1969-10-07 00:00:00",
    State: "MA",
    gender: "Female",
    Engagement: "1",
    Satisfaction: "2",
    WLB: "3",
    Training_Name: "Leadership Development",
    Training_Outcome: "Failed",
    Training_Days: "2",
    Training_Cost: "606.11",
  },
  {
    emp_id: "3429",
    date_of_hire: "2018/12/10",
    JobTitle: "",
    dept: "Sales",
    DateOfBirth: "1991-10-06 00:00:00",
    State: "MA",
    gender: "Male",
    Engagement: "1",
    Satisfaction: "2",
    WLB: "1",
    Training_Name: "Leadership Development",
    Training_Outcome: "Failed",
    Training_Days: "2",
    Training_Cost: "413.28",
  },
  {
    emp_id: "3430",
    date_of_hire: "21-06-2021",
    JobTitle: "Area Sales Manager",
    dept: "Sales",
    DateOfBirth: "1998-04-04 00:00:00",
    State: "ND",
    gender: "Male",
    Engagement: "5",
    Satisfaction: "5",
    WLB: "4",
    Training_Name: "Project Management",
    Training_Outcome: "Completed",
    Training_Days: "3",
    Training_Cost: "663.78",
  },
  {
    emp_id: "3431",
    date_of_hire: "29-06-2019",
    JobTitle: "Area Sales Manager",
    dept: "sales",
    DateOfBirth: "1969-08-29 00:00:00",
    State: "FL",
    gender: "Female",
    Engagement: "2",
    Satisfaction: "5",
    WLB: "3",
    Training_Name: "Technical Skills",
    Training_Outcome: "Failed",
    Training_Days: "5",
    Training_Cost: "399.03",
  },
  {
    emp_id: "3434",
    date_of_hire: "06-11-2020",
    JobTitle: "Area Sales Manager",
    dept: "Sales",
    DateOfBirth: "1957-03-07 00:00:00",
    State: "OR",
    gender: "female",
    Engagement: "1",
    Satisfaction: "4",
    WLB: "2",
    Training_Name: "Leadership Development",
    Training_Outcome: "Passed",
    Training_Days: "3",
    Training_Cost: "790.15",
  },
  {
    emp_id: "3439",
    date_of_hire: "2022/05/25",
    JobTitle: "Area Sales Manager",
    dept: "Sales",
    DateOfBirth: "1981-11-24 00:00:00",
    State: "CO",
    gender: "M",
    Engagement: "1",
    Satisfaction: "2",
    WLB: "5",
    Training_Name: "Technical Skills",
    Training_Outcome: "Incomplete",
    Training_Days: "1",
    Training_Cost: "421.07",
  },
  {
    emp_id: "3440",
    date_of_hire: "2019/12/05",
    JobTitle: "Area Sales Manager",
    dept: "SALES",
    DateOfBirth: "1951-11-06 00:00:00",
    State: "KY",
    gender: "F",
    Engagement: "1",
    Satisfaction: "4",
    WLB: "5",
    Training_Name: "Communication Skills",
    Training_Outcome: "Failed",
    Training_Days: "1",
    Training_Cost: "649.03",
  },
  {
    emp_id: "3441",
    date_of_hire: "2019/04/28",
    JobTitle: "Area Sales Manager",
    dept: "sales",
    DateOfBirth: "1989-11-21 00:00:00",
    State: "NV",
    gender: "male",
    Engagement: "",
    Satisfaction: "2",
    WLB: "5",
    Training_Name: "Project Management",
    Training_Outcome: "Passed",
    Training_Days: "4",
    Training_Cost: "450.2",
  },
  {
    emp_id: "3451",
    date_of_hire: "2021/02/18",
    JobTitle: "Area Sales Manager",
    dept: "sales",
    DateOfBirth: "1968-01-15 00:00:00",
    State: "",
    gender: "Male",
    Engagement: "5",
    Satisfaction: "1",
    WLB: "2",
    Training_Name: "Technical Skills",
    Training_Outcome: "Completed",
    Training_Days: "1",
    Training_Cost: "921.97",
  },
  {
    emp_id: "3455",
    date_of_hire: "2021/06/29",
    JobTitle: "Area Sales Manager",
    dept: "Sales ",
    DateOfBirth: "1999-01-18 00:00:00",
    State: "KY",
    gender: "Male",
    Engagement: "2",
    Satisfaction: "1",
    WLB: "1",
    Training_Name: "",
    Training_Outcome: "Passed",
    Training_Days: "1",
    Training_Cost: "220.41",
  },
];

const project1CleanSample: CleanRowP1[] = [
  {
    employeeId: "3427",
    startDate: "2019-09-20",
    title: "Production Technician I",
    departmentType: "Production",
    dob: "1969-10-07",
    state: "MA",
    genderCode: "Female",
    engagement: "1",
    satisfaction: "2",
    wlb: "3",
    trainingProgram: "Leadership Development",
    trainingOutcome: "Failed",
    trainingDays: "2",
    trainingCost: "$606.11",
    age: "57",
    tenure: "7.1",
    ageGroup: "50+",
  },
  {
    employeeId: "3429",
    startDate: "2018-12-10",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1991-10-06",
    state: "MA",
    genderCode: "Male",
    engagement: "1",
    satisfaction: "2",
    wlb: "1",
    trainingProgram: "Leadership Development",
    trainingOutcome: "Failed",
    trainingDays: "2",
    trainingCost: "$413.28",
    age: "35",
    tenure: "7.8",
    ageGroup: "30-39",
  },
  {
    employeeId: "3430",
    startDate: "2021-06-21",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1998-04-04",
    state: "ND",
    genderCode: "Male",
    engagement: "5",
    satisfaction: "5",
    wlb: "4",
    trainingProgram: "Project Management",
    trainingOutcome: "Completed",
    trainingDays: "3",
    trainingCost: "$663.78",
    age: "28",
    tenure: "5.3",
    ageGroup: "20-29",
  },
  {
    employeeId: "3431",
    startDate: "2019-06-29",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1969-08-29",
    state: "FL",
    genderCode: "Female",
    engagement: "2",
    satisfaction: "5",
    wlb: "3",
    trainingProgram: "Technical Skills",
    trainingOutcome: "Failed",
    trainingDays: "5",
    trainingCost: "$399.03",
    age: "57",
    tenure: "7.3",
    ageGroup: "50+",
  },
  {
    employeeId: "3434",
    startDate: "2020-11-06",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1957-03-07",
    state: "OR",
    genderCode: "Female",
    engagement: "1",
    satisfaction: "4",
    wlb: "2",
    trainingProgram: "Leadership Development",
    trainingOutcome: "Passed",
    trainingDays: "3",
    trainingCost: "$790.15",
    age: "69",
    tenure: "5.9",
    ageGroup: "50+",
  },
  {
    employeeId: "3439",
    startDate: "2022-05-25",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1981-11-24",
    state: "CO",
    genderCode: "Male",
    engagement: "1",
    satisfaction: "2",
    wlb: "5",
    trainingProgram: "Technical Skills",
    trainingOutcome: "Incomplete",
    trainingDays: "1",
    trainingCost: "$421.07",
    age: "44",
    tenure: "4.4",
    ageGroup: "40-49",
  },
  {
    employeeId: "3440",
    startDate: "2019-12-05",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1951-11-06",
    state: "KY",
    genderCode: "Female",
    engagement: "1",
    satisfaction: "4",
    wlb: "5",
    trainingProgram: "Communication Skills",
    trainingOutcome: "Failed",
    trainingDays: "1",
    trainingCost: "$649.03",
    age: "74",
    tenure: "6.8",
    ageGroup: "50+",
  },
  {
    employeeId: "3441",
    startDate: "2019-04-28",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1989-11-21",
    state: "NV",
    genderCode: "Male",
    engagement: "4",
    satisfaction: "2",
    wlb: "5",
    trainingProgram: "Project Management",
    trainingOutcome: "Passed",
    trainingDays: "4",
    trainingCost: "$450.20",
    age: "36",
    tenure: "7.4",
    ageGroup: "30-39",
  },
  {
    employeeId: "3451",
    startDate: "2021-02-18",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1968-01-15",
    state: "CO",
    genderCode: "Male",
    engagement: "5",
    satisfaction: "1",
    wlb: "2",
    trainingProgram: "Technical Skills",
    trainingOutcome: "Completed",
    trainingDays: "1",
    trainingCost: "$921.97",
    age: "58",
    tenure: "5.7",
    ageGroup: "50+",
  },
  {
    employeeId: "3455",
    startDate: "2021-06-29",
    title: "Area Sales Manager",
    departmentType: "Sales",
    dob: "1999-01-18",
    state: "KY",
    genderCode: "Male",
    engagement: "2",
    satisfaction: "1",
    wlb: "1",
    trainingProgram: "Project Management",
    trainingOutcome: "Passed",
    trainingDays: "1",
    trainingCost: "$220.41",
    age: "27",
    tenure: "5.3",
    ageGroup: "20-29",
  },
];

const project2RawSample: RawRowP2[] = [
  {
    empId: "10026",
    name: "Adinolfi, Wilson K",
    dob: "1983-10-07",
    dateOfHire: "2011-05-07",
    dateOfTerm: "",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Production",
    engagement: "4.60",
    satisfaction: "5",
    lastReview: "1/17/2019",
    daysLate: "0",
  },
  {
    empId: "10084",
    name: "Ait Sidi, Karthikeyan",
    dob: "1975-05-05",
    dateOfHire: "3/30/2015",
    dateOfTerm: "6/16/2016",
    termReason: "career change",
    status: "Voluntarily Terminated",
    dept: "IT/IS",
    engagement: "4.96",
    satisfaction: "3",
    lastReview: "2/24/2016",
    daysLate: "0",
  },
  {
    empId: "10196",
    name: "Akinkuolie, Sarah",
    dob: "09/19/88",
    dateOfHire: "2011-05-07",
    dateOfTerm: "9/24/2012",
    termReason: "hours",
    status: "Voluntarily Terminated",
    dept: "Production",
    engagement: "03.02",
    satisfaction: "3",
    lastReview: "5/15/2012",
    daysLate: "0",
  },
  {
    empId: "10088",
    name: "Alagbe,Trina",
    dob: "09/27/88",
    dateOfHire: "2008-07-01",
    dateOfTerm: "",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Production",
    engagement: "4.84",
    satisfaction: "5",
    lastReview: "2019-03-01",
    daysLate: "0",
  },
  {
    empId: "10069",
    name: "Anderson, Carol",
    dob: "1989-08-09",
    dateOfHire: "2011-11-07",
    dateOfTerm: "2016-06-09",
    termReason: "return to school",
    status: "Voluntarily Terminated",
    dept: "Production",
    engagement: "5.00",
    satisfaction: "4",
    lastReview: "2016-01-02",
    daysLate: "0",
  },
  {
    empId: "10002",
    name: "Anderson, Linda",
    dob: "05/22/77",
    dateOfHire: "2012-09-01",
    dateOfTerm: "",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Production",
    engagement: "5.00",
    satisfaction: "5",
    lastReview: "2019-07-01",
    daysLate: "0",
  },
  {
    empId: "10194",
    name: "Andreola, Colby",
    dob: "05/24/79",
    dateOfHire: "2014-10-11",
    dateOfTerm: "",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Software Engineering",
    engagement: "03.04",
    satisfaction: "3",
    lastReview: "2019-02-01",
    daysLate: "0",
  },
  {
    empId: "10062",
    name: "Athwal, Sam",
    dob: "02/18/83",
    dateOfHire: "9/30/2013",
    dateOfTerm: "",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Production",
    engagement: "5.00",
    satisfaction: "4",
    lastReview: "2/25/2019",
    daysLate: "0",
  },
  {
    empId: "10252",
    name: "Baczenski, Rachael",
    dob: "1974-12-01",
    dateOfHire: "2011-10-01",
    dateOfTerm: "2017-12-01",
    termReason: "Another position",
    status: "Voluntarily Terminated",
    dept: "Production",
    engagement: "4.20",
    satisfaction: "4",
    lastReview: "1/30/2016",
    daysLate: "0",
  },
  {
    empId: "10242",
    name: "Barbara, Thomas",
    dob: "02/21/74",
    dateOfHire: "2012-02-04",
    dateOfTerm: "9/19/2016",
    termReason: "unhappy",
    status: "Voluntarily Terminated",
    dept: "Production",
    engagement: "4.20",
    satisfaction: "3",
    lastReview: "2016-06-05",
    daysLate: "0",
  },
];

const project2CleanSample: CleanRowP2[] = [
  {
    empId: "10026",
    name: "AdiNolfi, Wilson K",
    dob: "1983-10-07",
    dateOfHire: "2011-05-07",
    dateOfTerm: "—",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Production",
    engagement: "4.6",
    satisfaction: "5",
    tenureDays: "5,652",
    tenureYears: "15.48",
    hireMonth: "2011/05",
    isActive: "1 (Active)",
  },
  {
    empId: "10084",
    name: "Ait Sidi, Karthikeyan",
    dob: "1975-05-05",
    dateOfHire: "2015-03-30",
    dateOfTerm: "2016-06-16",
    termReason: "Career Change",
    status: "Voluntarily Terminated",
    dept: "IT/IS",
    engagement: "4.96",
    satisfaction: "3",
    tenureDays: "444",
    tenureYears: "1.22",
    hireMonth: "2015/03",
    isActive: "0 (Term)",
  },
  {
    empId: "10196",
    name: "Akinkuolie, Sarah",
    dob: "1988-09-19",
    dateOfHire: "2011-05-07",
    dateOfTerm: "2012-09-24",
    termReason: "Hours",
    status: "Voluntarily Terminated",
    dept: "Production",
    engagement: "3.02",
    satisfaction: "3",
    tenureDays: "506",
    tenureYears: "1.39",
    hireMonth: "2011/05",
    isActive: "0 (Term)",
  },
  {
    empId: "10088",
    name: "Alagbe,Trina",
    dob: "1988-09-27",
    dateOfHire: "2008-07-01",
    dateOfTerm: "—",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Production",
    engagement: "4.84",
    satisfaction: "5",
    tenureDays: "6,692",
    tenureYears: "18.33",
    hireMonth: "2008/07",
    isActive: "1 (Active)",
  },
  {
    empId: "10069",
    name: "Anderson, Carol",
    dob: "1989-08-09",
    dateOfHire: "2011-11-07",
    dateOfTerm: "2016-06-09",
    termReason: "Return to School",
    status: "Voluntarily Terminated",
    dept: "Production",
    engagement: "5",
    satisfaction: "4",
    tenureDays: "1,676",
    tenureYears: "4.59",
    hireMonth: "2011/11",
    isActive: "0 (Term)",
  },
  {
    empId: "10002",
    name: "Anderson, Linda",
    dob: "1977-05-22",
    dateOfHire: "2012-09-01",
    dateOfTerm: "—",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Production",
    engagement: "5",
    satisfaction: "5",
    tenureDays: "5,169",
    tenureYears: "14.16",
    hireMonth: "2012/09",
    isActive: "1 (Active)",
  },
  {
    empId: "10194",
    name: "Andreola, Colby",
    dob: "1979-05-24",
    dateOfHire: "2014-10-11",
    dateOfTerm: "—",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Software Engineering",
    engagement: "3.04",
    satisfaction: "3",
    tenureDays: "4,399",
    tenureYears: "12.05",
    hireMonth: "2014/10",
    isActive: "1 (Active)",
  },
  {
    empId: "10062",
    name: "Athwal, Sam",
    dob: "1983-02-18",
    dateOfHire: "2013-09-30",
    dateOfTerm: "—",
    termReason: "N/A-StillEmployed",
    status: "Active",
    dept: "Production",
    engagement: "5",
    satisfaction: "4",
    tenureDays: "4,775",
    tenureYears: "13.08",
    hireMonth: "2013/09",
    isActive: "1 (Active)",
  },
  {
    empId: "10252",
    name: "Baczenski, Rachael",
    dob: "1974-12-01",
    dateOfHire: "2011-10-01",
    dateOfTerm: "2017-12-01",
    termReason: "Another Position",
    status: "Voluntarily Terminated",
    dept: "Production",
    engagement: "4.2",
    satisfaction: "4",
    tenureDays: "2,253",
    tenureYears: "6.17",
    hireMonth: "2011/10",
    isActive: "0 (Term)",
  },
  {
    empId: "10242",
    name: "Barbara, Thomas",
    dob: "1974-02-21",
    dateOfHire: "2012-02-04",
    dateOfTerm: "2016-09-19",
    termReason: "Unhappy",
    status: "Voluntarily Terminated",
    dept: "Production",
    engagement: "4.2",
    satisfaction: "3",
    tenureDays: "1,689",
    tenureYears: "4.63",
    hireMonth: "2012/02",
    isActive: "0 (Term)",
  },
];

const deptHeadcount = [
  { dept: "Production", female: 987, male: 601, total: 1588 },
  { dept: "IT/IS", female: 180, male: 195, total: 375 },
  { dept: "Sales", female: 99, male: 202, total: 301 },
  { dept: "Software Engineering", female: 44, male: 48, total: 92 },
  { dept: "Admin Offices", female: 43, male: 35, total: 78 },
  { dept: "Executive Office", female: 1, male: 23, total: 24 },
];

const deptScores = [
  {
    dept: "Admin Offices",
    satisfaction: 2.51,
    engagement: 3.05,
    wlb: 3.2,
    highlight: true,
    note: "Lowest satisfaction (2.51) despite highest Work-Life Balance (3.20)",
  },
  {
    dept: "Sales",
    satisfaction: 3.14,
    engagement: 3.08,
    wlb: 2.98,
    highlight: false,
  },
  {
    dept: "IT/IS",
    satisfaction: 3.11,
    engagement: 3.12,
    wlb: 3.01,
    highlight: false,
  },
  {
    dept: "Software Engineering",
    satisfaction: 3.09,
    engagement: 3.15,
    wlb: 2.96,
    highlight: false,
  },
  {
    dept: "Production",
    satisfaction: 3.04,
    engagement: 3.01,
    wlb: 3.02,
    highlight: false,
  },
  {
    dept: "Executive Office",
    satisfaction: 3.18,
    engagement: 3.22,
    wlb: 3.08,
    highlight: false,
  },
];

const trainingPrograms = [
  {
    name: "Project Management",
    avgCost: 563,
    optimalDays: 3,
    completionRate: 54,
    highlight: true,
  },
  {
    name: "Leadership Development",
    avgCost: 561,
    optimalDays: 3,
    completionRate: 53,
    highlight: true,
  },
  {
    name: "Customer Service",
    avgCost: 549,
    optimalDays: 3,
    completionRate: 51,
    highlight: false,
  },
  {
    name: "Technical Skills",
    avgCost: 544,
    optimalDays: 3,
    completionRate: 49,
    highlight: false,
  },
  {
    name: "Communication Skills",
    avgCost: 538,
    optimalDays: 3,
    completionRate: 50,
    highlight: false,
  },
];

const p2TurnoverByDept = [
  {
    dept: "Sales",
    avgHeadcount: 68,
    turnoverPct: 13.6,
    highlight: true,
    note: "Highest turnover risk — 4.9× Admin Offices & 11× Production",
  },
  {
    dept: "Software Engineering",
    avgHeadcount: 17,
    turnoverPct: 4.25,
    highlight: false,
  },
  {
    dept: "Admin Offices",
    avgHeadcount: 5.5,
    turnoverPct: 2.75,
    highlight: false,
  },
  {
    dept: "Production",
    avgHeadcount: 103,
    turnoverPct: 1.24,
    highlight: false,
  },
  {
    dept: "IT/IS",
    avgHeadcount: 10.5,
    turnoverPct: 1.05,
    highlight: false,
  },
];

const p2RetentionFactors = [
  {
    dept: "Sales (High Turnover Risk)",
    turnover: "13.60%",
    avgSatisfaction: "3.88 / 5.00",
    avgEngagement: "3.82 / 5.00",
    avgTenureActive: "13.6 yrs",
    avgTenureTerm: "2.37 yrs",
    lateSignal: "High correlation (PIP & 2–6 days late in last 30d)",
    highlight: true,
  },
  {
    dept: "Software Engineering",
    turnover: "4.25%",
    avgSatisfaction: "4.09 / 5.00",
    avgEngagement: "4.11 / 5.00",
    avgTenureActive: "13.1 yrs",
    avgTenureTerm: "3.97 yrs",
    lateSignal: "Moderate (attendance-linked exits at ~2.25 yrs)",
    highlight: false,
  },
  {
    dept: "Admin Offices",
    turnover: "2.75%",
    avgSatisfaction: "3.63 / 5.00",
    avgEngagement: "4.36 / 5.00",
    avgTenureActive: "13.6 yrs",
    avgTenureTerm: "1.08 yrs",
    lateSignal: "Low tardiness · early-tenure voluntary career exits",
    highlight: false,
  },
  {
    dept: "Production",
    turnover: "1.24%",
    avgSatisfaction: "3.92 / 5.00",
    avgEngagement: "4.15 / 5.00",
    avgTenureActive: "13.5 yrs",
    avgTenureTerm: "3.84 yrs",
    lateSignal: "Stable core workforce · 103 avg headcount",
    highlight: false,
  },
  {
    dept: "IT/IS",
    turnover: "1.05%",
    avgSatisfaction: "3.96 / 5.00",
    avgEngagement: "4.22 / 5.00",
    avgTenureActive: "12.3 yrs",
    avgTenureTerm: "1.69 yrs",
    lateSignal: "Lowest rolling turnover · high project engagement",
    highlight: false,
  },
];

const p2TopTermReasons = [
  { reason: "Another Position", category: "Voluntary", share: "24%", count: 20 },
  { reason: "Unhappy", category: "Voluntary", share: "17%", count: 14 },
  { reason: "More Money", category: "Voluntary", share: "13%", count: 11 },
  { reason: "Career Change", category: "Voluntary", share: "11%", count: 9 },
  { reason: "Hours / Schedule", category: "Voluntary", share: "10%", count: 8 },
  {
    reason: "Attendance & Performance",
    category: "For Cause",
    share: "15%",
    count: 13,
  },
];

const projects = [
  {
    id: "project-1",
    number: "Project 01",
    title: "Workforce Analytics & Employee Experience Intelligence",
    datasetBadge: "Cleaned_HR_Data_Analysis.xlsx — 2,845 employee records",
    shortDescription:
      "Standardizing 2,845 fragmented people operations records to uncover job satisfaction disparities, demographic trends, and L&D training ROI across six departments.",
    keyStatLabel: "Admin Offices Satisfaction",
    keyStatValue: "2.51 / 5.00",
    secondaryStatLabel: "L&D Optimal Allocation",
    secondaryStatValue: "$561–$563",
    problem:
      "People operations data was fragmented and lacked standardization across age, tenure, training history, and job satisfaction metrics. This made it difficult for management to identify correlations between training program effectiveness and employee performance across departments.",
    executed: [
      "Cleaned and standardized 2,845 employee records, including correcting date data types, performing feature engineering to create age groups (Age Group), and calculating employee tenure (Tenure (yrs)).",
      "Built HR metric pivot tables to analyze the relationships among Department, Gender Distribution, Engagement Score, Satisfaction Score, and Work-Life Balance Score.",
      "Integrated a training program cost-efficiency analysis (Training Cost vs. Outcome) covering five major programs: Leadership, Project Management, Technical Skills, Communication, and Customer Service.",
    ],
    results: [
      "Identified disparities in job satisfaction: the Admin Offices department had the lowest average satisfaction score (2.51/5.00) compared with other departments, which consistently scored above 3.00, despite having the highest work-life balance score (3.20/5.00).",
      "Identified training program cost efficiencies: Leadership Development and Project Management had average budget allocations of approximately $561–$563 per participant, with an optimal duration of three days, providing a basis for annual Learning & Development (L&D) budget ROI recommendations.",
    ],
  },
  {
    id: "project-2",
    number: "Project 02",
    title: "Attrition Diagnostics & Turnover Rate Deep-Dive",
    datasetBadge: "Clean HR Dataset 13_09_2025.xlsx — 311 employee records",
    shortDescription:
      "Quantifying rolling 12-month departmental turnover risk and behavioral retention indicators across 311 employee records to enable early manager interventions.",
    keyStatLabel: "Peak Sales Turnover",
    keyStatValue: "13.6%",
    secondaryStatLabel: "Production Turnover",
    secondaryStatValue: "1.24%",
    problem:
      "High employee turnover that had not been quantitatively assessed led to rising recruitment costs and lost productivity across operational teams.",
    executed: [
      "Transformed raw data into a clean dataset by validating employment status (Active vs. Terminated), termination reasons (TermReason), and calculating average employee tenure in days and years.",
      "Calculated department-level turnover rate metrics using the ratio of terminations to average headcount over a rolling 12-month period.",
      "Compared job satisfaction (EmpSatisfaction) and departmental tenure across high-turnover departments and other business units.",
    ],
    results: [
      "Identified the department with the highest turnover risk: Sales had the highest turnover rate at 13.6%, significantly exceeding the rates in other departments, including Admin Offices (2.75%) and Production (1.24%).",
      "Analyzed employee retention factors: employees in high-risk departments showed correlations among tardiness (DaysLateLast30), engagement evaluations, and employee retention duration.",
      "Delivered ready-to-use dashboard metrics for recruitment teams and line managers to support early retention interventions before employees submit their resignations.",
      "Developed a centralized, interactive intelligence dashboard to help leadership teams regularly monitor employee demographic composition and workforce health metrics.",
    ],
  },
];

export default function CaseStudySection() {
  const [selectedId, setSelectedId] = useState<string | null>("project-1");
  const [dataTab, setDataTab] = useState<"split" | "before" | "after">("split");

  const activeProject = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <section
      aria-labelledby="case-study-title"
      className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12"
      id="case-study"
    >
      {/* Section Header */}
      <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-autumn-rust">
            Featured case studies
          </p>
          <h2
            className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl"
            id="case-study-title"
          >
            Workforce Analytics &amp; Attrition Diagnostics
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-autumn-navy/65">
            Select a project below to expand the full case study, inspect the
            Before &amp; After data cleaning pipeline, and explore the interactive
            HR Intelligence Dashboard.
          </p>
        </div>
        {selectedId && (
          <button
            type="button"
            onClick={() => setSelectedId(null)}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-autumn-navy/15 bg-white px-4 py-2 text-xs font-semibold text-autumn-navy transition hover:border-autumn-rust hover:text-autumn-rust"
          >
            ← Back to 2-project overview
          </button>
        )}
      </div>

      {/* Main Layout: 2 side-by-side buttons on top, expanding full-width showcase below */}
      <div className="space-y-6">
        {/* Top Row: 2 Side-by-Side Project Buttons */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const isSelected = selectedId === project.id;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedId(isSelected ? null : project.id)}
                aria-expanded={isSelected}
                className={`group relative flex flex-col justify-between rounded-[1.75rem] border text-left transition-all duration-300 ${
                  selectedId ? "p-5 sm:p-6" : "min-h-[20rem] p-7 sm:p-8"
                } ${
                  isSelected
                    ? "border-autumn-purple bg-gradient-to-br from-autumn-plum via-autumn-navy to-autumn-purple text-autumn-ivory shadow-[0_24px_60px_-25px_rgba(91,52,181,0.55)]"
                    : selectedId
                      ? "border-autumn-rust/20 bg-autumn-lilac/55 text-autumn-navy hover:border-autumn-rust/45 hover:bg-autumn-lilac/80"
                      : "border-autumn-rust/15 bg-white hover:-translate-y-1 hover:border-autumn-rust/50 hover:shadow-[0_24px_60px_-30px_rgba(91,52,181,0.25)]"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                        isSelected
                          ? "bg-white/15 text-autumn-lavender"
                          : "bg-autumn-lilac text-autumn-purple"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {project.number}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        isSelected
                          ? "text-autumn-lavender"
                          : "text-autumn-navy/55"
                      }`}
                    >
                      {isSelected
                        ? "Opened below ↓ · Click to close"
                        : "Click to open below ↓"}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 font-semibold tracking-tight ${
                      selectedId ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-1.5 text-xs font-medium ${
                      isSelected ? "text-autumn-lavender" : "text-autumn-rust"
                    }`}
                  >
                    {project.datasetBadge}
                  </p>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      isSelected
                        ? "text-autumn-ivory/85"
                        : "text-autumn-navy/70"
                    } ${selectedId ? "line-clamp-2" : ""}`}
                  >
                    {project.shortDescription}
                  </p>
                </div>

                <div
                  className={`mt-5 flex items-center justify-between border-t pt-4 ${
                    isSelected
                      ? "border-white/15"
                      : "border-autumn-navy/10"
                  }`}
                >
                  <div className="flex gap-5">
                    <div>
                      <p
                        className={`text-[10px] uppercase tracking-wider ${
                          isSelected
                            ? "text-autumn-ivory/60"
                            : "text-autumn-navy/50"
                        }`}
                      >
                        {project.keyStatLabel}
                      </p>
                      <p
                        className={`mt-0.5 text-sm font-semibold ${
                          isSelected ? "text-white" : "text-autumn-navy"
                        }`}
                      >
                        {project.keyStatValue}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-[10px] uppercase tracking-wider ${
                          isSelected
                            ? "text-autumn-ivory/60"
                            : "text-autumn-navy/50"
                        }`}
                      >
                        {project.secondaryStatLabel}
                      </p>
                      <p
                        className={`mt-0.5 text-sm font-semibold ${
                          isSelected ? "text-autumn-lavender" : "text-autumn-rust"
                        }`}
                      >
                        {project.secondaryStatValue}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform ${
                      isSelected
                        ? "rotate-90 border-white/25 bg-white/15 text-white"
                        : "border-autumn-rust/20 bg-autumn-lilac/60 text-autumn-purple group-hover:translate-y-0.5 group-hover:border-autumn-rust group-hover:bg-autumn-rust group-hover:text-white"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded Bottom Full-Width Showcase Panel */}
        {activeProject && (
          <div className="min-w-0 rounded-[2rem] border border-autumn-rust/20 bg-gradient-to-b from-autumn-lilac/35 via-white to-white p-6 shadow-[0_28px_80px_-35px_rgba(91,52,181,0.3)] sm:p-8 lg:p-10">
            {/* Project Top Banner */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-autumn-navy/10 pb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-autumn-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-autumn-ivory">
                    {activeProject.number}
                  </span>
                  <span className="rounded-full bg-autumn-cream px-3 py-1 text-xs font-medium text-autumn-navy/75">
                    {activeProject.datasetBadge}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="rounded-full border border-autumn-navy/15 px-3.5 py-1.5 text-xs font-medium text-autumn-navy/70 transition hover:border-autumn-rust hover:text-autumn-rust"
              >
                Close ✕
              </button>
            </div>

            {/* 1. Problem, Execution, Result & Key Insights */}
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {/* Problem */}
              <div className="rounded-2xl bg-autumn-ivory p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-autumn-rust" />
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-autumn-rust">
                    Problem
                  </h4>
                </div>
                <p className="mt-3 text-sm leading-6 text-autumn-navy/80">
                  {activeProject.problem}
                </p>
              </div>

              {/* What I Executed */}
              <div className="rounded-2xl bg-autumn-cream/65 p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-autumn-camel" />
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-autumn-navy">
                    What I Executed
                  </h4>
                </div>
                <ul className="mt-3 space-y-2.5">
                  {activeProject.executed.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-xs leading-5 text-autumn-navy/80 sm:text-sm sm:leading-6"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-autumn-camel" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result & Key Insights */}
              <div className="rounded-2xl bg-autumn-lilac/45 p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-autumn-navy" />
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-autumn-navy">
                    Result &amp; Key Insights
                  </h4>
                </div>
                <ul className="mt-3 space-y-2.5">
                  {activeProject.results.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-xs leading-5 text-autumn-navy/85 sm:text-sm sm:leading-6"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-autumn-rust" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Data Cleaning Showcase: Before vs After */}
            <div className="mt-12 border-t border-autumn-navy/10 pt-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-autumn-rust">
                    Data Cleaning Showcase
                  </p>
                  <h4 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                    Before vs. After Data Standardization
                  </h4>
                  <p className="mt-1 text-xs text-autumn-navy/65 sm:text-sm">
                    {activeProject.id === "project-1"
                      ? "Real sample from the 2,845 employee records showing how raw inconsistencies were standardized and enriched."
                      : "Real sample from the 311 employee records showing date normalization, termination reason standardization, and tenure calculations."}
                  </p>
                </div>

                <div className="inline-flex rounded-full border border-autumn-navy/10 bg-autumn-ivory p-1 text-xs font-medium">
                  {[
                    { id: "split", label: "Side-by-Side" },
                    { id: "before", label: "Before (Raw)" },
                    { id: "after", label: "After (Cleaned)" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() =>
                        setDataTab(tab.id as "split" | "before" | "after")
                      }
                      className={`rounded-full px-3.5 py-1.5 transition ${
                        dataTab === tab.id
                          ? "bg-autumn-navy text-autumn-ivory shadow-sm"
                          : "text-autumn-navy/65 hover:text-autumn-navy"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {activeProject.id === "project-1" ? (
                <>
                  {/* Project 1 Transformation highlights */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        label: "Date Standardization",
                        before: "2019/09/20, 21-06-2021, 00:00:00",
                        after: "ISO YYYY-MM-DD (2019-09-20)",
                      },
                      {
                        label: "Categorical Hygiene",
                        before: "PRODUCTION, sales, Sales , F, M, female",
                        after: "Production, Sales, Female, Male",
                      },
                      {
                        label: "Missing Value Imputation",
                        before: "Blank JobTitle, State, Training, Scores",
                        after: "Validated & imputed across 2,845 rows",
                      },
                      {
                        label: "Feature Engineering",
                        before: "Raw DateOfBirth & date_of_hire only",
                        after: "+ Age, Tenure (yrs), Age Group, Survey Yr/Mo",
                      },
                    ].map((fix) => (
                      <div
                        key={fix.label}
                        className="rounded-xl border border-autumn-navy/10 bg-autumn-ivory/60 p-3.5"
                      >
                        <p className="text-xs font-semibold text-autumn-navy">
                          {fix.label}
                        </p>
                        <p className="mt-1.5 text-[11px] text-autumn-rust line-through opacity-80">
                          {fix.before}
                        </p>
                        <p className="mt-0.5 text-[11px] font-medium text-emerald-800">
                          ✓ {fix.after}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Project 1 Tables */}
                  <div
                    className={`mt-5 grid gap-5 ${
                      dataTab === "split" ? "xl:grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {(dataTab === "split" || dataTab === "before") && (
                      <div className="overflow-hidden rounded-2xl border border-autumn-rust/25 bg-white">
                        <div className="flex items-center justify-between border-b border-autumn-rust/15 bg-autumn-rust/10 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-autumn-rust" />
                            <span className="text-xs font-semibold text-autumn-rust">
                              BEFORE · Raw HR Dataset (Unstandardized)
                            </span>
                          </div>
                          <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-autumn-rust">
                            27 raw columns
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-[11px]">
                            <thead>
                              <tr className="border-b border-autumn-navy/10 bg-autumn-ivory text-[10px] font-semibold uppercase tracking-wider text-autumn-navy/60">
                                <th className="px-3 py-2.5">emp_id</th>
                                <th className="px-3 py-2.5">date_of_hire</th>
                                <th className="px-3 py-2.5">JobTitle</th>
                                <th className="px-3 py-2.5">dept</th>
                                <th className="px-3 py-2.5">DateOfBirth</th>
                                <th className="px-3 py-2.5">State</th>
                                <th className="px-3 py-2.5">gender</th>
                                <th className="px-3 py-2.5">Eng.</th>
                                <th className="px-3 py-2.5">Training_Name</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-autumn-navy/10">
                              {project1RawSample.map((row) => (
                                <tr
                                  key={row.emp_id}
                                  className="hover:bg-autumn-ivory/60"
                                >
                                  <td className="px-3 py-2 font-mono font-medium">
                                    {row.emp_id}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-autumn-rust">
                                    {row.date_of_hire}
                                  </td>
                                  <td className="px-3 py-2">
                                    {row.JobTitle || (
                                      <span className="rounded bg-autumn-rust/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-autumn-rust">
                                        NULL
                                      </span>
                                    )}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-autumn-rust">
                                    &quot;{row.dept}&quot;
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-autumn-navy/60">
                                    {row.DateOfBirth}
                                  </td>
                                  <td className="px-3 py-2">
                                    {row.State || (
                                      <span className="rounded bg-autumn-rust/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-autumn-rust">
                                        NULL
                                      </span>
                                    )}
                                  </td>
                                  <td className="px-3 py-2 font-mono text-autumn-rust">
                                    {row.gender}
                                  </td>
                                  <td className="px-3 py-2">
                                    {row.Engagement || (
                                      <span className="rounded bg-autumn-rust/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-autumn-rust">
                                        NULL
                                      </span>
                                    )}
                                  </td>
                                  <td className="px-3 py-2">
                                    {row.Training_Name || (
                                      <span className="rounded bg-autumn-rust/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-autumn-rust">
                                        NULL
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {(dataTab === "split" || dataTab === "after") && (
                      <div className="overflow-hidden rounded-2xl border border-emerald-700/25 bg-white">
                        <div className="flex items-center justify-between border-b border-emerald-700/15 bg-emerald-50/90 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-700" />
                            <span className="text-xs font-semibold text-emerald-900">
                              AFTER · Cleaned &amp; Feature-Engineered Dataset
                            </span>
                          </div>
                          <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800">
                            32 standardized columns
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-[11px]">
                            <thead>
                              <tr className="border-b border-autumn-navy/10 bg-autumn-ivory text-[10px] font-semibold uppercase tracking-wider text-autumn-navy/60">
                                <th className="px-3 py-2.5">ID</th>
                                <th className="px-3 py-2.5">StartDate</th>
                                <th className="px-3 py-2.5">Title</th>
                                <th className="px-3 py-2.5">DepartmentType</th>
                                <th className="px-3 py-2.5">State</th>
                                <th className="px-3 py-2.5">Gender</th>
                                <th className="px-3 py-2.5">Eng.</th>
                                <th className="px-3 py-2.5">Training Program</th>
                                <th className="bg-emerald-50/70 px-3 py-2.5 text-emerald-900">
                                  Tenure (yrs)
                                </th>
                                <th className="bg-emerald-50/70 px-3 py-2.5 text-emerald-900">
                                  Age Group
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-autumn-navy/10">
                              {project1CleanSample.map((row) => (
                                <tr
                                  key={row.employeeId}
                                  className="hover:bg-autumn-ivory/60"
                                >
                                  <td className="px-3 py-2 font-mono font-medium">
                                    {row.employeeId}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-emerald-800">
                                    {row.startDate}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-medium">
                                    {row.title}
                                  </td>
                                  <td className="px-3 py-2 font-medium text-emerald-900">
                                    {row.departmentType}
                                  </td>
                                  <td className="px-3 py-2 font-mono">
                                    {row.state}
                                  </td>
                                  <td className="px-3 py-2">
                                    {row.genderCode}
                                  </td>
                                  <td className="px-3 py-2 font-mono">
                                    {row.engagement}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2">
                                    {row.trainingProgram}
                                  </td>
                                  <td className="bg-emerald-50/40 px-3 py-2 font-mono font-semibold text-emerald-900">
                                    {row.tenure} yrs
                                  </td>
                                  <td className="whitespace-nowrap bg-emerald-50/40 px-3 py-2">
                                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-900">
                                      {row.ageGroup}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Project 2 Transformation highlights */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        label: "Date & 2-Digit DOB Fix",
                        before: "09/19/88, 3/30/2015, 6/16/2016",
                        after: "1988-09-19, 2015-03-30, 2016-06-16",
                      },
                      {
                        label: "TermReason Standardization",
                        before: "career change, hours, unhappy, no-call",
                        after: "Career Change, Hours, Unhappy, No-call",
                      },
                      {
                        label: "Numeric & Status Hygiene",
                        before: "03.02, 03.04, yes/no casing",
                        after: "3.02, 3.04 + Is Active (1 / 0) binary flag",
                      },
                      {
                        label: "Attrition Feature Engineering",
                        before: "Raw Hire & Termination dates only",
                        after: "+ TenureDays, TenureYears, Hire/Term Month",
                      },
                    ].map((fix) => (
                      <div
                        key={fix.label}
                        className="rounded-xl border border-autumn-navy/10 bg-autumn-ivory/60 p-3.5"
                      >
                        <p className="text-xs font-semibold text-autumn-navy">
                          {fix.label}
                        </p>
                        <p className="mt-1.5 text-[11px] text-autumn-rust line-through opacity-80">
                          {fix.before}
                        </p>
                        <p className="mt-0.5 text-[11px] font-medium text-emerald-800">
                          ✓ {fix.after}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Project 2 Tables */}
                  <div
                    className={`mt-5 grid gap-5 ${
                      dataTab === "split" ? "xl:grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {(dataTab === "split" || dataTab === "before") && (
                      <div className="overflow-hidden rounded-2xl border border-autumn-rust/25 bg-white">
                        <div className="flex items-center justify-between border-b border-autumn-rust/15 bg-autumn-rust/10 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-autumn-rust" />
                            <span className="text-xs font-semibold text-autumn-rust">
                              BEFORE · Raw HR Attrition Dataset (311 Rows)
                            </span>
                          </div>
                          <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-autumn-rust">
                            36 raw columns
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-[11px]">
                            <thead>
                              <tr className="border-b border-autumn-navy/10 bg-autumn-ivory text-[10px] font-semibold uppercase tracking-wider text-autumn-navy/60">
                                <th className="px-3 py-2.5">EmpID</th>
                                <th className="px-3 py-2.5">Employee_Name</th>
                                <th className="px-3 py-2.5">DOB</th>
                                <th className="px-3 py-2.5">DateofHire</th>
                                <th className="px-3 py-2.5">DateofTerm</th>
                                <th className="px-3 py-2.5">TermReason</th>
                                <th className="px-3 py-2.5">EngSurvey</th>
                                <th className="px-3 py-2.5">LastReview</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-autumn-navy/10">
                              {project2RawSample.map((row) => (
                                <tr
                                  key={row.empId}
                                  className="hover:bg-autumn-ivory/60"
                                >
                                  <td className="px-3 py-2 font-mono font-medium">
                                    {row.empId}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2">
                                    {row.name}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-autumn-rust">
                                    {row.dob}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-autumn-rust">
                                    {row.dateOfHire}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-autumn-rust">
                                    {row.dateOfTerm || (
                                      <span className="text-autumn-navy/40">
                                        blank
                                      </span>
                                    )}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-autumn-rust">
                                    {row.termReason}
                                  </td>
                                  <td className="px-3 py-2 font-mono text-autumn-rust">
                                    {row.engagement}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-autumn-rust">
                                    {row.lastReview}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {(dataTab === "split" || dataTab === "after") && (
                      <div className="overflow-hidden rounded-2xl border border-emerald-700/25 bg-white">
                        <div className="flex items-center justify-between border-b border-emerald-700/15 bg-emerald-50/90 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-700" />
                            <span className="text-xs font-semibold text-emerald-900">
                              AFTER · Cleaned &amp; Tenure-Engineered Dataset
                            </span>
                          </div>
                          <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800">
                            42 standardized columns
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-[11px]">
                            <thead>
                              <tr className="border-b border-autumn-navy/10 bg-autumn-ivory text-[10px] font-semibold uppercase tracking-wider text-autumn-navy/60">
                                <th className="px-3 py-2.5">EmpID</th>
                                <th className="px-3 py-2.5">DOB (ISO)</th>
                                <th className="px-3 py-2.5">DateofHire</th>
                                <th className="px-3 py-2.5">DateofTerm</th>
                                <th className="px-3 py-2.5">TermReason</th>
                                <th className="px-3 py-2.5">Eng.</th>
                                <th className="bg-emerald-50/70 px-3 py-2.5 text-emerald-900">
                                  TenureDays
                                </th>
                                <th className="bg-emerald-50/70 px-3 py-2.5 text-emerald-900">
                                  TenureYrs
                                </th>
                                <th className="bg-emerald-50/70 px-3 py-2.5 text-emerald-900">
                                  Is Active
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-autumn-navy/10">
                              {project2CleanSample.map((row) => (
                                <tr
                                  key={row.empId}
                                  className="hover:bg-autumn-ivory/60"
                                >
                                  <td className="px-3 py-2 font-mono font-medium">
                                    {row.empId}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-emerald-800">
                                    {row.dob}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-emerald-800">
                                    {row.dateOfHire}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-mono text-emerald-800">
                                    {row.dateOfTerm}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-2 font-medium text-emerald-900">
                                    {row.termReason}
                                  </td>
                                  <td className="px-3 py-2 font-mono">
                                    {row.engagement}
                                  </td>
                                  <td className="bg-emerald-50/40 px-3 py-2 font-mono text-emerald-900">
                                    {row.tenureDays}d
                                  </td>
                                  <td className="bg-emerald-50/40 px-3 py-2 font-mono font-semibold text-emerald-900">
                                    {row.tenureYears}y
                                  </td>
                                  <td className="whitespace-nowrap bg-emerald-50/40 px-3 py-2">
                                    <span
                                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                        row.isActive.startsWith("1")
                                          ? "bg-emerald-100 text-emerald-900"
                                          : "bg-autumn-rust/15 text-autumn-rust"
                                      }`}
                                    >
                                      {row.isActive}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* 3. Bottom Section: Interactive HR Intelligence Dashboard */}
            <div className="mt-12 border-t border-autumn-navy/10 pt-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-autumn-rust">
                    Bottom Showcase · Interactive Dashboard
                  </p>
                  <h4 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                    {activeProject.id === "project-1"
                      ? "HR Intelligence Dashboard — Workforce, Experience & Training ROI"
                      : "Attrition Diagnostics & Turnover Rate Deep-Dive Dashboard"}
                  </h4>
                </div>
                <span className="rounded-full bg-autumn-navy px-3.5 py-1.5 text-xs font-semibold text-autumn-ivory">
                  {activeProject.id === "project-1"
                    ? "n = 2,845 Employees · 6 Departments"
                    : "n = 311 Employees · Avg Headcount 259"}
                </span>
              </div>

              {activeProject.id === "project-1" ? (
                <div className="mt-6 space-y-6 rounded-[1.75rem] border border-autumn-navy/10 bg-autumn-ivory p-5 sm:p-7">
                  {/* Top KPI Row */}
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-autumn-navy/50">
                        Total Workforce Cleaned
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-autumn-navy">
                        2,845
                      </p>
                      <p className="mt-1 text-xs text-autumn-navy/60">
                        55.1% Female · 44.9% Male
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-autumn-navy/50">
                        Lowest Dept Satisfaction
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-autumn-rust">
                        2.51 / 5.00
                      </p>
                      <p className="mt-1 text-xs text-autumn-rust">
                        Admin Offices (vs &gt;3.00 others)
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-autumn-navy/50">
                        Admin Offices WLB Score
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-autumn-navy">
                        3.20 / 5.00
                      </p>
                      <p className="mt-1 text-xs text-autumn-navy/60">
                        Highest WLB across all units
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-autumn-navy/50">
                        Optimal L&amp;D Allocation
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-autumn-camel">
                        $561–$563
                      </p>
                      <p className="mt-1 text-xs text-autumn-navy/60">
                        Leadership &amp; PM · 3-day optimal
                      </p>
                    </div>
                  </div>

                  {/* Middle Row: Workforce Overview + Satisfaction vs WLB */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Chart 1: Workforce Overview (Headcount by Department & Gender) */}
                    <div className="rounded-2xl border border-autumn-navy/10 bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-autumn-rust">
                            1. Workforce Overview (Who are we?)
                          </span>
                          <h5 className="mt-1 text-sm font-semibold text-autumn-navy">
                            Employee Headcount by Department &amp; Gender
                          </h5>
                        </div>
                        <div className="flex items-center gap-3 text-[11px]">
                          <span className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-sm bg-autumn-rust" />
                            Female (1,354)
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-sm bg-autumn-navy" />
                            Male (1,104)
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3.5">
                        {deptHeadcount.map((item) => {
                          const femalePct = Math.round(
                            (item.female / item.total) * 100
                          );
                          const barScale = Math.max(
                            12,
                            Math.round((item.total / 1588) * 100)
                          );
                          return (
                            <div key={item.dept} className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-autumn-navy">
                                  {item.dept}
                                </span>
                                <span className="font-mono text-[11px] text-autumn-navy/65">
                                  {item.total.toLocaleString()} ({item.female}F /{" "}
                                  {item.male}M)
                                </span>
                              </div>
                              <div className="h-3 w-full overflow-hidden rounded-full bg-autumn-cream/70">
                                <div
                                  className="flex h-full overflow-hidden rounded-full"
                                  style={{ width: `${barScale}%` }}
                                >
                                  <span
                                    className="h-full bg-autumn-rust"
                                    style={{ width: `${femalePct}%` }}
                                  />
                                  <span
                                    className="h-full bg-autumn-navy"
                                    style={{ width: `${100 - femalePct}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Chart 2: Performance & Engagement (Satisfaction vs WLB by Dept) */}
                    <div className="rounded-2xl border border-autumn-navy/10 bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-autumn-rust">
                            2. Experience Diagnostics (How are we doing?)
                          </span>
                          <h5 className="mt-1 text-sm font-semibold text-autumn-navy">
                            Satisfaction vs. Work-Life Balance Score (/ 5.00)
                          </h5>
                        </div>
                        <span className="rounded-full bg-autumn-rust/10 px-2.5 py-1 text-[10px] font-semibold text-autumn-rust">
                          Admin Offices Anomaly
                        </span>
                      </div>

                      <div className="mt-5 space-y-3">
                        {deptScores.map((d) => (
                          <div
                            key={d.dept}
                            className={`rounded-xl p-3 ${
                              d.highlight
                                ? "border border-autumn-rust/30 bg-autumn-rust/5"
                                : "bg-autumn-ivory/60"
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span
                                className={`font-semibold ${
                                  d.highlight
                                    ? "text-autumn-rust"
                                    : "text-autumn-navy"
                                }`}
                              >
                                {d.dept}
                              </span>
                              <div className="flex gap-3 font-mono text-[11px]">
                                <span
                                  className={
                                    d.highlight
                                      ? "font-bold text-autumn-rust"
                                      : "text-autumn-navy/75"
                                  }
                                >
                                  Sat: {d.satisfaction.toFixed(2)}
                                </span>
                                <span className="text-autumn-navy/60">
                                  Eng: {d.engagement.toFixed(2)}
                                </span>
                                <span className="font-semibold text-autumn-camel">
                                  WLB: {d.wlb.toFixed(2)}
                                </span>
                              </div>
                            </div>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                              <div>
                                <div className="h-1.5 overflow-hidden rounded-full bg-autumn-cream">
                                  <div
                                    className={`h-full rounded-full ${
                                      d.highlight
                                        ? "bg-autumn-rust"
                                        : "bg-autumn-navy"
                                    }`}
                                    style={{
                                      width: `${(d.satisfaction / 5) * 100}%`,
                                    }}
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="h-1.5 overflow-hidden rounded-full bg-autumn-cream">
                                  <div
                                    className="h-full rounded-full bg-autumn-camel"
                                    style={{ width: `${(d.wlb / 5) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                            {d.note && (
                              <p className="mt-1.5 text-[11px] font-medium text-autumn-rust">
                                ↳ {d.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Training Cost vs Outcome */}
                  <div className="rounded-2xl border border-autumn-navy/10 bg-white p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-autumn-rust">
                          3. Training Analysis (Are our programs working?)
                        </span>
                        <h5 className="mt-1 text-sm font-semibold text-autumn-navy">
                          Training Program Cost-Efficiency &amp; Optimal Duration
                        </h5>
                      </div>
                      <span className="text-xs text-autumn-navy/60">
                        5 Major Programs · Optimal Duration: 3 Days
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      {trainingPrograms.map((prog) => (
                        <div
                          key={prog.name}
                          className={`flex flex-col justify-between rounded-xl border p-4 ${
                            prog.highlight
                              ? "border-autumn-camel bg-autumn-cream/45"
                              : "border-autumn-navy/10 bg-autumn-ivory/50"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-autumn-navy/55">
                                {prog.optimalDays}-Day Optimal
                              </span>
                              {prog.highlight && (
                                <span className="rounded-full bg-autumn-rust px-2 py-0.5 text-[9px] font-semibold uppercase text-white">
                                  Top ROI Focus
                                </span>
                              )}
                            </div>
                            <p className="mt-2 text-sm font-semibold text-autumn-navy">
                              {prog.name}
                            </p>
                          </div>
                          <div className="mt-4 border-t border-autumn-navy/10 pt-3">
                            <p className="text-[10px] text-autumn-navy/55">
                              Avg Allocation / Participant
                            </p>
                            <p className="text-lg font-semibold text-autumn-rust">
                              ~${prog.avgCost}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Project 2 Full Dashboard View */
                <div className="mt-6 space-y-6 rounded-[1.75rem] border border-autumn-navy/10 bg-autumn-ivory p-5 sm:p-7">
                  {/* Top KPI Row */}
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-autumn-navy/50">
                        Total Records / Avg HC
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-autumn-navy">
                        311 / 259
                      </p>
                      <p className="mt-1 text-xs text-autumn-navy/60">
                        207 Active · 104 Terminated
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-autumn-navy/50">
                        Highest Turnover Risk
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-autumn-rust">
                        13.6%
                      </p>
                      <p className="mt-1 text-xs text-autumn-rust">
                        Sales Dept (Avg HC: 68)
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-autumn-navy/50">
                        Admin Offices Turnover
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-autumn-camel">
                        2.75%
                      </p>
                      <p className="mt-1 text-xs text-autumn-navy/60">
                        Rolling 12M (Avg HC: 5.5)
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-autumn-navy/50">
                        Production &amp; IT/IS Rate
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-emerald-800">
                        1.24% / 1.05%
                      </p>
                      <p className="mt-1 text-xs text-autumn-navy/60">
                        Lowest operational attrition
                      </p>
                    </div>
                  </div>

                  {/* Middle Row: Turnover by Dept + Termination Drivers */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Chart 1: Departmental Turnover Rate & Average Headcount */}
                    <div className="rounded-2xl border border-autumn-navy/10 bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-autumn-rust">
                            1. Rolling 12-Month Turnover Diagnostics
                          </span>
                          <h5 className="mt-1 text-sm font-semibold text-autumn-navy">
                            Turnover Rate (%) &amp; Average Headcount by Department
                          </h5>
                        </div>
                        <span className="rounded-full bg-autumn-rust/10 px-2.5 py-1 text-[10px] font-semibold text-autumn-rust">
                          Sales Peak: 13.6%
                        </span>
                      </div>

                      <div className="mt-5 space-y-3.5">
                        {p2TurnoverByDept.map((row) => {
                          const barWidth = Math.max(
                            8,
                            Math.round((row.turnoverPct / 15) * 100)
                          );
                          return (
                            <div
                              key={row.dept}
                              className={`rounded-xl p-3 ${
                                row.highlight
                                  ? "border border-autumn-rust/30 bg-autumn-rust/5"
                                  : "bg-autumn-ivory/60"
                              }`}
                            >
                              <div className="flex items-center justify-between text-xs">
                                <span
                                  className={`font-semibold ${
                                    row.highlight
                                      ? "text-autumn-rust"
                                      : "text-autumn-navy"
                                  }`}
                                >
                                  {row.dept}
                                </span>
                                <div className="flex items-center gap-3 font-mono text-[11px]">
                                  <span className="text-autumn-navy/60">
                                    Avg HC: {row.avgHeadcount}
                                  </span>
                                  <span
                                    className={`font-bold ${
                                      row.highlight
                                        ? "text-autumn-rust"
                                        : "text-autumn-navy"
                                    }`}
                                  >
                                    {row.turnoverPct.toFixed(2)}%
                                  </span>
                                </div>
                              </div>
                              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-autumn-cream">
                                <div
                                  className={`h-full rounded-full ${
                                    row.highlight
                                      ? "bg-autumn-rust"
                                      : "bg-autumn-navy"
                                  }`}
                                  style={{ width: `${barWidth}%` }}
                                />
                              </div>
                              {row.note && (
                                <p className="mt-1.5 text-[11px] font-medium text-autumn-rust">
                                  ↳ {row.note}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Chart 2: Top Termination Reasons (TermReason) */}
                    <div className="rounded-2xl border border-autumn-navy/10 bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-autumn-rust">
                            2. Separation Root-Cause Breakdown
                          </span>
                          <h5 className="mt-1 text-sm font-semibold text-autumn-navy">
                            Primary Termination Reasons (Validated TermReason)
                          </h5>
                        </div>
                        <span className="rounded-full bg-autumn-cream px-2.5 py-1 text-[10px] font-semibold text-autumn-navy/70">
                          Voluntary vs. Cause
                        </span>
                      </div>

                      <div className="mt-5 space-y-3">
                        {p2TopTermReasons.map((item) => (
                          <div
                            key={item.reason}
                            className="flex items-center justify-between rounded-xl bg-autumn-ivory/65 px-3.5 py-2.5 text-xs"
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                  item.category === "Voluntary"
                                    ? "bg-autumn-camel/20 text-autumn-navy"
                                    : "bg-autumn-rust/15 text-autumn-rust"
                                }`}
                              >
                                {item.category}
                              </span>
                              <span className="font-medium text-autumn-navy">
                                {item.reason}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 font-mono text-[11px]">
                              <span className="text-autumn-navy/60">
                                {item.count} exits
                              </span>
                              <span className="w-9 text-right font-semibold text-autumn-rust">
                                {item.share}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Sales vs Other Units — Retention & Tardiness Diagnostics */}
                  <div className="rounded-2xl border border-autumn-navy/10 bg-white p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-autumn-rust">
                          3. Retention Factor Matrix (Sales vs. Other Business Units)
                        </span>
                        <h5 className="mt-1 text-sm font-semibold text-autumn-navy">
                          Satisfaction, Active vs. Terminated Tenure &amp; 30-Day Tardiness Signals
                        </h5>
                      </div>
                      <span className="text-xs text-autumn-navy/60">
                        Early Intervention Indicators for Line Managers
                      </span>
                    </div>

                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-autumn-navy/10 bg-autumn-ivory text-[10px] font-semibold uppercase tracking-wider text-autumn-navy/60">
                            <th className="px-3.5 py-2.5">Department</th>
                            <th className="px-3.5 py-2.5">Turnover Rate</th>
                            <th className="px-3.5 py-2.5">Avg EmpSatisfaction</th>
                            <th className="px-3.5 py-2.5">Avg Engagement</th>
                            <th className="px-3.5 py-2.5">Active Tenure</th>
                            <th className="px-3.5 py-2.5">Exited Tenure</th>
                            <th className="px-3.5 py-2.5">
                              Tardiness &amp; Retention Signal (DaysLateLast30)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-autumn-navy/10">
                          {p2RetentionFactors.map((row) => (
                            <tr
                              key={row.dept}
                              className={
                                row.highlight
                                  ? "bg-autumn-rust/5 font-medium"
                                  : "hover:bg-autumn-ivory/50"
                              }
                            >
                              <td
                                className={`px-3.5 py-3 font-semibold ${
                                  row.highlight
                                    ? "text-autumn-rust"
                                    : "text-autumn-navy"
                                }`}
                              >
                                {row.dept}
                              </td>
                              <td className="px-3.5 py-3 font-mono font-semibold text-autumn-rust">
                                {row.turnover}
                              </td>
                              <td className="px-3.5 py-3 font-mono">
                                {row.avgSatisfaction}
                              </td>
                              <td className="px-3.5 py-3 font-mono">
                                {row.avgEngagement}
                              </td>
                              <td className="px-3.5 py-3 font-mono text-emerald-800">
                                {row.avgTenureActive}
                              </td>
                              <td className="px-3.5 py-3 font-mono text-autumn-rust">
                                {row.avgTenureTerm}
                              </td>
                              <td className="px-3.5 py-3 text-autumn-navy/75">
                                {row.lateSignal}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
