import { FC } from "react";
import useBlog, { Props, ReceivedProps } from "./hook";
import AppHeader from "@components/AppHeader";
import { Button } from "@heroui/react";

const BlogLayout: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <AppHeader
        pageTitle="Quản lý bài đăng"
        rightMenu={<Button color="primary">Thêm bài đăng</Button>}
      />
    </div>
  );
};

const Blog: FC<ReceivedProps> = (props) => <BlogLayout {...useBlog(props)} />;

export default Blog;
