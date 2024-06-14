import React, { useState } from 'react';
import CustomButton from './component/button';
import Modal from './component/Modal';
import image from './assets/image1.webp';
import blueIcon from './assets/123d5e17e0efbd9c3818f576cf9d5f3a.jpg'; 
import greenIcon from './assets/photo-adorable-young-happy-boy-600nw-120165631.webp'; 
import redIcon from '../public/image1.webp'; 

const App = () => {
  const [open, setOpen] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#007bff');
  const [selectedImage, setSelectedImage] = useState(blueIcon); 
  const [modalClosed, setModalClosed] = useState(false);

  const imageDescriptions = {
    blue: "K.H Madushani Hansika",
    green: "U.D.P Sadeep Sandaruwan",
    red: "M.W Promod Madushan",
  };
  const textDescriptions = {
    text1: "B42,Wahalkada,Anuradhapura District,Sri Lanka",
    text2: "B30,Ataragalla,Gampaha,Sri Lanka",
    text3: "B3,Lankapatuna,Galle,Sri Lanka ",
  };
  const sclName = {
    scl1: "G/Ahangama Shariputhra College",
    scl2: "G/Imaduwa Batemulla College",
    scl3: "B/Colombo Nalanda College",
  }
  const ageChild = {
    age1: "18 Years Old",
    age2: "16 Years Old",
    age3: "19 Years Old",
  }
  const idNumber = {
    id1: "ID - 5984136544",
    id2: "ID - 6568452514",
    id3: "ID - 1634831321",
  }
  const eduCv = {
    edu1: "Bachelor of Information and Communication Technology Honours",
    edu2: "Sri Lanka Institute of Information Technology (SLIIT)",
    edu3: "The Bachelor of ICT is at exit level 7 on the HEQSF",
  }

  const handleColorChange = (backgroundColor, image) => {
    setBackgroundColor(backgroundColor);
    setSelectedImage(image);
    setModalClosed(false);
  };

  const handleOpen = () => {
    setOpen(true);
    setModalClosed(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalClosed(false);
  };

  return (
    <div>
      <div
        style={{
          position: 'revert',
          width: '1200px',
          height: '700px',
          backgroundColor: backgroundColor,
          marginBottom: '20px',
          textAlign: 'center',
          top: '50%',
          borderRadius: '3%',
        }}
      >
        <h1>Children's Details And Their Photos</h1>
        {selectedImage && (
          <>
            <img src={selectedImage} style={{ width: '300px', height: '300px', marginTop: '20px' }} alt="Selected" />
            <p>{imageDescriptions[selectedImage === blueIcon ? 'blue' : selectedImage === greenIcon ? 'green' : 'red' ]}</p>
            <p>{textDescriptions[selectedImage === blueIcon ? 'text1' : selectedImage === greenIcon ? 'text2' : 'text3']}</p>
            <p>{sclName[selectedImage === blueIcon ? 'scl1' : selectedImage === greenIcon ? 'scl2' : 'scl3']}</p>
            <p>{ageChild[selectedImage === blueIcon ? 'age1' : selectedImage === greenIcon ? 'age2' : 'age3']}</p>
            <p>{idNumber[selectedImage === blueIcon ? 'id1' : selectedImage === greenIcon ? 'id2' : 'id3']}</p>
            <p>{eduCv[selectedImage === blueIcon ? 'edu1' : selectedImage === greenIcon ? 'edu2' : 'edu3']}</p>
          </>
        )}
      </div>

      <CustomButton
        text="Blue"
        onClick={() => handleColorChange('#007bff', blueIcon)}
        backgroundColor="#007bff"
       
      />
      <CustomButton
        text="Green"
        onClick={() => handleColorChange('#28a745', greenIcon)}
        backgroundColor="#28a745"
       
      />
      <CustomButton
        text="Red"
        onClick={() => handleColorChange('#dc3545', redIcon)}
        backgroundColor="#dc3545"
        
      />

      <button type="button" onClick={handleOpen}>
        Sleep
      </button>

      <Modal isOpen={open} onClose={handleClose} id="#try">
        <>
          <h1>Welcome</h1>
          <h3>Click Here!</h3>
        </>
      </Modal>

      {modalClosed && (
        <div>
          <img src={image} style={{ width: '50px', height: '50px' }} alt="Modal Closed Image" />
        </div>
      )}

      <test/>
    </div>

  );

};

export default App;
