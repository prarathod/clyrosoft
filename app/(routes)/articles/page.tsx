import ArticleGrid from "../components/Articles/ArticlesGrid";
import NotifySignup from "../components/Articles/NotificationSection";
import ArticleSearch from "../components/Articles/Search";

const page = () => {
  return (
    <>
      <ArticleSearch />
      <ArticleGrid />
      <NotifySignup />
    </>
  );
};

export default page;
