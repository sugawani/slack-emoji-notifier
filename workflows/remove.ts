import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { SendMessageFunction } from "../functions/send_message.ts";

const RemoveWorkflow = DefineWorkflow({
  callback_id: "remove_workflow",
  title: "Notify emoji removed",
  description: "Notify emoji removed",
  input_parameters: {
    properties: {
      names: {
        type: Schema.types.array,
      },
    },
    required: ["names"],
  },
});

RemoveWorkflow.addStep(SendMessageFunction, {
  message: `emoji removed! ${RemoveWorkflow.inputs.names}`,
});

export default RemoveWorkflow;
