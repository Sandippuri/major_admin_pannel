import React, { useState, useMemo } from "react";
import Modal from "../../../components/ui/modal";
import Inputfield from "../../../components/ui/inputfield";
import { useRegisterUserMutation } from "../../../redux-toolkit/apiSlices/auth";
import { useGetAllStudentsQuery } from "../../../redux-toolkit/apiSlices/student";
import { useGetAllTeachersQuery } from "../../../redux-toolkit/apiSlices/teacher";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const AddAdminModal = ({ isOpen, closeModal }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [register, isError, error] = useRegisterUserMutation();
  const { data: students } = useGetAllStudentsQuery();
  const { data: teachers } = useGetAllTeachersQuery();
  console.log(teachers);

  const options = useMemo(() => {
    if (role === "STUDENT") {
      return students?.value?.map((student) => ({
        value: student.id,
        label: student.rollNumber,
      }));
    } else if (role === "TEACHER") {
      return teachers?.data?.map((teacher) => ({
        value: Number(teacher.id),
        label: teacher.attributes.full_name,
      }));
    }
  });

  const roleOptions = [
    { value: "TEACHER", label: "Teacher" },
    { value: "STUDENT", label: "Student" },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      const response = await register({ role, ...user });
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("User Created successfully");
        closeModal();
      }
    } catch (e) {
      toast.error("User Creation Failed");
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add User"
      className="w-[30vw]"
    >
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-medium text-primary">
            Role
          </label>
          <Select
            options={roleOptions}
            onChange={(e) => setRole(e.value)}
            isSearchable={true}
            placeholder="Select Role"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-primary">
            User
          </label>
          <Select
            options={options}
            noOptionsMessage={() => "Select role for teachers or students"}
            onChange={(e) => {
              if (role === "STUDENT") {
                setSelectedUser(e.label);
                setUser({
                  ...user,
                  studentId: e.value,
                  username: e.label,
                });
              } else if (role === "TEACHER") {
                setUser({
                  ...user,
                  teacherId: e.value,
                });
              }
            }}
            isSearchable={true}
            placeholder="Select User"
          />
        </div>
        <Inputfield
          title={"Username"}
          name={"username"}
          id={"username"}
          type={"text"}
          placeholder={selectedUser || ""}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          {...(role === "STUDENT" && { disabled: true })}
        />
        <Inputfield
          title={"Password"}
          name={"password"}
          id={"password"}
          type={"password"}
          placeholder={"**********"}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {Boolean(isError) && (
          <p className="text-red-500 font-medium text-sm text-center">
            {error?.data?.error}
          </p>
        )}

        <button
          type="submit"
          className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Create User
        </button>
      </form>
    </Modal>
  );
};

export default AddAdminModal;
