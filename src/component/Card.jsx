import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import database from "../FirebaseConfig";

function Card() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const participantsRef = database.ref("participants");
        participantsRef.on("value", (snapshot) => {
          const data = snapshot.val();
          const loadedParticipants = Object.keys(data).map((key) => {
            return {
              id: key,
              name: data[key],
            };
          });
          setParticipants(loadedParticipants);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => database.ref("participants").off(); // 關閉監聽器
  }, []);

  const handleCardClick = (cardContent, cardId) => {
    setSelectedCard(cardContent);
    setIsTransitioning(true);
    setSelectedCardId(cardId);

    setTimeout(() => {
      database
        .ref(`participants/${cardId}`)
        .remove()
        .then(() => {
          setParticipants((prevParticipants) =>
            prevParticipants.filter((participant) => participant.id !== cardId)
          );
        })
        .catch((error) => {
          console.error("Error deleting participant:", error);
        });

      navigate(`/newpage/${cardContent}`);
    }, 500);
  };

  return (
    <>
      <h1 className="text-2xl text-center mb-5">
        請抽選要準備的{" "}
        <span className="text-red font-bold">{selectedCard}</span> 🎁
      </h1>
      <div
        className={`card-container grid grid-cols-3 gap-4 text-center ${
          isTransitioning ? "fade-transition fade-out" : ""
        }`}
      >
        {participants.map((participant) => (
          <div
            key={participant.id}
            className={`card ${
              selectedCardId === participant.id ? "card-selected" : ""
            } w-20 h-32`}
            onClick={() => handleCardClick(participant.name, participant.id)}
          >
            <div className="card-front"></div>
            <div className="card-back">{participant.name}</div>{" "}
            {/* 顯示參與者的名字 */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
