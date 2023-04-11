import React, { useEffect } from "react";
import JobList from "./JobList";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobSlice/jobSlice";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import JobFilter from "./JobFilter";

function Job() {
  const dispatch = useDispatch();
  const { isLoading, isError, error, jobs } = useSelector(
    (state) => state.jobs
  );
  const { searchFilter } = useSelector((state) => state.filters);
  const { sortFilter } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchJobs(sortFilter));
  }, [dispatch, sortFilter]);

  // Filter name and match with input
  const userSearch = jobs?.filter((NameFilter) => {
    return NameFilter.title.toLowerCase().includes(searchFilter.toLowerCase());
  });

  // Decide What to render

  let JobContent = null;

  if (isLoading) JobContent = <Loading />;
  if (!isLoading && isError) JobContent = <ErrorMessage name={error} />;
  if (!isLoading && !isError && jobs?.length === 0)
    JobContent = <p>No Job Post Availabe</p>;
  if (!isLoading && !isError && jobs?.length > 0) {
    JobContent = userSearch.map((job) => <JobList key={job.id} job={job} />);
  }

  return (
    <div>
      <JobFilter />
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 "></div>
      {JobContent}
    </div>
  );
}

export default Job;
