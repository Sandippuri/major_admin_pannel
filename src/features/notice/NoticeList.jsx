import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetAllNoticesQuery,
  useDeleteNoticeMutation,
} from "../../redux-toolkit/apiSlices/notice";
import { useNavigate } from "react-router-dom";
import Tables from "../../components/table/tables";
import AddNoticeModal from "../notice/components/addNoticeModal";
import EditNoticeModal from "../notice/components/editNoticeModal";
import DeleteModal from "../notice/components/deleteModal";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { toast } from "react-toastify";

const NoticeList = () => {
  const [addNoticeModalOpen, setAddNoticeModalOpen] = useState(false);
  const [noticeID, setNoticeID] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editNoticeModalOpen, setEditNoticeModalOpen] = useState(false);
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllNoticesQuery();
  const [deleteNotice] = useDeleteNoticeMutation();
  const navigate = useNavigate();
  // const data = useSelector()
  const noticeData = data?.value;
  console.log(noticeData);
  const columns = [
    { name: "S No.", selector: (row) => row.ID, sortable: true },
    {
      name: "Date",
      selector: (row) => new Date(row.CreatedAt).toDateString(),
      sortable: true,
    },
    { name: "Title", selector: (row) => row.title, sortable: true },
    { name: "Detail", selector: (row) => row.details, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="text-primary hover:text-green-500 "
            onClick={() => {
              setNoticeID(row.ID);
              setEditNoticeModalOpen(true);
            }}
          >
            <MdOutlineModeEditOutline size={24} />
          </button>
          <button
            id={row.ID}
            onClick={() => {
              setNoticeID(row.ID);
              setDeleteModalOpen(true);
            }}
            // onClick={() => deleteDepartment(row.ID)}
            className="text-primary hover:text-red-500"
          >
            <MdOutlineDelete size={24} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    // { name: "Date", selector: (row) => row.date, sortable: true },
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
          {!!noticeData && <Tables data={noticeData} columns={columns} />}
        </div>
      </div>
      <AddNoticeModal
        isOpen={addNoticeModalOpen}
        closeModal={() => setAddNoticeModalOpen(false)}
      />
      <EditNoticeModal
        isOpen={editNoticeModalOpen}
        closeModal={() => setEditNoticeModalOpen(false)}
        noticeId={noticeID}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteNotice(noticeID);
            console.log(response);
            if (response?.error?.status === 400) {
              toast.error(response?.error?.data?.error);
            } else {
              toast.success("Notice deleted successfully");
              setDeleteModalOpen(false);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </>
  );
};

export default NoticeList;
