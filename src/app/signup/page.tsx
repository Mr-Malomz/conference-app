export const page = () => {
	return (
		<div>
			<form action=''>
				<fieldset>
					<label htmlFor='email'>Email</label>
					<input type='email' required name='email' id='' />
				</fieldset>
				<fieldset>
					<label htmlFor='password'>Password</label>
					<input type='password' required name='password' id='' />
				</fieldset>
                <button>Submit</button>
			</form>
		</div>
	);
};
