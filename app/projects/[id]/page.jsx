import React from "react";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Project {id}</h1>
      {/* Dynamic project content */}
    </div>
  );
};

export default ProjectPage;
