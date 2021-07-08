import { createGuestSession } from './guest-session.request';
import {
  createSession,
  createV3SessionFromV4Session,
  deleteSession
} from './session.request';
import { createRequestToken, createSessionWithLogin } from './token.request';

export const Authentication = {
  createGuestSession,
  createSession,
  createV3SessionFromV4Session,
  deleteSession,
  createRequestToken,
  createSessionWithLogin
};
