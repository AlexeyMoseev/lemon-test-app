import React, { Component } from 'react'
import classes from './ProfilePage.module.css'
import Button from '../../components/UI/Button/Button'
import profilePhoto from '../../img/profile.jpg'

class ProfilePage extends Component {
	render() {
		return (
			<div className={classes.ProfilePage}>
				<div>
					<h1>Страница профиля</h1>
					<img src={profilePhoto} alt="Фото профиля"></img>
					<p>Здесь находится личная информация пользователя</p>
					<Button
						type='exit'
						onClick={() => {
							this.props.setAuthenticated(false)
						}}
					>
						Выйти
					</Button>
				</div>
			</div>
		)
	}
}
export default ProfilePage
