export interface Auth {
  access_token:string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type : string;
  athlete: any;
}

export interface ReAuth {
  access_token:string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type : string;
}

export interface Activities {
  achievement_count: number;
  athlete: string;
  athlete_count: number;
  average_cadence: number;
  average_heartrate: number;
  average_speed: number;
  average_temp: number;
  average_watts: number;
  comment_count: number;
  commute: number;
  device_watts: number;
  display_hide_heartrate_option: boolean;
  distance: number;
  elapsed_time:number;
  elev_high: number;
  elev_low: number;
  end_latlng: string;
  external_id: string;
  flagged: boolean;
  from_accepted_tag: boolean;
  gear_id: string;
  has_heartrate: boolean;
  has_kudoed: boolean;
  heartrate_opt_out: boolean;
  id: number;
  kilojoules: number;
  kudos_count: number;
  location_city: string;
  location_country: string;
  location_state: string;
  manual: boolean;
  map: string;
  max_heartrate:  number;
  max_speed:  number;
  max_watts:  number;
  moving_time:  number;
  name: string;
  photo_count:  number;
  pr_count:  number;
  private: boolean;
  resource_state:  number;
  start_date: string;
  start_date_local: string;
  start_latitude:  number;
  start_latlng: string;
  start_longitude:  number;
  timezone: string;
  total_elevation_gain:  number;
  total_photo_count:  number;
  trainer: boolean;
  type: string;
  upload_id:  number;
  upload_id_str: string;
  utc_offset:  number;
  visibility: string;
  weighted_average_watts:  number;
  workout_type: string;
}
