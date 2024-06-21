import React from "react";

const Content = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-green-600 p-10">
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <p>ddd</p>
        <div className="mt-10">
          <div>댓글쓰기</div>
          <div className="w-full border p-4">
            <div>
              <p>닉네임</p>
              <p>내용</p>
              <p>날짜</p>
              <p>답글버튼</p>
            </div>
          </div>
          <div className="w-full border p-4">
            <div className="pl-4 flex">
              <div className="">┗&nbsp;</div>
              <div>
                <p>닉네임</p>
                <p>내용</p>
                <p>날짜</p>
                <p>답글버튼</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
