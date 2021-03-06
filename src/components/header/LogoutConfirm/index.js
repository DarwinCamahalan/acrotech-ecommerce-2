import { signOutUserStart } from '../../../redux/User/user.actions'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './styles.scss'

const LogoutConfirm = ({ confirm, setConfirm }) => {
  const dispatch = useDispatch()

  const history = useHistory()
  const signOut = () => {
    dispatch(signOutUserStart())
    setConfirm(!confirm)
    document.body.style.overflow = 'unset'
    history.push('/')
  }

  return (
    <div>
      <div
        onClick={() => {
          document.body.style.overflow = 'unset'
          setConfirm(!confirm)
        }}
        className="overlay"
      ></div>
      <div className="confirmation">
        <i class="fas fa-exclamation"></i>
        <p>Log out</p>
        <h6>You will be returned to the home page.</h6>
        <hr />
        <div className="options">
          <a
            onClick={() => {
              document.body.style.overflow = 'unset'
              setConfirm(!confirm)
            }}
          >
            Cancel
          </a>

          <a
            onClick={signOut}
            style={{
              borderLeft: '1px solid #3D1200',
            }}
          >
            Log out
          </a>
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirm
