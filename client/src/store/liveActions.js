import { logger } from "../utils";
const liveLog = logger("LIVE:GAME:ACTIONS:REDUCER");
//LIVE UPDATES TO GAME FROM SERVER
const LIVE_GAME_STATUS_CHANGE = "LIVE_GAME_STATUS_CHANGE";
const LIVE_GAME_QUESTION_CHANGE = "LIVE_GAME_QUESTION_CHANGE";

//LIVE EMITIONS TO SERVER
const LIVE_GAME_ANSWER_QUESTION = "LIVE_GAME_PLAYER_STATS_UPDATE";
const LIVE_GAME_UPDATE = "LIVE_GAME_UPDATE";

export const liveInitial = {
  live: { status: "", players: [] }
};

export const LIVE_GAME_REDUCER = (state, action) => {
  switch (action.type) {
    case LIVE_GAME_UPDATE:
      state.game.socket.emit(action.type, action.payload);
      return { ...state };
    case "LIVE_GAME_PLAYER_UPDATE":
      const _id = state.user._id;
      state.game.socket.emit(action.type, { _id, ...action.payload });
      return { ...state };
    case "LIVE_GAME_UPDATED":
      let players;
      if (state.live.players.length !== state.game.players) {
        players =
          state.game.players > 0
            ? state.game.players.map(p => ({ _id: p._id, status: "" }))
            : [];
      } else {
        players = state.live.players;
      }
      return {
        ...state,
        game: { ...state.game, ...action.payload },
        live: { status: state.game.status, players }
      };
    case "LIVE_GAME_PLAYER_UPDATED":
      let updatedPlayers = [];
      if (state.live.players.length > 0) {
        updatedPlayers = state.live.players.map(p =>
          p._id === action.payload._id
            ? { ...p, status: action.payload.status }
            : p
        );
      } else {
        updatedPlayers = [action.payload];
      }
      liveLog("UPDATED PLAYERS", updatedPlayers);
      return {
        ...state,
        live: { status: state.game.status, players: updatedPlayers }
      };
    default:
      return { ...state };
  }
};
