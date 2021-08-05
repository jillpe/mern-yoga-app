import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
	return (
		<main>
			<h1 className="auth-page-heading">Welcome to the Studio</h1>
			<SignUpForm setUser={setUser} />
			<LoginForm setUser={setUser} />
		</main>
	);
}

