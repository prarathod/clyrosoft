import ArticleGrid from "@/app/components/Articles/ArticlesGrid";
import NotifySignup from "@/app/components/Articles/NotificationSection";
import ArticleSearch from "@/app/components/Articles/Search";

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
