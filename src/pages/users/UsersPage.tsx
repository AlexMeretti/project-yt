import { Col, Row } from "antd";
import { FC } from "react";
import { Filter } from "./Filter";
import Users from "./Users";
const UsersPage: FC = () => {

  return <div className="usersPage">
    <Row gutter={[8, 8]}>
      <Col span={16}><div className="users"><h1>Users</h1><Users /></div></Col>
      <Col span={8}><div className="filter"><h2>Filters</h2><Filter /></div></Col>
    </Row>
  </div>
};


export default UsersPage;
