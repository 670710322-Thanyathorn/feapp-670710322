import ProfileCard from './profile-cards/src/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 1, name: 'สมชาย ใจดี', nickname: 'ฟ้า',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชานม', 'หมา'] },
    { id: 1, name: 'สมทรง ใจดี', nickname: 'ฝ้าย',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'กระต่าย'] }
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;