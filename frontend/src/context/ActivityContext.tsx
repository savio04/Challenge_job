import { ReactNode } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface localStorageProps {
  token: string;
  user: object;
}

interface IActivityPropsDTO {
  _id?: string;
  status?: string;
  name: string;
  description: string;
  created_at?: Date;
}

interface IActivityProps {
  children: ReactNode;
}

interface IContextProps {
  activities: IActivityPropsDTO[];
  createActivity(name: string, description: string): Promise<void>;
  deleteActivity(id: string): Promise<void>;
  updateActivity(id: string, status: string): Promise<void>;
  listActivity(status: string): Promise<void>;
  loading: boolean;
}

export const ActvityContext = createContext<IContextProps>({} as IContextProps);

export function ActivityContextProvider({ children }: IActivityProps) {
  const [activities, setActivities] = useState<IActivityPropsDTO[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadActivity() {
      const response = await api.get("/activity");
      setActivities(response.data);
      setLoading(false);
    }
    loadActivity();
  }, []);

  async function listActivity(status: string) {
    console.log(status);
    const response = await api.get(`activity?status=${status}`);

    setActivities(response.data);
  }

  async function createActivity(name: string, description: string) {
    try {
      await api.post("/activity", {
        name,
        description,
      });
      const newAcitvities = await api.get("activity");
      setActivities([...newAcitvities.data]);
      toast.success("Atividade adicionada com sucesso");
    } catch (err) {
      toast.error("Ocorreu um erro no cadastro!");
    }
  }

  async function updateActivity(id: string, status: string) {
    const updateActivity = [...activities];
    const activity = updateActivity.find((activity) => activity._id === id);
    activity.status = status;

    await api.patch(`/activity/status?id=${id}`, {
      status,
    });
    setActivities([...updateActivity]);
  }

  async function deleteActivity(id: string) {
    try {
      const updateActivities = [...activities];

      const activitieIndex = updateActivities.findIndex(
        (activity) => activity._id === id
      );
      updateActivities.splice(activitieIndex, 1);

      await api.delete(`/activity?id=${id}`);
      setActivities([...updateActivities]);
      toast.success("Atividade deletada");
    } catch (err) {
      toast.success("Ocerreu um erro na tentativa de deletar está atividade!");
    }
  }

  return (
    <ActvityContext.Provider
      value={{
        listActivity,
        loading,
        updateActivity,
        createActivity,
        activities,
        deleteActivity,
      }}
    >
      {children}
    </ActvityContext.Provider>
  );
}
