import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllNoticesQuery } from "../../redux-toolkit/apiSlices/notice";
import { useNavigate } from "react-router-dom";
import Tables from "../../components/table/tables";
import AddNoticeModal from "../notice/components/addNoticeModal"

const NoticeList = () => {
  const [addNoticeModalOpen, setAddNoticeModalOpen] = useState(false);
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllNoticesQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Title", selector: (row) => row.description, sortable: true },
    { name: "Date", selector: (row) => row.date, sortable: true },
  ];

  return (
    <>
      <div className="flex flex-col mx-5 my-5">
        <div className="flex w-full justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Notice </h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddNoticeModalOpen(true)}
          >
            + Add Notice
          </button>
        </div>

        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          {!!data && <Tables data={data} columns={columns} />}
        </div>
      </div>
      <AddNoticeModal
        isOpen={addNoticeModalOpen}
        closeModal={() => setAddNoticeModalOpen(false)}
      />
    </>
  );
};

export default NoticeList;
