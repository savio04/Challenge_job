import styles from "./styles.module.scss";
import { FiCheckSquare, FiFilter } from "react-icons/fi";
import { FormEvent, useState } from "react";
import { CardActivity } from "../CardActivity/CardActivity";
import { useContext } from "react";
import { ActvityContext } from "../../context/ActivityContext";
import { useEffect } from "react";

interface IActivityProps {
  _id?: string;
  status?: string;
  name: string;
  description: string;
  created_at?: Date;
}

export function SectionActivityCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [valueFilter, setValueFilter] = useState("");
  //Context
  const activityContext = useContext(ActvityContext);
  const { activities, createActivity, updateActivity, loading,listActivity } =
    activityContext;

  async function handleCreateActivity(event: FormEvent) {
    event.preventDefault();
    await createActivity(name, description);
    setName("");
    setDescription("");
  }

  async function handleUpdateActivity(id: string, status: string) {
    await updateActivity(id, status);
  }

  async function handleFilterActivities(){
    await listActivity(valueFilter)
  }

  return (
    <section className={styles.taskContainer}>
      <header>
        <div>
          <h2>Minhas atividades</h2>
          <div className={styles.select_block}>
            <label htmlFor="select">
              <button onClick={handleFilterActivities}>
                Filtrar <FiFilter />
              </button>
            </label>
            <select
              value={valueFilter}
              id="select"
              onChange={(event) => setValueFilter(event.target.value)}
            >
              <option value="">Nunhuma</option>
              <option value="PENDENTE">PENDENTE</option>
              <option value="CONCLUIDA">CONCLUIDA</option>
              <option value="CANCELADA">CANCELADA</option>
            </select>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <h3>Nova Atividade</h3>
          <input
            value={name}
            type="text"
            placeholder="Nome da atividade"
            onChange={(event) => setName(event.target.value)}
          />
          <textarea
            placeholder="Descrição da atividade"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateActivity}
          >
            Adicionar
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>
      <main>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <CardActivity
            handleUpdateActivity={handleUpdateActivity}
            activities={activities}
          />
        )}
      </main>
    </section>
  );
}
