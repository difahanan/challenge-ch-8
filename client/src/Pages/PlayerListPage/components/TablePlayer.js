import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import InfoPlayer from './InfoPlayer';
import ChangePlayer from './ChangePlayer';
import DeletePlayer from './DeletePlayer';

function TablePlayer({ player }) {
  const [infoModal, setInfoModal] = useState(false);
  const [changeModal, setChangeModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [playerData, setPlayerData] = useState(player.data);

  const toggleInfoModal = () => {
    setInfoModal(!infoModal);
  };
  const handleInfoClick = (playerName) => {
    setSelectedPlayer(playerName);
    toggleInfoModal();
  };

  const toggleChangeModal = () => {
    setChangeModal(!changeModal);
  };
  
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const handleDelete = (playerName) => {
    setSelectedPlayer(playerName);
    toggleDeleteModal();
  };
  
  const confirmDelete = () => {
    const updatedPlayerData = playerData.filter((player) => player.title !== selectedPlayer);
    setPlayerData(updatedPlayerData);
    toggleDeleteModal();
  };

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>♠</th>
            <th>PLAYER NAME</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {playerData.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>
                <Button color="primary" outline onClick={() => handleInfoClick(data.title)}>INFO</Button>
              </td>
              <td>
                <Button color="info" outline onClick={toggleChangeModal}>CHANGE</Button>
              </td>
              <td>
                <Button color="danger" outline onClick={() => handleDelete(data.title)}>DELETE</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <InfoPlayer modal={infoModal} toggle={toggleInfoModal} playerName={selectedPlayer} />
      <ChangePlayer modal={changeModal} toggle={toggleChangeModal} playerName={selectedPlayer}/>
      <DeletePlayer modal={deleteModal} toggle={toggleDeleteModal} playerName={selectedPlayer} confirmDelete={confirmDelete} />
    </div>
  );
}

export default TablePlayer;