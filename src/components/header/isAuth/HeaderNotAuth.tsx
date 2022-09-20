import { Button, PageHeader } from "antd";
const HeaderNotAuth = () => {
  return (
    <PageHeader
    className="site-page-header"
    title="Social project"
    extra={[
      <Button key="1">Sign up</Button>,
      <Button key="2" type="primary">
        Sign in
      </Button>,
    ]}
  />
  );
};

export default HeaderNotAuth;
