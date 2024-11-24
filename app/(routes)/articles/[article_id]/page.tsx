import ArticlePost from "app/components/Articles/ArticleDetail";
import ArticleGrid from "app/components/Articles/ArticlesGrid";
import NotifySignup from "app/components/Articles/NotificationSection";

const page = () => {
  return (
    <>
      <ArticlePost />
      <ArticleGrid isLoadMoreVisible={false} />
      <NotifySignup />
    </>
  );
};

export default page;
