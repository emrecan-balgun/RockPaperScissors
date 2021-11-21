import { useState, useEffect, useRef } from "react";
import WinnerService from "../services/Winner.services";
import { resetGame, winner } from "../redux/historySlice";
import { useSelector, useDispatch } from "react-redux";
import { FaRegWindowClose } from "react-icons/fa";

const GameOverModal = () => {
  const [showModal, setShowModal] = useState(true);
  const gameWinner = useSelector(winner);
  const dispatch = useDispatch();
  const didMountRef = useRef(false);

  WinnerService();

  useEffect(() => {
    if (didMountRef.current) {
      dispatch(resetGame());
      setShowModal(true);
    } else {
      didMountRef.current = true;
    }
  }, [dispatch, gameWinner]);

  return (
    <div
      className={`game-over-modal ${showModal ? "game-over-modal--show" : ""}`}
    >
      <div className="game-over-modal__container">
        <div className="game-over-modal__inner">
          <div className="game-over-modal__header">
            <div className="game-over-modal__title">Game Over</div>
            <FaRegWindowClose className="game-over-modal__icon" />
          </div>
          <div className="game-over-modal__message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum
            blanditiis a reprehenderit excepturi maxime adipisci deleniti,
            perferendis, mollitia, tempore commodi dolorem inventore vel iste
            impedit eum amet? Beatae, impedit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
