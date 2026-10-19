import { useState } from 'react'

function Hobby({
	name,
	category,
	description,
	image,
	imageAlt,
	time,
	level,
}) {
	const [isSaved, setIsSaved] = useState(false)

	return (
		<article className="hobby-card">
			<div className="hobby-card__image-wrap">
				<img className="hobby-card__image" src={image} alt={imageAlt} />
				<span className="hobby-card__tag">{category}</span>
				<button
					className={`save-button ${isSaved ? 'is-saved' : ''}`}
					type="button"
					aria-pressed={isSaved}
					aria-label={isSaved ? `Remove ${name} from saved hobbies` : `Save ${name}`}
					onClick={() => setIsSaved((saved) => !saved)}
				>
					<span aria-hidden="true">{isSaved ? '♥' : '♡'}</span>
				</button>
			</div>
			<div className="hobby-card__content">
				<div className="hobby-card__heading">
					<p className="hobby-card__kicker">Your next rabbit hole</p>
					<h2>{name}</h2>
				</div>
				<p className="hobby-card__description">{description}</p>
				<dl className="hobby-card__details">
					<div>
						<dt>Time</dt>
						<dd>{time}</dd>
					</div>
					<div>
						<dt>Level</dt>
						<dd>{level}</dd>
					</div>
				</dl>
				<button className="explore-button" type="button">
					Explore hobby <span aria-hidden="true">↗</span>
				</button>
			</div>
		</article>
	)
}

export default Hobby
