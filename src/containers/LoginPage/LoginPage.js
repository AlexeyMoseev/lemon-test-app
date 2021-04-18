import React, { Component } from 'react'
import classes from './LoginPage.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import { withRouter } from 'react-router-dom'
import weblogin from '../../img/weblogin.png'

class LoginPage extends Component {
	state = {
		isFormValid: false,
		formControls: {
			login: {
				value: '',
				type: 'username',
				label: 'Логин',
				placeholder: 'Логин',
				errorMessage: 'Введите корректное имя пользователя',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 2,
				},
			},
			password: {
				value: '',
				type: 'password',
				label: 'Пароль',
				placeholder: 'Пароль',
				errorMessage: 'Введите корректный пароль',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 4,
				},
			},
		},
	}

	submitHandler = (event) => {
		event.preventDefault()
	}

	validateControl(value, validation) {
		if (!validation) {
			return true
		}

		let isValid = true

		if (validation.required) {
			isValid = value.trim() !== '' && isValid
		}

		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid
		}

		return isValid
	}

	onChangeHandler = (event, controlName) => {
		const formControls = { ...this.state.formControls }
		const control = { ...formControls[controlName] }

		control.value = event.target.value
		control.touched = true
		control.valid = this.validateControl(control.value, control.validation)

		formControls[controlName] = control

		let isFormValid = true

		Object.keys(formControls).forEach((name) => {
			isFormValid = formControls[name].valid && isFormValid
		})

		this.setState({
			formControls,
			isFormValid,
		})
	}

	loginHandler = () => {
		const authData = {
			login: this.state.formControls.login.value,
			password: this.state.formControls.password.value,
		}
		if (authData.login === 'admin' && authData.password === '12345') {
			this.props.history.push('/profile')
			this.props.setAuthenticated(true)
		} else {
			alert('Имя пользователя или пароль введены неверно!')
		}
	}

	renderInputs() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName]
			return (
				<Input
					placeholder={control.placeholder}
					key={controlName + index}
					type={control.type}
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					label={control.label}
					shouldValidate={!!control.validation}
					errorMessage={control.errorMessage}
					onChange={(event) => this.onChangeHandler(event, controlName)}
				/>
			)
		})
	}

	render() {
		return (
			<div className={classes.LoginPage}>
				<div>
					<h1>Страница авторизации</h1>
					<div className={classes.MainInformationWrapper}>
						<form onSubmit={this.submitHandler} className={classes.LoginForm}>
							<h2>Профиль</h2>
							{this.renderInputs()}

							<Button
								type='login'
								onClick={() => {
									this.loginHandler()
								}}
								disabled={!this.state.isFormValid}
							>
								Войти
							</Button>
						</form>
						<img src={weblogin} alt='Декор' />
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(LoginPage)
