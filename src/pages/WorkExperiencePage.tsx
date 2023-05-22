import { CompanyCard } from "../components/Company";

interface Work {
  company: string;
  start: string;
  end: string;
  role: string;
  length: string;
}
export const WorkExperiencePage = () => {
  const work: Work[] = [
    {
      company: "THR",
      role: "Developer",
      start: "May 2023",
      end: "August 2023",
      length: "4 months"
    },
    {
        company: "Ruby Truck Line",
        role: "Planner | Dispatcher Part-time",
        start: "January 2021",
        end: "August 2022",
        length: "20 months"
    },
    {
        company: "Ruby Truck Line",
        role: "Planner | Dispatcher",
        start: "September 2017",
        end: "August 2020",
        length: "3 years"
    },
    {
        company: "Ruby Truck Line",
        role: "Long-haul Driver",
        start: "October 2012",
        end: "September 2017",
        length: "5 years"
    },
    {
        company: "Dowalt Custom Homes",
        role: "Construction",
        start: "March 2012",
        end: "October 2012",
        length: "8 months"
    },
  ];
  return (
    <div>
      {work.map((work) => {
        return <CompanyCard {...work} />;
      })}
    </div>
  );
};
