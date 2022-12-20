const Profile = () => {
    return (
        <div className='app-content'>
            <img src="https://i.pinimg.com/originals/f1/6f/ed/f16fedc86686146624897737cf4338d8.jpg" id={'top-img'}/>
            <div className='app-content'>
                <p className={'line'}>Ava</p>
                <img src="https://ih1.redbubble.net/image.1137167192.4552/pp,840x830-pad,1000x1000,f8f8f8.jpg"
                     id={'ava'}/>
            </div>
            <div className='app-content'>
                <p className={'line'}>Description</p>
            </div>
            <div>
                Posts
                <div>
                    New Post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                </div>
            </div>
        </div>
    )
}

export default Profile