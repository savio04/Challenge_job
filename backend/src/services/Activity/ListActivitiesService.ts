import { mongoose, acitivitySchema } from "../../database";

interface IAcitvitiesDTO {
  name: string;
  description: string;
  status: "PENDENTE" | "CONCLUIDA" | "CANCELADA";
}

export async function ListActivitiesService(status: string) {
  const Activities = mongoose.model("activity", acitivitySchema, "activity");

  if (status) {
    const activities = (await Activities.find({ status }).sort({
      created_at: -1,
    })) as IAcitvitiesDTO[];
    return activities;
  } else {
    const activities = (await Activities.find().sort({
      created_at: -1,
    })) as IAcitvitiesDTO[];
    return activities;
  }
}
