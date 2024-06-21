import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-red-500 top-0 sticky h-fit flex items-center flex-col">
      <div className="mt-5 flex flex-col items-center">
        <div className="w-[120px] h-[120px] rounded-full border" />
        <div className="mt-3">
          <p>~의 블로그</p>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <p className="border">추가</p>
          <p className="ml-1 border">추가</p>
        </div>
      </div>
      <div className="mt-3">
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
          <li>메뉴4</li>
          <li>메뉴5</li>
          <li>메뉴6</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
