function handleChange(event, setSearchName) {
  setSearchName(event.target.value);
}

function handleSearch(searchName, setPlayer, contohData) {
  if (searchName !== "") {
    const newList = contohData.filter((value) =>
      value.title.toLowerCase().includes(searchName.toLowerCase())
    );
    setPlayer({ data: newList });
  } else {
    setPlayer({ data: [...contohData] });
  }
}

function toggle(showModal, setShowModal) {
  setShowModal(!showModal);
}

export { handleChange, handleSearch, toggle };