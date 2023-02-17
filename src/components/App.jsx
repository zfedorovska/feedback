import { useSelector } from 'react-redux';
import { getLoading } from '../redux/feedbacks/feedbacks-selectors';
import FeedbackForm from './Feedback/FeedbackForm';
import Spinner from './Feedback/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const loading = useSelector(getLoading);
  return (
    <div>
      <FeedbackForm />
      {loading && <Spinner />}
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
