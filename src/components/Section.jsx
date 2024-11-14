import React from "react";

const Section = ({
  classname,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div>
      <div
        className={`relative ${
          customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} ${
            classname || ""
          }`
        }`}
      >

        {children}
      </div>
    </div>
  );
};

export default Section;
