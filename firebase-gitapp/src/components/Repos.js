import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  });

  return (
    <ListGroup className="mb-5 pb-5">
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div
            className="text-dark font-weight-bolder pl-2"
            style={{ fontSize: "1.2em" }}
          >
            {repo.name}
          </div>
          <div className="pl-2 text-info font-weight-bolder">
            {repo.language}
          </div>
          <div className="text-muted pl-2">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
