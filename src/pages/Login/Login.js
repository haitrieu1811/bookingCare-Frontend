import classNames from 'classnames/bind';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const Login = () => {
    return (
        <form action="" method="POST">
            <div className={cx('container')}>
                <label htmlFor="uname">
                    <b>Username</b>
                </label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label htmlFor="psw">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
                {/* <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label> */}
            </div>

            <div className={cx('container')} style={{ backgroundColor: '#f1f1f1' }}>
                <button type="button" className={cx('cancelbtn')}>
                    Cancel
                </button>
                <span className={cx('psw')}>
                    Forgot <a href="/">password?</a>
                </span>
            </div>
        </form>
    );
};

export default Login;
