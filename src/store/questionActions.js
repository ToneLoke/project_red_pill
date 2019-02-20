import axios from 'axios'
export const questionInitial = {
  question: {
    answers: [],
    question: [],
    points: 0,
  },
  questions: null,
};
const QUESTION_API = 'http://localhost:8000/questions';

const token = () => (localStorage.getItem('token'))

//======================= ACTION CONSTANTS =======================
export const QUESTION_SET = 'QUESTION_SET';
export const QUESTION_FETCH_ALL = 'QUESTION_FETCH_ALL';
export const QUESTION_CREATE_UPDATE = 'QUESTION_CREATE_UPDATE';

export const setQuestion = ({payload}) => ({question: payload});

export const createOrUpdateQuestion = async (body) => {
    const { _id } = body;
    if(_id){
      return await axios.put(QUESTION_API + `/${_id}`, {...body, token: token()} )
    }else{
      return await axios.post(QUESTION_API, {...body, token: token() } )
    }
}

export const fetchQuestions = async () => {
  return await axios.get(QUESTION_API, { headers: { "x-access-token": token()}})
}

export const QUESTION_REDUCER = (state, action) => {
  switch (action.type) {
    case QUESTION_SET:
      return setQuestion(action);
    case QUESTION_FETCH_ALL:
      return { questions: action.payload };
    case QUESTION_CREATE_UPDATE:
      return { ...action.payload}
    default:
      return state;
  }
}
