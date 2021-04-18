import React, { Component } from 'react'
import classes from './NewsPage.module.css'

class NewsPage extends Component {
	state = {
		news: [1, 2, 3],
	}
	render() {
		return (
			<div className={classes.NewsPage}>
				<div>
					<h1>Страница новостей</h1>
					{this.state.news.map((news) => (
						<div className={classes.News}>Новость {news}</div>
					))}
				</div>
			</div>
		)
	}
}
export default NewsPage
