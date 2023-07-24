import { Trigger } from "deno-slack-api/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import AddWorkflow from "../workflows/add.ts";

const emojiAddedTrigger: Trigger<typeof AddWorkflow.definition> = {
  type: TriggerTypes.Event,
  name: "Notify emoji added",
  description: "Notify emoji added",
  workflow: "#/workflows/notify_workflow",
  event: {
    event_type: "slack#/events/emoji_changed",
  },
  inputs: {
    name: {
      value: TriggerContextData.Event.EmojiChanged.name,
    },
    value: {
      value: TriggerContextData.Event.EmojiChanged.value,
    },
  },
};

export default emojiAddedTrigger;
