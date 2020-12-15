import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
return <div className={s.content}>
				<img src="http://dgdesign.ru/uploads/posts/2018-04/1524225588_shapka-sayta-informatika-253742446445.jpg"></img>
				<div>
					ava+ description
						</div>
				<div>
					my posts
							<div>
						new post
							</div>
					<div className={s.posts}>
						<div className={s.item}>
							Post1
						</div>
						<div className={s.item}>
							Post2
						</div>
					</div>
				</div>
			</div>
}

export default Profile;
