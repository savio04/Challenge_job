import { FiClock, FiCheckCircle, FiXCircle, FiTrash2, FiFilter } from "react-icons/fi";
import { FormatedDate } from "../../utils/fomatedDate";
import styles from "./styles.module.scss";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { useContext } from "react";
import { ActvityContext } from "../../context/ActivityContext";

interface IActivityProps {
  _id?: string;
  status?: string;
  name: string;
  description: string;
  created_at?: Date;
}

interface ICardActivity {
  activities: IActivityProps[];
  handleUpdateActivity(id: string, status: string): void;
}

export function CardActivity({
  activities,
  handleUpdateActivity,
}: ICardActivity) {
  //Context
  const activityContext = useContext(ActvityContext);
  const { deleteActivity } = activityContext;

  async function handleDeleteActivity(id: string) {
    await deleteActivity(id);
  }
  async function handleActivityAlert(id: string, name: string) {
    confirmAlert({
      title: "Deseja deletar essa atividade?",
      message: `Sua ativida "${name}" será deletada permanentemente.`,
      buttons: [
        {
          label: "Confirmar",
          onClick: () => handleDeleteActivity(id),
        },
        {
          label: "Cancelar",
          onClick: () => {},
        },
      ],
      overlayClassName: `${styles.alert_overlay}`,
    });
  }

  return (
    <ul className={styles.cardContainer}>
      {activities.map((acitvity) => (
        <li key={acitvity._id}>
          <div
            className={
              (acitvity.status === "CANCELADA" && styles.floatStatusCanceled) ||
              (acitvity.status === "PENDENTE" && styles.floatStatus) ||
              (acitvity.status === "CONCLUIDA" && styles.floatStatusCompleted)
            }
          >
            {acitvity.status === "CANCELADA" && <FiXCircle />}
            {acitvity.status === "CONCLUIDA" && <FiCheckCircle />}
            {acitvity.status === "PENDENTE" && <FiClock />}
            <p>{acitvity.status}</p>
          </div>

          <div className={styles.TrashIcon}>
            <button
              onClick={() => {
                handleActivityAlert(acitvity._id, acitvity.name);
              }}
            >
              <FiTrash2 />
            </button>
          </div>

          <h2> {acitvity.name} </h2>
          <span>
            <p>{acitvity.description}</p>
            <p>Data da criação: <strong> {FormatedDate(acitvity.created_at)}</strong></p>
          </span>

          <div className={styles.buttonsFooter}>
            <label htmlFor={acitvity._id}>
              <input
                checked={acitvity.status === "CONCLUIDA"}
                readOnly
                onClick={() => handleUpdateActivity(acitvity._id, "CONCLUIDA")}
                type="checkbox"
                id={acitvity._id}
                disabled={
                  acitvity.status === "CANCELADA" ||
                  acitvity.status === "CONCLUIDA"
                }
              />
              Macar como concluida
            </label>

            <label htmlFor={`${acitvity._id}_canceled`}>
              <input
                checked={acitvity.status === "CANCELADA"}
                onClick={() => handleUpdateActivity(acitvity._id, "CANCELADA")}
                type="checkbox"
                readOnly
                id={`${acitvity._id}_canceled`}
                disabled={
                  acitvity.status === "CANCELADA" ||
                  acitvity.status === "CONCLUIDA"
                }
              />
              Cancelar atividade
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
