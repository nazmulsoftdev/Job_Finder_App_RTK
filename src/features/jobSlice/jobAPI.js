import axios from "../../utils/axios";

export const getJobs = async (sortFilter) => {
  let querySearch = "";

  if (sortFilter === "Internship") {
    querySearch = "q=Internship";
  }

  if (sortFilter === "Fulltime") {
    querySearch = "q=Fulltime";
  }

  if (sortFilter === "Remote") {
    querySearch = "q=Remote";
  }

  if (sortFilter === "Default") {
    querySearch = "";
  }

  if (sortFilter === "lowto_High") {
    querySearch = "&_sort=salary&_order=asc";
  }

  if (sortFilter === "highto_Low") {
    querySearch = "&_sort=salary&_order=desc";
  }
  const response = await axios.get(`/jobs?${querySearch}`);
  return response.data;
};

export const postJobs = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.data;
};

export const updateJobs = async ({ id, data }) => {
  const response = await axios.put(`/jobs/${id}`, data);
  return response.data;
};

export const deleteJobs = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
