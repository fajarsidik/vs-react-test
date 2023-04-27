import ClockTimer from './components/clock'
import {dataUser,dataUserName} from './constant/data-user'

function App() {
  return (
    <div className="app">
      <h3>Start / Stop Timer</h3>
      <ClockTimer />
      {/* <AvatarGroup data={dataUser} />
      <h3>Size AvatarGroup Max Length</h3>
      <AvatarGroup data={dataUser} maxLength={2} size={'sm'} />
      <h3>Size AvatarGroup xs</h3>
      <AvatarGroup data={dataUser} size={'xs'} />
      <h3>Size AvatarGroup sm</h3>
      <AvatarGroup data={dataUser} size={'sm'} />
      <h3>Size AvatarGroup md</h3>
      <AvatarGroup data={dataUser} size={'md'} />
      <h3>Size AvatarGroup xl</h3>
      <AvatarGroup data={dataUser} size={'lg'} />
      <h3>Size AvatarGroup Initial Name</h3>
      <AvatarGroup data={dataUserName} size={'md'} /> */}
    </div>
  );
}

export default App;
