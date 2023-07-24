import { Trigger } from "deno-slack-api/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import RemoveWorkflow from "../workflows/remove.ts";

const emojiRemovedTrigger: Trigger<typeof RemoveWorkflow.definition> = {
  type: TriggerTypes.Event,
  name: "Notify emoji removed",
  description: "Notify emoji removed",
  workflow: "#/workflows/remove_workflow",
  event: {
    event_type: "slack#/events/emoji_changed",
    filter: {
      version: 1,
      root: {
        statement: "{{data.subtype}} == remove",
      },
    },
  },
  inputs: {
    names: {
      value: TriggerContextData.Event.EmojiChanged.names,
    },
  },
};

export default emojiRemovedTrigger;
