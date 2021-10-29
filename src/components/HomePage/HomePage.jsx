import styles from './HomePage.module.css';
import wallpaper from './../../images/wallpaper.jpg';
import avatar from './../../images/avatar.png';

let HomePage = () => {
    return (
        <div className={styles.content}>
            <div style={{backgroundImage: `url(${wallpaper})`}} className={styles.wallpaper}>
                <p> Home Page </p>
            </div>

            <div className={styles.mediaSection}>
                <div className={styles.postContainer}>
                    <div className={styles.post}>
                        <div className={styles.avatarContainer}>
                            <img src={avatar} />
                        </div>
                        <div className={styles.textContent}>
                        <div className={styles.name}>Dmitriy</div>
                        <div className={styles.postText}>
                            This is also the easiest way to integrate React into an existing website. You can always add a larger toolchain if you find it helpful!
                        </div>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.avatarContainer}>
                            <img src={avatar} />
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.name}>Igor</div>
                            <div className={styles.postText}>
                                This is also the easiest way to integrate React into an existing website. You can always add a larger toolchain if you find it helpful!
                            </div>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.avatarContainer}>
                            <img src={avatar} />
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.name}>Svetlana</div>
                            <div className={styles.postText}>
                                This is also the easiest way to integrate React into an existing website. You can always add a larger toolchain if you find it helpful!
                            </div>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.avatarContainer}>
                            <img src={avatar} />
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.name}>Nikita</div>
                            <div className={styles.postText}>
                                This is also the easiest way to integrate React into an existing website. You can always add a larger toolchain if you find it helpful!
                            </div>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.avatarContainer}>
                            <img src={avatar} />
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.name}>Arthur</div>
                            <div className={styles.postText}>
                                This is also the easiest way to integrate React into an existing website. You can always add a larger toolchain if you find it helpful!
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.newsContainer}>
                    <div className={styles.news}>
                        <div className={styles.textContent}>
                            <div className={styles.name}>General news of week!</div>
                            <div className={styles.date}>30.04.2021</div>
                            <div >
                                Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.
                                When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.
                            </div>
                        </div>
                    </div>
                    <div className={styles.news}>
                        <div className={styles.textContent}>
                            <div className={styles.name}>General news of week!</div>
                            <div className={styles.date}>30.04.2021</div>
                            <div >
                                Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.
                                When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.
                            </div>
                        </div>
                    </div>
                    <div className={styles.news}>
                        <div className={styles.textContent}>
                            <div className={styles.name}>General news of week!</div>
                            <div className={styles.date}>30.04.2021</div>
                            <div >
                                Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.
                                When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.
                            </div>
                        </div>
                    </div>
                    <div className={styles.news}>
                        <div className={styles.textContent}>
                            <div className={styles.name}>General news of week!</div>
                            <div className={styles.date}>30.04.2021</div>
                            <div >
                                Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.
                                When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;