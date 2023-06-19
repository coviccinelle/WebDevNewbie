import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='1ffcd3bb-31b7-49d3-aa57-5bc0f1743578'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    );
}

export default ChatsPage;