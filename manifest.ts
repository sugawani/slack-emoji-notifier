import { Manifest } from "deno-slack-sdk/mod.ts";
import { SendMessageFunction } from "./functions/send_message.ts";
import AddWorkflow from "./workflows/add.ts";
import RemoveWorkflow from "./workflows/remove.ts";
import RenameWorkflow from "./workflows/rename.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "slack-emoji-notifier",
  description: "Notify when emoji are changed",
  icon: "assets/app_icon.png",
  workflows: [
    AddWorkflow,
    RemoveWorkflow,
    RenameWorkflow,
  ],
  functions: [SendMessageFunction],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "emoji:read",
  ],
});
