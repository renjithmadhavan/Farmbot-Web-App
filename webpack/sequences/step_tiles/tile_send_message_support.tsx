import { Channel } from "farmbot/dist";
import { ChannelName } from "../interfaces";

/** All the attributes/config you need to render a Channel */
interface ChanInfo {
  /** Always check it? */
  alwaysOn: boolean;
  /** CeleryScript name */
  name: ChannelName;
  /** Human readable name */
  label: string;
}

export const EACH_CHANNEL: ChanInfo[] = [
  { alwaysOn: true, name: "ticker", label: "Ticker Notification" },
  { alwaysOn: false, name: "toast", label: "Toast Pop Up" },
  { alwaysOn: false, name: "email", label: "Email" },
  { alwaysOn: false, name: "espeak", label: "Speak" },
];

export const MESSAGE_STATUSES = [
  { value: "success", label: "Success" },
  { value: "busy", label: "Busy" },
  { value: "warn", label: "Warning" },
  { value: "error", label: "Error" },
  { value: "info", label: "Info" }
];

export const MESSAGE_STATUSES_DDI = {
  [MESSAGE_STATUSES[0].value]: {
    label: MESSAGE_STATUSES[0].label,
    value: MESSAGE_STATUSES[0].value
  },
  [MESSAGE_STATUSES[1].value]: {
    label: MESSAGE_STATUSES[1].label,
    value: MESSAGE_STATUSES[1].value
  },
  [MESSAGE_STATUSES[2].value]: {
    label: MESSAGE_STATUSES[2].label,
    value: MESSAGE_STATUSES[2].value
  },
  [MESSAGE_STATUSES[3].value]: {
    label: MESSAGE_STATUSES[3].label,
    value: MESSAGE_STATUSES[3].value
  },
  [MESSAGE_STATUSES[4].value]: {
    label: MESSAGE_STATUSES[4].label,
    value: MESSAGE_STATUSES[4].value
  }
};

export function channel(channel_name: ChannelName): Channel {
  return { kind: "channel", args: { channel_name } };
}
