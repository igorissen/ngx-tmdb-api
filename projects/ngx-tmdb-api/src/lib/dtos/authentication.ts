export type TMDbAuthentication = {
  success?: boolean;
  expires_at?: string;
  request_token?: string;
  session_id?: string;
  guest_session_id?: string;
};

export type TMDbCreateSessionWithLoginRequestDTO = {
  request_token: string;
  username: string;
  password: string;
};
export type TMDbCreateSessionRequestDTO = {
  request_token: string;
};
export type TMDbCreateSessionFromV4SessionRequestDTO = {
  access_token: string;
};
export type TMDbDeleteSessionRequestDTO = {
  session_id: string;
};
