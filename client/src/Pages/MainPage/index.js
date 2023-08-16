import React, { useState } from "react";
import { Card, Button } from "reactstrap";
import SearchPlayer from "../PlayerListPage/components/SearchPlayer";
import TablePlayer from "../PlayerListPage/components/TablePlayer";
import ModalPlayer from "../PlayerListPage/components/ModalPlayer";
import { handleChange, handleSearch } from "../PlayerListPage/function";

const contohData = [
  {
    id: 1,
    title: 'robert vantors'
  },
  {
    id: 2,
    title: 'alexander croutes'
  },
  {
    id: 3,
    title: 'frank grousto'
  },
  {
    id: 4,
    title: 'protos jaffer'
  },
  {
    id: 5,
    title: 'quero santanos'
  }
];

function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const [player, setPlayer] = useState({ data: [...contohData] });
  const [searchName, setSearchName] = useState("");

  return (
    <div>
      <Card className='m-3 p-3 border-animation'>
        <SearchPlayer searchName={searchName} handleChange={(event) => handleChange(event, setSearchName)}handleSearch={() => handleSearch(searchName, setPlayer, contohData)}/>
      </Card>
      <Card className='m-3 p-3 border-animation'>
        <TablePlayer player={player} setPlayer={setPlayer} contohData={contohData} />
        <Button type='button' color="dark" outline onClick={() => setShowModal(!showModal)}>ADD PLAYER</Button>
        <ModalPlayer modal={showModal} toggle={() => setShowModal(!showModal)} />
      </Card>
    </div>
  );
}

export default MainPage;