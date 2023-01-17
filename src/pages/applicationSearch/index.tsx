import withAuth from "@/Auth/withAuth";
import ApplicationSearchComponent from "@/PagesComponents/ApplicationSearch";

const ApplicationSearch = () => {
  return <ApplicationSearchComponent />;
};

export default withAuth(ApplicationSearch);
