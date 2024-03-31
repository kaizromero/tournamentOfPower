import React, { useState, useEffect } from "react";
import charge from '../src/img/gain.png';
import block from '../src/img/blocked.png';
import wave from '../src/img/wave.png';
import goku from '../src/img/goku.gif';
import './App.css'


function App() {


  const imageChoices = [charge, wave, block];
  const choices = ['charge', 'wave', 'block'];



  function generateNumber() {
    return Math.random() < 0.5 ? 0 : 2;
  }

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return randomIndex;
  }


  const combinedArray = choices.map((choice, index) => ({
    choice,
    image: imageChoices[index],
  }));
  


  const [imageSkill, setImageSkill] = useState(charge)
  const [imageComputerSkill, setimageComputerSkill] = useState(charge)

  const [youEnergy, setYouEnergy] = useState(0);
  const [youLife, setYouLife] = useState(3);

  const [opponentEnergy, setopponentEnergy] = useState(0);
  const [opponentLife, setOpponentLife] = useState(3);



  const restartPage = () => {
    window.location.reload();
  };

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (youLife === 0) {
      setMessage(
      <>
        <div>
          <img src={goku} alt="" height="200px" style={{ marginBottom: "2px", paddingRight: "2px"}} />
        </div>
        <div>
          You lose. Computer wins!
        </div>
      </>
      );
    } else if (opponentLife === 0) {
      setMessage(
        <>
        <div>
          <img src={goku} alt="" height="200px" style={{ marginBottom: "2px", paddingRight: "2px"}} />
        </div>
        <div>
          You win! Computer lose!
        </div>
      </>
      );
    } else if (youLife === 0 && opponentLife === 0) {
      setMessage(
        <>
        <div>
          <img src={goku} alt="" height="200px" style={{ marginBottom: "2px", paddingRight: "2px"}} />
        </div>
        <div>
          Draw!
        </div>
      </>
      );
    }
  }, [youLife, opponentLife]);

  


  const handleChoice = (choice) => {
    const computerChoice = getRandomChoice();

    setImageSkill(imageChoices);
    // console.log(setComputerChoice(computerChoice));
    // console.log(choice);
    // console.log('my choice', combinedArray[0].choice)
    // console.log('computer choice', combinedArray[computerChoice].choice)
    alert(`Your choice: ${choice} | Computer choice: ${combinedArray[computerChoice].choice}`);

    // console.log(combinedArray[computerChoice].choice)
    // console.log(generateNumber())

    function waveWithoutEnergyCharge() {
      setImageSkill(combinedArray[0].image);
      setimageComputerSkill(combinedArray[0].image);
      setopponentEnergy(opponentEnergy + 1)
      setYouEnergy(youEnergy + 1);
    }

    function waveWithoutEneryBlock() {
      setImageSkill(combinedArray[0].image);
      setimageComputerSkill(combinedArray[2].image)
      setYouEnergy(youEnergy + 1);
    }

    
    
    if(choice === 'charge' && combinedArray[computerChoice].choice === 'charge'){
      console.log('chargecharge');
      setImageSkill(combinedArray[0].image);
      setimageComputerSkill(combinedArray[0].image);
      setYouEnergy(youEnergy + 1);
      setopponentEnergy(opponentEnergy + 1);
    } 
    else if(choice === 'charge' && combinedArray[computerChoice].choice === 'wave') {
      
      if(opponentEnergy > 0) {
        console.log('nag wave')
        setYouLife(youLife - 1);
        setopponentEnergy(opponentEnergy - 1)
        setYouEnergy(youEnergy + 1)
        setImageSkill(combinedArray[0].image);
        setimageComputerSkill(combinedArray[1].image);
      } else if(opponentEnergy === 0) {
        if(combinedArray[generateNumber()].choice === 'charge') {
          alert('charge')
          waveWithoutEnergyCharge()
        } 
        else if(combinedArray[generateNumber()].choice === 'block') {
          alert('block')
          waveWithoutEneryBlock()
        }
        
        // 
      }
      // setImageSkill(combinedArray[0].image);
      // setimageComputerSkill(combinedArray[generateNumber()].image);
      // setYouEnergy(youEnergy + 1);


    } else if(choice === 'charge' && combinedArray[computerChoice].choice === 'block') {
      console.log('charge block');
      setImageSkill(combinedArray[0].image);
      setimageComputerSkill(combinedArray[2].image);
      setYouEnergy(youEnergy + 1);
    } else if (choice === 'wave' && combinedArray[computerChoice].choice === 'charge') {
      setImageSkill(combinedArray[1].image);
      setimageComputerSkill(combinedArray[0].image);
        if(youEnergy > 0) {
          setOpponentLife(opponentLife - 1);
          setYouEnergy(youEnergy - 1);
        }
        setopponentEnergy(opponentEnergy + 1)
    } else if(choice === 'wave' &&  combinedArray[computerChoice].choice === 'wave') {
      setImageSkill(combinedArray[1].image);
      setimageComputerSkill(combinedArray[1].image);
        if(youEnergy > 0) {
          setYouEnergy(youEnergy - 1);
          setOpponentLife(opponentLife - 1);
        }
        if(opponentEnergy > 0) {
          setYouLife(youLife - 1);
          setopponentEnergy(opponentEnergy - 1);
        }
      
    } else if(choice === 'wave' &&  combinedArray[computerChoice].choice === 'block') {
      setImageSkill(combinedArray[1].image)
      setimageComputerSkill(combinedArray[2].image)

      if(youEnergy > 0) { 
        setYouEnergy(youEnergy - 1);
      }
    } else if(choice === 'block' &&  combinedArray[computerChoice].choice === 'charge') {
      setImageSkill(combinedArray[2].image)
      setimageComputerSkill(combinedArray[0].image)

      setopponentEnergy(opponentEnergy + 1)

    } else if(choice === 'block' &&  combinedArray[computerChoice].choice === 'wave') {
      setImageSkill(combinedArray[2].image)
      setimageComputerSkill(combinedArray[1].image)
      


      if(opponentEnergy > 0) {
        setopponentEnergy(opponentEnergy - 1);
      } 
      
    } else if(choice === 'block' &&  combinedArray[computerChoice].choice === 'block') {
      setImageSkill(combinedArray[2].image)
      setimageComputerSkill(combinedArray[2].image)
    }
  }

 


  

  return (
    <div style={{ 
        textAlign: "center", 
        marginTop: "20px", 
        paddingLeft: "300px",
        paddingRight: "300px",
        width: "800px"
        }}>
        <div style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "20px 0",
          marginBottom: "50px"
        }}>
          <h1>TOURNAMENT OF POWER</h1>
          <p>React game!</p>
          </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div style={{ 
            width: "200px",
            backgroundColor:  "#fff",
            marginBottom: "20px"
            }}>
            <h3 style={{
              marginTop: "0px",
              padding: "20px 0",
              backgroundColor: "#181848",
              color:"#fff"
            }}>You</h3>
            <p>Life: {youLife}</p>
            <p>Charge: {youEnergy}</p>
            
          </div>
          <div>
          <p style={{
            fontWeight: "bold",
            color: "orange",
            textShadow: "0 0 3px #FF0000",
            fontSize: "24px"
          }}>
            
            <br/>{message}</p>
          </div>
          <div style={{ 
            width: "200px",
            backgroundColor:  "#fff",
            marginBottom: "20px"
            }}>
            <h3 style={{
              marginTop: "0px",
              padding: "20px 0",
              backgroundColor: "#181848",
              color:"#fff"
            }}>Computer</h3>
            <p>Life: {opponentLife}</p>
            <p>Charge: {opponentEnergy}</p>
            
            
          </div>
        </div>
      <img src={imageSkill} alt="" height="200px" style={{ marginBottom: "20px", paddingRight: "20px"}} />
      <img src={imageComputerSkill} alt="" height="200px" style={{ marginBottom: "20px" }} />
      <div>
        <button
          className="bounce"
          type="button"
          onClick={() => handleChoice(choices[0])}
          style={{ 
            marginRight: "10px", 
            padding: "5px 10px", 
            cursor: "pointer", 
            backgroundColor: "lightblue", 
            border: "none", 
            borderRadius: "5px"
          }}
        >
          Charge
        </button>
        <button
          className="bounce"
          type="button"
          onClick={() => handleChoice(choices[1])}
          style={{ 
            marginRight: "10px", 
            padding: "5px 10px", 
            cursor: "pointer", 
            backgroundColor: "lightblue", 
            border: "none", 
            borderRadius: "5px" 
          }}
        >
          Wave
        </button>
        <button
          className="bounce"
          type="button"
          onClick={() => handleChoice(choices[2])}
          style={{ 
            padding: "5px 10px", 
            cursor: "pointer", 
            backgroundColor: "lightblue", 
            border: "none", 
            borderRadius: "5px",
            marginRight: "5px"

          }}
        >
          Block
        </button>
        <button
          className="bounce"
          type="button"
          onClick={restartPage}
          style={{ 
            padding: "5px 10px", 
            cursor: "pointer", 
            backgroundColor: "lightblue", 
            border: "none", 
            borderRadius: "5px"
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
