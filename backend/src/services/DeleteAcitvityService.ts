import { acitivitySchema, mongoose } from "../database";

export async function DeleteActrivityService(_id: string) {
  const Activities = mongoose.model("activity", acitivitySchema, "activity");
  await Activities.deleteOne({ _id });
}
