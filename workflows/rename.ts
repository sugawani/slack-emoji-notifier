import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { SendMessageFunction } from "../functions/send_message.ts";

const RenameWorkflow = DefineWorkflow({
  callback_id: "rename_workflow",
  title: "Notify emoji renamed",
  description: "Notify emoji renamed",
  input_parameters: {
    properties: {
      old_name: {
        type: Schema.types.string,
      },
      new_name: {
        type: Schema.types.string,
      },
    },
    required: ["old_name", "new_name"],
  },
});

RenameWorkflow.addStep(SendMessageFunction, {
  message:
    `emoji renamed! ${RenameWorkflow.inputs.old_name} -> ${RenameWorkflow.inputs.new_name}`,
});

export default RenameWorkflow;
