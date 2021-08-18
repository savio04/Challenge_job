import { acitivitySchema, mongoose } from "../../database";
import AppError from "../../errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

export async function CreateActivityService({ name, description }: IRequest) {
  const Activities = mongoose.model("activity", acitivitySchema, "activity");

  const activity = new Activities({ name, description });

  try {
    await activity.save();
  } catch (err) {
    throw new AppError(`${err.message}`);
  }
}
