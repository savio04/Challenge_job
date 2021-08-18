import { mongoose, acitivitySchema } from "../../database";

export async function UpdateStatusActivityService(status: string, _id: string) {
  const Activities = mongoose.model("activity", acitivitySchema, "activity");
  await Activities.updateOne({ _id }, { $set: { status } });
}
