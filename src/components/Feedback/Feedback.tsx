import { FeedbackContainer, FeedbackWrapper, IconLogo, ResetButton } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLikes, incrementDislikes, resetFeedback } from '../../store/redux/feedback/feedbackSlice';
import { RootState, AppDispatch } from '../../store';
import thumbUp from '../../assets/thumb-up.png';
import thumbDown from '../../assets/thumb-down.png';

function Feedback() {
  const dispatch = useDispatch<AppDispatch>();
  const { likes, dislikes } = useSelector((state: RootState) => state.feedback);

  return (
    <FeedbackContainer>
      <FeedbackWrapper>
        <IconLogo as="img" src={thumbUp} alt="Thumb up" onClick={() => dispatch(incrementLikes())} />
        <span>{likes}</span>
      </FeedbackWrapper>
      <FeedbackWrapper>
        <IconLogo as="img" src={thumbDown} alt="Thumb down" onClick={() => dispatch(incrementDislikes())} />
        <span>{dislikes}</span>
      </FeedbackWrapper>
      <ResetButton onClick={() => dispatch(resetFeedback())}>
        Reset Results
      </ResetButton>
    </FeedbackContainer>
  );
}

export default Feedback;
