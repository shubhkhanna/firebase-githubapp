import React from "react";
import { Card, CardBody } from "reactstrap";
const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-4 mb-5">
      <img src={user.avatar_url} className="rounded" alt="" />
      <CardBody>
        <div className="text-dark" style={{ fontSize: "1.5em" }}>
          {user.name}
        </div>
        <div className="text-dark">{user.bio}</div>
        <div className="text-info">
          Available for hire: {user.hireable ? "Yes" : "No"}
        </div>
        <div className="text-info">Followers: {user.followers}</div>
        <div className="text-info">Repos: {user.public_repos}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
