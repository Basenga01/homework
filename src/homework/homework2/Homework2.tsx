import { useState } from "react";
import Affairs from "./Affairs";

export type AffairPriorityType = "high" | "low" | "middle";

export interface AffairType {
  _id: number;
  name: string;
  priority: AffairPriorityType;
}

export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: AffairType[] = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "middle" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (
  affairs: AffairType[],
  filter: FilterType,
): AffairType[] => {
  if (filter === "all") return affairs;
  else return affairs.filter((affair) => affair.priority === filter);
};

export const deleteAffair = (
  affairs: AffairType[],
  _id: number,
): AffairType[] => {
  return affairs.filter((affair) => affair._id !== _id);
};

export const renameAffair = (affair: AffairType, id: number) => {
  return;
};

function Homework2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const setFilterCallback = (filter: FilterType) => setFilter(filter);
  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id));

  return (
    <div>
      <Affairs
        data={filteredAffairs}
        setFilter={setFilterCallback}
        deleteAffairCallback={deleteAffairCallback}
      />
    </div>
  );
}

export default Homework2;
