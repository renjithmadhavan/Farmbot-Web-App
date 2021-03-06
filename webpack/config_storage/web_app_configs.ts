/** THIS INTERFACE IS AUTO-GENERATED BY A SCRIPT.
    DO NOT MANUALLY MODIFY, CHANGES WILL BE
    OVERWRITTEN WHEN DATABASE SCHEMA CHANGES

    If you do need to change this file, first write a database migration,
      then run `rake typescript:interfaces` */

export interface WebAppConfig {
  id: number;
  device_id: number;
  created_at: string;
  updated_at: string;
  confirm_step_deletion: boolean;
  disable_animations: boolean;
  disable_i18n: boolean;
  display_trail: boolean;
  dynamic_map: boolean;
  encoder_figure: boolean;
  hide_webcam_widget: boolean;
  legend_menu_open: boolean;
  map_xl: boolean;
  raw_encoders: boolean;
  scaled_encoders: boolean;
  show_spread: boolean;
  show_farmbot: boolean;
  show_plants: boolean;
  show_points: boolean;
  x_axis_inverted: boolean;
  y_axis_inverted: boolean;
  z_axis_inverted: boolean;
  bot_origin_quadrant: number;
  zoom_level: number;
  success_log: number;
  busy_log: number;
  warn_log: number;
  error_log: number;
  info_log: number;
  fun_log: number;
  debug_log: number;
  stub_config: boolean;
  show_first_party_farmware: boolean;
  enable_browser_speak: boolean;
}

export type NumberConfigKey = "id"
    |"device_id"
    |"bot_origin_quadrant"
    |"zoom_level"
    |"success_log"
    |"busy_log"
    |"warn_log"
    |"error_log"
    |"info_log"
    |"fun_log"
    |"debug_log";

export type StringConfigKey = "created_at"
    |"updated_at";

export type BooleanConfigKey = "confirm_step_deletion"
    |"disable_animations"
    |"disable_i18n"
    |"display_trail"
    |"dynamic_map"
    |"encoder_figure"
    |"hide_webcam_widget"
    |"legend_menu_open"
    |"map_xl"
    |"raw_encoders"
    |"scaled_encoders"
    |"show_spread"
    |"show_farmbot"
    |"show_plants"
    |"show_points"
    |"x_axis_inverted"
    |"y_axis_inverted"
    |"z_axis_inverted"
    |"stub_config"
    |"show_first_party_farmware"
    |"enable_browser_speak";
