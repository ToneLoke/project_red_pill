import axios from './axiosConfig';

export const questionInitial = {
  question: {
    answers: [],
    question: [],
    points: 0
  },
  questions: null
};
const QUESTION_API = '/questions';

//======================= ACTION CONSTANTS =======================
export const QUESTION_SET = 'QUESTION_SET';
export const QUESTION_FETCH_ALL = 'QUESTION_FETCH_ALL';
export const QUESTION_CREATE_UPDATE = 'QUESTION_CREATE_UPDATE';

export const setQuestion = ({ payload }) => ({ question: payload });

export const createOrUpdateQuestion = async (body) => {
  const { _id } = body;
  if (_id) {
    return await axios.put(QUESTION_API + `/${_id}`, { ...body });
  } else {
    return await axios.post(QUESTION_API, { ...body });
  }
};

export const fetchQuestions = async () => {
  return await axios.get(QUESTION_API);
};

export const QUESTION_REQUESTS = ({type, payload}) => {
  switch (type) {
    case QUESTION_FETCH_ALL:
      return fetchQuestions();
    case QUESTION_CREATE_UPDATE:
      return createOrUpdateQuestion(payload);
    default:
      Promise.reject(new Error('Missing question request.'));
  }
};

export const QUESTION_REDUCER = (action, state) => {
  switch (action.type) {
    case QUESTION_SET:
      return setQuestion(action);
    case QUESTION_FETCH_ALL:
      return { questions: action.payload };
    case QUESTION_CREATE_UPDATE:
      return setQuestion(action);
    default:
      return state;
  }
};
