import { Trigger } from "deno-slack-api/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import RenameWorkflow from "../workflows/rename.ts";

const emojiRenamedTrigger: Trigger<typeof RenameWorkflow.definition> = {
  type: TriggerTypes.Event,
  name: "Notify emoji renamed",
  description: "Notify emoji renamed",
  workflow: "#/workflows/rename_workflow",
  event: {
    event_type: "slack#/events/emoji_changed",
    filter: {
      version: 1,
      root: {
        statement: "{{data.subtype}} == rename",
      },
    },
  },
  inputs: {
    old_name: {
      value: TriggerContextData.Event.EmojiChanged.old_name,
    },
    new_name: {
      value: TriggerContextData.Event.EmojiChanged.new_name,
    },
  },
};

export default emojiRenamedTrigger;
