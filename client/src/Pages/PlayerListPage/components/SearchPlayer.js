import React from "react";
import { Button, Input } from "reactstrap";

function SearchPlayer({ handleChange, searchName, handleSearch }) {
  const handleClick = () => {
    handleSearch(searchName);
  };

  return (
    <>      
      <div className="d-flex justify-content-center">
      <Input type="text" id="player-search" onChange={handleChange} value={searchName} placeholder="SEARCH PLAYER NAME"/>
        <Button className="ms-3" color="primary" outline onClick={handleClick}>SEARCH</Button>
      </div>
    </>
  );
}

export default SearchPlayer;