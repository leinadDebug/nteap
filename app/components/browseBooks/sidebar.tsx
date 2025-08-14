import { Button, Drawer } from "@mui/material";
import { Filter } from "lucide-react";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const levelOptions = [
  { id: "undergraduate", label: "Undergraduate" },
  { id: "postgraduate", label: "Postgraduate" },
];

const subjectOptions = [
  { id: "arts", label: "Arts & Humanities", price: 10500 },
  { id: "business", label: "Business Management", price: 10500 },
  { id: "social", label: "Social Sciences", price: 10500 },
  { id: "science", label: "Science & Technology", price: 10500 },
  { id: "engineering", label: "Engineering", price: 10500 },
  { id: "medical", label: "Medical & Health Sciences", price: 10500 },
  { id: "education", label: "Education & Teaching", price: 10500 },
  { id: "agriculture", label: "Agriculture Studies", price: 10500 },
  { id: "architectural", label: "Architectural Planning", price: 10500 },
  { id: "linguistics", label: "Linguistics" },
];

const sortOptions = [
  { id: "az", label: "A - Z" },
  { id: "latest", label: "Latest Uploads" },
  { id: "price-high", label: "Price High - Low" },
  { id: "price-low", label: "Price Low - High" },
];

export default function Sidebar() {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleLevelChange = (levelId: string, checked: boolean) => {
    if (checked) {
      setSelectedLevels([...selectedLevels, levelId]);
    } else {
      setSelectedLevels(selectedLevels.filter((id) => id !== levelId));
    }
  };

  const handleSubjectChange = (subjectId: string, checked: boolean) => {
    if (checked) {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    } else {
      setSelectedSubjects(selectedSubjects.filter((id) => id !== subjectId));
    }
  };

  const handleSortChange = (sortId: string, checked: boolean) => {
    if (checked) {
      setSelectedSort([sortId]);
    } else {
      setSelectedSort([]);
    }
  };

  return (
    <div className="w-full md:w-64 bg-white rounded-lg p-4 md:p-6 h-fit sticky top-0 z-10">
      {/* Level Filter */}
      <div className="mb-4 md:mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
          Level
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:space-y-2">
          {levelOptions.map((level) => (
            <div key={level.id} className="flex items-center space-x-2">
              <input
                id={level.id}
                type="checkbox"
                className="h-4 w-4 md:h-3.5 md:w-3.5"
                checked={selectedLevels.includes(level.id)}
                onChange={(e) => handleLevelChange(level.id, e.target.checked)}
              />
              <label
                htmlFor={level.id}
                className="text-xs md:text-sm text-gray-700 cursor-pointer"
              >
                {level.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Subjects Filter */}
      <div className="mb-4 md:mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
          Subjects
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:space-y-2">
          {subjectOptions.map((subject) => (
            <div key={subject.id} className="flex items-center space-x-2">
              <input
                id={subject.id}
                type="checkbox"
                className="h-4 w-4 md:h-3.5 md:w-3.5"
                checked={selectedSubjects.includes(subject.id)}
                onChange={(e) =>
                  handleSubjectChange(subject.id, e.target.checked)
                }
              />
              <label
                htmlFor={subject.id}
                className="text-xs md:text-sm text-gray-700 cursor-pointer"
              >
                {subject.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Sort By Filter */}
      <div className="mb-4 md:mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
          Sort By
        </h3>
        <div className="space-y-2">
          {sortOptions.map((sort) => (
            <div key={sort.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={sort.id}
                className="h-4 w-4 md:h-3.5 md:w-3.5"
                checked={selectedSort.includes(sort.id)}
                onChange={(e) => handleSortChange(sort.id, e.target.checked)}
              />
              <label
                htmlFor={sort.id}
                className="text-xs md:text-sm text-gray-700 cursor-pointer"
              >
                {sort.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
          Price (₦)
        </h3>
        <div className="space-y-2 md:space-y-4">
          <div className="flex gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([
                  Number.parseInt(e.target.value) || 0,
                  priceRange[1],
                ])
              }
              className="w-full md:w-20 h-8 text-xs p-2 border border-gray-300 rounded-sm text-slate-600"
              placeholder="Min"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([
                  priceRange[0],
                  Number.parseInt(e.target.value) || 100,
                ])
              }
              className="w-full md:w-20 h-8 text-xs p-2 border border-gray-300 rounded-sm text-slate-600"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="w-80 max-w-[90vw] p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <Button onClick={toggleDrawer(false)} sx={{ minWidth: "auto", p: 1 }}>
          <FiX className="text-xl" />
        </Button>
      </div>
      <Sidebar />
    </div>
  );

  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        onClick={toggleDrawer(true)}
        endIcon={<Filter />}
        sx={{
          color: "green",
          borderColor: "green",
          fontSize: "0.875rem",
          "@media (max-width: 640px)": {
            fontSize: "0.75rem",
            padding: "4px 8px",
          },
        }}
      >
        Filters
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            width: "320px",
            "@media (max-width: 640px)": {
              width: "100%",
            },
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
