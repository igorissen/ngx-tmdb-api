import { createGuestSession } from './guest-session.request';
import {
  createSession,
  createSessionFromV4Session,
  deleteSession
} from './session.request';
import { createRequestToken, createSessionWithLogin } from './token.request';

export const Authentication = {
  createGuestSession,
  createSession,
  createSessionFromV4Session,
  deleteSession,
  createRequestToken,
  createSessionWithLogin
};
