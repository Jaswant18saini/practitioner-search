import React from "react";

import CreateMemberComponent from "@/PagesComponents/CreateMember";
import withAuth from "@/Auth/withAuth";

const CreateMember = () => {
  return <CreateMemberComponent />;
};

export default withAuth(CreateMember);
