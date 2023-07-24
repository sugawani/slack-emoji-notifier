import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { SendMessageFunction } from "../functions/send_message.ts";

const AddWorkflow = DefineWorkflow({
  callback_id: "add_workflow",
  title: "Notify emoji added",
  description: "Notify emoji added",
  input_parameters: {
    properties: {
      name: {
        type: Schema.types.string,
      },
      value: {
        type: Schema.types.string,
      },
    },
    required: ["name", "value"],
  },
});

AddWorkflow.addStep(SendMessageFunction, {
  message:
    `emoji added! :${AddWorkflow.inputs.name}: ${AddWorkflow.inputs.value}`,
});

export default AddWorkflow;
