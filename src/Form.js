import { useState } from 'react';
import './App.css';

function Form({addItem}) {
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");

  function handleSubmit() {
    addItem({ songTitle: songTitle, artistName: artistName});
    setSongTitle("");
    setArtistName("");
    document.getElementById("Form").reset();
  }

  return (
    <form id="Form" className="Form">
   <div className = "form-input">

    <label>

        <div className="input-text">
        Select College
        </div>


    <select onChange={(e) => setSongTitle(e.target.value)}>

        <option value="">Select...</option>

        <option value="dartmouth">Dartmouth</option>

        <option value="cornell">Cornell</option>

        <option value="vanderbilt">Vanderbilt</option>

        <option value="wellesley">Wellesley</option>

        <option value="bu">BU</option>

        <option value="uva">UVA</option>

        <option value="colby">Colby</option>

        <option value="bates">Bates</option>

        <option value="middlebury">Middlebury</option>

        <option value="mount holyoke">Mount Holyoke</option>

        <option value="vanderbilt">Vanderbilt</option>

        <option value="lehigh">Lehigh</option>

    </select>

    </label>
    </div>
      <button className="form-button" type="button" onClick={() => handleSubmit()}>ADD</button>
    </form>
  );
}

export default Form;